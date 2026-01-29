import React from 'react';
import { MapPin } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import { EVENTS } from '../data/mockData';

const EventsPage = () => {
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

export default EventsPage;
