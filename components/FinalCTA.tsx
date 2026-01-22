import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] bg-violet-600 p-12 md:p-24 overflow-hidden shadow-2xl shadow-violet-200">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Secure your seat with the future of sourcing.
                        </h3>
                        <p className="text-violet-100 text-lg md:text-xl mb-12 font-medium">
                            Join 500+ professional property investors and sourcers already on the waitlist.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button className="w-full sm:w-auto px-10 py-5 bg-white text-violet-600 font-bold rounded-full hover:bg-slate-50 transition-all active:scale-95 text-lg shadow-xl shadow-violet-700/20">
                                Join the Waitlist
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 bg-violet-500 text-white border border-violet-400/50 font-bold rounded-full hover:bg-violet-400 transition-all active:scale-95 text-lg">
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
