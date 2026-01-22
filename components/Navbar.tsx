import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-brand-paper/80 backdrop-blur-xl border-b border-black/[0.03]">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-5 h-5 bg-brand-deep rounded-sm transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
          </div>
          <span className="text-xl font-[800] tracking-tighter text-brand-deep">sourcery</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-brand-deep/30 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-brand-cyan transition-colors">Features</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">Comparison</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">Testimonials</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[11px] font-bold text-brand-deep/50 uppercase tracking-widest font-mono hover:text-brand-deep transition-colors">Login</button>
          <button className="px-6 py-2.5 bg-brand-cyan text-brand-deep text-[12px] font-[800] rounded-full hover:shadow-xl hover:shadow-brand-cyan/20 transition-all active:scale-95 uppercase tracking-widest">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;