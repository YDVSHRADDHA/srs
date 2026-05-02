import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../../services/api';


const Step1Phone = ({ formData, updateFormData, nextStep }) => {
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendOTP = async () => {
        setLoading(true);
        setError('');
        try {
            await api.post('/auth/send-otp', { phone: formData.phone });
            setOtpSent(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async () => {
        setLoading(true);
        setError('');
        try {
            const { data } = await api.post('/auth/verify-otp', { phone: formData.phone, otp });
            localStorage.setItem('token', data.token);
            nextStep();
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid OTP');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h2>
                <p className="text-gray-600 mb-8">Enter your mobile number to get started.</p>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            disabled={otpSent}
                            placeholder="+91 99999 99999"
                            value={formData.phone}
                            onChange={(e) => updateFormData({ phone: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all h-12"
                        />
                    </div>

                    {otpSent && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                            <input
                                type="text"
                                placeholder="6-digit code"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all h-12"
                            />
                        </motion.div>
                    )}

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
            </div>

            <button
                onClick={otpSent ? handleVerifyOTP : handleSendOTP}
                disabled={loading || !formData.phone}
                className="w-full bg-red-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all disabled:opacity-50 mt-8 min-h-[48px]"
            >
                {loading ? 'Processing...' : otpSent ? 'Verify & Continue' : 'Send OTP'}
            </button>
        </div>
    );
};

export default Step1Phone;
