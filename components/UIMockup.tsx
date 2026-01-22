import React from 'react';

const UIMockup: React.FC = () => {
  return (
    <div className="flex bg-white h-[650px] w-full font-sans text-brand-deep select-none">
      {/* Sidebar */}
      <div className="w-64 border-r border-black/[0.03] flex flex-col p-8 space-y-10 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-deep rounded-lg flex items-center justify-center transition-transform hover:rotate-12 duration-300">
            <div className="w-3 h-3 bg-brand-cyan rounded-full"></div>
          </div>
          <span className="text-lg font-[800] tracking-tighter">Sourcery</span>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-[10px] font-bold text-brand-deep/20 uppercase tracking-[0.2em] font-mono px-2">Marketplace</div>
            {[
              { name: 'Live Deals', icon: '💎', active: true },
              { name: 'Portfolio', icon: '📁' },
              { name: 'Analytics', icon: '📊' },
              { name: 'Investors', icon: '👥' },
            ].map((item) => (
              <div key={item.name} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-[800] cursor-pointer transition-all ${item.active ? 'bg-brand-cyan text-brand-deep shadow-lg shadow-brand-cyan/20' : 'text-brand-deep/40 hover:bg-brand-paper hover:text-brand-deep'}`}>
                <span className="text-base">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-bold text-brand-deep/20 uppercase tracking-[0.2em] font-mono px-2">Account</div>
            {[
              { name: 'Verification', icon: '✅' },
              { name: 'Settings', icon: '⚙️' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-[800] text-brand-deep/40 cursor-pointer hover:bg-brand-paper hover:text-brand-deep transition-all">
                <span className="text-base">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="p-4 bg-brand-paper rounded-2xl border border-black/[0.02]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-brand-deep/5 flex items-center justify-center text-lg shadow-inner">👨‍💼</div>
              <div>
                <div className="text-[12px] font-[800] tracking-tight">John S.</div>
                <div className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest font-mono">Verified Pro</div>
              </div>
            </div>
            <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
              <div className="h-full bg-brand-cyan w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#FAFAFA] p-10 overflow-hidden flex flex-col gap-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-[800] tracking-tighter">Dashboard Overview</h1>
            <p className="text-[13px] text-brand-deep/40 font-medium">Welcome back, here's what's happening today.</p>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-2 bg-white border border-black/[0.05] rounded-xl shadow-sm text-[12px] font-[800] flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse"></span>
              Market Open
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6">
          {[
            { label: 'Active Pipeline', value: '£2.4M', sub: '+12% this month', trend: 'up' },
            { label: 'Average Yield', value: '8.4%', sub: 'Target: 7.5%', trend: 'up' },
            { label: 'Time to Close', value: '14 Days', sub: '-3 days vs avg', trend: 'down' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-black/[0.03] shadow-sm hover:shadow-md transition-all">
              <div className="text-[10px] font-bold text-brand-deep/20 uppercase tracking-[0.15em] font-mono mb-3">{stat.label}</div>
              <div className="text-3xl font-[800] tracking-tighter mb-2">{stat.value}</div>
              <div className={`text-[11px] font-bold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-brand-cyan'} flex items-center gap-1`}>
                {stat.trend === 'up' ? '↗' : '↘'} {stat.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8 overflow-hidden">
          {/* Market Activity */}
          <div className="bg-white p-8 rounded-[2rem] border border-black/[0.03] shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="text-[11px] font-bold text-brand-deep/20 uppercase tracking-[0.2em] font-mono">Market Activity</div>
              <div className="px-3 py-1 bg-brand-paper rounded-full text-[10px] font-bold font-mono">7 DAYS</div>
            </div>
            <div className="flex-1 flex items-end justify-between gap-3">
              {[35, 65, 45, 85, 55, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 group relative">
                  <div
                    className="w-full bg-brand-deep/5 rounded-t-lg transition-all duration-500 group-hover:bg-brand-cyan"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-deep text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    £{h * 10}k
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Deals */}
          <div className="bg-white p-8 rounded-[2rem] border border-black/[0.03] shadow-sm flex flex-col">
            <div className="text-[11px] font-bold text-brand-deep/20 uppercase tracking-[0.2em] font-mono mb-8">Recent Listings</div>
            <div className="space-y-4">
              {[
                { title: '4-Bed HMO, Liverpool', roi: '14.2%', price: '£185k' },
                { title: 'BRRR Refurb, Manchester', roi: '22.1%', price: '£120k' },
                { title: 'Single Let, Sheffield', roi: '8.9%', price: '£145k' },
              ].map((deal, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-brand-paper/50 transition-colors border border-transparent hover:border-black/5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-paper rounded-xl flex items-center justify-center text-lg">🏠</div>
                    <div>
                      <div className="text-[13px] font-[800] tracking-tight">{deal.title}</div>
                      <div className="text-[11px] font-bold text-brand-cyan font-mono uppercase tracking-wider">{deal.roi} ROI</div>
                    </div>
                  </div>
                  <div className="text-[13px] font-[800]">{deal.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIMockup;