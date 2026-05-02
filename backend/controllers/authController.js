const User = require('../models/User');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const { z } = require('zod');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

let client;
if (accountSid && authToken) {
    client = twilio(accountSid, authToken);
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '30d',
    });
};

const sendOTP = async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) return res.status(400).json({ message: 'Phone number is required' });

        // India format check (basic)
        if (!/^\+91[6-9]\d{9}$/.test(phone)) {
            return res.status(400).json({ message: 'Invalid Indian phone number. Format: +91XXXXXXXXXX' });
        }

        if (client && verifyServiceSid) {
            await client.verify.v2.services(verifyServiceSid)
                .verifications
                .create({ to: phone, channel: 'sms' });
        } else {
            console.log(`MOCK OTP sent to ${phone}: 123456`);
        }

        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const verifyOTP = async (req, res) => {
    try {
        const { phone, otp } = req.body;
        if (!phone || !otp) return res.status(400).json({ message: 'Phone and OTP are required' });

        let verified = false;
        if (client && verifyServiceSid) {
            const verification = await client.verify.v2.services(verifyServiceSid)
                .verificationChecks
                .create({ to: phone, code: otp });
            verified = verification.status === 'approved';
        } else {
            // Mock verification
            verified = otp === '123456';
        }

        if (!verified) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        let user = await User.findOne({ phone });
        if (!user) {
            user = await User.create({
                phone,
                role: 'parent',
                isVerified: true
            });
        } else {
            user.isVerified = true;
            await user.save();
        }

        res.status(200).json({
            _id: user._id,
            phone: user.phone,
            role: user.role,
            token: generateToken(user._id),
            message: 'Logged in successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { sendOTP, verifyOTP };
