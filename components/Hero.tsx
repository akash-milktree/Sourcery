import React from 'react';
import UIMockup from './UIMockup.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-paper pt-32 pb-24 overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 relative">

        {/* Top Badge */}
        <div className="flex flex-col items-center mb-10 reveal">
          <div className="bg-white border border-brand-cyan/20 rounded-full px-5 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(0,202,220,0.1)]">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i}/64/64`} className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <span className="text-[11px] font-[800] text-brand-deep/60 uppercase tracking-widest font-mono">Trusted by 1,200+ Sourcers</span>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="relative text-center max-w-4xl mx-auto z-10">
          {/* Status Badges - Hidden on small screens */}
          <div className="hidden lg:block absolute -left-32 top-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-black/[0.03] reveal reveal-delay-3 rotate-[-6deg]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 text-xl font-bold">✓</div>
              <div className="text-left">
                <div className="text-[12px] font-[800] tracking-tight">Verified AML</div>
                <div className="text-[10px] font-bold text-brand-deep/30 uppercase font-mono tracking-tighter">Done 2m ago</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-32 top-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-black/[0.03] reveal reveal-delay-3 rotate-[6deg]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan text-xl font-bold">£</div>
              <div className="text-left">
                <div className="text-[12px] font-[800] tracking-tight">Escrow Active</div>
                <div className="text-[10px] font-bold text-brand-deep/30 uppercase font-mono tracking-tighter">£45,200 Secured</div>
              </div>
            </div>
          </div>

          <h1 className="text-[54px] md:text-[72px] font-[800] text-brand-deep leading-[1] tracking-[-0.04em] mb-8 reveal reveal-delay-1">
            Property Deal Flow, <br className="hidden md:block" />
            <span className="text-brand-cyan">Professionalised.</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-deep/60 font-medium leading-relaxed mb-12 max-w-3xl mx-auto reveal reveal-delay-2">
            The all-in-one operating system for property sourcers and investors. Manage deals, verify compliance, and secure capital in one place.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-16 reveal reveal-delay-2">
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-deep text-white font-[800] rounded-full hover:shadow-[0_20px_40px_rgba(5,25,28,0.2)] transition-all active:scale-95 text-[15px] uppercase tracking-widest">
              Join the Waitlist
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white border border-black/10 text-brand-deep font-[800] rounded-full hover:bg-brand-paper transition-all active:scale-95 text-[15px] uppercase tracking-widest">
              View Sample Deal
            </button>
          </div>

          <div className="flex justify-center items-center gap-10 reveal reveal-delay-3">
            {[
              { label: 'Deals Listed', value: '450+' },
              { label: 'Capital Secured', value: '£12M+' },
              { label: 'Avg ROI', value: '14.5%' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-[800] tracking-tighter text-brand-deep">{stat.value}</div>
                <div className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-[0.2em] font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="mt-24 relative max-w-[1100px] mx-auto reveal reveal-delay-3">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-brand-cyan/20 blur-[120px] rounded-full -z-10 transform scale-90"></div>

          <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.12)] overflow-hidden border border-black/[0.04]">
            <UIMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;