
import React from 'react';

const UIMockup: React.FC = () => {
  return (
    <div className="relative group">
      {/* Decorative background shadow/element */}
      <div className="absolute inset-0 bg-violet-100 rounded-[2.5rem] blur-2xl transform rotate-3 scale-95 opacity-50 group-hover:rotate-1 group-hover:scale-100 transition-all duration-700"></div>
      
      {/* Main Dashboard Container */}
      <div className="relative bg-white border border-slate-100 rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
        {/* Mockup Header */}
        <div className="h-14 border-b border-slate-50 bg-slate-50/50 px-6 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
          </div>
          <div className="h-6 w-48 bg-white border border-slate-100 rounded-full flex items-center px-3">
             <div className="w-2 h-2 rounded-full bg-slate-200 mr-2"></div>
             <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
          </div>
          <div className="w-6 h-6 rounded-full bg-slate-200"></div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Deals</div>
              <div className="text-2xl font-bold text-slate-900">24</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Avg. ROI</div>
              <div className="text-2xl font-bold text-violet-600">14.2%</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">In Pipeline</div>
              <div className="text-2xl font-bold text-slate-900">£1.2M</div>
            </div>
          </div>

          {/* Pipeline Row */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Deal Pipeline</h3>
              <span className="text-xs font-semibold text-violet-600">View All →</span>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "High Street Portfolio", type: "BRRR", status: "Due Diligence", color: "bg-blue-500" },
                { name: "Victoria Square HMO", type: "HMO", status: "Negotiating", color: "bg-orange-500" },
                { name: "Riverside Loft Conversion", type: "Development", status: "Lead", color: "bg-slate-300" }
              ].map((deal, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-slate-200 transition-all cursor-default group/card">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      <div className={`w-3 h-3 rounded-full ${deal.color}`}></div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{deal.name}</div>
                      <div className="text-xs font-medium text-slate-400">{deal.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="px-2.5 py-1 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100 uppercase tracking-tight">
                       {deal.status}
                     </span>
                     <div className="w-2 h-2 rounded-full bg-slate-100 group-hover/card:bg-slate-300 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Graph Placeholder */}
          <div className="p-5 rounded-2xl bg-violet-600 text-white overflow-hidden relative">
             <div className="relative z-10">
                <div className="text-xs font-bold text-violet-200 uppercase tracking-widest mb-1">Growth Index</div>
                <div className="text-xl font-bold">+18% this month</div>
             </div>
             {/* Simple Abstract SVG wave */}
             <svg className="absolute bottom-0 left-0 right-0 opacity-20" height="60" viewBox="0 0 400 60">
                <path d="M0 60 L0 40 C40 45 80 15 120 30 C160 45 200 5 240 20 C280 35 320 10 360 25 C380 32 400 40 400 40 L400 60 Z" fill="white" />
             </svg>
          </div>
        </div>
      </div>

      {/* Floater Element 1 - Verification Badge */}
      <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce shadow-violet-100" style={{ animationDuration: '4s' }}>
        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sourcer Verified</div>
          <div className="text-sm font-bold text-slate-800 italic">AML Certified</div>
        </div>
      </div>

      {/* Floater Element 2 - Market Data */}
      <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden xl:block">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex flex-col items-center justify-center font-bold text-slate-800 leading-none">
            <span className="text-[10px] text-slate-400">DEC</span>
            <span>12</span>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">New Deal Live</div>
            <div className="text-[10px] font-medium text-slate-400 italic">Manchester, M1 4BX</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIMockup;
