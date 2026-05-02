import { useState } from 'react';
import { ShieldCheck, Lock, ChevronRight } from 'lucide-react';

export default function LeadForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        parentName: '',
        phone: '',
        studentClass: '',
        board: '',
        subject: '',
        area: ''
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    return (
        <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(240,90,40,0.15)] border border-primary-50 overflow-hidden relative group">
            {/* Real-time Demand Indicator */}
            <div className="bg-primary-900 text-white py-2.5 px-6 flex justify-between items-center overflow-hidden">
                <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live: Matching 12 Tutors in Bhopal</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold opacity-70">
                    <Lock className="w-3 h-3" /> Secure
                </div>
            </div>

            <div className="p-8 lg:p-10">
                {/* Progress Bar */}
                <div className="flex gap-1.5 mb-10">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-1 flex-grow rounded-full transition-all duration-500 ${i <= step ? 'bg-primary-500' : 'bg-gray-100'}`}></div>
                    ))}
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert('Trial booked! We will call you in 15 mins.'); }}>
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-2xl font-display font-black text-slate-900 mb-2 leading-tight">Match Your Child's Tutor</h3>
                            <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">Tell us your location & requirement in Bhopal.</p>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Area in Bhopal</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary-100 focus:bg-white outline-none font-bold text-slate-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20stroke%3D%27%236b7280%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27m6%208%204%204%204-4%27%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1.25rem_center] bg-no-repeat transition-all">
                                        <option>Katara Hills</option>
                                        <option>MP Nagar</option>
                                        <option>Kolar Road</option>
                                        <option>Arera Colony</option>
                                        <option>Indrapuri</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Board / Syllabus</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary-100 focus:bg-white outline-none font-bold text-slate-900 transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20stroke%3D%27%236b7280%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%20d%3D%27m6%208%204%204%204-4%27%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1.25rem_center] bg-no-repeat">
                                        <option>CBSE</option>
                                        <option>ICSE</option>
                                        <option>MP Board</option>
                                    </select>
                                </div>
                                <button type="button" onClick={nextStep} className="w-full bg-primary-600 hover:bg-primary-700 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary-200 flex items-center justify-center gap-3 group mt-4">
                                    Next Step <ChevronRight className="w-5 h-5 group-hover:translate-x-1 duration-300" />
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-2xl font-display font-black text-slate-900 mb-2 leading-tight">Almost There!</h3>
                            <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">Enter your contact details securely.</p>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Parent's Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary-100 focus:bg-white outline-none font-bold text-slate-900 transition-all" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp Number</label>
                                    <input type="tel" placeholder="+91-0000000000" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary-100 focus:bg-white outline-none font-bold text-slate-900 transition-all" />
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button type="button" onClick={prevStep} className="flex-1 bg-gray-50 text-slate-400 font-black py-5 rounded-2xl hover:bg-gray-100 transition-all">Back</button>
                                    <button type="submit" className="flex-[2] bg-primary-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-primary-200 transition-all">Claim Free Trial</button>
                                </div>
                            </div>
                        </div>
                    )}
                </form>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">Privacy Guaranteed • No Spam</span>
                </div>
            </div>
        </div>
    );
}
