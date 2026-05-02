const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentProfileId: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentProfile', required: true },
    scheduledTime: { type: Date, required: true },
    status: {
        type: String,
        enum: ['trial_requested', 'trial_confirmed', 'trial_completed', 'converted_paid'],
        default: 'trial_requested'
    },
    checkInTime: { type: Date },
    checkOutTime: { type: Date }

}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
