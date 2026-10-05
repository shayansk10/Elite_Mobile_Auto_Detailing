/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyEliteSection } from './components/WhyEliteSection';
import { HowItWorks } from './components/HowItWorks';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingTextButton } from './components/FloatingTextButton';
import { ServiceDetailModal } from './components/Modals';
import { BookingModal } from './components/BookingModal';
import { PromoOfferModal } from './components/PromoOfferModal';
import { ZipAvailabilityModal } from './components/ZipAvailabilityModal';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { ServiceItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefillService, setBookingPrefillService] = useState<string | undefined>(undefined);
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);
  const [confirmedZipCode, setConfirmedZipCode] = useState<string>('');

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash.includes('privacy') || path === '/privacy-policy') {
        setCurrentPage('privacy');
      } else if (hash.includes('terms') || path === '/terms-conditions') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (page: 'home' | 'privacy' | 'terms', sectionHref?: string) => {
    setCurrentPage(page);
    if (page === 'privacy') {
      window.history.pushState({}, '', '#privacy-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = 'Privacy Policy | Elite Mobile Auto Detailing';
    } else if (page === 'terms') {
      window.history.pushState({}, '', '#terms-conditions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = 'Terms & Conditions | Elite Mobile Auto Detailing';
    } else {
      window.history.pushState({}, '', '#');
      document.title = 'Elite Mobile Auto Detailing | Showroom Finish, Wherever You Park';
      if (sectionHref && sectionHref !== '#') {
        setTimeout(() => {
          const el = document.querySelector(sectionHref);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const openBookingModal = (serviceOrPackageName?: string) => {
    setBookingPrefillService(serviceOrPackageName);
    setIsBookingModalOpen(true);
  };

  const handleZipAvailabilityConfirmed = (zip: string) => {
    setConfirmedZipCode(zip);
    if (currentPage !== 'home') {
      navigateTo('home', '#contact');
      return;
    }
    // Smoothly scroll to the existing Contact / Free Estimate form
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const scrollToServices = () => {
    if (currentPage !== 'home') {
      navigateTo('home', '#services');
      return;
    }
    const servicesEl = document.querySelector('#services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030508] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black w-full max-w-full overflow-x-hidden">
      
      {/* Top Floating Navbar */}
      <Navbar
        onOpenBooking={openBookingModal}
        onNavigateHome={(sectionHref) => navigateTo('home', sectionHref)}
        currentPage={currentPage}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onBookDetail={() => openBookingModal()}
              onViewServices={scrollToServices}
            />

            {/* Services Section */}
            <ServicesSection
              onSelectServiceForBooking={(serviceName) => openBookingModal(serviceName)}
              onOpenServiceModal={(service) => setSelectedServiceModal(service)}
            />

            {/* Why Elite / Standard Section */}
            <WhyEliteSection
              onOpenBooking={() => openBookingModal()}
              onCheckAvailability={() => setIsZipModalOpen(true)}
            />

            {/* How It Works (3-Step Timeline) */}
            <HowItWorks onStartBooking={() => openBookingModal()} />

            {/* High-Impact Before & After Section (Interactive Slider) */}
            <BeforeAfterSection onOpenBooking={(finishTitle) => openBookingModal(finishTitle)} />

            {/* Client Reviews Section */}
            <ReviewsSection onOpenBooking={() => openBookingModal()} />

            {/* Service Area & Local SEO Section with Interactive ZIP/City Checker */}
            <ServiceAreaSection />

            {/* About Elite Mobile Auto Detailing */}
            <AboutSection />

            {/* Booking / Contact Form Section */}
            <BookingSection
              prefillServiceOrPackage={bookingPrefillService}
              prefillZipCode={confirmedZipCode}
              onClearPrefill={() => setBookingPrefillService(undefined)}
            />

            {/* SEO-Friendly FAQ Accordion */}
            <FaqSection />
          </>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage
            onNavigateHome={() => navigateTo('home')}
            onOpenBooking={() => openBookingModal()}
          />
        )}

        {currentPage === 'terms' && (
          <TermsConditionsPage
            onNavigateHome={() => navigateTo('home')}
            onOpenBooking={() => openBookingModal()}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onOpenBooking={(serviceName) => openBookingModal(serviceName)}
        onOpenPrivacyPolicy={() => navigateTo('privacy')}
        onOpenTermsConditions={() => navigateTo('terms')}
      />

      {/* Mobile Bottom Quick Action Bar */}
      <MobileStickyBar onOpenBooking={() => openBookingModal()} />

      {/* Global Floating TEXT US Button */}
      <FloatingTextButton />

      {/* Premium Booking & Estimate Popup Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        prefillService={bookingPrefillService}
      />

      {/* ZIP Code Availability Modal for Fully Mobile Rig */}
      <ZipAvailabilityModal
        isOpen={isZipModalOpen}
        onClose={() => setIsZipModalOpen(false)}
        onAvailabilityConfirmed={handleZipAvailabilityConfirmed}
      />

      {/* Service Detail Inspection Modal */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onBookThisService={(serviceName) => {
          setSelectedServiceModal(null);
          openBookingModal(serviceName);
        }}
      />

      {/* Promotional Limited-Time 10% OFF Offer Popup */}
      <PromoOfferModal />

    </div>
  );
}
