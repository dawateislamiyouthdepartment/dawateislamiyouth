import React, { useState, useEffect, useMemo } from 'react';
import {
    Home,
    BarChart3,
    Calendar,
    BookOpen,
    Gamepad2,
    LifeBuoy,
    HelpCircle,
    MapPin,
    Plane,
    GraduationCap,
    BookMarked,
    ExternalLink,
    Menu,
    X,
    ChevronRight,
    Search,
    CheckCircle2,
    Users,
    Globe,
    ArrowRight,
    HeartPulse,
    Lightbulb,
    ShieldCheck,
    Facebook,
    Twitter,
    Instagram,
    Youtube
} from 'lucide-react';

// --- Mock Data ---
const EVENTS = [
    { id: 1, title: "Summer Youth Camp 2024", date: "Aug 15-20", location: "Peak District", age: "16-25", category: "Travel", image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=400" },
    { id: 2, title: "University Success Seminar", date: "Sep 05", location: "London / Online", age: "17-19", category: "Education", image: "https://images.unsplash.com/photo-1523050853063-bd8012fec0c8?auto=format&fit=crop&q=80&w=400" },
    { id: 3, title: "Weekly Football Tournament", date: "Every Sat", location: "Birmingham Center", age: "11-16", category: "Sports", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400" },
];

const RESOURCES = [
    { id: 1, title: "The Modern Muslimah's Guide", type: "PDF", category: "Leadership", color: "bg-purple-100 text-purple-600" },
    { id: 2, title: "Time Management for Students", type: "Video", category: "Study Support", color: "bg-blue-100 text-blue-600" },
    { id: 3, title: "Understanding Aqeedah", type: "Article", category: "Islamic Learning", color: "bg-emerald-100 text-emerald-600" },
    { id: 4, title: "Mental Health & Deen", type: "PDF", category: "Mental Wellbeing", color: "bg-red-100 text-red-600" },
];

const QURAN_SURAHS = [
    { id: 1, name: "Al-Fatihah", english: "The Opening", verses: 7 },
    { id: 18, name: "Al-Kahf", english: "The Cave", verses: 110 },
    { id: 36, name: "Ya-Sin", english: "Ya-Sin", verses: 83 },
    { id: 55, name: "Ar-Rahman", english: "The Beneficent", verses: 78 },
    { id: 67, name: "Al-Mulk", english: "The Dominion", verses: 30 },
];

// --- Shared Components ---

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow ${className}`}>
        {children}
    </div>
);

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
    const variants = {
        primary: "bg-emerald-600 text-white hover:bg-emerald-700",
        secondary: "bg-indigo-900 text-white hover:bg-indigo-800",
        outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
        ghost: "text-gray-600 hover:bg-gray-100"
    };
    return (
        <button onClick={onClick} className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
);

// --- Page Components ---

const HomeView = ({ setView }) => {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent rounded-l-full transform translate-x-1/4"></div>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Now Active in 15+ UK Cities
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                            Empowering the <br />
                            <span className="text-emerald-600">Next Generation</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            The official Youth & Education Department UK hub. Join a community built on faith, leadership, and growth.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button onClick={() => setView('university-signup')}>Join the Community</Button>
                            <Button variant="outline" onClick={() => setView('events')}>Explore Events</Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-emerald-100 rounded-3xl w-full aspect-square rotate-3 absolute -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800"
                            alt="Youth Group"
                            className="rounded-3xl shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Youth Engaged", value: "12k+", icon: <Users /> },
                        { label: "Events Delivered", value: "450+", icon: <Calendar /> },
                        { label: "Universities", value: "85+", icon: <GraduationCap /> },
                        { label: "Cities Reached", value: "18", icon: <Globe /> }
                    ].map((stat, i) => (
                        <Card key={i} className="p-8 text-center hover:-translate-y-1 transition-transform">
                            <div className="text-emerald-600 mb-4 flex justify-center">{stat.icon}</div>
                            <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-gray-500 font-medium">{stat.label}</div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Feature Cards */}
            <section className="max-w-7xl mx-auto px-6">
                <SectionHeader title="Everything You Need" subtitle="Resources and opportunities designed specifically for the UK's Muslim youth." />
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Events & Activities", icon: <Calendar />, desc: "From sports tournaments to spiritual retreats.", view: 'events', color: "text-blue-600 bg-blue-50" },
                        { title: "Qur’an for Youth", icon: <BookMarked />, desc: "Modern, readable, and accessible translations.", view: 'quran', color: "text-emerald-600 bg-emerald-50" },
                        { title: "Games & Challenges", icon: <Gamepad2 />, desc: "Interactive quizzes and community leaderboards.", view: 'games', color: "text-purple-600 bg-purple-50" },
                        { title: "Mental Wellbeing", icon: <HeartPulse />, desc: "Support and guidance for your mental health.", view: 'help', color: "text-red-600 bg-red-50" },
                        { title: "University Hub", icon: <GraduationCap />, desc: "Resources and societies at your campus.", view: 'university-signup', color: "text-orange-600 bg-orange-50" },
                        { title: "Aqeedah Lessons", icon: <Lightbulb />, desc: "Clear foundations with MadinanLight.", view: 'aqeedah', color: "text-teal-600 bg-teal-50" }
                    ].map((feature, i) => (
                        <button
                            key={i}
                            onClick={() => setView(feature.view)}
                            className="group text-left p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 mb-4">{feature.desc}</p>
                            <div className="text-emerald-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight size={16} />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-indigo-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader title={<span className="text-white">What Our Youth Say</span>} subtitle={<span className="text-indigo-200">Real stories from the community.</span>} />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Ahmed, 19", text: "The retreats helped me find a balance between my studies and my faith that I couldn't find anywhere else." },
                            { name: "Sara, 21", text: "Being a student ambassador has built my confidence and helped me connect with so many amazing people." },
                            { name: "Yusuf, 14", text: "The football tournaments are the highlight of my week! It's great to compete in a safe, Islamic environment." }
                        ].map((t, i) => (
                            <div key={i} className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700/50">
                                <p className="italic text-lg mb-6 leading-relaxed">"{t.text}"</p>
                                <div className="font-bold text-emerald-400">— {t.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const QuranView = () => {
    const [selectedSurah, setSelectedSurah] = useState(null);

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <SectionHeader title="Qur’an for Youth" subtitle="Accessible translations and beautiful recitations tailored for easy reading." />

            {!selectedSurah ? (
                <div className="grid md:grid-cols-2 gap-4">
                    {QURAN_SURAHS.map(surah => (
                        <button
                            key={surah.id}
                            onClick={() => setSelectedSurah(surah)}
                            className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-500 hover:shadow-lg transition-all text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                                    {surah.id}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{surah.english}</h3>
                                    <p className="text-sm text-gray-500">{surah.verses} Verses</p>
                                </div>
                            </div>
                            <div className="text-2xl font-arabic text-emerald-600">{surah.name}</div>
                        </button>
                    ))}
                </div>
            ) : (
                <Card className="p-8">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b">
                        <h3 className="text-2xl font-bold">{selectedSurah.english} ({selectedSurah.name})</h3>
                        <Button variant="ghost" onClick={() => setSelectedSurah(null)}>Back to List</Button>
                    </div>
                    <div className="space-y-12">
                        {[1, 2, 3].map(v => (
                            <div key={v} className="space-y-4">
                                <div className="text-3xl text-right font-arabic leading-loose text-gray-800">
                                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    [Verse {v}] In the name of Allah, the Entirely Merciful, the Especially Merciful. This is a youth-friendly translation focused on clarity.
                                </p>
                                <div className="flex gap-2">
                                    <button className="text-xs font-bold text-emerald-600 hover:underline">PLAY AUDIO</button>
                                    <button className="text-xs font-bold text-emerald-600 hover:underline">BOOKMARK</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}
        </div>
    );
};

const UniversityView = () => {
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

const EventsView = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <SectionHeader title="Upcoming Events" subtitle="Find local activities and national retreats happening near you." className="mb-0" />
                <div className="flex gap-2">
                    <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium">
                        <option>All Cities</option>
                        <option>London</option>
                        <option>Manchester</option>
                        <option>Birmingham</option>
                    </select>
                    <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium">
                        <option>All Ages</option>
                        <option>11-16</option>
                        <option>16-25</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {EVENTS.map(event => (
                    <Card key={event.id} className="group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-emerald-700 shadow-sm">
                                {event.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-emerald-50 px-3 py-1 rounded text-emerald-700 font-bold text-sm">{event.date}</div>
                                <div className="text-gray-400 text-sm font-medium">{event.age} yrs</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{event.title}</h3>
                            <div className="flex items-center gap-1 text-gray-500 text-sm mb-6">
                                <MapPin size={14} /> {event.location}
                            </div>
                            <Button variant="secondary" className="w-full">Register Now</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

// --- Main App ---

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
            case 'events': return <EventsView />;
            case 'quran': return <QuranView />;
            case 'university-signup': return <UniversityView />;
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

// Add Custom Arabic Font for the Qur'an reader
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  .font-arabic {
    font-family: 'Amiri', serif;
  }
`;
document.head.appendChild(style);