import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onBookDetail: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDetail, onViewServices }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030508]"
    >
      {/* Background radial blue ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Small Brand Pill / Trust Marker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-white font-semibold">ELITE MOBILE AUTO DETAILING</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">We Come To You</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-heading font-black tracking-tight text-white leading-[1.08] sm:leading-[1.05]"
            >
              PREMIUM AUTO DETAILING.
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                WHEREVER YOU PARK.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {BUSINESS_INFO.subheadline}
            </p>

            {/* Value/Trust Line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Mobile Service</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Professional Products</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Showroom-Level Attention</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                id="hero-primary-cta"
                onClick={onBookDetail}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-base tracking-wider uppercase shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>BOOK YOUR DETAIL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onViewServices}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-heading font-bold text-base tracking-wider uppercase border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>VIEW SERVICES</span>
              </button>
            </div>

            {/* Quick Micro Value Points */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-800/80 text-left">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>On-Site</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-bold mt-1">Driveway or Office</div>
                <div className="text-[11px] text-slate-400">Zero travel needed</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ceramic</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-bold mt-1">Quartz Defense</div>
                <div className="text-[11px] text-slate-400">Deep hydrophobic gloss</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Correction</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-bold mt-1">Swirl-Free Paint</div>
                <div className="text-[11px] text-slate-400">Optical mirror clarity</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Vehicle & Brand Visual with Logo badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Electric blue glow container */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-slate-900 to-black p-2 shadow-2xl shadow-cyan-950/50 group">
                
                {/* Image showcase */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                  <img
                    id="hero-car-image"
                    src="/assets/hero_car_detailing_1790092891302.jpg"
                    alt="Luxury Audi sports car with showroom mirror ceramic detail by Elite Mobile Auto Detailing"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* Corner Accent badge with official logo */}
                  <div className="absolute top-3 left-3 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-cyan-500/40 shadow-lg">
                    <img
                      src="/elite-logo.jpg"
                      alt="Elite Emblem"
                      className="w-6 h-6 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-heading font-bold text-white tracking-wider">
                      SHOWROOM FINISH
                    </span>
                  </div>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-slate-800">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Precision Paint Correction & Ceramic Seal</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[10px]">100% Mobile</span>
                  </div>
                </div>

                {/* Subtle bottom glow reflection line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-1 opacity-70" />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-5 left-1 sm:-bottom-6 sm:left-4 z-20 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#090e17]/95 border border-cyan-500/40 backdrop-blur-lg shadow-xl shadow-black/80 flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-0.5rem)] sm:max-w-none">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white tracking-wide truncate">ELITE CRAFTSMANSHIP</div>
                  <div className="text-[10px] sm:text-[11px] text-cyan-400 truncate">Trained • Insured • Passionate</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
