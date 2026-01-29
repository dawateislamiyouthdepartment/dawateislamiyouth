import React from 'react';
import { Search, PlayCircle, BookOpen, Download } from 'lucide-react';
import Card from '../components/ui/Card';
import { RESOURCES } from '../data/mockData';

const ResourcesPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h2>
                <div className="relative max-w-lg">
                    <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for articles, PDFs, or videos..."
                        className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RESOURCES.map(resource => (
                    <Card key={resource.id} className="p-6 group hover:border-emerald-200 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${resource.color}`}>
                                {resource.type === 'Video' ? <PlayCircle size={24} /> : <BookOpen size={24} />}
                            </div>
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                {resource.category}
                            </span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{resource.title}</h3>
                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-50">
                            <span className="text-xs font-medium text-gray-400 uppercase">{resource.type}</span>
                            <button className="text-emerald-600 hover:text-emerald-700 font-bold text-sm flex items-center gap-1">
                                Download <Download size={16} />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ResourcesPage;
