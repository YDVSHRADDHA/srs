import { Helmet } from 'react-helmet';
import SchemaMarkup from '../components/SchemaMarkup';
import LeadForm from '../components/LeadForm';
import TrustBadges from '../components/TrustBadges';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Gallery from '../components/Gallery';
import TutorCard from '../components/TutorCard';
import {
    ArrowRight,
    BookOpen,
    Clock,
    ShieldCheck,
    Sparkles,
    MapPin,
    ChevronRight,
    CheckCircle2,
    Star,
    Zap,
    GraduationCap,
    Calculator,
    FlaskConical,
    Languages,
    Beaker,
    Briefcase,
    Search,
    UserCheck,
    PlayCircle,
    Award,
    ShieldAlert,
    School
} from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Home() {
    const featuredTutors = [
        { _id: 1, name: 'Priya Sharma', experience: 6, qualification: 'M.Sc Mathematics', rating: 4.9, subjects: ['Maths'], verified: true, areas: ['Katara Hills'] },
        { _id: 2, name: 'Anil Verma', experience: 8, qualification: 'B.Tech NIT Bhopal', rating: 4.8, subjects: ['Physics', 'Chemistry'], verified: true, areas: ['MP Nagar'] },
        { _id: 3, name: 'Suman Gupta', experience: 12, qualification: 'M.A English', rating: 5.0, subjects: ['English speaking'], verified: true, areas: ['Kolar Road'] },
    ];

    const subjects = [
        { name: "Mathematics", levels: "Class 1-12 | IIT-JEE", icon: Calculator, color: "text-orange-600", bg: "bg-orange-50" },
        { name: "Science", levels: "Class 6-10 | Foundation", icon: Beaker, color: "text-blue-600", bg: "bg-blue-50" },
        { name: "Physics", levels: "Class 11-12 | NEET", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
        { name: "English", levels: "Spoken | Grammar | IELTS", icon: Languages, color: "text-indigo-600", bg: "bg-indigo-50" },
        { name: "Chemistry", levels: "Class 11-12 | JEE", icon: FlaskConical, color: "text-emerald-600", bg: "bg-emerald-50" },
        { name: "Commerce", levels: "Accounts | Economics", icon: Briefcase, color: "text-rose-600", bg: "bg-rose-50" },
    ];

    return (
        <div className="font-sans selection:bg-primary-100 selection:text-primary-900 overflow-x-hidden pt-20">
            <Helmet>
                <title>Best Home Tutors in Bhopal | CBSE, ICSE, MP Board | SRS Tutors</title>
                <meta name="description" content="Hire the top 1% verified home tutors in Bhopal for Class 1-12. Specialized in CBSE & ICSE. Book a FREE trial class in Katara Hills, MP Nagar, Kolar Road & more." />
            </Helmet>

            <SchemaMarkup />

            {/* Hero Section */}
            <section className="relative pt-16 pb-24 lg:pt-28 lg:pb-36 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50 via-white to-white opacity-70"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:items-center text-center max-w-5xl mx-auto space-y-10">
                        <div className="inline-flex items-center gap-3 bg-primary-50 text-primary-700 font-bold px-5 py-2.5 rounded-full text-xs border border-primary-100 uppercase tracking-[0.2em] shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-primary-500 animate-pulse" />
                            #1 Home Tuition Service in Bhopal
                        </div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-slate-900 leading-[0.85] tracking-tight">
                            Premium Learning. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 italic">Elite Results.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-[1.6] max-w-2xl mx-auto">
                            Stop scrolling through lists. Get matched with the top 1% verified home tutors in Bhopal within 60 seconds.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 w-full max-w-md mx-auto">
                            <Link to="/onboarding" className="w-full bg-primary-600 text-white font-black py-5 px-12 rounded-2xl shadow-[0_20px_40px_-10px_rgba(240,90,40,0.3)] hover:bg-primary-700 hover:scale-[1.02] active:scale-95 transition-all text-lg tracking-tight flex items-center justify-center gap-3 group">
                                Find My Tutor <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex items-center justify-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center font-black text-xs text-slate-500 shadow-sm relative overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=tutor${i}`} alt="Tutor" />
                                </div>)}
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-black text-slate-900 leading-none">Real-time Matching</div>
                                <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1">12 Tutors Available in Bhopal Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-20 bg-slate-50 border-y border-slate-100">
                <TrustBadges />
            </div>

            {/* How It Works */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20">
                        <div className="text-primary-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">The Process</div>
                        <h2 className="text-5xl font-display font-black text-slate-900 tracking-tight">Your Child's Success in 3 Steps.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-slate-100 -z-10"></div>

                        {[
                            { step: "01", title: "Smart Matching", desc: "Fill our 60-second wizard. Our algorithm matches with the top 3 tutors instantly.", icon: Search },
                            { step: "02", title: "Free Trial Class", desc: "Meet your top match at your home for a session. No commitment required.", icon: PlayCircle },
                            { step: "03", title: "Personalized Learning", desc: "See your child's confidence and clarity improve with regular focused sessions.", icon: Award },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center mb-8 group-hover:border-primary-600 transition-all duration-500 shadow-sm relative">
                                    <span className="absolute -top-3 -left-3 bg-primary-600 text-white text-[10px] font-black px-2 py-0.5 rounded-lg">{item.step}</span>
                                    <item.icon className="w-8 h-8 text-primary-600" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Learning Tracks */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <div className="max-w-3xl mx-auto mb-20">
                        <div className="text-primary-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Academic Streams</div>
                        <h2 className="text-5xl font-display font-black text-slate-900 tracking-tight mb-8">Specialized Learning Tracks.</h2>
                        <p className="text-xl text-slate-500 font-medium text-center mx-auto">From Early Learning to Competitive Cracking, we have a specialist for every journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subjects.map((sub, i) => (
                            <div key={i} className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-500 text-left">
                                <div className={`${sub.bg} ${sub.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                    <sub.icon className="w-8 h-8" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{sub.name}</h3>
                                <p className="text-slate-500 font-bold text-sm mb-10 tracking-wide uppercase">{sub.levels}</p>
                                <button className="text-xs font-black text-primary-600 uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-primary-700">
                                    Explore Experts <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Gallery />

            {/* The SRS Vetting Section */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-3 bg-white/10 text-primary-400 font-bold px-5 py-2.5 rounded-full text-xs border border-white/10 uppercase tracking-[0.2em]">
                                <UserCheck className="w-3.5 h-3.5" />
                                The Vetting Rigour
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tight leading-none">
                                How We Select the <br /><span className="text-primary-500">Top 1%.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-medium max-w-xl">
                                We receive 500+ tutor applications monthly in Bhopal. Only 5 clear our manual, rigorous 5-step verification process.
                            </p>
                        </div>

                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Background Check", desc: "Aadhar & Police verification for complete safety.", icon: ShieldCheck },
                                { title: "Degree Audit", desc: "Digital verification of degrees and board certifications.", icon: GraduationCap },
                                { title: "Mock Teaching", desc: "A 20-minute live demonstration of conceptual clarity.", icon: PlayCircle },
                                { title: "Admin Interview", desc: "Final check on soft skills and local area knowledge.", icon: UserCheck }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-black mb-2">{item.title}</h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Satisfaction Promise */}
            <section className="py-32 bg-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-10 border border-white/20">
                        <ShieldCheck className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">The SRS Improvement Promise.</h2>
                    <p className="text-xl md:text-2xl text-primary-50 font-medium leading-relaxed mb-12">
                        If you don't see a visible improvement in your child's confidence and conceptual clarity within the first 30 days, we'll replace the tutor at no extra cost or refund your admission fee. <span className="text-white font-black underline decoration-white underline-offset-8">No questions asked.</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-60">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><CheckCircle2 className="w-4 h-4" /> 100% Satisfaction</div>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><CheckCircle2 className="w-4 h-4" /> Grade Guarantee</div>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><CheckCircle2 className="w-4 h-4" /> Verified Experts</div>
                    </div>
                </div>
            </section>

            {/* Safety First Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="bg-white p-2 rounded-[2.5rem] shadow-premium relative">
                                <img
                                    src="https://images.unsplash.com/photo-1577891772427-68873bb61456?auto=format&fit=crop&q=80&w=800"
                                    alt="Safe Home Learning"
                                    className="rounded-[2.2rem] w-full"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-3xl border border-slate-100 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <ShieldAlert className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-slate-900">Geo-fenced Attendance</div>
                                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Verified Visit Check-in</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 order-1 lg:order-2 space-y-8">
                            <div className="inline-flex items-center gap-3 bg-primary-50 text-primary-700 font-bold px-5 py-2.5 rounded-full text-xs border border-primary-100 uppercase tracking-[0.2em]">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Safety At Heart
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
                                Your Child's Safety is Not <br /><span className="text-primary-600 underline underline-offset-8">Negotiable.</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "ID Verification", desc: "Every tutor's identity is verified at every visit via the SRS App." },
                                    { title: "Geo-tracked Sessions", desc: "We track tutor check-ins and check-outs using GPS geo-fencing." },
                                    { title: "Parent Live Alerts", desc: "Get real-time WhatsApp alerts when the session begins and ends." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-primary-600" /></div>
                                        <div>
                                            <h4 className="text-lg font-black text-slate-900">{item.title}</h4>
                                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* School Expertise Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <div className="max-w-3xl mx-auto mb-20 text-center">
                        <div className="text-primary-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Local Expertise</div>
                        <h2 className="text-5xl font-display font-black text-slate-900 tracking-tight mb-8">Specialists for Top Bhopal Schools.</h2>
                        <p className="text-xl text-slate-500 font-medium">We map our tutors to specific school curriculums for targeted success.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["St. Joseph’s", "DPS Bhopal", "The Sanskaar Valley", "Billabong High", "Carmel Convent", "Sagar Public", "Campian School", "Mount Carmel"].map((school, i) => (
                            <div key={i} className="p-8 border border-slate-100 rounded-[2rem] hover:bg-slate-50 transition-all flex flex-col items-center group">
                                <School className="w-8 h-8 text-primary-200 group-hover:text-primary-500 transition-colors mb-4" />
                                <span className="font-black text-slate-800 tracking-tight text-lg">{school}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">15+ Experts available</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl text-left">
                            <div className="text-primary-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Elite Talents</div>
                            <h2 className="text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-none mb-6">Meet the Top 1%.</h2>
                            <p className="text-xl text-slate-500 font-medium">Only curators who clear our manual vetting process make it to our dashboard.</p>
                        </div>
                        <a href="/tutors" className="bg-slate-900 text-white font-black px-12 py-5 rounded-2xl hover:bg-primary-600 transition-all flex items-center gap-3 shadow-xl shadow-slate-900/10">
                            Explore All Profiles <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredTutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)}
                    </div>
                </div>
            </section>

            <Testimonials />
            <FAQ />

            {/* Floating CTA */}
            <div className="fixed bottom-8 left-0 w-full px-6 z-50 pointer-events-none transition-transform translate-y-0 duration-700">
                <div className="max-w-4xl mx-auto bg-slate-900 text-white p-2 rounded-[2rem] shadow-3xl pointer-events-auto border border-white/10 flex flex-col md:flex-row items-center gap-4 transition-transform hover:scale-[1.01]">
                    <div className="flex-1 flex items-center gap-4 pl-6 py-2">
                        <div className="bg-primary-600 p-2 rounded-xl"><Clock className="w-5 h-5 text-white animate-pulse" /></div>
                        <div>
                            <div className="text-sm font-black tracking-tight leading-none text-left">Limited Board Exam Slots!</div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-left text-left">Specialized Tutors for CBSE Class 10/12 Filling Fast</p>
                        </div>
                    </div>
                    <Link to="/onboarding" className="w-full md:w-auto bg-white text-slate-900 font-black px-10 py-5 rounded-2xl hover:bg-primary-50 transition-colors uppercase tracking-widest text-[11px] shadow-2xl">
                        Book My Free Trial Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
