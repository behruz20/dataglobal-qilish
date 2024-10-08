const User = require('../models/user');

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

// Boshqa funksiyalar (getUsers, deleteUser, EditUser) ham to'g'ri ko'rinadi.
