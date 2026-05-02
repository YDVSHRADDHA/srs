const Lead = require('../models/Lead');

const createLead = async (req, res) => {
    try {
        const { parentName, studentClass, board, subject, area, phone } = req.body;

        if (!parentName || !studentClass || !board || !subject || !area || !phone) {
            return res.status(400).json({ message: 'Please add all fields' });
        }

        const lead = await Lead.create(req.body);
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        res.status(200).json(leads);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateLeadStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const lead = await Lead.findByIdAndUpdate(id, { status }, { new: true });

        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' });
        }

        res.status(200).json(lead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createLead, getLeads, updateLeadStatus };
