import { useEffect, useState } from 'react';
import axios from 'axios';
import TutorCard from '../components/TutorCard';
import LeadForm from '../components/LeadForm';
import TrustBadges from '../components/TrustBadges';

export default function AreaPage({ area }) {
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch mock SEO data for this specific area
        const fetchTutors = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/tutors/filter?area=${area}`);
                setTutors(data.length ? data : [
                    { _id: 1, name: 'Ankita Sharma', experience: 5, qualification: 'M.Sc Physics', rating: 4.9, subjects: ['Science', 'Maths'], areas: [area], verified: true },
                    { _id: 2, name: 'Rahul Verma', experience: 3, qualification: 'B.Tech', rating: 4.7, subjects: ['Maths'], areas: [area], verified: true }
                ]);
                setLoading(false);
            } catch (e) {
                console.error(e);
                // Fallback robust mock
                setTutors([
                    { _id: 1, name: 'Ankita Sharma', experience: 5, qualification: 'M.Sc Physics', rating: 4.9, subjects: ['Science', 'Maths'], areas: [area], verified: true },
                    { _id: 2, name: 'Rahul Verma', experience: 3, qualification: 'B.Tech CS', rating: 4.7, subjects: ['Maths', 'English'], areas: [area], verified: true },
                ]);
                setLoading(false);
            }
        };
        fetchTutors();
    }, [area]);

    return (
        <>
            <section className="bg-primary-700 text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center z-10 relative">
                    <div className="bg-white/20 inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                        Bhopal's #1 Home Tutors
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 capitalize">
                        Top Home Tutors in {area}, Bhopal
                    </h1>
                    <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto">
                        Find verified CBSE, ICSE, and MP Board tutors near you. Get a Free Trial Class tomorrow.
                    </p>
                </div>
            </section>

            <TrustBadges />

            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            {tutors.length} Verified Tutors Available in {area}
                        </h2>
                        <div className="space-y-6">
                            {loading ? (
                                <div className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                                    <div className="flex-1 space-y-6 py-1"><div className="h-2 bg-gray-200 rounded"></div></div>
                                </div>
                            ) : (
                                tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
                            )}
                        </div>

                        <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">Why choose a Home Tutor in {area}?</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Students living in {area} often spend hours traveling to coaching centers in MP Nagar.
                                With SRS Tutors, a specialized educator comes directly to your home. This 1-on-1 personalized
                                attention guarantees better focus, customized study plans, and improved board performance for CBSE and ICSE students.
                            </p>
                        </div>
                    </div>

                    <aside className="sticky top-24">
                        <LeadForm prefilledArea={area} />
                    </aside>
                </div>
            </section>
        </>
    );
}
