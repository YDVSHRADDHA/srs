import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Step1Phone from '../../components/onboarding/Step1Phone';
import Step2Details from '../../components/onboarding/Step2Details';
import Step3Budget from '../../components/onboarding/Step3Budget';
import Step4Matching from '../../components/onboarding/Step4Matching';

const OnboardingWizard = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem('onboarding_draft');
        return saved ? JSON.parse(saved) : {
            phone: '',
            studentName: '',
            class: '',
            subject: '',
            board: '',
            areaName: '',
            budgetMin: 200,
            budgetMax: 1500,
            preferredTiming: '',
            location: { coordinates: [77.4126, 23.2599] } // Default Bhopal coords
        };
    });

    useEffect(() => {
        localStorage.setItem('onboarding_draft', JSON.stringify(formData));
    }, [formData]);

    const updateFormData = (newData) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const steps = [
        { title: 'Phone Verification', component: Step1Phone },
        { title: 'Student Details', component: Step2Details },
        { title: 'Budget & Timing', component: Step3Budget },
        { title: 'Find Your Tutor', component: Step4Matching }
    ];

    const CurrentStep = steps[step - 1].component;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-4">
            <Helmet>
                <title>Parent Onboarding | SRS Tutors</title>
                <meta name="description" content="Get matched with the top 3 tutors for your child in under 60 seconds." />
            </Helmet>
            {/* Progress Bar */}
            <div className="w-full max-w-md mb-8 mt-4">
                <div className="flex justify-between mb-2">
                    {steps.map((s, i) => (
                        <div
                            key={i}
                            className={`h-1.5 flex-1 mx-0.5 rounded-full transition-colors ${i < step ? 'bg-red-600' : 'bg-gray-200'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="w-full max-w-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-soft p-6 min-h-[500px] flex flex-col"
                    >
                        <CurrentStep
                            formData={formData}
                            updateFormData={updateFormData}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default OnboardingWizard;
