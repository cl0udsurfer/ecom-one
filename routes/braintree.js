const express = require('express');
const router = express.Router();

const { userProtect } = require('../middleware/userAuth');
const { getUserById } = require('../controllers/user');
const { generateToken, processPayment } = require('../controllers/braintree');

router.get('/getToken/:userId', generateToken);
router.post('/payment/:userId', processPayment);

module.exports = router;
