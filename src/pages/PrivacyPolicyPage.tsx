import React, { useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  FileText,
  UserCheck,
  Server,
  Cookie,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigateHome,
  onOpenBooking
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | Elite Mobile Auto Detailing';
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
          <span className="text-cyan-400 font-semibold">Privacy Policy</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mb-12 text-center sm:text-left relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Client Privacy & Data Protection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          At <strong className="text-white">{BUSINESS_INFO.name}</strong>, we respect your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy details the types of information we collect, how it is used to deliver exceptional mobile auto detailing services, how it is protected, and your rights as our client.
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400 flex-wrap">
          <span>Effective Date: September 2026</span>
          <span className="hidden sm:inline">•</span>
          <span>Applies to all online booking requests, estimates, and inquiries</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        
        {/* Section 1: Information We Collect */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              1
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Information We Collect
            </h2>
          </div>

          <p className="mb-4">
            When you request an estimate, schedule an appointment, or contact {BUSINESS_INFO.name} through our website forms or communications, we collect only the necessary information required to facilitate our mobile detailing services. This includes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs block uppercase tracking-wide">Full Name</strong>
                <span className="text-xs text-slate-400">To identify our customer and personalize service communications.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs block uppercase tracking-wide">Phone Number</strong>
                <span className="text-xs text-slate-400">For phone calls, SMS appointment confirmations, and on-the-way updates.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs block uppercase tracking-wide">Email Address</strong>
                <span className="text-xs text-slate-400">To transmit detailed service estimates, booking receipts, and reminders.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs block uppercase tracking-wide">Service Address / Location</strong>
                <span className="text-xs text-slate-400">The physical residential driveway or workplace where our mobile rig will arrive.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs block uppercase tracking-wide">ZIP Code</strong>
                <span className="text-xs text-slate-400">To verify route coverage, technician dispatch radius, and scheduling feasibility.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs block uppercase tracking-wide">Vehicle Make & Model</strong>
                <span className="text-xs text-slate-400">To calculate accurate time requirements, vehicle dimensions, and product specifications.</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs block uppercase tracking-wide">Special Requests / Notes</strong>
                <span className="text-xs text-slate-400">
                  Any specific concerns you share regarding paint condition, pet hair, interior stains, gate codes, or specialized areas requiring custom attention.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              2
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              How We Use Your Information
            </h2>
          </div>

          <p className="mb-4">
            The information collected from you is used strictly to conduct our legitimate auto detailing business operations:
          </p>

          <ul className="space-y-2.5 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Fulfilling Service Appointments:</strong> Routing our mobile detailing team and equipment directly to your confirmed address.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Direct Customer Communications:</strong> Confirming appointments, sending ETA notifications when en route, and answering inquiries.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Service Quality Assurance:</strong> Ensuring the detailing package performed matches your vehicle's make, model, and requested specifications.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Customer Support & Follow-Up:</strong> Addressing post-service questions and providing care recommendations for maintained finishes.</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Responding to Estimates and Booking Requests */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              3
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Responding to Estimates and Booking Requests
            </h2>
          </div>

          <p className="mb-3">
            When you complete our contact or booking form, your submitted details are utilized directly to prepare an accurate, transparent quote and evaluate scheduling availability.
          </p>
          <p>
            Our team reviews your vehicle make, model, selected service (Interior, Exterior, or Custom), and location to formulate realistic timeframes and confirm that our mobile setup can accommodate your vehicle at your chosen address.
          </p>
        </section>

        {/* Section 4: We Do Not Sell Your Information */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 sm:p-8 transition-colors relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-heading font-bold text-sm shrink-0">
              4
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              We Never Sell Your Personal Information
            </h2>
          </div>

          <p className="text-slate-200">
            <strong className="text-white">Elite Mobile Auto Detailing does not sell, rent, lease, or monetize your personal information to third parties, data brokers, advertising networks, or marketing lists under any circumstances.</strong> Your contact details and address remain strictly between you and our service team for the sole purpose of providing mobile automotive care.
          </p>
        </section>

        {/* Section 5: How Information is Protected */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              5
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              How Information is Protected
            </h2>
          </div>

          <p className="mb-3">
            We implement reasonable and customary administrative, technical, and operational safeguards to protect your personal details against unauthorized access, loss, or disclosure:
          </p>

          <ul className="space-y-2 pl-1 mb-3">
            <li className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Encrypted Data Transmission:</strong> Website traffic and form transmissions are encrypted using standard Secure Sockets Layer / Transport Layer Security (SSL/TLS) protocols.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <UserCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Restricted Access:</strong> Client information is accessible solely by authorized personnel who require it to schedule, coordinate, and perform detailing services.</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Website Cookies & Analytics */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              6
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Website Cookies & Analytics
            </h2>
          </div>

          <p className="mb-3">
            Our website may use standard functional cookies or lightweight analytics tools to ensure core site functionality, remember user preferences (such as form field persistence during a single session), and monitor overall site performance and loading speeds.
          </p>
          <p>
            These technologies do not collect invasive personal tracking data. You have the option to configure your browser to reject cookies, though some website features may not operate at peak convenience without them.
          </p>
        </section>

        {/* Section 7: Third-Party Services */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              7
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Third-Party Services
            </h2>
          </div>

          <p className="mb-3">
            To provide a modern online experience and communicate reliably with clients, we may engage trusted third-party service providers:
          </p>

          <ul className="space-y-2.5 pl-1 mb-3">
            <li className="flex items-start gap-2.5">
              <Server className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Form Delivery & Email Relay Services (e.g., EmailJS):</strong> To securely relay booking submissions and contact inquiries directly to our administrative dispatch inbox.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Mapping & Navigation Tools:</strong> To plot efficient travel routes to your service address.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Telecommunication Carriers:</strong> For standard SMS and voice routing when you call or text our business line.</span>
            </li>
          </ul>

          <p className="text-xs text-slate-400">
            These third-party providers are authorized to process information only as necessary to provide these essential support services on our behalf.
          </p>
        </section>

        {/* Section 8: User Rights and Choices */}
        <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              8
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              User Rights & Choices
            </h2>
          </div>

          <p className="mb-3">
            You maintain full control over the personal information you entrust to us:
          </p>

          <ul className="space-y-2.5 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Access & Correction:</strong> You may request to review or correct any contact information or vehicle details we have on file for you.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Data Removal:</strong> You may ask us to delete your contact information from our active records once your service and billing have been completed.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Communication Preferences:</strong> You may opt out of future non-transactional communications at any time by contacting us directly.</span>
            </li>
          </ul>
        </section>

        {/* Section 9: Contact Regarding Privacy */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 font-heading font-bold text-sm shrink-0">
              9
            </div>
            <h2 className="text-xl font-heading font-bold text-white tracking-wide">
              Contact Us Regarding Privacy
            </h2>
          </div>

          <p className="mb-6">
            If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled by Elite Mobile Auto Detailing, please contact our team:
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
