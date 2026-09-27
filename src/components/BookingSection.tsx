import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Car,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';
import { BookingFormData } from '../types';
import { sendInquiryForm } from '../services/emailjs';
import { ScrollReveal } from './ScrollReveal';

interface BookingSectionProps {
  prefillServiceOrPackage?: string;
  prefillZipCode?: string;
  onClearPrefill?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefillServiceOrPackage,
  prefillZipCode,
  onClearPrefill
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    vehicle_make: '',
    vehicle_model: '',
    service_needed: prefillServiceOrPackage ? (
      prefillServiceOrPackage.toLowerCase().includes('exterior') ? 'Exterior' :
      (prefillServiceOrPackage.toLowerCase().includes('custom') || prefillServiceOrPackage.toLowerCase().includes('other') || prefillServiceOrPackage.toLowerCase().includes('paint') || prefillServiceOrPackage.toLowerCase().includes('ceramic')) ? 'Custom' :
      'Interior'
    ) : 'Interior',
    service_address: '',
    zip_code: prefillZipCode || '',
    preferred_date: '',
    preferred_time: '',
    notes: ''
  });

  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefillServiceOrPackage) {
      const lower = prefillServiceOrPackage.toLowerCase();
      if (lower.includes('exterior')) {
        setFormData((prev) => ({ ...prev, service_needed: 'Exterior' }));
      } else if (lower.includes('custom') || lower.includes('other') || lower.includes('paint') || lower.includes('ceramic')) {
        setFormData((prev) => ({ ...prev, service_needed: 'Custom' }));
      } else {
        setFormData((prev) => ({ ...prev, service_needed: 'Interior' }));
      }
    }
  }, [prefillServiceOrPackage]);

  useEffect(() => {
    if (prefillZipCode) {
      setFormData((prev) => ({
        ...prev,
        zip_code: prefillZipCode
      }));
    }
  }, [prefillZipCode]);

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
      // Reset form fields only upon successful transmission
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
      if (onClearPrefill) onClearPrefill();
    } catch (err: unknown) {
      console.error('EmailJS submission error:', err);
      setErrorMessage(
        'Unable to send your request at this moment. Please check your connection or contact us directly by phone or text at (832) 284-0769.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#030508] relative border-t border-slate-900 overflow-hidden w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none max-w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Mobile Scheduling & Quotes
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            BOOK YOUR DETAIL OR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">REQUEST A QUOTE</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We bring premium automotive care directly to your home driveway or workplace. Fill out the form below or text us directly for quick scheduling.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Contact & Service Guarantees */}
          <ScrollReveal variant="fade-up" delay={80} className="lg:col-span-4 space-y-6">
            
            {/* Quick Action Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#060c18] border border-cyan-500/30 shadow-xl space-y-5">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>Immediate Scheduling</span>
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer an instant response? Text us your vehicle photos or questions for immediate mobile booking.
              </p>

              <div className="space-y-3 pt-1">
                <a
                  href={BUSINESS_INFO.smsLink}
                  className="w-full py-3 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-98 transition-all"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="truncate">TEXT US: {BUSINESS_INFO.displayPhone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.telLink}
                  className="w-full py-3 px-3 sm:px-4 rounded-xl bg-slate-900 border border-slate-750 hover:border-cyan-500/40 text-slate-200 hover:text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">CALL DIRECT: {BUSINESS_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Service Capabilities */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                What to Expect
              </h4>
              
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Fully self-contained:</strong> Onboard spot-free water & quiet electrical power.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Zero driveway mess:</strong> Eco-friendly bio-degradable wash solutions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Joint walkaround:</strong> Thorough final inspection before sign-off.</span>
                </li>
              </ul>
            </div>

            {/* Direct Email Display */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="truncate">
                <span className="block text-[10px] text-slate-500 uppercase font-mono">Direct Inquiries</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-200 hover:text-cyan-400 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: The Premium Booking Form */}
          <ScrollReveal variant="fade-scale" delay={160} className="lg:col-span-8 w-full">
            <div className="p-4 sm:p-9 rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl relative w-full">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-cyan-950 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                    BOOKING REQUEST RECEIVED!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{submittedData?.name || 'Customer'}</strong>. Your inquiry has been sent directly to our team. A confirmation has also been dispatched to <strong className="text-cyan-400">{submittedData?.email}</strong>. We will review your vehicle specifications ({submittedData?.vehicle_make} {submittedData?.vehicle_model}) and call/text you at <strong className="text-cyan-400">{submittedData?.phone}</strong> shortly to confirm your slot.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-xs text-slate-400 text-left space-y-1">
                    <div><span className="text-slate-500">Service:</span> <span className="text-white font-medium">{submittedData?.service_needed}</span></div>
                    <div><span className="text-slate-500">Preferred Slot:</span> <span className="text-white font-medium">{submittedData?.preferred_date} at {submittedData?.preferred_time}</span></div>
                    <div><span className="text-slate-500">Location:</span> <span className="text-white font-medium">{submittedData?.service_address || 'To be confirmed'}{submittedData?.zip_code ? ` (ZIP: ${submittedData.zip_code})` : ''}</span></div>
                  </div>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-heading font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href={BUSINESS_INFO.smsLink}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-heading font-bold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Text Us to Confirm</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-slate-850 pb-4">
                    <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                      <Car className="w-5 h-5 text-cyan-400" />
                      <span>Schedule Your Mobile Appointment or Request a Quote</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Provide your vehicle specifications and location for an accurate, fast response.
                    </p>
                  </div>

                  {/* Error Notification Banner if EmailJS fails */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold">{errorMessage}</p>
                        <p className="text-[11px] text-red-300">
                          Direct phone: <a href={BUSINESS_INFO.telLink} className="underline font-bold">{BUSINESS_INFO.displayPhone}</a> • Direct text: <a href={BUSINESS_INFO.smsLink} className="underline font-bold">Text Us</a>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Section 1: Customer Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="booking-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-name"
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Miller"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. (832) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-email"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. client@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Section 2: Vehicle Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-vehicle-make" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Vehicle Make <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-vehicle-make"
                        required
                        type="text"
                        name="vehicle_make"
                        value={formData.vehicle_make}
                        onChange={handleChange}
                        placeholder="e.g. Porsche, Audi, Ford"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-vehicle-model" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Vehicle Model <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-vehicle-model"
                        required
                        type="text"
                        name="vehicle_model"
                        value={formData.vehicle_model}
                        onChange={handleChange}
                        placeholder="e.g. 911 GT3, Q7, F-150"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Section 3: Service Selection */}
                  <div>
                    <label htmlFor="booking-service-needed" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service Needed <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="booking-service-needed"
                      required
                      name="service_needed"
                      value={formData.service_needed}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <option value="Interior">Interior</option>
                      <option value="Exterior">Exterior</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>

                  {/* Section 4: Service Location & ZIP Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="booking-service-address" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Service Address / Location <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-service-address"
                        required
                        type="text"
                        name="service_address"
                        value={formData.service_address}
                        onChange={handleChange}
                        placeholder="e.g. 123 Main St, Neighborhood, or City"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-zip-code" className="block text-xs font-medium text-slate-300 mb-1.5">
                        ZIP Code <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-zip-code"
                        required
                        type="text"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleChange}
                        placeholder="e.g. 77001"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Section 5: Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-preferred-date" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Preferred Date <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-preferred-date"
                        required
                        type="date"
                        name="preferred_date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors [color-scheme:dark]"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-preferred-time" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Preferred Time <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="booking-preferred-time"
                        required
                        type="time"
                        name="preferred_time"
                        value={formData.preferred_time}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Section 6: Special Requests / Notes */}
                  <div>
                    <label htmlFor="booking-notes" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Special Requests / Notes
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      name="notes"
                      value={formData.notes || ''}
                      onChange={handleChange}
                      placeholder="e.g. Water spigot available, focus on leather seats, pet hair removal..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <button
                      id="submit-booking-quote-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-base tracking-wider uppercase shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>SENDING YOUR REQUEST...</span>
                        </div>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 text-white" />
                          <span>GET YOUR QUOTE</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2.5">
                      No spam. We only use your information to coordinate your vehicle appointment and provide accurate pricing.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
