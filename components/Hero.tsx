import React from 'react';
import UIMockup from './UIMockup.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-paper pt-24 pb-24 overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 relative">

        {/* Top Badge */}
        <div className="flex flex-col items-center mb-10 reveal">
          <div className="bg-white border border-black/[0.05] rounded-full px-4 py-1.5 flex items-center gap-3 shadow-sm">
            <div className="flex -space-x-1.5">
              <img src="https://picsum.photos/seed/1/32/32" className="w-5 h-5 rounded-full border border-white" />
              <img src="https://picsum.photos/seed/2/32/32" className="w-5 h-5 rounded-full border border-white" />
              <img src="https://picsum.photos/seed/3/32/32" className="w-5 h-5 rounded-full border border-white" />
            </div>
            <span className="text-[10px] font-bold text-brand-deep/50 uppercase tracking-widest font-mono">Trusted by 1M+ users</span>
          </div>
        </div>

        {/* Floating Icons Container */}
        <div className="relative text-center max-w-4xl mx-auto z-10">
          {/* Floating Icons - Hidden on small screens */}
          <div className="hidden lg:block absolute -left-20 top-0 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 border border-black/[0.03] reveal reveal-delay-3">
            <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center text-brand-deep font-bold text-lg">D</div>
          </div>
          <div className="hidden lg:block absolute -left-12 bottom-12 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-6 border border-black/[0.03] reveal reveal-delay-3">
            <div className="w-8 h-8 bg-brand-deep rounded-lg flex items-center justify-center text-white font-bold text-lg">N</div>
          </div>
          <div className="hidden lg:block absolute -right-20 top-4 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 border border-black/[0.03] reveal reveal-delay-3">
            <div className="w-8 h-8 bg-brand-ink rounded-lg flex items-center justify-center text-brand-deep font-bold text-lg">R</div>
          </div>
          <div className="hidden lg:block absolute -right-12 bottom-20 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-6 border border-black/[0.03] reveal reveal-delay-3">
            <div className="w-8 h-8 bg-brand-cyan/50 rounded-lg flex items-center justify-center text-brand-deep font-bold text-lg">S</div>
          </div>

          <h1 className="text-[48px] md:text-[64px] font-[800] text-brand-deep leading-[1.05] tracking-tighter mb-8 reveal reveal-delay-1">
            Turn Scattered Property <br className="hidden md:block" /> Deals Into Smart Investments.
          </h1>

          <p className="text-lg md:text-xl text-brand-deep/60 font-medium leading-relaxed mb-10 max-w-2xl mx-auto reveal reveal-delay-2">
            Replace chaotic WhatsApp groups and risky spreadsheets with a secure, verified marketplace. The end-to-end operating system for professional deal sourcing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 reveal reveal-delay-2">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-brand-deep font-extrabold rounded-full hover:shadow-xl hover:shadow-brand-cyan/20 transition-all active:scale-95 text-[14px] uppercase tracking-wider">
              Join the Waitlist
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-deep/10 text-brand-deep font-extrabold rounded-full hover:bg-brand-deep/5 transition-all active:scale-95 text-[14px] uppercase tracking-wider">
              Book a Demo
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 reveal reveal-delay-3">
            <div className="flex items-center gap-2 text-[11px] font-bold text-brand-deep/40 uppercase tracking-widest font-mono">
              <svg className="w-3.5 h-3.5 text-brand-cyan" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
              Launching Q1 2026
            </div>
            <span className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono">Trusted by professional investors & sourcers</span>
          </div>
        </div>

        {/* Dashboard Mockup - Refined for the 'Brand feels' */}
        <div className="mt-20 relative max-w-[1000px] mx-auto reveal reveal-delay-3">
          <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden border border-black/[0.03]">
            <UIMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;