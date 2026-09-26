import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: (prefillPackage?: string) => void;
  onNavigateHome?: (sectionHref?: string) => void;
  currentPage?: 'home' | 'privacy' | 'terms';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onNavigateHome,
  currentPage = 'home'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Requested navbar links: Home, Services, Why Elite, Before & After, Reviews, FAQ, Contact
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Why Elite', href: '#why-elite' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home' && onNavigateHome) {
      onNavigateHome(href);
      return;
    }

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030508]/95 backdrop-blur-md border-b border-cyan-500/20 py-2.5 shadow-2xl shadow-cyan-950/20'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Text-only Brand Branding (NO logo image as requested) */}
            <a
              id="brand-logo-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#');
              }}
              className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 select-none"
            >
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  ELITE
                </span>
                <span className="text-cyan-400 font-heading text-sm sm:text-base font-extrabold tracking-wider uppercase">
                  MOBILE
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.26em] text-slate-300 uppercase leading-tight mt-0.5">
                AUTO DETAILING
              </span>
            </a>

            {/* Desktop Navigation Links (Properly aligned with removed items) */}
            <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200 rounded-md hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                id="header-phone-cta"
                href={BUSINESS_INFO.telLink}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg border border-slate-800 hover:border-cyan-500/40 bg-slate-900/60 transition-all duration-200"
                title="Call Elite Mobile Auto Detailing"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>{BUSINESS_INFO.displayPhone}</span>
              </a>

              <button
                id="header-book-now-button"
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-bold text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  BOOK NOW
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" />
              </button>
            </div>

            {/* Mobile Actions: Hamburger Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-cyan-400 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-backdrop"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-menu-content"
            className="fixed top-16 right-0 bottom-0 w-[85vw] max-w-xs bg-[#06090e] border-l border-cyan-500/20 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Mobile Drawer Text Brand Header (No logo image) */}
              <div className="pb-5 border-b border-slate-800">
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="font-heading font-black text-xl text-white">ELITE</span>
                  <span className="font-heading font-bold text-sm text-cyan-400">MOBILE</span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium tracking-[0.2em] uppercase mt-1">
                  Auto Detailing
                </div>
              </div>

              {/* Navigation Links */}
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    id={`mobile-nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Bottom CTAs */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-bold text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                BOOK YOUR DETAIL
              </button>

              <div>
                <a
                  id="mobile-drawer-text-btn"
                  href="sms:+18322840769"
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 flex items-center justify-center gap-1.5 text-xs font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  TEXT US
                </a>
              </div>

              <div className="text-[11px] text-center text-slate-500">
                {BUSINESS_INFO.displayPhone} • {BUSINESS_INFO.trustLine}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
