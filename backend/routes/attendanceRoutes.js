const express = require('express');
const router = express.Router();
const { checkIn } = require('../controllers/attendanceController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// Only tutors can check-in
router.post('/check-in', protect, restrictTo('tutor'), checkIn);

module.exports = router;
