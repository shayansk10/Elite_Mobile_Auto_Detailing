import React from 'react';
import { Sparkles, Shield, HeartHandshake, Eye, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#05080e] relative border-t border-slate-900 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Official Logo Showcase & Heritage Card */}
          <ScrollReveal variant="fade-scale" delay={60} className="lg:col-span-5 relative text-center">
            <div className="relative inline-block max-w-xs sm:max-w-sm mx-auto">
              
              {/* Outer Glowing Circle Border */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-sky-400 shadow-2xl shadow-cyan-500/30">
                <div className="p-2 sm:p-3 rounded-full bg-black">
                  <img
                    id="about-official-logo"
                    src="/elite-logo.jpg"
                    alt="Official Elite Mobile Auto Detailing Brand Emblem"
                    className="w-48 h-48 sm:w-80 sm:h-80 max-w-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Decorative Tag Below */}
              <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-950 border border-cyan-500/40 text-cyan-300 text-[10px] sm:text-xs font-mono max-w-full">
                <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">Showroom Finish Wherever You Park</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Authentic Philosophy & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            <ScrollReveal variant="fade-up" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                About Elite Mobile Auto Detailing
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
                A PASSION FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PRECISION AUTOMOTIVE CARE</span>
              </h2>

              {/* Core Philosophy Quote Block */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border-l-4 border-cyan-400 shadow-lg">
                <blockquote className="text-lg sm:text-xl font-heading font-bold text-white italic leading-relaxed">
                  “We don't just clean vehicles. We restore the feeling of driving a vehicle you're proud of.”
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Story & Standards */}
            <ScrollReveal variant="fade-up" delay={80} className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                At {BUSINESS_INFO.name}, we believe your car is more than mere transportation. It is an investment, a statement, and a space where you spend significant hours of your life. Standard automated car washes use abrasive brushes and harsh recycled detergents that leave fine spiderweb swirls, etch clear coat, and leave interiors superficially wiped.
              </p>
              <p>
                Our mobile detailing service was founded on a commitment to uncompromising craftsmanship and extreme convenience. By pairing commercial-grade equipment—such as digital paint thickness gauges, high-temperature steam extraction, and dual-action machine polishers—with premium pH-balanced chemicals, we bring authentic showroom restoration directly to your location.
              </p>
            </ScrollReveal>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <ScrollReveal variant="fade-up" delay={100} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <Eye className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-white font-heading font-bold text-sm">Obsessive Detail</h4>
                <p className="text-[11px] text-slate-400 mt-1">Every vent, seam, and emblem inspected with precision lights.</p>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={160} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <Shield className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-white font-heading font-bold text-sm">Paint Safety</h4>
                <p className="text-[11px] text-slate-400 mt-1">Two-bucket grit guard methods and non-abrasive microfiber care.</p>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={220} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <HeartHandshake className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-white font-heading font-bold text-sm">Total Convenience</h4>
                <p className="text-[11px] text-slate-400 mt-1">Professional detailing brought directly to your location, so you can enjoy a showroom-quality finish without the shop visit.</p>
              </ScrollReveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
