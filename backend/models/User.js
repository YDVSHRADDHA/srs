const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'tutor', 'parent'], default: 'parent' },
  isVerified: { type: Boolean, default: false },
  name: { type: String }, // Optional, can be captured later
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

