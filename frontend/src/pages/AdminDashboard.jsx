import { useLeads } from '../hooks/useLeads';
import { useAuth } from '../hooks/useAuth';
import { Users, BookOpen, AlertCircle, LayoutDashboard, LogOut } from 'lucide-react';

export default function AdminDashboard() {
    const { leads, loading, error, updateLeadStatus } = useLeads();
    const { user, logout } = useAuth();

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex gap-4 items-center font-black text-xl tracking-tight">
                        <LayoutDashboard className="w-6 h-6 text-primary-500" />
                        SRS Admin Panel
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-4 text-sm font-bold bg-gray-800 px-4 py-2 rounded-full">
                            {user?.name || 'Admin'}
                            <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-black">
                                {(user?.name || 'A')[0]}
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors"
                            title="Logout"
                        >
                            <LogOut className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Top Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 border-l-4 border-l-red-500">
                        <div className="bg-red-50 p-4 rounded-xl text-red-600"><AlertCircle className="w-8 h-8" /></div>
                        <div>
                            <h3 className="text-3xl font-black text-gray-900 leading-none">{leads.filter(l => l.status === 'New').length}</h3>
                            <p className="font-bold text-gray-500 text-sm mt-1 uppercase tracking-wider">New Leads</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 border-l-4 border-l-green-500">
                        <div className="bg-green-50 p-4 rounded-xl text-green-600"><Users className="w-8 h-8" /></div>
                        <div>
                            <h3 className="text-3xl font-black text-gray-900 leading-none">{leads.filter(l => l.status === 'Converted').length}</h3>
                            <p className="font-bold text-gray-500 text-sm mt-1 uppercase tracking-wider">Converted</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 border-l-4 border-l-blue-500">
                        <div className="bg-blue-50 p-4 rounded-xl text-blue-600"><BookOpen className="w-8 h-8" /></div>
                        <div>
                            <h3 className="text-3xl font-black text-gray-900 leading-none">120+</h3>
                            <p className="font-bold text-gray-500 text-sm mt-1 uppercase tracking-wider">Verified Tutors</p>
                        </div>
                    </div>
                </div>

                {/* Leads Tracking Table */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                        <h2 className="text-2xl font-black text-gray-900">Recent Tutor Leads</h2>
                        <button className="bg-gray-200 text-gray-800 font-bold px-4 py-2 text-sm rounded-md hover:bg-gray-300 uppercase tracking-widest">Export CSV</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-widest font-black border-b border-gray-200 shadow-sm">
                                    <th className="px-8 py-4">Parent Name</th>
                                    <th className="px-8 py-4">Contact</th>
                                    <th className="px-8 py-4">Requirement</th>
                                    <th className="px-8 py-4">Area</th>
                                    <th className="px-8 py-4">Status</th>
                                    <th className="px-8 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {loading ? (
                                    <tr><td colSpan="6" className="text-center py-10 font-bold text-gray-500">Loading Leads...</td></tr>
                                ) : leads.map(lead => (
                                    <tr key={lead._id} className="hover:bg-primary-50 transition-colors">
                                        <td className="px-8 py-4">
                                            <span className="font-bold text-gray-900 block">{lead.parentName}</span>
                                            <span className="text-xs text-gray-500">{new Date(lead.createdAt).toLocaleDateString()}</span>
                                        </td>
                                        <td className="px-8 py-4 font-black text-primary-600">{lead.phone}</td>
                                        <td className="px-8 py-4">
                                            <span className="bg-gray-100 text-gray-800 font-bold px-2 py-1 rounded text-xs border border-gray-200 mr-2">{lead.studentClass}</span>
                                            <span className="text-sm font-semibold">{lead.subject} • {lead.board}</span>
                                        </td>
                                        <td className="px-8 py-4 font-bold text-gray-700">{lead.area}</td>
                                        <td className="px-8 py-4">
                                            <span className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full ${lead.status === 'New' ? 'bg-red-100 text-red-700' : lead.status === 'Converted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <select
                                                className="bg-white border-2 border-gray-200 rounded-md py-1.5 px-3 outline-none focus:border-primary-500 font-bold text-sm text-gray-700 cursor-pointer hover:bg-gray-50"
                                                defaultValue={lead.status}
                                                onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                                            >
                                                <option value="New">New</option>
                                                <option value="Contacted">Contacted</option>
                                                <option value="Converted">Converted</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
