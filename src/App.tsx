/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, StoredInquiry } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { IndustriesSection } from './components/IndustriesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { InquiryViewerModal } from './components/InquiryViewerModal';
import { PaymentModal } from './components/PaymentModal';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [preselectedService, setPreselectedService] = useState<string>('Custom Website');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isInquiryLogOpen, setIsInquiryLogOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [storedInquiries, setStoredInquiries] = useState<StoredInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('pww_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save inquiries to localStorage
  const handleInquirySubmitted = (newInquiry: StoredInquiry) => {
    const updated = [newInquiry, ...storedInquiries];
    setStoredInquiries(updated);
    try {
      localStorage.setItem('pww_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to persist inquiry locally', e);
    }
  };

  const handleClearInquiries = () => {
    setStoredInquiries([]);
    try {
      localStorage.removeItem('pww_inquiries');
    } catch (e) {
      console.warn('Failed to clear inquiries', e);
    }
  };

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (view: PageView, href: string) => {
    setCurrentView(view);
    if (view === 'privacy') {
      setLegalModalType('privacy');
      return;
    }
    if (view === 'terms') {
      setLegalModalType('terms');
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
      {/* Sticky Top Header */}
      <Navbar
        currentView={currentView}
        setCurrentView={(view) => {
          setCurrentView(view);
          if (view === 'privacy') setLegalModalType('privacy');
          else if (view === 'terms') setLegalModalType('terms');
        }}
        onOpenContact={(srv) => scrollToContact(srv)}
        onOpenPayment={() => setIsPaymentModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartProject={() => scrollToContact()}
          onExploreWork={() => scrollToPortfolio()}
        />

        {/* 4-Item Trust & Value Strip */}
        <TrustStrip />

        {/* 8-Service Catalog Section */}
        <ServicesSection
          onRequestQuote={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* Why Choose Prime Web Works (Split Layout) */}
        <WhyChooseSection />

        {/* Selected Portfolio Work (Integrity Checked / Concept Projects) */}
        <PortfolioSection
          onDiscussProject={(title) => scrollToContact(title ? `Custom Web: ${title}` : undefined)}
        />

        {/* 4-Step Process Section */}
        <ProcessSection />

        {/* 10-Industry Target Section */}
        <IndustriesSection />

        {/* Frequently Asked Questions (Accessible Accordion) */}
        <FaqSection />

        {/* Conversion-Focused Functional Contact Form */}
        <ContactSection
          initialService={preselectedService}
          onInquirySubmitted={handleInquirySubmitted}
          inquiryCount={storedInquiries.length}
          onOpenInquiryLog={() => setIsInquiryLogOpen(true)}
          onOpenPayment={() => setIsPaymentModalOpen(true)}
        />

        {/* Final CTA Banner */}
        <CtaBanner
          onStartProject={() => scrollToContact()}
          onExploreServices={() => scrollToServices()}
        />
      </main>

      {/* Polish Agency Footer */}
      <Footer
        onNavigate={handleNavClick}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenContact={(srv) => scrollToContact(srv)}
      />

      {/* Legal Modal (Privacy Policy & Terms of Service) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Stored Inquiries Inspection Drawer */}
      <InquiryViewerModal
        isOpen={isInquiryLogOpen}
        onClose={() => setIsInquiryLogOpen(false)}
        inquiries={storedInquiries}
        onClearInquiries={handleClearInquiries}
      />

      {/* Razorpay Online Payment & Milestone Deposit Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        prefillService={preselectedService}
      />
    </div>
  );
}
