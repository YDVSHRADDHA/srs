import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { motion } from 'framer-motion';

const Step4Matching = ({ formData }) => {
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                // 1. Create Profile
                const { data: profile } = await api.post('/parent/profile', formData);

                // 2. Get Matches
                const { data: results } = await api.post('/match/match-tutors', { profileId: profile._id });


                setTutors(results);
            } catch (err) {
                setError(err.response?.data?.message || 'Error finding matches');
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, [formData]);

    const handleBookTrial = async (tutorId) => {
        // Logic for booking trial
        alert(`Trial requested for tutor ${tutorId}`);
    };

    if (loading) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Matching you with the best tutors...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <p className="text-red-500 mb-4">{error}</p>
                <button onClick={() => window.location.reload()} className="text-red-600 font-bold underline">Try Again</button>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Top 3 Matches</h2>

            <div className="space-y-4 flex-1">
                {tutors.map((tutor) => (
                    <motion.div
                        key={tutor._id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 border-2 border-gray-100 rounded-2xl flex items-center gap-4 hover:border-red-200 transition-all cursor-pointer shadow-sm"
                    >
                        <img
                            src={tutor.profileImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${tutor._id}`}
                            alt="Tutor"
                            className="w-16 h-16 rounded-xl object-cover bg-gray-100"
                            loading="lazy"
                        />
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-gray-800">Verified Expert</h3>
                                {tutor.tier === 'Platinum' && <span className="text-[8px] bg-slate-900 text-white px-2 py-0.5 rounded-full uppercase tracking-widest leading-none">Platinum</span>}
                                {tutor.isVerified && <CheckCircle className="w-3 h-3 text-green-500" />}
                            </div>
                            <p className="text-xs text-gray-500">{tutor.subjects.join(', ')}</p>

                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm font-bold text-red-600">₹{tutor.ratePerHour}/hr</span>
                                <span className="text-xs text-yellow-500">★ {tutor.rating}</span>
                                <span className="text-xs text-gray-400">({(tutor.distance / 1000).toFixed(1)}km away)</span>
                            </div>
                        </div>
                        <button
                            onClick={() => handleBookTrial(tutor._id)}
                            className="bg-red-600 text-white text-xs px-3 py-2 rounded-lg font-bold min-h-[48px]"
                        >
                            Book Trial
                        </button>
                    </motion.div>
                ))}

                {tutors.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No tutors found matching your criteria. Try adjusting your budget or timing.</p>
                )}
            </div>

            <button
                onClick={() => window.location.href = '/dashboard'}
                className="w-full bg-gray-800 text-white font-semibold py-4 rounded-xl mt-8 min-h-[48px]"
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default Step4Matching;
