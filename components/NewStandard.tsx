import React from 'react';

const features = [
    {
        title: "Standardised Financials",
        description: "No more 'text block' analysis. Every deal comes with auto-calculated Yield, ROI, and ROCE metrics that sourcers cannot fake.",
        image: "/assets/financials.png"
    },
    {
        title: "Verified Sourcers Only",
        description: "We enforce strict ID, AML, and Insurance checks. If a sourcer isn't verified by our team, they can't list a deal. Period.",
        image: "/assets/verified.png"
    },
    {
        title: "Escrow-Backed Reservations",
        description: "Pay reservation fees into a secure client wallet. Funds are only released when the deal progresses, protecting your capital.",
        image: "/assets/escrow.png"
    },
    {
        title: "End-to-End Progression",
        description: "Track every deal from 'Reserved' to 'Completed' on a shared Kanban board. No more chasing solicitors for updates via email.",
        image: "/assets/progression.png"
    }
];

const NewStandard: React.FC = () => {
    return (
        <section className="py-24 bg-[#f7f7f5] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <span className="text-[13px] font-semibold text-blue-600">Unique Features</span>
                    </div>
                    <h2 className="text-[40px] md:text-[56px] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        The New Standard For <br /> Property Sourcing.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        We stripped away the noise, the scams, and the unformatted text blocks to build a platform that works as hard as you do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
                            <div className="p-10 pb-0 flex-grow">
                                <div className="relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto object-cover rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="p-10 pt-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewStandard;
