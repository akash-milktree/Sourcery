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
        <section className="py-24 bg-slate-50/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Testimonials */}
                <div className="mb-24">
                    <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-12 text-center">Wall of Love</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
                                <p className="text-lg font-medium text-slate-600 italic mb-8">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-violet-50" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                                        <p className="text-sm text-slate-400 font-semibold">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-100 bg-white rounded-3xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-800">{faq.q}</span>
                                    <svg
                                        className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {openIndex === i && (
                                    <div className="px-8 pb-6 text-slate-500 font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
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
