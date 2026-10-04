import React from 'react';

interface BrandLogoProps {
  className?: string;
  inverse?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", inverse = false }) => {
  return (
    <div className={`flex items-center gap-3.5 font-display select-none ${className}`}>
      <img
        src="/logo.webp"
        alt="Socialtechs Logo"
        className="h-12 w-auto sm:h-14 max-w-[68px] sm:max-w-[80px] object-contain transition-transform duration-300 hover:scale-105 shrink-0"
      />
      <div className="flex flex-col justify-center">
        <span className={`text-2xl sm:text-3xl font-black tracking-tight leading-none ${
          inverse ? "text-white" : "text-slate-900"
        }`}>
          SOCIAL<span className={inverse ? "text-blue-400" : "text-blue-600"}>TECHS</span>
        </span>
        <span className={`text-[11px] sm:text-xs font-bold tracking-widest uppercase mt-1 ${
          inverse ? "text-slate-300" : "text-slate-500"
        }`}>
          Digital Growth &bull; Web &bull; Apps
        </span>
      </div>
    </div>
  );
};
export default BrandLogo;
