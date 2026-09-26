import React from 'react';
import {
  Sparkles,
  Droplets,
  Sliders,
  ArrowRight,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
  onOpenServiceModal?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  // Card 1 Checklist: Interior Detailing
  const interiorChecklist = [
    'Vacuum all carpets and seats',
    'Wipe down all interior surfaces',
    'Dress interior surfaces',
    'Leather conditioner',
    'Shampoo all stains',
    'Pet hair removal',
    'Clean interior windows',
  ];

  // Card 2 Checklist: Exterior Detailing
  const exteriorChecklist = [
    'Pressure washer rinse',
    'Foam soap hand wash',
    'Buffer wax',
    'Tire degrease',
    'Dress wheels, tires and rims',
    'Clean all door jambs and trunk sealants',
    'Dry microfiber cloth',
  ];

  return (
    <section id="services" className="py-24 bg-[#05080e] relative border-t border-slate-900">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Precision Detailing Services
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            EXCEPTIONAL CARE FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EVERY INCH</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional mobile detailing delivered directly to your home or office. Choose our complete interior reset, our exterior shine refresh, or build a custom detail around your vehicle's exact needs.
          </p>
        </div>

        {/* Exactly 3 Service Cards Grid: 3 columns on desktop, equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* CARD 1: INTERIOR DETAILING */}
          <div
            id="service-card-interior"
            className="group relative rounded-2xl bg-gradient-to-b from-[#0a0f18] to-[#04070c] border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            {/* Top edge glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

            <div className="flex-1">
              {/* Category & Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-cyan-950/50 text-cyan-400 border border-cyan-500/30">
                  INTERIOR
                </span>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-2xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors">
                Interior Detailing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-6">
                A complete interior reset focused on restoring a clean, fresh, and comfortable cabin.
              </p>

              {/* Exact Checklist */}
              <div className="border-t border-slate-800/80 pt-5 pb-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider block mb-3">
                  Included In This Detail:
                </span>
                <ul className="space-y-2.5">
                  {interiorChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: Action Button */}
            <div className="pt-6">
              <button
                id="quote-btn-interior"
                onClick={() => onSelectServiceForBooking('Interior Detailing')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-[0.98]"
              >
                <span>GET QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 2: EXTERIOR DETAILING */}
          <div
            id="service-card-exterior"
            className="group relative rounded-2xl bg-gradient-to-b from-[#0a0f18] to-[#04070c] border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            {/* Top edge glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

            <div className="flex-1">
              {/* Category & Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                  <Droplets className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-cyan-950/50 text-cyan-400 border border-cyan-500/30">
                  EXTERIOR
                </span>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-2xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors">
                Exterior Detailing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-6">
                A complete exterior refresh designed to clean, protect, and bring back the shine of your vehicle.
              </p>

              {/* Exact Checklist */}
              <div className="border-t border-slate-800/80 pt-5 pb-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider block mb-3">
                  Included In This Detail:
                </span>
                <ul className="space-y-2.5">
                  {exteriorChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: Action Button */}
            <div className="pt-6">
              <button
                id="quote-btn-exterior"
                onClick={() => onSelectServiceForBooking('Exterior Detailing')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-[0.98]"
              >
                <span>GET QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 3: CUSTOM DETAILING */}
          <div
            id="service-card-custom"
            className="group relative rounded-2xl bg-gradient-to-b from-[#0a0f18] to-[#04070c] border border-cyan-500/30 hover:border-cyan-400/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50"
          >
            {/* Top edge glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

            <div className="flex-1">
              {/* Category & Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                  <Sliders className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-cyan-900/40 text-cyan-300 border border-cyan-400/40">
                  CUSTOM
                </span>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-2xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors">
                Custom Detailing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-6">
                Need something specific? Tell us exactly what your vehicle needs and we'll build a custom detailing service around your request.
              </p>

              {/* Customer-Focused Message Box */}
              <div className="border-t border-slate-800/80 pt-5 pb-6 space-y-4">
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                  <div className="flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        "Tell us what you'd like cleaned, detailed, restored, or refreshed."
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed space-y-2 pt-1">
                  <p>
                    Whether you need a specialized combination, spot stain treatment, multiple vehicles, or a customized maintenance schedule, we're ready to accommodate.
                  </p>
                  <p className="text-slate-400">
                    Click below to open our estimate form and use the <span className="text-cyan-300 font-medium">Additional Notes</span> field to explain your exact goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Action Button */}
            <div className="pt-6">
              <button
                id="quote-btn-custom"
                onClick={() => onSelectServiceForBooking('Custom Detail')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-[0.98]"
              >
                <span>REQUEST CUSTOM DETAIL</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
