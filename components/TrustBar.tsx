import React from 'react';

const logos = [
    { name: 'Landbay', src: 'https://placeholder.com/logo1' },
    { name: 'LendInvest', src: 'https://placeholder.com/logo2' },
    { name: 'MFS', src: 'https://placeholder.com/logo3' },
    { name: 'Aldermore', src: 'https://placeholder.com/logo4' },
    { name: 'Paragon', src: 'https://placeholder.com/logo5' },
];

const TrustBar: React.FC = () => {
    return (
        <div className="py-12 border-y border-slate-100 bg-slate-50/30">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                    Trusted by the industry's best
                </p>
                <div className="flex flex-wrap庆 justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Logo Placeholders with typography since we don't have actual SVG assets for all */}
                    <div className="font-bold text-2xl text-slate-900 tracking-tighter">LANDBAY</div>
                    <div className="font-black text-2xl text-slate-900 italic tracking-tight">LENDINVEST</div>
                    <div className="font-extrabold text-2xl text-slate-900 tracking-tight">MFS</div>
                    <div className="font-bold text-2xl text-slate-900">ALDERMORE</div>
                    <div className="font-black text-2xl text-slate-900 tracking-tighter uppercase">Paragon</div>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
