const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    parentName: { type: String, required: true },
    studentClass: { type: String, required: true },
    board: { type: String, required: true },
    subject: { type: String, required: true },
    area: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, enum: ['New', 'Contacted', 'Converted'], default: 'New' }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
