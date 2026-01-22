import React from 'react';

const features = [
    {
        title: "Deal Analyzer",
        description: "Instant ROI, Yield, and BRRR calculations with professional reporting.",
        icon: (
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
        )
    },
    {
        title: "Smart CRM",
        description: "Manage your investor leads and sourcers in one consolidated dashboard.",
        icon: (
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
        )
    },
    {
        title: "AML Check",
        description: "Automated AML and KYC verification for every investor on your list.",
        icon: (
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
        )
    },
    {
        title: "Projections",
        description: "10-year growth and rental income forecasting with a single click.",
        icon: (
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
            </svg>
        )
    },
    {
        title: "Timeline Tool",
        description: "Track your deal progression from offer accepted to completion.",
        icon: (
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        )
    },
    {
        title: "Investor Portal",
        description: "Give your clients a professional login to view their tailored deal flow.",
        icon: (
            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
        )
    }
];

const Features: React.FC = () => {
    return (
        <section className="py-24 bg-brand-paper overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-2xl mb-16 reveal">
                    <div className="inline-block bg-white border border-black/[0.05] rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-mono">Core Features</span>
                    </div>
                    <h2 className="text-[32px] md:text-[40px] font-[800] text-brand-deep tracking-tighter leading-tight">
                        Everything you need to <br className="hidden md:block" />
                        <span className="text-brand-deep/40 font-bold">scale your property business.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`p-10 bg-white border border-black/[0.03] rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group reveal reveal-delay-${i % 3 + 1}`}
                        >
                            <div className="w-12 h-12 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                {React.cloneElement(feature.icon as any, { className: "w-6 h-6 text-brand-cyan" })}
                            </div>
                            <h3 className="text-xl font-[800] text-brand-deep mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-brand-deep/60 font-medium leading-relaxed text-[15px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
