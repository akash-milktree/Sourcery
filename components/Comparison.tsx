import React from 'react';

const Comparison: React.FC = () => {
    const oldWay = [
        "Fragmented WhatsApp groups",
        "Messy spreadsheets & lost data",
        "Manual AML & KYC compliance",
        "No structured deal history",
        "Limited scaling potential"
    ];

    const sourceryWay = [
        "Centralized Deal Hub",
        "Structured property CRM",
        "Automated 1-click compliance",
        "Detailed reporting & analytics",
        "Built for institutional scale"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-4">The Evolution</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Why lead with <span className="text-violet-600">Sourcery?</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Old Way */}
                    <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 uppercase tracking-tight">The Old Way</h4>
                        </div>
                        <ul className="space-y-4">
                            {oldWay.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-400 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sourcery Way */}
                    <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl shadow-violet-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold uppercase tracking-tight">Sourcery</h4>
                            </div>
                            <ul className="space-y-4">
                                {sourceryWay.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-semibold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-sm shadow-violet-400"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
