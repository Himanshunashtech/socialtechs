import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="site-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <BrandLogo className="h-11 w-[200px]" />
        
        <p className="text-xs text-slate-500">
          &copy; 2026 Socialtechs Digital Marketing. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:kunalbhati596@gmail.com"
            aria-label="Email Socialtechs"
            className="social-link"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://socialtechs.in"
            target="_blank"
            rel="noreferrer"
            aria-label="Socialtechs Website"
            className="social-link"
          >
            <Globe className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
