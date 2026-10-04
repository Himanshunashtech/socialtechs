import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Process', path: '/process' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-xs">
      <div className="site-shell flex h-16 sm:h-20 items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link to="/" aria-label="Socialtechs home" className="shrink-0">
          <BrandLogo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link py-1 ${location.pathname === path ? 'active text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-600'}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Desktop Only: Get In Touch CTA - Strictly hidden on mobile screens */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center justify-center gap-2 min-h-[42px] px-5 py-2.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Get In Touch <ArrowRight className="size-3.5" />
          </Link>

          {/* Mobile Only: Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-slate-200 shadow-2xl p-5 z-[999] max-h-[80vh] overflow-y-auto">
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
              Menu Links
            </p>
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  location.pathname === path
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{label}</span>
                <ArrowRight className={`size-4 ${location.pathname === path ? 'text-blue-600' : 'text-slate-400'}`} />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2.5 mt-4">
            <a
              href="tel:+917428460083"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md text-sm active:scale-98 transition-transform"
            >
              <Phone className="size-4" /> Direct Call Kunal Bhati (+91 74284 60083)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
