const express = require('express');
const router = express.Router();
const { matchTutors } = require('../controllers/matchController');
const { protect } = require('../middleware/authMiddleware');

router.post('/match-tutors', protect, matchTutors);

module.exports = router;
