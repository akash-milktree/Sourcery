import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="py-24 bg-brand-paper px-6 overflow-hidden">
            <div className="max-w-[1200px] mx-auto">
                <div className="relative rounded-[2.5rem] bg-brand-deep p-16 md:p-24 overflow-hidden shadow-2xl reveal">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-[36px] md:text-[56px] font-[800] text-white mb-8 tracking-tighter leading-tight">
                            Secure your spot in the <br className="hidden md:block" />
                            <span className="text-brand-cyan">future of sourcing.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl mb-12 font-medium max-w-xl mx-auto">
                            Join 1,000+ professional property investors and sourcers already on the waitlist.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button className="w-full sm:w-auto px-10 py-5 bg-brand-cyan text-brand-deep font-extrabold rounded-full hover:shadow-xl hover:shadow-brand-cyan/20 transition-all active:scale-95 text-[15px] uppercase tracking-wider">
                                Join the Waitlist
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/10 text-white font-extrabold rounded-full hover:bg-white/5 transition-all active:scale-95 text-[15px] uppercase tracking-wider">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
