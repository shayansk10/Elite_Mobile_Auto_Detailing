import React, { useEffect } from 'react';
import {
  FileText,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldAlert,
  Car,
  Clock,
  DollarSign,
  AlertTriangle,
  Info
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface TermsConditionsPageProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({
  onNavigateHome,
  onOpenBooking
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms & Conditions | Elite Mobile Auto Detailing';
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full overflow-hidden">
      {/* Top Breadcrumb & Return Button */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4 border-b border-slate-800/80 pb-4">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 hover:border-cyan-400/40 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <button
            onClick={onNavigateHome}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-300">Legal</span>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">Terms & Conditions</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mb-12 text-center sm:text-left relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>Service Agreement & Guidelines</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight mb-4">
          Terms & Conditions
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Welcome to <strong className="text-white">{BUSINESS_INFO.name}</strong>. Please review these Terms & Conditions carefully. By accessing our website, requesting an estimate, or scheduling mobile auto detailing services with us, you acknowledge and agree to the following terms and guidelines.
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400 flex-wrap">
          <span>Effective Date: September 2026</span>
          <span className="hidden sm:inline">•</span>
          <span>Applies to all clients, website visitors, and detailing appointments</span>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

        {/* 1. Use of the Website */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              1
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Use of the Website
            </h2>
          </div>
          <p className="mb-3">
            This website is provided for informational and service-scheduling purposes. By using this website, you agree to use it only for lawful purposes and in accordance with these Terms.
          </p>
          <p>
            You agree not to disrupt, compromise the security of, or attempt unauthorized access to any portion of the site, server infrastructure, or associated communication channels.
          </p>
        </section>

        {/* 2. Service Requests and Estimates */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              2
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Service Requests and Estimates
            </h2>
          </div>
          <p className="mb-3">
            Inquiries and estimate requests submitted through our online forms represent preliminary communications. Any estimate provided online, by email, phone, or text message is based on the information provided regarding your vehicle's make, model, selected service category, and stated condition.
          </p>
          <p>
            Estimates are subject to verification upon our technician's physical inspection of the vehicle prior to beginning work.
          </p>
        </section>

        {/* 3. Booking Requests */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              3
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Booking Requests
            </h2>
          </div>
          <p className="mb-3">
            Submitting a booking form requests a preferred date, time window, and service package. An appointment is officially scheduled once confirmed by {BUSINESS_INFO.name} through direct phone, text, or email communication.
          </p>
          <p>
            We strive to accommodate all requested time slots; however, appointment availability is subject to scheduling logistics and technician routing.
          </p>
        </section>

        {/* 4. Customer-Provided Information */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              4
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Customer-Provided Information
            </h2>
          </div>
          <p className="mb-3">
            You agree that all information you submit through our website—including your full name, phone number, email address, physical service address, ZIP code, vehicle details, and special instructions—is truthful, accurate, and current.
          </p>
          <p>
            Accurate location details and vehicle specifications are essential to ensure proper equipment selection and prompt arrival.
          </p>
        </section>

        {/* 5. Service Availability */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              5
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Service Availability
            </h2>
          </div>
          <p className="mb-3">
            As a mobile service, our operating radius covers designated geographic areas. Availability is subject to technician scheduling, travel distance, and weather conditions.
          </p>
          <p>
            If a requested service address falls outside our regular operational zone or if an unforeseen logistical limitation arises, we will communicate promptly to explore available scheduling options.
          </p>
        </section>

        {/* 6. Service Pricing / Quotes */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              6
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Service Pricing & Quotes
            </h2>
          </div>
          <p className="mb-3">
            Pricing displayed or quoted corresponds to standard vehicle sizes and typical maintenance conditions for Interior, Exterior, or Exterior & Interior Both detailing services.
          </p>
          <p>
            If a vehicle exhibits extraordinary conditions—such as excessive pet hair, heavy mold or biological matter, severe paint contamination, or extensive interior staining—any necessary price adjustment will be clearly communicated and agreed upon before work proceeds.
          </p>
        </section>

        {/* 7. Vehicle Access and Customer Responsibilities */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              7
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Vehicle Access and Customer Responsibilities
            </h2>
          </div>
          <p className="mb-3">
            To ensure the best possible results and a safe working environment:
          </p>
          <ul className="space-y-2.5 pl-1 mb-3">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Safe Working Area:</strong> The customer is responsible for providing safe, authorized access to the vehicle, such as a residential driveway, personal garage, or approved private parking space.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Water & Power Access:</strong> As noted in our service guidelines, customer-provided access to an exterior water source and standard electrical outlet allows for optimal efficiency during detailing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Removal of Personal Valuables:</strong> Please remove all personal belongings, valuables, sensitive documents, and loose items from the vehicle interior and trunk prior to our technician's arrival.</span>
            </li>
          </ul>
        </section>

        {/* 8. Service Results and Limitations */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              8
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Service Results and Limitations
            </h2>
          </div>
          <p className="mb-3">
            We employ professional-grade equipment, premium chemistry, and specialized craftsmanship to achieve the highest possible standard of cleanliness and gloss.
          </p>
          <p className="mb-3">
            However, results depend on the pre-existing condition, age, and wear of the vehicle's surfaces. Detailing cannot repair pre-existing clear coat failure, deep rock chips down to primer or metal, severe UV oxidation beneath clear coat, or permanent upholstery tears and chemical burns.
          </p>
          <p>
            A joint walkaround inspection is conducted upon completion so you can review the finished vehicle with our technician.
          </p>
        </section>

        {/* 9. Cancellations / Rescheduling */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              9
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Cancellations and Rescheduling
            </h2>
          </div>
          <p className="mb-3">
            We understand that schedules and weather change. If you need to reschedule or cancel your appointment, we kindly ask for as much advance notice as possible so we may adjust our route.
          </p>
          <p>
            In the event of severe weather—such as heavy rain, thunderstorms, extreme winds, or freezing temperatures—outdoor detailing appointments will be promptly rescheduled to the next mutually agreeable date.
          </p>
        </section>

        {/* 10. Payments */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              10
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Payments
            </h2>
          </div>
          <p className="mb-3">
            Payment is due upon completion of the detailing service following your review of the work. Accepted payment methods will be communicated during scheduling or upon arrival.
          </p>
          <p>
            Any applicable sales taxes or agreed-upon service additions will be detailed transparently.
          </p>
        </section>

        {/* 11. Website Content */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              11
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Website Content
            </h2>
          </div>
          <p className="mb-3">
            The content, images, service descriptions, and informational guides published on this website are provided in good faith for general information.
          </p>
          <p>
            While we strive for complete accuracy, website descriptions and photos represent examples of craftsmanship and do not constitute a specific warranty for every vehicle condition.
          </p>
        </section>

        {/* 12. Intellectual Property */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              12
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Intellectual Property
            </h2>
          </div>
          <p className="mb-3">
            All text, branding, graphics, logos, layouts, and code on this website are the property of {BUSINESS_INFO.name} and are protected by applicable intellectual property and copyright principles.
          </p>
          <p>
            Reproduction, distribution, or commercial exploitation of any site content without prior written permission is prohibited.
          </p>
        </section>

        {/* 13. Limitation of Liability */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              13
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Limitation of Liability
            </h2>
          </div>
          <p className="mb-3">
            To the maximum extent permitted by law, {BUSINESS_INFO.name} shall not be liable for any indirect, incidental, or consequential damages resulting from website use or service delays caused by circumstances beyond reasonable control (such as severe weather, traffic collisions, or utility disruptions).
          </p>
          <p>
            Our total liability in connection with any service provided shall not exceed the amount actually paid for that specific detailing appointment.
          </p>
        </section>

        {/* 14. Changes to Terms */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              14
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Changes to Terms
            </h2>
          </div>
          <p className="mb-3">
            We reserve the right to modify or update these Terms & Conditions at any time. Any changes will be posted on this page with an updated effective date.
          </p>
          <p>
            Continued use of our website or scheduling of services following posted changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        {/* 15. Contact Information */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              15
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Contact Information
            </h2>
          </div>

          <p className="mb-6">
            If you have questions regarding these Terms & Conditions or wish to discuss our services, please reach out to our team:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <Phone className="w-4 h-4 text-cyan-400 mb-2" />
              <div className="text-xs text-slate-400 uppercase font-mono mb-1">Phone / Text</div>
              <a
                href={BUSINESS_INFO.telLink}
                className="text-white hover:text-cyan-400 font-semibold text-sm transition-colors"
              >
                {BUSINESS_INFO.displayPhone}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <Mail className="w-4 h-4 text-cyan-400 mb-2" />
              <div className="text-xs text-slate-400 uppercase font-mono mb-1">Email</div>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-white hover:text-cyan-400 font-medium text-xs break-all transition-colors"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <MapPin className="w-4 h-4 text-cyan-400 mb-2" />
              <div className="text-xs text-slate-400 uppercase font-mono mb-1">Primary Address</div>
              <div className="text-white text-xs leading-snug">
                1134 Old Water Dr<br />Houston, TX 77001
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom Actions */}
      <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onNavigateHome}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home Page</span>
        </button>

        <button
          onClick={onOpenBooking}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Your Detail</span>
        </button>
      </div>
    </div>
  );
};
