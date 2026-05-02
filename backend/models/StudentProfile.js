const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentName: { type: String, required: true },
    class: { type: String, required: true },
    subject: { type: String, required: true },
    board: { type: String, enum: ['CBSE', 'ICSE', 'MP Board'], required: true },
    budgetMin: { type: Number, required: true },
    budgetMax: { type: Number, required: true },
    preferredTiming: { type: String, enum: ['Morning', 'Afternoon', 'Evening', 'Weekend'], required: true },
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    areaName: { type: String, required: true } // Bhopal or Guna
}, { timestamps: true, collection: 'studentProfiles' });


studentProfileSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
