import React from 'react';
import { Users, Calendar, GraduationCap, Globe, BookMarked, Gamepad2, HeartPulse, Lightbulb, ArrowRight, BookOpen, ExternalLink, LifeBuoy } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

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

export default HomeView;
