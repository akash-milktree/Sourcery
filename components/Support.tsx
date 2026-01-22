import React, { useState } from 'react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Portfolio Landlord",
        quote: "Sourcery has completely transformed how I receive deal flow. No more scrolling through hundreds of WhatsApp messages.",
        image: "https://picsum.photos/seed/sarah/64/64"
    },
    {
        name: "David Chen",
        role: "Professional Sourcer",
        quote: "The built-in AML checks alone save me hours every week. It's the professional standard we've been waiting for.",
        image: "https://picsum.photos/seed/david/64/64"
    }
];

const faqs = [
    {
        q: "How does Sourcery handle data security?",
        a: "We use institutional-grade encryption and comply with all UK data protection regulations to ensure your deal flow and investor data remain private."
    },
    {
        q: "Can I import my existing spreadsheet data?",
        a: "Yes! We offer a seamless CSV import tool that maps your existing columns to the Sourcery pipeline in minutes."
    },
    {
        q: "Is there a mobile app?",
        a: "Sourcery is a fully responsive web application, meaning it works perfectly on your phone, tablet, and desktop without needing a separate download."
    }
];

const Support: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-brand-paper overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Testimonials */}
                <div className="mb-32">
                    <div className="text-center mb-16 reveal">
                        <div className="inline-block bg-white border border-black/[0.05] rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-mono">Wall of Love</span>
                        </div>
                        <h2 className="text-[32px] md:text-[40px] font-[800] text-brand-deep tracking-tighter leading-tight">
                            Trusted by the <br className="hidden md:block" />
                            <span className="text-brand-deep/40 font-bold">community you grow with.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`p-10 bg-white border border-black/[0.03] rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal reveal-delay-${i + 1}`}
                            >
                                <p className="text-lg font-medium text-brand-deep/70 mb-10 leading-relaxed italic">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-4 ring-brand-cyan/10" />
                                    <div>
                                        <h4 className="font-[800] text-brand-deep tracking-tight">{t.name}</h4>
                                        <p className="text-[11px] text-brand-cyan font-bold uppercase tracking-widest font-mono">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16 reveal">
                        <div className="inline-block bg-white border border-black/[0.05] rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-mono">Common Questions</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`border border-black/[0.03] bg-white rounded-[1.5rem] overflow-hidden shadow-sm transition-all duration-300 reveal reveal-delay-${i % 3 + 1}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full px-10 py-7 text-left flex justify-between items-center hover:bg-brand-paper/50 transition-colors"
                                >
                                    <span className="font-bold text-brand-deep tracking-tight">{faq.q}</span>
                                    <svg
                                        className={`w-5 h-5 text-brand-cyan transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {openIndex === i && (
                                    <div className="px-10 pb-7 text-brand-deep/60 font-medium leading-relaxed text-[15px] animate-in fade-in slide-in-from-top-2 duration-300">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
