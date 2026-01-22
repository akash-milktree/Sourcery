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
        <section className="py-32 bg-brand-paper overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <div className="inline-block bg-white border border-black/[0.05] rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-mono">The Evolution</span>
                    </div>
                    <h2 className="text-[32px] md:text-[40px] font-[800] text-brand-deep tracking-tighter leading-tight">
                        Why lead with <span className="text-brand-cyan">Sourcery?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Old Way */}
                    <div className="p-12 rounded-[2rem] border border-black/[0.03] bg-white reveal reveal-delay-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 rounded-xl bg-brand-deep/5 flex items-center justify-center text-brand-deep/30">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <h3 className="text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest font-mono">The Old Way</h3>
                        </div>
                        <ul className="space-y-5 flex-grow">
                            {oldWay.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-brand-deep/40 font-medium text-[15px]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-deep/10"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sourcery Way */}
                    <div className="p-12 rounded-[2rem] bg-brand-deep text-white shadow-2xl shadow-brand-cyan/10 relative overflow-hidden reveal reveal-delay-2 flex flex-col">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 rounded-xl bg-brand-cyan flex items-center justify-center text-brand-deep">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-mono">Sourcery</h3>
                            </div>
                            <ul className="space-y-5 flex-grow">
                                {sourceryWay.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 font-bold text-white text-[15px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-lg shadow-brand-cyan/40"></div>
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
