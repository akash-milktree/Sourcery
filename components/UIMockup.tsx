const UIMockup: React.FC = () => {
  return (
    <div className="flex bg-white h-[600px] w-full font-sans text-slate-800">
      {/* Sidebar */}
      <div className="w-56 border-r border-slate-100 flex flex-col p-6 space-y-8">
        <div className="flex items-center gap-2 text-blue-600 font-bold">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px]">A</div>
          Alytics
        </div>

        <div className="relative">
          <input type="text" placeholder="Search" className="w-full bg-slate-50 border border-slate-100 rounded-lg px-8 py-1.5 text-xs focus:outline-none" />
          <svg className="w-3.5 h-3.5 absolute left-2.5 top-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        <div className="space-y-4">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main Menu</div>
          <div className="space-y-1">
            {['Dashboard', 'Customers', 'All reports', 'Geography', 'Conversations', 'Deals', 'Export'].map((item, i) => (
              <div key={item} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${i === 0 ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
                <div className={`w-4 h-4 rounded ${i === 0 ? 'bg-blue-600' : 'bg-slate-200 opacity-50'}`}></div>
                {item}
                {i === 1 && <svg className="w-3 h-3 ml-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-2">
            <img src="https://picsum.photos/seed/user/32/32" className="w-8 h-8 rounded-full" />
            <div className="overflow-hidden">
              <div className="text-[10px] font-bold text-slate-900 truncate">Gustavo Xavier</div>
              <div className="text-[10px] font-medium text-blue-600 italic">Admin</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
              <div className="w-4 h-4 bg-slate-200 rounded"></div> Settings
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600">
              <div className="w-4 h-4 bg-blue-100 rounded"></div> Log out
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-8 overflow-y-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Revenues Card */}
          <div className="col-span-4 p-6 border border-slate-100 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-slate-400 mb-1">Revenues</div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold">15%</span>
              <span className="text-blue-500 text-xs font-bold">↗</span>
            </div>
            <div className="text-[10px] text-slate-400 font-medium mb-4 italic">Increase compared to last week</div>
            <button className="text-blue-600 text-[10px] font-bold flex items-center gap-1">Revenues report →</button>
          </div>

          {/* Lost Deals Card */}
          <div className="col-span-4 p-6 border border-slate-100 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-slate-400 mb-1">Lost deals</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-bold">4%</span>
            </div>
            <div className="text-[10px] text-slate-400 font-medium mb-4 italic">You closed 96 out of 100 deals</div>
            <button className="text-blue-600 text-[10px] font-bold flex items-center gap-1">All deals →</button>
          </div>

          {/* Quarter Goal Card */}
          <div className="col-span-4 p-6 border border-slate-100 rounded-2xl shadow-sm flex flex-col items-center">
            <div className="text-xs font-bold text-slate-400 mb-4 self-start">Quarter goal</div>
            <div className="relative w-24 h-24 mb-4">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                <circle cx="48" cy="48" r="40" stroke="#2563eb" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="40" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold">84%</span>
              </div>
            </div>
            <button className="text-blue-600 text-[10px] font-bold flex items-center gap-1">All goals →</button>
          </div>

          {/* Customers Table */}
          <div className="col-span-6 p-6 border border-slate-100 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-bold text-slate-400">Customers</div>
              <div className="text-[10px] font-bold text-slate-400">Sort by: <span className="text-slate-900">Newest ↓</span></div>
            </div>
            <div className="space-y-3">
              {[
                { name: "Chris Freddy", role: "Superintendent Sourcing", img: "https://picsum.photos/seed/c1/32/32" },
                { name: "Maggie Johnson", role: "Oasis Organic Inc", img: "https://picsum.photos/seed/c2/32/32", active: true },
                { name: "Gael Harry", role: "New York Forex Focus", img: "https://picsum.photos/seed/c3/32/32" }
              ].map((user) => (
                <div key={user.name} className={`flex items-center gap-3 p-2 rounded-xl border ${user.active ? 'bg-blue-50 border-blue-100 shadow-sm' : 'border-transparent'}`}>
                  <img src={user.img} className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-900">{user.name}</div>
                    <div className="text-[10px] font-medium text-slate-400 italic">{user.role}</div>
                  </div>
                  {user.active && <div className="flex gap-2 pr-2">
                    <div className="w-4 h-4 bg-white border border-slate-100 rounded flex items-center justify-center text-[8px] italic">💬</div>
                    <div className="w-4 h-4 bg-white border border-slate-100 rounded flex items-center justify-center text-[8px] italic">☆</div>
                  </div>}
                </div>
              ))}
            </div>
          </div>

          {/* Growth Chart */}
          <div className="col-span-6 p-6 border border-slate-100 rounded-2xl shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-bold text-slate-400">Growth</div>
              <div className="text-[10px] font-bold text-slate-400">Yearly ↓</div>
            </div>
            <div className="flex-1 flex items-end gap-2 h-32 mb-4">
              {[40, 60, 45, 70, 85, 95, 80].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-600/60 rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase">Top month</div>
                <div className="text-[10px] font-bold text-blue-600">November <span className="text-slate-400">2019</span></div>
              </div>
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase">Top year</div>
                <div className="text-[10px] font-bold">2023 <span className="text-slate-400">96K sold so far</span></div>
              </div>
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase">Top buyer</div>
                <div className="flex items-center gap-1">
                  <img src="https://picsum.photos/seed/b/16/16" className="w-3 h-3 rounded-full" />
                  <div className="text-[10px] font-bold">Maggie Johnson</div>
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