import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Menu, ChevronDown, LogIn, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { SITE_CONFIG } from '../utils/constants';

export default function Navbar() {
    const { isAuthenticated, user } = useAuth();
    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl border-b border-primary-50 z-50">
            <div className="container mx-auto px-4 max-w-7xl h-20 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center font-display font-black text-white italic transition-transform group-hover:scale-110">S</div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-display font-black text-slate-900 tracking-tighter">SRS TUTORS.</span>
                        <span className="text-[8px] font-black text-primary-500 uppercase tracking-[0.3em]">Elite Education</span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    <Link to="/" className="text-sm font-black text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-widest">Home</Link>
                    <Link to="/onboarding" className="text-sm font-black text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-widest">Find Tutor</Link>

                    <div className="relative group">
                        <button className="text-sm font-black text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-widest flex items-center gap-1.5 focus:outline-none">
                            Explore Localities
                            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                        </button>
                        <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                            <div className="w-64 bg-white border border-indigo-50 rounded-[1.5rem] shadow-premium p-4 grid grid-cols-1 gap-1">
                                {['Katara Hills', 'MP Nagar', 'Kolar Road', 'Arera Colony'].map(area => (
                                    <Link key={area} to={`/home-tutor-in-${area.toLowerCase().replace(' ', '-')}-bhopal`} className="px-4 py-3 hover:bg-primary-50 rounded-xl text-xs font-black text-slate-600 hover:text-primary-600 transition-all uppercase tracking-widest">
                                        {area}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/about" className="text-sm font-black text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-widest">About</Link>
                    <Link to="/contact" className="text-sm font-black text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-widest">Contact</Link>
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                    <a href={`tel:${SITE_CONFIG.PHONE}`} className="hidden xl:flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 group-hover:bg-primary-50 transition-colors">
                            <Phone className="w-4 h-4 text-primary-600" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Expert Advice</div>
                            <div className="text-sm font-black text-slate-900 tracking-widest">{SITE_CONFIG.PHONE}</div>
                        </div>
                    </a>

                    {isAuthenticated ? (
                        <div className="flex items-center gap-4">
                            <Link to="/admin" className="p-2.5 bg-slate-100 text-slate-900 rounded-xl hover:bg-primary-600 hover:text-white transition-all shadow-sm" title="Admin Dashboard">
                                <LayoutDashboard className="w-5 h-5" />
                            </Link>
                            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-black text-sm border-2 border-white shadow-md">
                                {(user?.name || 'A')[0].toUpperCase()}
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="hidden sm:flex items-center gap-2 text-xs font-black text-slate-500 hover:text-primary-600 transition-colors uppercase tracking-widest px-4 py-2">
                            <LogIn className="w-4 h-4" />
                            Login
                        </Link>
                    )}

                    <Link to="/onboarding" className="bg-slate-900 text-white hover:bg-primary-600 font-black px-8 py-3.5 rounded-2xl transition-all shadow-xl shadow-slate-900/10 text-xs uppercase tracking-widest hidden sm:flex items-center gap-2 group">
                        Hire Experts <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    <button className="lg:hidden w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                        <Menu className="w-5 h-5 text-slate-900" />
                    </button>
                </div>
            </div>
        </header>
    );
}
