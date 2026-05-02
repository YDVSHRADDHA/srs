import { CheckCircle, Users, Award, ShieldCheck } from 'lucide-react';

export default function About() {
    return (
        <>
            {/* Hero */}
            <section className="bg-primary-50 py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 bg-white text-primary-700 font-extrabold px-4 py-2.5 rounded-full text-sm mb-6 shadow-sm uppercase tracking-widest border border-primary-100">Our Story</div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                        Built by Educators.<br /> Trusted by Bhopal Parents.
                    </h1>
                    <p className="text-xl text-gray-700 font-medium mb-12 leading-relaxed">
                        SRS Tutors was founded with a single mission: To connect students in Bhopal with exceptional, verified home tutors who actually care about their academic growth.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-gray-50 border-y border-gray-100 pb-32">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Why We Are Different Than Coaching Classes</h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-10">We noticed a dangerous trend in Bhopal: students traveling an hour every day to sit in crowded coaching batches of 50+. No personal attention, no focus on their weak subjects, and immense pressure.</p>

                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">1-on-1 Focus Guarantee</h4>
                                        <p className="text-gray-600 font-medium">In a class of one, your child cannot hide. If they don't understand Algebra, the tutor stops and explains until they do.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <ShieldCheck className="w-8 h-8 text-blue-500 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">Strict Vetting Process</h4>
                                        <p className="text-gray-600 font-medium">Only 1 in 10 applicants makes it. We verify Aadhar IDs, past student records, and educational degrees before onboarding.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative">
                            <div className="absolute -top-6 -right-6 bg-primary-500 w-32 h-32 rounded-full opacity-20 blur-2xl"></div>
                            <div className="grid grid-cols-2 gap-8 text-center relative z-10">
                                <div className="p-6 bg-primary-50 rounded-2xl">
                                    <Users className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                                    <h3 className="text-4xl font-black text-gray-900">1000+</h3>
                                    <p className="text-gray-600 font-bold text-sm tracking-wide mt-2 uppercase">Students Taught</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-2xl">
                                    <Award className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                    <h3 className="text-4xl font-black text-gray-900">4.8★</h3>
                                    <p className="text-gray-600 font-bold text-sm tracking-wide mt-2 uppercase">Parent Rating</p>
                                </div>
                                <div className="p-6 bg-purple-50 rounded-2xl">
                                    <h3 className="text-4xl font-black text-gray-900">500+</h3>
                                    <p className="text-gray-600 font-bold text-sm tracking-wide mt-2 uppercase">Verified Tutors</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl">
                                    <h3 className="text-4xl font-black text-gray-900">30+</h3>
                                    <p className="text-gray-600 font-bold text-sm tracking-wide mt-2 uppercase">Bhopal Areas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
