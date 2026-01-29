import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import { QURAN_SURAHS } from '../data/mockData';

const QuranPage = () => {
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

export default QuranPage;
