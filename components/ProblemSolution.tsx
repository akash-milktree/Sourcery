import React from 'react';

const ProblemSolution: React.FC = () => {
    const cards = [
        {
            tag: "Process",
            title: "The All-in-One Property OS",
            description: "Replace your messy spreadsheets with a structured, professional deal management system designed for speed.",
            visual: (
                <div className="mt-8 p-6 bg-violet-50 rounded-2xl border border-violet-100">
                    <div className="flex gap-4 items-end h-32">
                        <div className="flex-1 bg-violet-200 rounded-t-lg h-1/2 animate-pulse"></div>
                        <div className="flex-1 bg-violet-300 rounded-t-lg h-3/4"></div>
                        <div className="flex-1 bg-violet-400 rounded-t-lg h-full"></div>
                        <div className="flex-1 bg-violet-300 rounded-t-lg h-2/3"></div>
                    </div>
                </div>
            )
        },
        {
            tag: "Compliance",
            title: "Institutional Grade KYC & AML",
            description: "Automated compliance checks built directly into your sourcing flow. Stay secure, stay compliant, scale faster.",
            visual: (
                <div className="mt-8 relative h-40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-50"></div>
                    <div className="relative w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center text-blue-600">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <div className="absolute top-10 right-10 w-12 h-12 bg-white/80 backdrop-blur shadow-lg rounded-full animate-bounce"></div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-4">The New Standard</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        How professional sourcers <br />
                        <span className="text-slate-400">win the market.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cards.map((card, i) => (
                        <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700 ease-out flex flex-col justify-between">
                            <div>
                                <span className="px-4 py-1.5 rounded-full bg-white text-xs font-bold text-slate-600 border border-slate-100 shadow-sm mb-6 inline-block">
                                    {card.tag}
                                </span>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
                                    {card.description}
                                </p>
                            </div>
                            {card.visual}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
