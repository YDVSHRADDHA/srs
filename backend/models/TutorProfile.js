const mongoose = require('mongoose');

const tutorProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subjects: [{ type: String, required: true }],
    classRange: { type: String, required: true }, // e.g., "1-12"
    boards: [{ type: String, enum: ['CBSE', 'ICSE', 'MP Board'] }],
    ratePerHour: { type: Number, required: true },
    availability: [{ type: String, enum: ['Morning', 'Afternoon', 'Evening', 'Weekend'] }],
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    tier: { type: String, enum: ['Standard', 'Gold', 'Platinum'], default: 'Standard' },
    isVerified: { type: Boolean, default: false },
    introVideo: { type: String }, // URL to 30s intro video
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    bio: { type: String },
    profileImage: { type: String }

}, { timestamps: true, collection: 'tutorProfiles' });


tutorProfileSchema.pre('save', function (next) {
    if (this.bio) {
        // Redact Indian phone numbers (basic regex)
        this.bio = this.bio.replace(/(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}/g, '[REDACTED]');
    }
    next();
});

tutorProfileSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('TutorProfile', tutorProfileSchema);

