import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TrustBar from './components/TrustBar.tsx';
import NewStandard from './components/NewStandard.tsx';
import Features from './components/Features.tsx';
import Comparison from './components/Comparison.tsx';
import Support from './components/Support.tsx';
import FinalCTA from './components/FinalCTA.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <NewStandard />
        <TrustBar />
        <Features />
        <Comparison />
        <Support />
        <FinalCTA />
      </main>

      <footer className="py-20 px-6 border-t border-black/[0.03] bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-5 h-5 bg-brand-deep rounded-sm transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
            </div>
            <span className="text-lg font-[800] tracking-tight text-brand-deep">sourcery</span>
          </div>
          <div className="flex gap-10 text-[13px] text-brand-deep/40 font-bold uppercase tracking-widest font-mono">
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Contact</a>
          </div>
          <p className="text-[12px] text-brand-deep/20 font-bold font-mono">© 2026 SOURCERY. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;