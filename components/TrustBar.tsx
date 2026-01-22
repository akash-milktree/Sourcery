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
        <div className="py-16 bg-brand-paper border-y border-black/[0.03] reveal reveal-delay-3">
            <div className="max-w-[1200px] mx-auto px-6">
                <p className="text-center text-[10px] font-bold text-brand-deep/30 uppercase tracking-widest font-mono mb-10">
                    Trusted by the industry's best
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 group">
                    <div className="font-extrabold text-xl text-brand-deep tracking-tighter hover:opacity-100 transition-opacity">LANDBAY</div>
                    <div className="font-extrabold text-xl text-brand-deep italic tracking-tight hover:opacity-100 transition-opacity">LENDINVEST</div>
                    <div className="font-extrabold text-xl text-brand-deep tracking-tight hover:opacity-100 transition-opacity">MFS</div>
                    <div className="font-extrabold text-xl text-brand-deep hover:opacity-100 transition-opacity">ALDERMORE</div>
                    <div className="font-extrabold text-xl text-brand-deep tracking-tighter uppercase hover:opacity-100 transition-opacity">Paragon</div>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
