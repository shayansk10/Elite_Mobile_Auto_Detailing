import React, { useState } from 'react';
import { MapPin, CheckCircle2, Search, ArrowRight, Phone, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const ServiceAreaSection: React.FC = () => {
  const [queryLocation, setQueryLocation] = useState('');
  const [checkResult, setCheckResult] = useState<string | null>(null);

  const handleLocationCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryLocation.trim()) return;
    setCheckResult(`Great news! Our fully equipped mobile detailing unit services ${queryLocation.trim()} and surrounding areas. Request your appointment below!`);
  };

  return (
    <section id="service-area" className="py-20 sm:py-24 bg-[#030508] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            Nationwide Mobile Detailing
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            MOBILE AUTO DETAILING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ACROSS THE USA</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Professional mobile auto detailing designed to come to you. Elite Mobile Auto Detailing brings premium vehicle care, wherever you are across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Nationwide Mobile Detailing & ZIP Code Checker */}
          <div className="p-5 sm:p-8 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-cyan-400 shrink-0" />
                <span>NATIONWIDE MOBILE DETAILING</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Wherever you are in the USA, our mobile detailing service is built around your convenience. Check your ZIP code below to see whether mobile service is available in your area.
              </p>
            </div>

            {/* Location Checker Interactive Form */}
            <div className="pt-6 border-t border-slate-900 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                CHECK IF WE SERVICE YOUR CITY OR ZIP CODE:
              </div>
              <form onSubmit={handleLocationCheck} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="service-area-input"
                    type="text"
                    value={queryLocation}
                    onChange={(e) => setQueryLocation(e.target.value)}
                    placeholder="Enter your City or ZIP Code..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>CHECK SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {checkResult && (
                <div className="mt-3 p-3.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{checkResult}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Premium Value Proposition */}
          <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-cyan-500/30 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest block">
                CONVENIENCE RE-DEFINED
              </span>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                DETAILING THAT COMES TO YOU
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Your vehicle deserves professional care without the inconvenience of a traditional shop visit. We bring a convenient, detail-focused experience directly to your home, driveway, workplace, or approved location.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Convenient At-Home Service</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Professional Attention To Detail</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Flexible Mobile Appointments</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-800/80">
              <p className="text-xs sm:text-sm text-slate-400 italic">
                &ldquo;Your time matters. We make premium detailing easier to fit into your schedule.&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2">
                <div className="text-xs text-slate-400">
                  <span>Questions about coverage?</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS_INFO.telLink}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{BUSINESS_INFO.displayPhone}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.smsLink}
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>• Text Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
