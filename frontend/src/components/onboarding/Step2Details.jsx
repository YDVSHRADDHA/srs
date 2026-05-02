import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    studentName: z.string().min(2, 'Name is required'),
    class: z.string().min(1, 'Class is required'),
    subject: z.string().min(1, 'Subject is required'),
    board: z.enum(['CBSE', 'ICSE', 'MP Board'], { errorMap: () => ({ message: 'Please select a board' }) }),
    areaName: z.enum(['Bhopal', 'Guna'], { errorMap: () => ({ message: 'Currently available only in Bhopal and Guna' }) }),
});

const Step2Details = ({ formData, updateFormData, nextStep }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: formData
    });

    const onSubmit = (data) => {
        const coords = data.areaName === 'Bhopal' ? [77.4126, 23.2599] : [77.3076, 24.6477];
        updateFormData({ ...data, location: { type: 'Point', coordinates: coords } });
        nextStep();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Details</h2>
                <p className="text-gray-600 mb-6">Tell us about the student's needs.</p>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input
                            {...register('studentName')}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 outline-none h-12"
                        />
                        {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                            <select {...register('class')} className="w-full p-3 border border-gray-300 rounded-xl bg-white h-12">
                                <option value="">Select</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
                                ))}
                            </select>
                            {errors.class && <p className="text-red-500 text-xs mt-1">{errors.class.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Board</label>
                            <select {...register('board')} className="w-full p-3 border border-gray-300 rounded-xl bg-white h-12">
                                <option value="">Select</option>
                                <option value="CBSE">CBSE</option>
                                <option value="ICSE">ICSE</option>
                                <option value="MP Board">MP Board</option>
                            </select>
                            {errors.board && <p className="text-red-500 text-xs mt-1">{errors.board.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                            {...register('subject')}
                            placeholder="e.g. Mathematics"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 outline-none h-12"
                        />
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Area (Bhopal/Guna Only)</label>
                        <select {...register('areaName')} className="w-full p-3 border border-gray-300 rounded-xl bg-white h-12">
                            <option value="">Select City</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Guna">Guna</option>
                        </select>
                        {errors.areaName && <p className="text-red-500 text-xs mt-1">{errors.areaName.message}</p>}
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all mt-8 min-h-[48px]"
            >
                Next Step
            </button>
        </form>
    );
};

export default Step2Details;
