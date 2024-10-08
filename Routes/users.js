const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteUser, EditUser } = require('../Controllers/userController');

// API marshrutlari
router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
router.put('/:id', EditUser);

module.exports = router;
