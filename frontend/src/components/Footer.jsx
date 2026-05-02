import { Github, Twitter, Facebook, Instagram, Mail, Phone, MapPin, Ticket, Briefcase, GraduationCap, Clock, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../utils/constants';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center font-black text-white italic">S</div>
                            <span className="text-2xl font-display font-black text-white tracking-tighter">SRS TUTORS.</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Bhopal's premier 1-on-1 home tutoring network. Dedicated to transforming academic performance through personalized, background-checked elite education.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all group">
                                    <Icon className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Service Areas</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {['Katara Hills', 'MP Nagar', 'Kolar Road', 'Arera Colony', 'Ayodhya Bypass'].map(area => (
                                <li key={area}>
                                    <a href={`/home-tutor-in-${area.toLowerCase().replace(' ', '-')}-bhopal`} className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                                        <div className="w-1 h-1 bg-primary-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                                        {area}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Support & Careers</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <a href="/support" className="hover:text-primary-400 transition-colors flex items-center gap-3">
                                    <Ticket className="w-4 h-4 text-primary-500" /> Raise a Ticket
                                </a>
                            </li>
                            <li>
                                <a href="/careers" className="hover:text-primary-400 transition-colors flex items-center gap-3">
                                    <Briefcase className="w-4 h-4 text-primary-500" /> Opening / Careers
                                </a>
                            </li>
                            <li>
                                <a href="/register-tutor" className="hover:text-primary-400 transition-colors flex items-center gap-3">
                                    <GraduationCap className="w-4 h-4 text-primary-500" /> Become a Tutor
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-primary-400 transition-colors">Privacy & Terms</a>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-primary-400 transition-colors flex items-center gap-3">
                                    <LogIn className="w-4 h-4 text-primary-500" /> Admin Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Corporate Office</h4>
                        <div className="space-y-5">
                            <div className="flex gap-4">
                                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span className="text-sm">{SITE_CONFIG.ADDRESS}</span>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span className="text-sm font-black text-white tracking-widest">{SITE_CONFIG.PHONE}</span>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span className="text-sm">{SITE_CONFIG.EMAIL}</span>
                            </div>
                            <div className="flex gap-4">
                                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <div className="text-sm">
                                    <div className="font-bold text-white">Mon - Sun</div>
                                    <div className="opacity-70 italic text-xs">9:00 am - 11:00 pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">
                        &copy; {new Date().getFullYear()} SRS Home Tutor Service Pvt. Ltd.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-white/50 tracking-widest uppercase">System Status: Optimal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
