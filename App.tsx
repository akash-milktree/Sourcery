import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TrustBar from './components/TrustBar.tsx';
import NewStandard from './components/NewStandard.tsx';
import Features from './components/Features.tsx';
import Comparison from './components/Comparison.tsx';
import Support from './components/Support.tsx';
import FinalCTA from './components/FinalCTA.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Slightly earlier trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      observer.observe(el);
      // Immediate trigger for elements already in view (e.g., Hero section)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-revealed');
      }
    });

    return () => observer.disconnect();
  }, []);

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

      <footer className="py-24 px-6 border-t border-black/[0.03] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 cursor-pointer group mb-6">
                <div className="w-6 h-6 bg-brand-deep rounded-sm transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
                </div>
                <span className="text-xl font-[800] tracking-tighter text-brand-deep">sourcery</span>
              </div>
              <p className="text-brand-deep/40 text-[13px] font-medium leading-relaxed max-w-[200px]">
                The operating system for professional property sourcers.
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-[800] text-brand-deep uppercase tracking-[0.2em] font-mono mb-6">Product</h4>
              <div className="flex flex-col gap-4 text-[13px] font-bold text-brand-deep/40">
                <a href="#" className="hover:text-brand-cyan transition-colors">Marketplace</a>
                <a href="#" className="hover:text-brand-cyan transition-colors">CRM</a>
                <a href="#" className="hover:text-brand-cyan transition-colors">Compliance</a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-[800] text-brand-deep uppercase tracking-[0.2em] font-mono mb-6">Company</h4>
              <div className="flex flex-col gap-4 text-[13px] font-bold text-brand-deep/40">
                <a href="#" className="hover:text-brand-cyan transition-colors">About Us</a>
                <a href="#" className="hover:text-brand-cyan transition-colors">Careers</a>
                <a href="#" className="hover:text-brand-cyan transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-[800] text-brand-deep uppercase tracking-[0.2em] font-mono mb-6">Legal</h4>
              <div className="flex flex-col gap-4 text-[13px] font-bold text-brand-deep/40">
                <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-brand-cyan transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-brand-deep/20 font-bold font-mono tracking-widest uppercase">© 2026 SOURCERY. BUILT FOR SCALE.</p>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="text-[11px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono hover:text-brand-cyan transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;