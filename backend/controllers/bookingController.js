const Booking = require('../models/Booking');

const bookTrial = async (req, res) => {
    try {
        const { tutorId, studentProfileId, scheduledTime } = req.body;

        const booking = await Booking.create({
            parentId: req.user.id,
            tutorId,
            studentProfileId,
            scheduledTime,
            status: 'trial_requested'
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { bookTrial };
