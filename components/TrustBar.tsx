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
        <div className="py-20 bg-brand-paper border-b border-black/[0.03] reveal reveal-delay-3">
            <div className="max-w-[1200px] mx-auto px-6">
                <p className="text-center text-[11px] font-[800] text-brand-deep/30 uppercase tracking-[0.25em] font-mono mb-12">
                    Backing Professional Deal Flow
                </p>
                <div className="flex flex-wrap justify-between items-center gap-10 opacity-30 invert-[0.1] grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="text-2xl font-[800] tracking-tighter">Landbay</span>
                    <span className="text-2xl font-[800] italic tracking-tight">LendInvest</span>
                    <span className="text-2xl font-[900] tracking-widest">MFS</span>
                    <span className="text-2xl font-[800] tracking-tight">ALDERMORE</span>
                    <span className="text-2xl font-[800] uppercase tracking-tighter">Paragon</span>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
