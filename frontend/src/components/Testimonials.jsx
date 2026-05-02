import { Star } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            name: "Supriya Mishra",
            area: "Katara Hills",
            text: "The Maths tutor sent by SRS was brilliant. My daughter's marks in Class 10 CBSE improved from 65% to 89% in just 4 months. The 1-on-1 focus really works.",
            rating: 5,
            board: "CBSE"
        },
        {
            name: "Rajesh Soni",
            area: "Kolar Road",
            text: "We needed a female tutor for my daughter in 8th standard. SRS verified the tutor's ID beforehand and she is very polite and professional. Highly recommended in Bhopal.",
            rating: 5,
            board: "MP Board"
        },
        {
            name: "Amitabh Singh",
            area: "MP Nagar",
            text: "Finding an experienced Physics tutor for Class 12 ICSE was tough in Bhopal. SRS connected us with a great teacher within 24 hours. Booking system is fast.",
            rating: 4.5,
            board: "ICSE"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-100 opacity-50 blur-3xl"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Real Results. Happy Parents.</h2>
                    <p className="text-xl text-gray-600 font-medium">Over 1,000+ Bhopal students have improved their grades with our verified home tutors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-shadow relative">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star, idx) => (
                                    <Star key={star} className={`w-5 h-5 ${idx < Math.floor(r.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                                ))}</div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed">"{r.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 uppercase">{r.name.slice(0, 2)}</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{r.name}</h4>
                                    <p className="text-xs text-primary-600 font-bold uppercase tracking-wider">{r.area} • {r.board}</p>
                                </div>
                            </div>
                            {/* Review Schema Injection */}
                            <script type="application/ld+json" dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org/",
                                    "@type": "Review",
                                    "itemReviewed": {
                                        "@type": "LocalBusiness",
                                        "name": "SRS Home Tutors"
                                    },
                                    "author": {
                                        "@type": "Person",
                                        "name": r.name
                                    },
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": r.rating,
                                        "bestRating": "5"
                                    }
                                })
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
