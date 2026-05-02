import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <section className="bg-primary-700 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Contact SRS Tutors</h1>
                    <p className="text-xl font-medium max-w-2xl mx-auto opacity-90">
                        Have questions about home tutoring in Bhopal? Our team is ready to assist you instantly.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Information Cards */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                                <div className="bg-primary-50 p-4 rounded-full text-primary-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us Directly</h3>
                                    <p className="text-gray-600 mb-2">We're available 8 AM to 9 PM, carefully matching tutors for you.</p>
                                    <a href="tel:+919876543210" className="text-xl font-black text-primary-600 hover:text-primary-700 transition-colors">+91-98765-43210</a>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                                <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email Support</h3>
                                    <p className="text-gray-600 mb-2">For tutor registrations or business inquiries.</p>
                                    <a href="mailto:support@srstutors.com" className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">support@srstutors.com</a>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                                <div className="bg-green-50 p-4 rounded-full text-green-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Our Bhopal Office</h3>
                                    <p className="text-gray-600 font-medium">123, Learning Lane, Zone-II, MP Nagar, Bhopal, Madhya Pradesh 462011</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Form */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message Sent Successfully!"); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" />
                                    <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" />
                                </div>
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" />
                                <textarea placeholder="How can we help you?" rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"></textarea>
                                <button type="submit" className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg mt-2">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
