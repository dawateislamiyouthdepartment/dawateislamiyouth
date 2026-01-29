import React, { useState, useEffect } from 'react';
import { Home, Calendar, BookOpen, BookMarked, GraduationCap, LifeBuoy, Users, Menu, X, Facebook, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';

// Components
import Button from './components/ui/Button';

// Pages
import HomeView from './pages/HomeView';
import EventsPage from './pages/EventsPage';
import QuranPage from './pages/QuranPage';
import UniversityPage from './pages/UniversityPage';
import ResourcesPage from './pages/ResourcesPage';

export default function App() {
    const [view, setView] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
    }, [view]);

    const navItems = [
        { id: 'home', label: 'Home', icon: <Home size={18} /> },
        { id: 'events', label: 'Events', icon: <Calendar size={18} /> },
        { id: 'resources', label: 'Resources', icon: <BookOpen size={18} /> },
        { id: 'quran', label: 'Qur’an', icon: <BookMarked size={18} /> },
        { id: 'university-signup', label: 'Uni Hub', icon: <GraduationCap size={18} /> },
        { id: 'help', label: 'Help', icon: <LifeBuoy size={18} /> },
    ];

    const renderView = () => {
        switch (view) {
            case 'home': return <HomeView setView={setView} />;
            case 'events': return <EventsPage />;
            case 'resources': return <ResourcesPage />;
            case 'quran': return <QuranPage />;
            case 'university-signup': return <UniversityPage />;
            case 'aqeedah':
                // Simulated external link with notice
                return (
                    <div className="max-w-2xl mx-auto py-24 px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">External Resource: MadinanLight</h2>
                        <p className="text-gray-600 mb-8">You are about to visit our partner site for detailed Aqeedah studies.</p>
                        <div className="flex flex-col gap-4">
                            <a href="https://madinanlight.org" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2">
                                Visit MadinanLight <ExternalLink size={20} />
                            </a>
                            <Button variant="ghost" onClick={() => setView('home')}>Stay on this site</Button>
                        </div>
                    </div>
                );
            default: return (
                <div className="py-32 text-center text-gray-400">
                    <div className="mb-4 text-6xl">🚧</div>
                    <h2 className="text-2xl font-bold text-gray-900">Module Under Construction</h2>
                    <p>We are currently building this section for the community.</p>
                    <Button variant="outline" className="mt-8 mx-auto" onClick={() => setView('home')}>Back Home</Button>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => setView('home')}
                    >
                        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="font-extrabold text-xl leading-tight text-indigo-950">YOUTH & EDU</div>
                            <div className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">Department UK</div>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setView(item.id)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${view === item.id ? 'bg-emerald-50 text-emerald-700' : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50/50'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="w-px h-6 bg-gray-200 mx-4" />
                        <Button onClick={() => setView('university-signup')} className="text-sm px-5">Join Us</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-b border-gray-100 py-6 px-6 space-y-2 animate-in slide-in-from-top duration-300">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setView(item.id)}
                                className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex items-center gap-4 ${view === item.id ? 'bg-emerald-600 text-white' : 'text-gray-600 bg-gray-50'
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        ))}
                        <Button onClick={() => setView('university-signup')} className="w-full py-4 mt-4">Join Community</Button>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="min-h-[calc(100vh-80px)]">
                {renderView()}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                                    <Users size={18} />
                                </div>
                                <div className="font-extrabold text-lg text-indigo-950">YOUTH & EDU UK</div>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                An official department dedicated to the spiritual, academic, and social development of young Muslims across the United Kingdom.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                    <button key={i} className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                                        <Icon size={16} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Navigation</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><button onClick={() => setView('home')} className="hover:text-emerald-600">Home</button></li>
                                <li><button onClick={() => setView('events')} className="hover:text-emerald-600">Events & Activities</button></li>
                                <li><button onClick={() => setView('quran')} className="hover:text-emerald-600">Qur'an for Youth</button></li>
                                <li><button onClick={() => setView('university-signup')} className="hover:text-emerald-600">University Hub</button></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><button className="hover:text-emerald-600">FAQs</button></li>
                                <li><button className="hover:text-emerald-600">Mental Wellbeing</button></li>
                                <li><button className="hover:text-emerald-600">Safeguarding Policy</button></li>
                                <li><button className="hover:text-emerald-600">Contact Us</button></li>
                            </ul>
                        </div>

                        <div className="bg-emerald-50 p-8 rounded-3xl">
                            <h4 className="font-bold text-emerald-900 mb-2">Subscribe to News</h4>
                            <p className="text-emerald-700 text-sm mb-4">Get event alerts & resources.</p>
                            <div className="space-y-2">
                                <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 text-sm" />
                                <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-4 items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <div>© 2024 Youth & Education Department UK. All Rights Reserved.</div>
                        <div className="flex gap-6">
                            <button className="hover:text-emerald-600">Privacy Policy</button>
                            <button className="hover:text-emerald-600">Terms of Use</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
