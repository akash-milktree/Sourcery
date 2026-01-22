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

      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Sourcery</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
          <p className="text-sm text-slate-400">© 2024 Sourcery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;