import React from 'react';
import {
  MapPin,
  Award,
  Crosshair,
  Shield,
  Layers,
  UserCheck,
  CheckCircle,
  Truck,
  Sparkles
} from 'lucide-react';
import { WHY_ELITE_POINTS } from '../data/content';

interface WhyEliteSectionProps {
  onOpenBooking?: () => void;
  onCheckAvailability?: () => void;
}

export const WhyEliteSection: React.FC<WhyEliteSectionProps> = ({
  onOpenBooking,
  onCheckAvailability
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-cyan-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-cyan-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-elite" className="py-20 sm:py-24 bg-[#05080e] relative border-t border-slate-900 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            The Elite Standard
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            WHY VEHICLE OWNERS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CHOOSE ELITE</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We are not an automated scratch-tunnel car wash. We are dedicated automotive preservation specialists equipped to treat your vehicle with surgical precision right in your driveway.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ELITE_POINTS.map((point) => (
            <div
              key={point.id}
              id={`why-card-${point.id}`}
              className="group p-5 sm:p-7 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:border-cyan-400 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-all">
                  {getIcon(point.icon)}
                </div>

                <div className="text-[11px] font-mono font-medium text-cyan-400 uppercase tracking-widest mb-1">
                  {point.subtitle}
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-900 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Showroom-grade execution</span>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Mobile Workshop Callout Banner */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#0a1120] to-slate-950 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Truck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-heading font-bold text-white">Fully Mobile Detailing Rig</div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We bring specialized pressure washers, spot-free filtration options, hot-water extractors, and dual-action polishers straight to you.
              </div>
            </div>
          </div>

          <button
            id="check-rig-availability-btn"
            onClick={() => {
              if (onCheckAvailability) {
                onCheckAvailability();
              } else if (onOpenBooking) {
                onOpenBooking();
              }
            }}
            className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-500/25 cursor-pointer active:scale-95"
          >
            Check Availability
          </button>
        </div>

      </div>
    </section>
  );
};
