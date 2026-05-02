export default function FAQ() {
    const faqs = [
        {
            q: "What is the fee for home tutors in Bhopal?",
            a: "Fees vary based on the class, board (CBSE/ICSE/MP Board), and the tutor's experience. Generally, it ranges from ₹2,000 to ₹5,000 per month for lower classes and ₹4,000 to ₹8,000+ for Classes 11-12. Contact us for an exact quote."
        },
        {
            q: "Do you provide female home tutors in Bhopal?",
            a: "Yes, we have a large network of verified female home tutors available for all areas in Bhopal, including Katara Hills, MP Nagar, and Kolar Road."
        },
        {
            q: "Are the home tutors background checked?",
            a: "Absolutely. We strictly verify the Aadhar ID, educational qualifications, and previous teaching experience before any tutor is listed."
        },
        {
            q: "Do you offer a free trial class?",
            a: "Yes! We provide one free demo class. If you are not satisfied with the tutor's teaching style, we will arrange a replacement at no extra cost."
        },
        {
            q: "How fast can I get a tutor?",
            a: "Once you fill out the booking form, our team usually connects you with the right tutor matching your requirements within 2-24 hours."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Schema Injection */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center text-balance">Frequently Asked Questions</h2>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-200 transition-colors group">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors flex items-start gap-4">
                                <span className="text-primary-400 font-black">Q.</span> {faq.q}
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed pl-8">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
