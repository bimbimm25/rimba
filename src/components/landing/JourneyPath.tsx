import React from 'react';
import { Search, HelpCircle, Eye, AlertOctagon, UserCheck, Trophy } from 'lucide-react';

const steps = [
    { step: '01', title: 'Kenali', desc: 'Apa itu karhutla?', icon: Search },
    { step: '02', title: 'Pahami', desc: 'Kenapa bisa terjadi?', icon: HelpCircle },
    { step: '03', title: 'Temukan', desc: 'Apa dampaknya pada alam?', icon: Eye },
    { step: '04', title: 'Cegah', desc: 'Apa yang bisa kita lakukan?', icon: AlertOctagon },
    { step: '05', title: 'Bertindak Aman', desc: 'Menghindar & lapor orang dewasa', icon: UserCheck },
    { step: '06', title: 'Misi Rimba', desc: 'Uji pemahaman & raih lencana', icon: Trophy },
];

export const JourneyPath = () => {
    return (
        <section className="py-20 bg-earth-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-rimba-600 bg-rimba-100 px-3 py-1 rounded-full">
                        Alur Pembelajaran
                    </span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-rimba-900 tracking-tight mt-3">
                        Perjalanan Belajar Sahabat Rimba
                    </h2>
                    <p className="text-rimba-700 text-sm sm:text-base mt-2">
                        Mulai dari dasar hingga latihan mengambil keputusan yang tepat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 border border-rimba-100/90 shadow-sm flex items-start gap-4 relative overflow-hidden"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-rimba-50 text-rimba-600 flex items-center justify-center shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-rimba-500 tracking-wider">
                                        LANGKAH {item.step}
                                    </div>
                                    <h3 className="font-display font-bold text-rimba-900 text-base mt-0.5">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-rimba-700 mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};