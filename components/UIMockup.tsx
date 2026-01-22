import React from 'react';

const UIMockup: React.FC = () => {
  return (
    <div className="flex bg-white h-[600px] w-full font-sans text-brand-deep">
      {/* Sidebar */}
      <div className="w-56 border-r border-black/[0.03] flex flex-col p-6 space-y-8">
        <div className="flex items-center gap-2 text-brand-cyan font-[800]">
          <div className="w-6 h-6 bg-brand-cyan rounded flex items-center justify-center text-brand-deep text-[10px]">S</div>
          Sourcery
        </div>

        <div className="relative">
          <input type="text" placeholder="Search" className="w-full bg-brand-paper border border-black/[0.03] rounded-lg px-8 py-1.5 text-xs focus:outline-none font-medium" />
          <svg className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-brand-deep/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        <div className="space-y-4">
          <div className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono">Main Menu</div>
          <div className="space-y-1">
            {['Dashboard', 'Customers', 'All reports', 'Geography', 'Conversations', 'Deals', 'Export'].map((item, i) => (
              <div key={item} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[13px] font-bold cursor-pointer transition-all ${i === 0 ? 'bg-brand-cyan/10 text-brand-cyan' : 'text-brand-deep/40 hover:bg-brand-paper hover:text-brand-deep'}`}>
                <div className={`w-4 h-4 rounded ${i === 0 ? 'bg-brand-cyan' : 'bg-brand-deep/10 opacity-50'}`}></div>
                {item}
                {i === 1 && <svg className="w-3 h-3 ml-auto text-brand-deep/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-2 p-2 bg-brand-paper rounded-xl">
            <img src="https://picsum.photos/seed/user/32/32" className="w-8 h-8 rounded-full ring-2 ring-white" />
            <div className="overflow-hidden">
              <div className="text-[11px] font-[800] text-brand-deep truncate tracking-tight">Gustavo Xavier</div>
              <div className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-mono">Admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-brand-paper/30 p-8 overflow-y-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Revenues Card */}
          <div className="col-span-4 p-6 bg-white border border-black/[0.03] rounded-2xl shadow-sm">
            <div className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono mb-2">Revenues</div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-[800] tracking-tighter">15%</span>
              <span className="text-brand-cyan text-xs font-bold">↗</span>
            </div>
            <div className="text-[10px] text-brand-deep/40 font-medium mb-4 italic leading-tight">Increase compared to last week</div>
            <button className="text-brand-cyan text-[11px] font-bold flex items-center gap-1 uppercase tracking-wider font-mono hover:gap-2 transition-all">Report →</button>
          </div>

          {/* Lost Deals Card */}
          <div className="col-span-4 p-6 bg-white border border-black/[0.03] rounded-2xl shadow-sm">
            <div className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono mb-2">Lost deals</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-[800] tracking-tighter">4%</span>
            </div>
            <div className="text-[10px] text-brand-deep/40 font-medium mb-4 italic leading-tight">You closed 96 out of 100 deals</div>
            <button className="text-brand-cyan text-[11px] font-bold flex items-center gap-1 uppercase tracking-wider font-mono hover:gap-2 transition-all">Details →</button>
          </div>

          {/* Quarter Goal Card */}
          <div className="col-span-4 p-6 bg-white border border-black/[0.03] rounded-2xl shadow-sm flex flex-col items-center">
            <div className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono mb-4 self-start">Quarter goal</div>
            <div className="relative w-24 h-24 mb-4">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                <circle cx="48" cy="48" r="40" stroke="#00CADC" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="40" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-[800] tracking-tighter">84%</span>
              </div>
            </div>
            <button className="text-brand-cyan text-[11px] font-bold flex items-center gap-1 uppercase tracking-wider font-mono hover:gap-2 transition-all">Goals →</button>
          </div>

          {/* Customers Table */}
          <div className="col-span-6 p-6 bg-white border border-black/[0.03] rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono">Customers</div>
              <div className="text-[10px] font-bold text-brand-deep/30 font-mono">Sort by: <span className="text-brand-deep underline">Newest ↓</span></div>
            </div>
            <div className="space-y-3">
              {[
                { name: "Chris Freddy", role: "Superintendent Sourcing", img: "https://picsum.photos/seed/c1/32/32" },
                { name: "Maggie Johnson", role: "Oasis Organic Inc", img: "https://picsum.photos/seed/c2/32/32", active: true },
                { name: "Gael Harry", role: "New York Forex Focus", img: "https://picsum.photos/seed/c3/32/32" }
              ].map((user) => (
                <div key={user.name} className={`flex items-center gap-3 p-2 rounded-xl border transition-all ${user.active ? 'bg-brand-cyan/5 border-brand-cyan/20' : 'border-transparent hover:bg-brand-paper/30'}`}>
                  <img src={user.img} className="w-8 h-8 rounded-full border-2 border-white" />
                  <div className="flex-1">
                    <div className="text-[12px] font-[800] text-brand-deep tracking-tight">{user.name}</div>
                    <div className="text-[10px] font-medium text-brand-deep/40 italic">{user.role}</div>
                  </div>
                  {user.active && <div className="flex gap-2 pr-2">
                    <div className="w-5 h-5 bg-white border border-brand-deep/5 rounded flex items-center justify-center text-[10px] shadow-sm">💬</div>
                    <div className="w-5 h-5 bg-white border border-brand-deep/5 rounded flex items-center justify-center text-[10px] shadow-sm">☆</div>
                  </div>}
                </div>
              ))}
            </div>
          </div>

          {/* Growth Chart */}
          <div className="col-span-6 p-6 bg-white border border-black/[0.03] rounded-2xl shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono">Growth</div>
              <div className="text-[10px] font-bold text-brand-deep/30 font-mono">Yearly ↓</div>
            </div>
            <div className="flex-1 flex items-end gap-2 h-32 mb-6">
              {[40, 60, 45, 70, 85, 95, 80].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-brand-cyan/20 to-brand-cyan rounded-t-sm transition-all hover:opacity-80" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-black/[0.03] pt-6">
              <div>
                <div className="text-[8px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono">Top month</div>
                <div className="text-[10px] font-[800] text-brand-cyan">Nov <span className="opacity-40">2019</span></div>
              </div>
              <div>
                <div className="text-[8px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono">Top year</div>
                <div className="text-[10px] font-[800]">2023 <span className="text-[8px] opacity-40">96K sold</span></div>
              </div>
              <div>
                <div className="text-[8px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono">Top buyer</div>
                <div className="flex items-center gap-1">
                  <img src="https://picsum.photos/seed/b/16/16" className="w-4 h-4 rounded-full" />
                  <div className="text-[10px] font-[800] truncate">Maggie J.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIMockup;