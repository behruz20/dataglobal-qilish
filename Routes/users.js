const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteUser, EditUser } = require('../Controllers/userController');

// Create a user
router.post('/', createUser);

// Get all users
router.get('/', getUsers);

// Delete a user by ID
router.delete('/:id', deleteUser); // Ensure the ID is passed in the URL
router.put('/:id', EditUser)

module.exports = router;
