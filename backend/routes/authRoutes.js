const express = require('express');
const router = express.Router();
const { sendOTP, verifyOTP } = require('../controllers/authController');
const rateLimit = require('express-rate-limit');

const otpLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many OTP requests, please try again after 15 minutes'
});

router.post('/send-otp', otpLimiter, sendOTP);
router.post('/verify-otp', verifyOTP);

module.exports = router;
