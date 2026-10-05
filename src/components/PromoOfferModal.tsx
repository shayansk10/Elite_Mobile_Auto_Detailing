import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Sparkles,
  Percent,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Tag,
  Clock,
  Car
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { BookingFormData } from '../types';
import { sendInquiryForm } from '../services/emailjs';

const SESSION_STORAGE_KEY = 'elite_promo_offer_dismissed';

interface PromoOfferModalProps {
  // Optional controlled open state if needed
  forceOpen?: boolean;
}

export const PromoOfferModal: React.FC<PromoOfferModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'offer' | 'form' | 'success'>('offer');
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    vehicle_make: '',
    vehicle_model: '',
    service_needed: 'Exterior & Interior Both',
    service_address: '',
    zip_code: '',
    preferred_date: '',
    preferred_time: '',
    notes: '10% OFF Promo applied ($206.10 - Exterior & Interior Both)'
  });

  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Check session storage on mount and show automatically on first entry
  useEffect(() => {
    try {
      const isDismissed = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!isDismissed) {
        // Small delay so page renders smoothly first
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is disabled or restricted
    }
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors
    }
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClaimClick = () => {
    setView('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await sendInquiryForm(formRef.current);
      setSubmittedData({ ...formData });
      setView('success');
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      } catch {
        // Ignore
      }
    } catch (err: unknown) {
      console.error('EmailJS promotional offer submission error:', err);
      setErrorMessage(
        'Unable to submit your offer request right now. Please check your connection or contact us directly by phone or text at (832) 284-0769.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="promo-offer-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto popup-overlay-fade"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-offer-title"
    >
      <div
        className={`relative w-full ${
          view === 'form' ? 'max-w-2xl' : 'max-w-lg'
        } bg-gradient-to-b from-slate-900 via-[#070b13] to-[#04060a] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/60 p-5 sm:p-7 md:p-8 text-left my-auto max-h-[92vh] overflow-y-auto popup-card-scale transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close promotional offer"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* VIEW 1: PROMOTIONAL OFFER HIGHLIGHT */}
        {view === 'offer' && (
          <div className="space-y-5 pt-1">
            {/* Top Accent Badge */}
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>LIMITED-TIME OFFER</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                <span>Mobile Detailing</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight uppercase flex items-center gap-2 sm:gap-3 flex-wrap">
                <span>GET</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-md">
                  10% OFF
                </span>
              </div>
              <h3
                id="promo-offer-title"
                className="text-lg sm:text-xl font-heading font-bold text-slate-100 mt-1 flex items-center gap-2"
              >
                <span>Exterior & Interior Both Detail</span>
              </h3>
            </div>

            {/* Pricing Breakdown Card */}
            <div className="rounded-2xl bg-slate-950/90 border border-cyan-500/30 p-4 sm:p-5 shadow-inner space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 pb-2.5 border-b border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-slate-500" />
                  <span>Regular Price:</span>
                </span>
                <span className="line-through text-slate-400 font-semibold text-sm sm:text-base">
                  $229.00
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm text-cyan-400 pb-2.5 border-b border-slate-800/80">
                <span className="font-semibold flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-cyan-400" />
                  <span>10% OFF:</span>
                </span>
                <span className="font-bold text-sm sm:text-base text-cyan-400">
                  -$22.90
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-white font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider block">
                    Your Price:
                  </span>
                  <span className="text-[11px] text-cyan-300/80 font-medium">
                    Special promotional rate
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                    $206.10
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Line */}
            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed flex items-start gap-2.5">
              <Car className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="font-medium">
                “Book your complete interior + exterior detail and save $22.90.”
              </p>
            </div>

            {/* Features summary badge checklist */}
            <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Complete interior reset</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Hand wash & paint wax</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Windows inside & out</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Tires, wheels & jambs</span>
              </div>
            </div>

            {/* Clear CTA Button */}
            <div className="pt-2">
              <button
                id="claim-promo-offer-btn"
                onClick={handleClaimClick}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>CLAIM 10% OFF</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleClose}
                className="w-full mt-2.5 py-2 text-center text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                No thanks, continue browsing
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: BOOKING / QUOTATION FORM FOR PROMO OFFER */}
        {view === 'form' && (
          <div className="space-y-4 pt-1">
            {/* Promo Header Reminder */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                <Percent className="w-3 h-3 text-cyan-400" />
                <span>10% OFF PROMO APPLIED: $206.10 (SAVE $22.90)</span>
              </div>
              <h2
                id="promo-offer-title"
                className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight"
              >
                CLAIM YOUR 10% OFF DETAIL
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Provide your vehicle details and preferred appointment window to secure the discounted promotional rate of <strong className="text-cyan-400">$206.10</strong> for Exterior & Interior Both.
              </p>
            </div>

            {/* Error Notification Banner if EmailJS fails */}
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">{errorMessage}</p>
                  <p className="text-[11px] text-red-300">
                    Call:{' '}
                    <a href={BUSINESS_INFO.telLink} className="underline font-bold">
                      {BUSINESS_INFO.displayPhone}
                    </a>{' '}
                    • Text:{' '}
                    <a href={BUSINESS_INFO.smsLink} className="underline font-bold">
                      {BUSINESS_INFO.displayPhone}
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* The Form - EXACT fields & attributes as existing forms */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5">
              {/* Field 1, 2, 3: Full Name, Phone Number, Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="promo-name" className="block text-xs font-semibold text-slate-200 mb-1">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-name"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="promo-phone" className="block text-xs font-semibold text-slate-200 mb-1">
                    Contact Number <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-phone"
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (832) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="promo-email" className="block text-xs font-semibold text-slate-200 mb-1">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-email"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. client@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Field 4 & 5: Car Make & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="promo-vehicle-make" className="block text-xs font-semibold text-slate-200 mb-1">
                    Car Make <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-vehicle-make"
                    required
                    type="text"
                    name="vehicle_make"
                    value={formData.vehicle_make}
                    onChange={handleChange}
                    placeholder="e.g. Porsche, Audi, Ford"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="promo-vehicle-model" className="block text-xs font-semibold text-slate-200 mb-1">
                    Car Model <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-vehicle-model"
                    required
                    type="text"
                    name="vehicle_model"
                    value={formData.vehicle_model}
                    onChange={handleChange}
                    placeholder="e.g. 911 GT3, Q7, F-150"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Field 6: Service Needed (Automatically set to Exterior & Interior Both) */}
              <div>
                <label htmlFor="promo-service-needed" className="block text-xs font-semibold text-slate-200 mb-1">
                  Service Needed <span className="text-cyan-400">* (10% Discount Applied)</span>
                </label>
                <select
                  id="promo-service-needed"
                  required
                  name="service_needed"
                  value={formData.service_needed}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-sm text-cyan-300 font-semibold focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
                >
                  <option value="Interior">Interior</option>
                  <option value="Exterior">Exterior</option>
                  <option value="Exterior & Interior Both">Exterior & Interior Both</option>
                </select>
              </div>

              {/* Field 7 & 8: Service Address & Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label htmlFor="promo-service-address" className="block text-xs font-semibold text-slate-200 mb-1">
                    Service Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-service-address"
                    required
                    type="text"
                    name="service_address"
                    value={formData.service_address}
                    onChange={handleChange}
                    placeholder="e.g. 123 Main St, Driveway or Office"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="promo-zip-code" className="block text-xs font-semibold text-slate-200 mb-1">
                    Zip Code <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-zip-code"
                    required
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleChange}
                    placeholder="e.g. 77001"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Field 9 & 10: Preferred Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="promo-preferred-date" className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Date <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-preferred-date"
                    required
                    type="date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label htmlFor="promo-preferred-time" className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Time <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="promo-preferred-time"
                    required
                    type="time"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="promo-notes" className="block text-xs font-semibold text-slate-200 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="promo-notes"
                  rows={2}
                  name="notes"
                  value={formData.notes || ''}
                  onChange={handleChange}
                  placeholder="e.g. Water source available, pet hair, specific stains or requests..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>SUBMITTING 10% OFF OFFER...</span>
                    </div>
                  ) : (
                    <>
                      <span>CONFIRM & CLAIM 10% OFF ($206.10)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* VIEW 3: SUCCESS CONFIRMATION */}
        {view === 'success' && (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-400/50 mx-auto flex items-center justify-center text-cyan-300 shadow-xl shadow-cyan-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
              <Percent className="w-3 h-3 text-cyan-400" />
              <span>10% OFF DISCOUNT RESERVED</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              OFFER RESERVED SUCCESSFULLY!
            </h3>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2 max-w-md mx-auto text-left">
              <p>
                Thank you, <strong className="text-white">{submittedData?.name || 'Customer'}</strong>! Your 10% OFF promotional detail for <strong className="text-cyan-400">Exterior & Interior Both ($206.10)</strong> has been sent to our detailing team.
              </p>
              <p className="text-slate-400 text-xs">
                A confirmation has been sent to <span className="text-white font-medium">{submittedData?.email}</span>. We will review your vehicle details ({submittedData?.vehicle_make} {submittedData?.vehicle_model}) and call/text you at <strong className="text-cyan-400">{submittedData?.phone}</strong> shortly to confirm your scheduled slot.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
