const User = require('../models/user');

// Create a user
const createUser = async (req, res) => {
    const { name, age, surname } = req.body;

    if (!name || !age || !surname) {
        return res.status(400).json({ message: 'Bad Request: Missing data' });
    }

    try {
        const newUser = new User({ name, age, surname });
        await newUser.save();
        res.json({ data: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ data: users });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: `User with id ${id} deleted successfully` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Edit a user
const editUser = async (req, res) => {
    const { id } = req.params;
    const { name, age, surname } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, age, surname }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createUser, getUsers, deleteUser, editUser };
