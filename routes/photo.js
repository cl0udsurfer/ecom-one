const express = require('express');
const router = express.Router();

const { photo } = require('../controllers/photo');

router.route('/:id').get(photo);

module.exports = router;
