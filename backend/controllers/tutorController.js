const Tutor = require('../models/Tutor');

const createTutor = async (req, res) => {
    try {
        const { subjects, classes, boards, areas, experience, qualification } = req.body;

        const tutor = await Tutor.create({
            userId: req.user._id,
            subjects,
            classes,
            boards,
            areas,
            experience,
            qualification,
        });

        res.status(201).json(tutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTutors = async (req, res) => {
    try {
        const tutors = await Tutor.find({}).populate('userId', 'name email');
        res.status(200).json(tutors);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const filterTutors = async (req, res) => {
    try {
        // Expected query params: area, subject, board
        const query = { verified: true };
        if (req.query.area) query.areas = req.query.area;
        if (req.query.subject) query.subjects = req.query.subject;
        if (req.query.board) query.boards = req.query.board;

        const tutors = await Tutor.find(query).populate('userId', 'name').sort({ rating: -1 });
        res.status(200).json(tutors);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const verifyTutor = async (req, res) => {
    try {
        const { id } = req.params;
        const tutor = await Tutor.findByIdAndUpdate(id, { verified: true }, { new: true });

        if (!tutor) {
            return res.status(404).json({ message: 'Tutor not found' });
        }

        res.status(200).json(tutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createTutor, getTutors, filterTutors, verifyTutor };
