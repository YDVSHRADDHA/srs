export default function Gallery() {
    const results = [
        { name: "Aditya Jain", score: "96.4%", exam: "CBSE Class 12", area: "MP Nagar", photo: "AJ" },
        { name: "Sanya Mirza", score: "AIR 4502", exam: "JEE Mains", area: "Arera Colony", photo: "SM" },
        { name: "Ishaan Khattar", score: "94.0%", exam: "ICSE Class 10", area: "Kolar Road", photo: "IK" },
        { name: "Mehak Gupta", score: "Selected", exam: "NEET 2024", area: "Katara Hills", photo: "MG" },
    ];

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <div className="inline-block bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] border border-emerald-100">
                        Inspired Results
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-none mb-8">
                        Our Wall of Fame.
                    </h2>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                        Real stories of Academic Excellence from every neighborhood in Bhopal.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((res, i) => (
                        <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-soft hover:shadow-premium transition-all duration-700">
                            {/* Placeholder for real photos - using stylized initials for production feel */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                                <span className="text-6xl font-display font-black text-white/50">{res.photo}</span>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-accent-400 font-black text-2xl mb-1 tracking-tighter">{res.score}</div>
                                <h3 className="text-white font-black text-xl leading-none mb-2">{res.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{res.exam}</span>
                                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{res.area}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="text-sm font-black text-primary-600 uppercase tracking-widest hover:text-primary-700 transition-colors flex items-center gap-2 mx-auto">
                        View All 200+ Results <div className="w-8 h-px bg-primary-200"></div>
                    </button>
                </div>
            </div>
        </section>
    );
}
