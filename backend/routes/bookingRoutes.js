const express = require('express');
const router = express.Router();
const { bookTrial } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/book-trial', protect, bookTrial);

module.exports = router;
