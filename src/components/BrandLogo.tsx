import React from 'react';

interface BrandLogoProps {
  className?: string;
  inverse?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-12 w-auto", inverse = false }) => {
  return (
    <div className={`flex items-center gap-3 font-display select-none ${className}`}>
      <img
        src="/favicon.svg"
        alt="Socialtechs Logo"
        className="w-10 h-10 object-contain rounded-xl shadow-xs transition-transform duration-300 hover:scale-105"
      />
      <div className="flex flex-col">
        <span className={`text-xl sm:text-2xl font-black tracking-tight leading-none ${
          inverse ? "text-white" : "text-slate-900"
        }`}>
          SOCIAL<span className={inverse ? "text-blue-400" : "text-blue-600"}>TECHS</span>
        </span>
        <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${
          inverse ? "text-slate-300" : "text-slate-500"
        }`}>
          Digital Growth &bull; Web &bull; Apps
        </span>
      </div>
    </div>
  );
};
export default BrandLogo;
