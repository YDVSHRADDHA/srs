import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LogIn, Mail, Lock, AlertCircle, ArrowLeft, Loader2 } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await login(email, password);
            if (result.success) {
                navigate('/admin');
            } else {
                setError(result.message || 'Invalid email or password');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 shadow-sm"></div>
            <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-primary-50 rounded-full blur-[120px] opacity-50 -z-10"></div>
            <div className="absolute bottom-10 left-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[100px] opacity-50 -z-10"></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 transition-all duration-700 animate-in fade-in slide-in-from-bottom-8">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-600 mb-8 font-bold text-xs uppercase tracking-widest transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-3xl flex items-center justify-center font-display font-black text-3xl text-white shadow-2xl shadow-primary-500/20 transform -rotate-6">S</div>
                </div>

                <h2 className="text-center text-4xl font-display font-black text-slate-900 tracking-tight">
                    Admin Portal
                </h2>
                <p className="mt-3 text-center text-sm font-medium text-slate-500 px-4">
                    Secure access for SRS Tutors administrators to manage leads and elite tutor profiles.
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <div className="bg-white py-10 px-6 shadow-premium rounded-[2.5rem] border border-slate-100 sm:px-12 backdrop-blur-sm bg-white/90">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-2xl flex items-center gap-3 animate-shake">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="text-sm font-bold">{error}</p>
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all sm:text-sm"
                                    placeholder="admin@srstutors.in"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded cursor-pointer"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-xs font-bold text-slate-600 cursor-pointer">
                                    Keep me logged in
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-bold text-xs text-primary-600 hover:text-primary-500 uppercase tracking-widest">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center items-center py-5 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-black text-white bg-slate-900 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100 disabled:cursor-not-allowed group"
                            >
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Sign In to Dashboard
                                        <LogIn className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center gap-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secure 256-bit AES Encryption</span>
                        <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Authorized Access Only</span>
                    </div>
                </div>
            </div>

            <footer className="mt-12 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    &copy; {new Date().getFullYear()} SRS Tutors Private Limited
                </p>
            </footer>
        </div>
    );
}
