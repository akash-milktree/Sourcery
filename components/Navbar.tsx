import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="z-50 py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 bg-slate-900 rounded-sm transform rotate-45 flex items-center justify-center">
            {/* Simple geometric logo similar to screenshot */}
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">sourcery</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <a href="#" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Benefits</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Integrations</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#" className="hover:text-slate-900 transition-colors">FAQ</a>
        </div>

        <div>
          <button className="px-6 py-2.5 bg-[#00CADC] text-slate-900 text-sm font-bold rounded-full hover:shadow-lg transition-all active:scale-95">
            Get Template
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;