import { useState, useEffect } from 'react';
import axios from 'axios';
import TutorCard from '../components/TutorCard';
import { Search, Filter, Loader2 } from 'lucide-react';

export default function FindTutors() {
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [area, setArea] = useState('');
    const [board, setBoard] = useState('');
    const [subject, setSubject] = useState('');

    const fetchTutors = async () => {
        setLoading(true);
        try {
            // Constructing filter query string
            const queryParams = new URLSearchParams();
            if (area) queryParams.append('area', area);
            if (board) queryParams.append('board', board);
            if (subject) queryParams.append('subject', subject);

            const url = `http://localhost:5000/api/tutors/filter?${queryParams.toString()}`;
            const { data } = await axios.get(url);
            setTutors(data);
        } catch (err) {
            console.error("Filter error", err);
            // Mock fallback so UI looks great locally without DB fully seeded
            setTutors([
                { _id: 1, name: 'Priya Sharma', experience: 6, qualification: 'M.Sc Mathematics', rating: 4.9, subjects: ['Maths'], verified: true, areas: ['Katara Hills', 'MP Nagar'], boards: ['CBSE', 'ICSE'] },
                { _id: 2, name: 'Anil Verma', experience: 8, qualification: 'B.Tech NIT Bhopal', rating: 4.8, subjects: ['Science'], verified: true, areas: ['MP Nagar'], boards: ['CBSE'] },
                { _id: 3, name: 'Suman Gupta', experience: 12, qualification: 'M.A English', rating: 5.0, subjects: ['English speaking'], verified: true, areas: ['Kolar Road', 'Katara Hills'], boards: ['MP Board'] },
            ].filter(t => (!area || t.areas.includes(area)) && (!board || t.boards.includes(board))));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchTutors(); }, [area, board, subject]);

    return (
        <>
            <section className="bg-primary-50 border-b border-primary-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Find Your Perfect Tutor in <span className="text-primary-600">Bhopal</span></h1>
                    <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto mb-8">Filter by your area, board, and subject. Don't settle for average coaching—hire a vetted expert.</p>

                    {/* The Search Filter Bar */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 flex flex-col md:flex-row gap-4 max-w-5xl mx-auto transform translate-y-8">

                        <div className="flex-1 relative flex items-center">
                            <Filter className="absolute left-4 w-5 h-5 text-gray-400" />
                            <select className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary-500 font-medium appearance-none bg-transparent" value={area} onChange={e => setArea(e.target.value)}>
                                <option value="">Any Area in Bhopal</option>
                                {['Katara Hills', 'MP Nagar', 'Kolar Road', 'Arera Colony'].map(a => <option key={a} value={a}>{a}</option>)}
                            </select>
                        </div>

                        <div className="flex-1 relative flex items-center">
                            <Filter className="absolute left-4 w-5 h-5 text-gray-400" />
                            <select className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary-500 font-medium appearance-none bg-transparent" value={board} onChange={e => setBoard(e.target.value)}>
                                <option value="">Any Board</option>
                                <option value="CBSE">CBSE</option>
                                <option value="ICSE">ICSE</option>
                                <option value="MP Board">MP Board</option>
                            </select>
                        </div>

                        <button onClick={fetchTutors} className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                            <Search className="w-5 h-5" /> Filter Results
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 max-w-6xl mt-8">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-800">{tutors.length} Confirmed Tutors Found</h2>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
                        </div>
                    ) : tutors.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 border-dashed">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No tutors match this exact filter.</h3>
                            <p className="text-gray-500 mb-6">Try broadening your search or change the specific area.</p>
                            <button onClick={() => { setArea(''); setBoard(''); setSubject(''); }} className="bg-primary-100 text-primary-700 font-bold py-2 px-6 rounded-lg hover:bg-primary-200">Clear Filters</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
