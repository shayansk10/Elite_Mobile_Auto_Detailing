import React, { useState, useEffect, useRef } from 'react';
import { X, MessageSquare, Sparkles, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { BookingFormData } from '../types';
import { sendInquiryForm } from '../services/emailjs';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillService,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    vehicle_make: '',
    vehicle_model: '',
    service_needed: 'Interior',
    service_address: '',
    zip_code: '',
    preferred_date: '',
    preferred_time: '',
    notes: ''
  });
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync prefilled service when modal opens or service changes
  useEffect(() => {
    if (prefillService) {
      const lower = prefillService.toLowerCase();
      if (lower.includes('exterior')) {
        setFormData((prev) => ({ ...prev, service_needed: 'Exterior' }));
      } else if (lower.includes('custom') || lower.includes('other') || lower.includes('paint') || lower.includes('ceramic')) {
        setFormData((prev) => ({ ...prev, service_needed: 'Custom' }));
      } else {
        setFormData((prev) => ({ ...prev, service_needed: 'Interior' }));
      }
    }
  }, [prefillService, isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setIsSubmitted(true);
      // Reset form values upon successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        vehicle_make: '',
        vehicle_model: '',
        service_needed: 'Interior',
        service_address: '',
        zip_code: '',
        preferred_date: '',
        preferred_time: '',
        notes: ''
      });
    } catch (err: unknown) {
      console.error('EmailJS booking modal submission error:', err);
      setErrorMessage(
        'Unable to send your request at this moment. Please check your connection or contact us directly by phone or text at (832) 284-0769.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicle_make: '',
      vehicle_model: '',
      service_needed: 'Interior',
      service_address: '',
      zip_code: '',
      preferred_date: '',
      preferred_time: '',
      notes: ''
    });
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        id="booking-modal-container"
        className="relative w-full max-w-xl bg-gradient-to-b from-[#0a0f18] via-[#05080e] to-[#020408] border border-cyan-500/40 rounded-2xl p-4 sm:p-8 shadow-2xl shadow-cyan-950/50 text-left my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-slate-800 transition-all z-20 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Confirmation State */
          <div className="py-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-cyan-950/80 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/25">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-wide">
                THANK YOU!
              </h3>
              <p className="text-sm sm:text-base text-cyan-300/90 font-medium">
                Your estimate request has been received.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{submittedData?.name || 'Customer'}</strong>. Your inquiry has been sent to our team, and a confirmation email has been dispatched to <strong className="text-cyan-400">{submittedData?.email}</strong>. We'll review your vehicle details ({submittedData?.vehicle_make} {submittedData?.vehicle_model}) for {submittedData?.service_needed} on {submittedData?.preferred_date} at {submittedData?.preferred_time} and get back to you shortly at <strong className="text-cyan-400">{submittedData?.phone}</strong>.
              </p>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 border-t border-slate-800/80 max-w-md mx-auto">
              <span className="text-xs text-slate-400 block mb-3">
                Need immediate mobile scheduling or have questions?
              </span>
              <a
                href={BUSINESS_INFO.smsLink}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-750 text-white hover:border-cyan-400 hover:text-cyan-400 text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>Text Us: {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-heading font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Booking / Free Estimate Form */
          <div>
            {/* Modal Header */}
            <div className="pr-8 mb-5 border-b border-slate-850 pb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Mobile Auto Detailing</span>
              </div>
              <h2
                id="booking-modal-title"
                className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight leading-tight"
              >
                GET YOUR FREE ESTIMATE
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Tell us a little about your vehicle and the service you need. We'll get back to you with your estimate.
              </p>
            </div>

            {/* Error Notification Banner if EmailJS fails */}
            {errorMessage && (
              <div className="mb-4 p-3.5 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">{errorMessage}</p>
                  <p className="text-[11px] text-red-300">
                    Call: <a href={BUSINESS_INFO.telLink} className="underline font-bold">{BUSINESS_INFO.displayPhone}</a> • Text: <a href={BUSINESS_INFO.smsLink} className="underline font-bold">{BUSINESS_INFO.displayPhone}</a>
                  </p>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1, 2, 3: Full Name, Phone Number, Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-200 mb-1">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-name"
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
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-200 mb-1">
                    Phone Number <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-phone"
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
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-200 mb-1">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-email"
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

              {/* Field 4 & 5: Vehicle Make & Vehicle Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-vehicle-make" className="block text-xs font-semibold text-slate-200 mb-1">
                    Vehicle Make <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-vehicle-make"
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
                  <label htmlFor="modal-vehicle-model" className="block text-xs font-semibold text-slate-200 mb-1">
                    Vehicle Model <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-vehicle-model"
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

              {/* Field 6: Service Needed */}
              <div>
                <label htmlFor="modal-service-needed" className="block text-xs font-semibold text-slate-200 mb-1">
                  Service Needed <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="modal-service-needed"
                  required
                  name="service_needed"
                  value={formData.service_needed}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
                >
                  <option value="Interior">Interior</option>
                  <option value="Exterior">Exterior</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {/* Field 7 & 8: Service Address / Location & ZIP Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label htmlFor="modal-service-address" className="block text-xs font-semibold text-slate-200 mb-1">
                    Service Address / Location <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-service-address"
                    required
                    type="text"
                    name="service_address"
                    value={formData.service_address}
                    onChange={handleChange}
                    placeholder="e.g. 123 Main St, Neighborhood, or City"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="modal-zip-code" className="block text-xs font-semibold text-slate-200 mb-1">
                    ZIP Code <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-zip-code"
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

              {/* Field: Preferred Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-preferred-date" className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Date <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-preferred-date"
                    required
                    type="date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-preferred-time" className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Time <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="modal-preferred-time"
                    required
                    type="time"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Field: Special Requests / Notes (Textarea) */}
              <div>
                <label htmlFor="modal-notes" className="block text-xs font-semibold text-slate-200 mb-1">
                  Special Requests / Notes
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  name="notes"
                  value={formData.notes || ''}
                  onChange={handleChange}
                  placeholder="e.g. Water spigot available, focus on leather seats, pet hair removal..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Primary Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>PREPARING ESTIMATE...</span>
                    </div>
                  ) : (
                    <>
                      <span>GET YOUR FREE ESTIMATE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  100% Mobile Service • Prompt Estimates • Zero Hassle
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
