import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="z-50 py-4 px-6 border-b border-black/[0.03]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-5 h-5 bg-brand-deep rounded-sm transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
          </div>
          <span className="text-lg font-extrabold tracking-tight text-brand-deep">sourcery</span>
        </div>

        <div className="hidden md:flex items-center gap-6 font-bold text-brand-deep/60 text-[13px] uppercase tracking-wider">
          <a href="#" className="hover:text-brand-deep transition-colors">Features</a>
          <a href="#" className="hover:text-brand-deep transition-colors">Benefits</a>
          <a href="#" className="hover:text-brand-deep transition-colors">Integrations</a>
          <a href="#" className="hover:text-brand-deep transition-colors">Pricing</a>
          <a href="#" className="hover:text-brand-deep transition-colors">FAQ</a>
        </div>

        <div>
          <button className="px-5 py-2 bg-brand-cyan text-brand-deep text-[13px] font-extrabold rounded-full hover:shadow-lg hover:shadow-brand-cyan/20 transition-all active:scale-95 uppercase tracking-wider">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;