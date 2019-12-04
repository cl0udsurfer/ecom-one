const express = require('express');
const router = express.Router();

const { adminProtect } = require('../middleware/adminAuth');
const { userProtect } = require('../middleware/userAuth');

const { getUsers, getUserById } = require('../controllers/user');

router.route('/').get(adminProtect, getUsers);

router.route('/:id').get(userProtect, getUserById);

module.exports = router;
