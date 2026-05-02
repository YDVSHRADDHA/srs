const TutorProfile = require('../models/TutorProfile');
const StudentProfile = require('../models/StudentProfile');

const matchTutors = async (req, res) => {
    try {
        const { profileId } = req.body;
        const profile = await StudentProfile.findById(profileId);

        if (!profile) return res.status(404).json({ message: 'Profile not found' });

        const tutors = await TutorProfile.aggregate([
            {
                $geoNear: {
                    near: profile.location,
                    distanceField: "distance",
                    maxDistance: 20000, // 20km in meters
                    spherical: true,
                    query: {
                        subjects: profile.subject,
                        boards: profile.board
                    }
                }
            },
            {
                $addFields: {
                    // Score components
                    subjectScore: 40, // Already matched in query

                    distanceScore: {
                        $multiply: [
                            30,
                            {
                                $subtract: [
                                    1,
                                    { $divide: ["$distance", 20000] }
                                ]
                            }
                        ]
                    },

                    budgetScore: {
                        $cond: {
                            if: {
                                $and: [
                                    { $gte: ["$ratePerHour", profile.budgetMin] },
                                    { $lte: ["$ratePerHour", profile.budgetMax] }
                                ]
                            },
                            then: 20,
                            else: 0
                        }
                    },

                    ratingScore: {
                        $multiply: [
                            10,
                            { $divide: ["$rating", 5] }
                        ]
                    },

                    tierScore: {
                        $switch: {
                            branches: [
                                { case: { $eq: ["$tier", "Platinum"] }, then: 15 },
                                { case: { $eq: ["$tier", "Gold"] }, then: 10 },
                                { case: { $eq: ["$tier", "Standard"] }, then: 5 }
                            ],
                            default: 0
                        }
                    },

                    verificationScore: {
                        $cond: { if: "$isVerified", then: 10, else: 0 }
                    }
                }
            },
            {
                $addFields: {
                    totalScore: {
                        $add: ["$subjectScore", "$distanceScore", "$budgetScore", "$ratingScore", "$tierScore", "$verificationScore"]
                    }
                }
            },
            { $sort: { totalScore: -1 } },
            { $limit: 3 },
            {
                $project: {
                    userId: 1,
                    subjects: 1,
                    classRange: 1,
                    boards: 1,
                    ratePerHour: 1,
                    rating: 1,
                    tier: 1,
                    isVerified: 1,
                    introVideo: 1,
                    bio: 1,
                    profileImage: 1,
                    distance: 1,
                    totalScore: 1
                }
            }

        ]);

        res.status(200).json(tutors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { matchTutors };
