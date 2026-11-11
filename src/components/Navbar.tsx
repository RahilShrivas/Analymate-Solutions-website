import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Our Team', path: '/team' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white border-b border-slate-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <Link
              to="/"
              className="whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087C78] rounded"
              aria-label="Analymate Solutions Home"
            >
              <BrandLogo size="md" showTagline={true} />
            </Link>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                      isActive
                        ? 'text-[#102B49] font-semibold'
                        : 'text-slate-600 hover:text-[#102B49]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#087C78] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Direct Contact */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-[#102B49] transition-colors py-1.5 px-2.5 rounded hover:bg-slate-50"
              >
                <Phone className="w-3.5 h-3.5 text-[#087C78]" />
                <span className="tabular-nums">{COMPANY_INFO.phones[0].display}</span>
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087C78]"
              >
                <span>Let&apos;s Talk Business</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#102B49] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#087C78]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 bg-slate-900/40 backdrop-blur-xs lg:hidden animate-in fade-in duration-200">
          <div className="bg-white border-b border-slate-200 shadow-xl px-5 py-6 space-y-4 max-h-[calc(100vh-65px)] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#102B49]/5 text-[#102B49] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#102B49]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#102B49] hover:bg-[#087C78] rounded-lg shadow-sm transition-colors"
              >
                <span>Let&apos;s Talk Business</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="px-3 py-2 text-xs text-slate-500 space-y-1">
                <p className="font-medium text-slate-700">Office Location:</p>
                <p>Currency Tower, VIP Road Corner, Raipur</p>
                <p className="pt-1">
                  Direct Line:{' '}
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].raw}`}
                    className="font-semibold text-[#087C78] tabular-nums"
                  >
                    {COMPANY_INFO.phones[0].display}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
