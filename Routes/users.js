const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteUser, editUser } = require('../Controllers/userController');

// Create a user
router.post('/', createUser);

// Get all users
router.get('/', getUsers);

// Delete a user by ID
router.delete('/:id', deleteUser);

// Edit a user by ID
router.put('/:id', editUser);

module.exports = router;
