
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Sourcery</span>
        </div>

        {/* Desktop Links - Minimal & Centered feeling */}
        <div className="hidden md:flex items-center gap-10 font-medium text-slate-500 text-sm">
          <a href="#" className="hover:text-violet-600 transition-colors">Platform</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Solutions</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Enterprise</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Log in
          </button>
          <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
            Join the Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
