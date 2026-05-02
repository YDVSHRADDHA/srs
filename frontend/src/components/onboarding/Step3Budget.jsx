import React from 'react';

const Step3Budget = ({ formData, updateFormData, nextStep, prevStep }) => {
    const timings = ['Morning', 'Afternoon', 'Evening', 'Weekend'];

    const handleTimingToggle = (timing) => {
        updateFormData({ preferredTiming: timing });
    };

    return (
        <div className="flex-1 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Budget & Timing</h2>
                <p className="text-gray-600 mb-8">Almost done! Set your preferences.</p>

                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-700">Budget Range (per hour)</label>
                            <span className="text-red-600 font-bold">₹{formData.budgetMin} - ₹{formData.budgetMax}</span>
                        </div>
                        <div className="relative pt-1">
                            <input
                                type="range"
                                min="200"
                                max="1500"
                                step="50"
                                value={formData.budgetMax}
                                onChange={(e) => updateFormData({ budgetMax: parseInt(e.target.value) })}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>₹200</span>
                                <span>₹1500</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Timing</label>
                        <div className="grid grid-cols-2 gap-3">
                            {timings.map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    onClick={() => handleTimingToggle(t)}
                                    className={`p-3 rounded-xl border-2 transition-all min-h-[48px] ${formData.preferredTiming === t
                                            ? 'border-red-600 bg-red-50 text-red-600'
                                            : 'border-gray-200 text-gray-600'
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={prevStep}
                    className="flex-1 border-2 border-gray-200 text-gray-600 font-semibold py-4 rounded-xl hover:bg-gray-50 transition-all min-h-[48px]"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    disabled={!formData.preferredTiming}
                    className="flex-[2] bg-red-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all disabled:opacity-50 min-h-[48px]"
                >
                    Match Tutors
                </button>
            </div>
        </div>
    );
};

export default Step3Budget;
