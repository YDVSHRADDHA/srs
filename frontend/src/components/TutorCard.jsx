import { Star, CheckCircle, GraduationCap, Users } from 'lucide-react';

export default function TutorCard({ tutor }) {
    const name = tutor.userId?.name || tutor.name || "Verified Expert Tutor";
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    return (
        <div className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-premium transition-all duration-500 border border-gray-100 hover:border-primary-100 group relative">

            {/* Premium Verification & Tier Badge */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                {tutor.isVerified && (
                    <div className="bg-green-50 text-green-600 text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-green-100 uppercase tracking-widest leading-none">
                        <CheckCircle className="w-3 h-3 text-green-500" /> Vetted
                    </div>
                )}
                {tutor.tier === 'Platinum' && (
                    <div className="bg-slate-900 text-white text-[9px] font-black px-3 py-1.5 rounded-full shadow-lg border border-white/20 uppercase tracking-[0.2em] leading-none animate-pulse">
                        ⭐ Platinum
                    </div>
                )}
                {tutor.tier === 'Gold' && (
                    <div className="bg-amber-400 text-amber-950 text-[9px] font-black px-3 py-1.5 rounded-full shadow-sm border border-amber-500/20 uppercase tracking-[0.2em] leading-none">
                        ⭐ Gold
                    </div>
                )}
            </div>


            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                    {/* Avatar with Ring */}
                    <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-0.5">
                            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-display font-black text-primary-600 text-xl">
                                {initials}
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white shadow-lg rounded-full px-2 py-1 text-[10px] font-black flex items-center gap-1 border border-gray-50">
                            <Star className="w-3 h-3 text-accent-500 fill-accent-500" /> {tutor.rating || 4.9}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-display font-black text-slate-900 group-hover:text-primary-600 transition-colors leading-tight">
                            {name}
                        </h3>
                        <div className="flex flex-col gap-1 mt-1">
                            <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                                <GraduationCap className="w-3.5 h-3.5" /> {tutor.qualification}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100/50">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Experience</span>
                        <span className="text-sm font-black text-slate-700">{tutor.experience} Years</span>
                    </div>
                    <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100/50">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Students</span>
                        <span className="text-sm font-black text-slate-700">120+ Taught</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100"></div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2">
                    {tutor.subjects?.slice(0, 3).map(s => (
                        <span key={s} className="text-[10px] font-black text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider">
                            {s}
                        </span>
                    ))}
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-primary-500/20 active:scale-95 text-xs uppercase tracking-[0.15em]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Select Tutor
                </button>
            </div>
        </div>
    );
}
