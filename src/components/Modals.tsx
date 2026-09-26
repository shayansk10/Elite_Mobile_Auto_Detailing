import React from 'react';
import { X, CheckCircle2, Clock, Sparkles, Shield, Calendar, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookThisService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookThisService,
}) => {
  if (!service) return null;

  return (
    <div
      id="service-detail-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 to-[#070b12] border border-cyan-500/40 rounded-2xl p-5 sm:p-8 shadow-2xl text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30">
            {service.category}
          </span>
          {service.popular && (
            <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full">
              Most Requested
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
          {service.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-cyan-300/90 font-medium mt-1 mb-4">
          {service.tagline}
        </p>

        {/* Pricing & Duration Bar */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 py-3 px-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300">Duration: <strong className="text-white">{service.duration}</strong></span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-slate-800" />
          <div>
            <span className="text-slate-300">Investment: <strong className="text-cyan-400 font-bold">{service.startingPrice}</strong></span>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          <p>{service.description}</p>
        </div>

        {/* In-Depth Checklist of Procedures Included */}
        <div className="mb-6">
          <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>What's Included in This Service:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-950/40 border border-slate-850">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Service Note */}
        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2.5 mb-6">
          <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Performed 100% on-site at your home, garage, or office with professional-grade detailing equipment.</span>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookThisService(service.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface TextModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const TextModal: React.FC<TextModalProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-left my-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
          {title}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {children}
        </div>

        <div className="pt-6 mt-6 border-t border-slate-900 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
