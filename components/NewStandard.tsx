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
        <section className="py-32 bg-brand-paper overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <div className="inline-block bg-white border border-black/[0.05] rounded-full px-4 py-1.5 mb-8 shadow-sm">
                        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-mono">Unique Features</span>
                    </div>
                    <h2 className="text-[32px] md:text-[40px] font-[800] text-brand-deep leading-[1.1] mb-6 tracking-tighter">
                        The New Standard For <br className="hidden md:block" /> Property Sourcing.
                    </h2>
                    <p className="text-lg text-brand-deep/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        We stripped away the noise, the scams, and the unformatted text blocks to build a platform that works as hard as you do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col reveal reveal-delay-${i + 1}`}
                        >
                            <div className="p-10 pb-0 flex-grow">
                                <div className="relative rounded-[1.5rem] overflow-hidden bg-brand-paper border border-black/[0.03] flex items-center justify-center p-4">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto object-cover rounded-xl shadow-lg transform group-hover:scale-[1.03] transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="p-10 pt-8">
                                <h3 className="text-2xl font-[800] text-brand-deep mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-brand-deep/60 font-medium leading-relaxed text-[15px]">
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
