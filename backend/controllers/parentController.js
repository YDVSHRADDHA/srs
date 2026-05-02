const StudentProfile = require('../models/StudentProfile');
const { z } = require('zod');

const studentProfileSchema = z.object({
    studentName: z.string().min(2),
    class: z.string(),
    subject: z.string(),
    board: z.enum(['CBSE', 'ICSE', 'MP Board']),
    budgetMin: z.number().min(200),
    budgetMax: z.number().max(1500),
    preferredTiming: z.enum(['Morning', 'Afternoon', 'Evening', 'Weekend']),
    location: z.object({
        coordinates: z.array(z.number()).length(2)
    }),
    areaName: z.string().refine(val => ['Bhopal', 'Guna'].includes(val), {
        message: "Restricted to Bhopal or Guna"
    })
});

const createProfile = async (req, res) => {
    try {
        const validatedData = studentProfileSchema.parse(req.body);

        const profile = await StudentProfile.create({
            parentId: req.user.id,
            ...validatedData
        });

        res.status(201).json(profile);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProfile };
