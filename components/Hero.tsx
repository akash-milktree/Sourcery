import React from 'react';
import UIMockup from './UIMockup.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#f7f7f5] pt-8 pb-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Top Badge */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 flex items-center gap-3 shadow-sm">
            <div className="flex -space-x-1.5">
              <img src="https://picsum.photos/seed/1/32/32" className="w-5 h-5 rounded-full border border-white" />
              <img src="https://picsum.photos/seed/2/32/32" className="w-5 h-5 rounded-full border border-white" />
              <img src="https://picsum.photos/seed/3/32/32" className="w-5 h-5 rounded-full border border-white" />
            </div>
            <span className="text-[13px] font-semibold text-slate-700">Trusted by 1M+ users</span>
          </div>
        </div>

        {/* Floating Icons Container */}
        <div className="relative text-center max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="absolute -left-20 top-0 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 border border-slate-50">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
          </div>
          <div className="absolute -left-12 bottom-12 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-6 border border-slate-50">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
          </div>
          <div className="absolute -right-20 top-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 border border-slate-50">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
          </div>
          <div className="absolute -right-12 bottom-20 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-6 border border-slate-50">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
          </div>

          <h1 className="text-[52px] md:text-[84px] font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Turn Scattered Property <br /> Deals Into Smart Investments.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-4 max-w-xl mx-auto">
            Replace chaotic WhatsApp groups and risky spreadsheets with a secure, verified marketplace.
          </p>
          <p className="text-sm font-bold text-slate-400 italic mb-10 italic">
            The end-to-end operating system for professional deal sourcing.
          </p>

          <button className="px-8 py-4 bg-[#00CADC] text-slate-900 font-bold rounded-full hover:shadow-xl hover:shadow-[#00CADC]/20 transition-all active:scale-95 text-lg mb-6">
            Join the Waitlist
          </button>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <svg className="w-4 h-4 text-[#00CADC]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
              No credit card required - Launching Q1 2026
            </div>
            <span className="text-xs font-bold text-slate-500">Trusted by professional investors & sourcers</span>
          </div>
        </div>

        {/* Dashboard Mockup - Reusing existing structure but styling to match container */}
        <div className="mt-20 relative max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white">
          <UIMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;