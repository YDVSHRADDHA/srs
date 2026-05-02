const express = require('express');
const router = express.Router();
const { createTutor, getTutors, filterTutors, verifyTutor } = require('../controllers/tutorController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.post('/', protect, restrictTo('Tutor', 'Admin'), createTutor);
router.get('/', protect, restrictTo('Admin'), getTutors);
router.get('/filter', filterTutors);
router.patch('/verify/:id', protect, restrictTo('Admin'), verifyTutor);

module.exports = router;
