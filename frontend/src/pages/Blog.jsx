import { ArrowRight, CalendarDays, User } from 'lucide-react';

export default function Blog() {
    const posts = [
        { title: "How to score 90%+ in Class 10 CBSE", date: "Jan 12, 2026", author: "Rajiv S.", tag: "Exam Tips", slug: "score-90-cbse-10" },
        { title: "Home Tutor vs Coaching in Bhopal: What's Best?", date: "Feb 05, 2026", author: "Dr. Ananya P.", tag: "Parent Guide", slug: "home-tutor-vs-coaching-bhopal" },
        { title: "Complete Guide to Tuition Fees in Bhopal (2026)", date: "Feb 18, 2026", author: "SRS Editorial", tag: "Finance", slug: "tuition-fees-bhopal" },
    ];

    return (
        <>
            <section className="bg-primary-50 py-24 border-b border-primary-100">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">SRS Education Blog</h1>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                        Expert strategies for Bhopal parents and students on board exam preparation, tutor selection, and academic success.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-gray-50 min-h-[50vh]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <article key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-indigo-500 opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
                                    <div className="absolute top-4 left-4 bg-white text-gray-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider shadow-sm z-10">{post.tag}</div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
                                        <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4 text-primary-500" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User className="w-4 h-4 text-primary-500" /> {post.author}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <button className="mt-auto flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors uppercase tracking-widest text-sm">Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
