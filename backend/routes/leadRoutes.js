const express = require('express');
const router = express.Router();
const { createLead, getLeads, updateLeadStatus } = require('../controllers/leadController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.post('/', createLead);
router.get('/', protect, restrictTo('Admin'), getLeads);
router.patch('/:id', protect, restrictTo('Admin'), updateLeadStatus);

module.exports = router;
