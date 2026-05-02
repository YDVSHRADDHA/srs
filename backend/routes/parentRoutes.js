const express = require('express');
const router = express.Router();
const { createProfile } = require('../controllers/parentController');
const { protect } = require('../middleware/authMiddleware');

router.post('/profile', protect, createProfile);

module.exports = router;
