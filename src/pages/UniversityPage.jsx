import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const UniversityPage = () => {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto px-6 py-24 text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">You're on the list!</h2>
                <p className="text-gray-600 mb-8">We've received your university registration. Check your email for the Student Welcome Pack and society toolkit.</p>
                <Button onClick={() => setSubmitted(false)}>Register Another</Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-4xl font-extrabold mb-6">Connect at Your University</h2>
                <p className="text-gray-600 text-lg mb-8">Join the national network of Muslim students. Get support, access exclusive events, and represent your campus as an ambassador.</p>
                <ul className="space-y-4">
                    {[
                        "National Student Network Access",
                        "Society Funding & Support",
                        "CV-Boosting Leadership Roles",
                        "Mental Health Support for Students"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
                            <span className="font-medium text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Card className="p-8">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">University Email</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="name@uni.ac.uk" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Select University</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none">
                            <option>University of Manchester</option>
                            <option>UCL</option>
                            <option>King's College London</option>
                            <option>University of Birmingham</option>
                            <option>Other / Not Listed</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                        <input type="checkbox" id="ambassador" className="w-4 h-4 rounded text-emerald-600" />
                        <label htmlFor="ambassador" className="text-sm text-gray-600">I'm interested in becoming a Student Ambassador</label>
                    </div>
                    <Button className="w-full py-4 mt-4">Sign Up Now</Button>
                </form>
            </Card>
        </div>
    );
};

export default UniversityPage;
