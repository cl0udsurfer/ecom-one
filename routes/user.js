const express = require('express');
const router = express.Router();

const { adminProtect } = require('../middleware/adminAuth');

const { getUsers } = require('../controllers/user');

router.route('/').get(adminProtect, getUsers);

module.exports = router;
