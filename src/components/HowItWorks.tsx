import React from 'react';
import { CalendarCheck, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface HowItWorksProps {
  onStartBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CalendarCheck className="w-6 h-6 text-cyan-400" />;
      case 1:
        return <MapPin className="w-6 h-6 text-cyan-400" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#030508] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Simple 3-Step Process
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            HOW MOBILE DETAILING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">WORKS</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Getting your vehicle detailed has never been easier. No shop drop-offs, no wasted afternoons, no hassle.
          </p>
        </ScrollReveal>

        {/* 3 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-blue-500/20 -translate-y-8 pointer-events-none" />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <ScrollReveal
              key={step.step}
              variant="fade-up"
              delay={index * 100}
              className="flex"
            >
              <div
                id={`process-step-${step.step}`}
                className="relative rounded-2xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all group flex-1 w-full"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                      {getStepIcon(index)}
                    </div>

                    <span className="font-heading font-black text-3xl sm:text-4xl text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-wide mb-2">
                    {step.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-cyan-400 font-semibold mb-3">
                    {step.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step indicator footer */}
                <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-cyan-400">Step {index + 1} of 3</span>
                  <span className="text-slate-500 text-[11px]">Effortless Experience</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Prompt */}
        <ScrollReveal variant="fade-up" delay={140} className="mt-14 text-center">
          <button
            id="how-it-works-book-btn"
            onClick={onStartBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/25 transition-all active:scale-95 group"
          >
            <span>SCHEDULE YOUR APPOINTMENT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
};

