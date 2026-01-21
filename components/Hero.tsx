
import React from 'react';
import UIMockup from './UIMockup';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center text-left">
          
          {/* Content Column */}
          <div className="lg:col-span-6 max-w-2xl">
            {/* Tagline/Pre-headline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold tracking-wide uppercase mb-8 border border-violet-100 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
              Sourcing Reimagined
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Master your property <span className="text-violet-600">deal flow</span> in one structured system.
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl font-normal">
              Ditch fragmented WhatsApp groups and messy spreadsheets. Sourcery provides the professional pipeline property investors and sourcers need to scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 transition-all hover:shadow-xl hover:shadow-violet-200 active:scale-[0.98] text-lg">
                Join the Waitlist
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-[0.98] text-lg">
                Book a Demo
              </button>
            </div>

            {/* Trust Cue */}
            <div className="flex items-center gap-3 text-slate-400">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 40}/64/64`} alt="User" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">
                The professional standard for <strong className="text-slate-600">off-market</strong> property sourcing.
              </span>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 hidden lg:block">
            <UIMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
