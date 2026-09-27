import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ChevronRight,
  MessageSquare,
  Instagram,
  Facebook
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenTermsConditions?: () => void;
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenPrivacyPolicy,
  onOpenTermsConditions,
  onOpenPrivacyModal,
  onOpenTermsModal
}) => {
  const currentYear = new Date().getFullYear();

  const handlePrivacyClick = () => {
    if (onOpenPrivacyPolicy) {
      onOpenPrivacyPolicy();
    } else if (onOpenPrivacyModal) {
      onOpenPrivacyModal();
    }
  };

  const handleTermsClick = () => {
    if (onOpenTermsConditions) {
      onOpenTermsConditions();
    } else if (onOpenTermsModal) {
      onOpenTermsModal();
    }
  };

  return (
    <footer id="site-footer" className="bg-[#020306] border-t border-cyan-500/20 pt-16 sm:pt-20 pb-28 lg:pb-12 text-slate-400 relative overflow-hidden w-full max-w-full">
      
      {/* Top Footer Banner: Big Final Conversion Prompt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 w-full">
        <ScrollReveal variant="fade-up" className="w-full">
          <div className="p-5 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-[#081220] to-slate-950 border border-cyan-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden w-full">
            
            <div className="space-y-2 text-center md:text-left relative z-10">
              <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest block">
                EXPERIENCE THE SHINE
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white">
                Ready for Showroom Perfection at Your Doorstep?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Book your mobile detail today. We bring our own high-end gear and specialized craftsmanship to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK YOUR DETAIL</span>
              </button>
              <a
                href={BUSINESS_INFO.smsLink}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 font-heading font-bold text-xs uppercase tracking-wider border border-slate-750 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>TEXT US</span>
              </a>
            </div>

            {/* Ambient blue background highlight */}
            <div className="absolute right-0 top-0 bottom-0 w-96 bg-cyan-500/10 blur-3xl pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand Info */}
          <ScrollReveal variant="fade-up" delay={60} className="lg:col-span-2 space-y-5">
            <div className="flex flex-col select-none">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-heading text-2xl font-black tracking-tight text-white">
                  ELITE
                </span>
                <span className="text-cyan-400 font-heading text-base font-extrabold tracking-wider uppercase">
                  MOBILE
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-[0.24em] text-slate-300 uppercase leading-tight mt-0.5">
                AUTO DETAILING
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline} Professional mobile auto detailing focused on quality, convenience, and a showroom-level finish wherever you are.
            </p>

            {/* Direct Contact Phone & Text Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-white hover:text-cyan-400 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{BUSINESS_INFO.displayPhone}</span>
              </a>
              <a
                href={BUSINESS_INFO.smsLink}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>Text Us</span>
              </a>
            </div>

            {/* Social media links placeholders */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/elite.mobileautodetailing?stkn=MWVpcms0bWk2aGI5bA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Bxy1ZHCby/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="mailto:elitemobileautodetailing8@gmail.com"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Quick Links */}
          <ScrollReveal variant="fade-up" delay={120} className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'Why Elite', href: '#why-elite' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Before & After', href: '#before-after' },
                { name: 'Customer Reviews', href: '#reviews' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Column 3: Featured Services */}
          <ScrollReveal variant="fade-up" delay={180} className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base tracking-wider uppercase">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Interior', value: 'Interior Detailing' },
                { name: 'Exterior', value: 'Exterior Detailing' },
                { name: 'Custom', value: 'Custom Detail' }
              ].map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => onOpenBooking(service.value)}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-left text-xs cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Column 4: Contact & Coverage */}
          <ScrollReveal variant="fade-up" delay={240} className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base tracking-wider uppercase">
              Coverage & Contact
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Primary Address</span>
                  <span className="text-[11px] text-slate-400 leading-snug">
                    1134 Old Water Dr<br />Houston, TX 77001
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={BUSINESS_INFO.telLink} className="hover:text-cyan-400 font-semibold text-white">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={BUSINESS_INFO.smsLink} className="hover:text-cyan-400 font-medium text-slate-300">
                  Text: {BUSINESS_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-cyan-400 text-slate-300 break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <ScrollReveal variant="fade-in" delay={100} className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved. Professional Mobile Detailing.
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
            <a
              href="#privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                handlePrivacyClick();
              }}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600 select-none">|</span>
            <a
              href="#terms-conditions"
              onClick={(e) => {
                e.preventDefault();
                handleTermsClick();
              }}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </a>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
};
