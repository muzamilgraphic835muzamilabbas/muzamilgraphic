import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink, CreditCard } from 'lucide-react';
import { PageView } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  onOpenContact: (preselectedService?: string) => void;
  onOpenPayment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  onOpenContact,
  onOpenPayment
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: PageView; href: string }[] = [
    { label: 'Home', view: 'home', href: '#home' },
    { label: 'Services', view: 'services', href: '#services' },
    { label: 'Our Work', view: 'portfolio', href: '#portfolio' },
    { label: 'About', view: 'about', href: '#about' },
    { label: 'Process', view: 'process', href: '#process' },
    { label: 'Contact', view: 'contact', href: '#contact' },
  ];

  const handleNavClick = (view: PageView, href: string) => {
    setIsMobileMenuOpen(false);
    setCurrentView(view);
    
    // Smooth scroll if viewing on single page
    if (view === 'home' || view === 'services' || view === 'portfolio' || view === 'about' || view === 'process' || view === 'contact') {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B12]/92 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('home', '#home')}
            className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-md transition-opacity"
            aria-label="Prime Web Works Home"
          >
            {/* PW Wave Monogram */}
            <div className="relative h-9.5 px-2 rounded-xl bg-[#0E1422] border border-slate-700/60 flex items-center justify-center shadow-md shadow-sky-950/30 group-hover:border-[#38BDF8]/60 transition-colors">
              <Logo size={28} />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-wider text-slate-100 group-hover:text-white transition-colors">
                PRIME WEB WORKS
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium -mt-1">
                Digital Agency
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.view, link.href)}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-md ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {onOpenPayment && (
              <button
                onClick={onOpenPayment}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                title="Pay Project Deposit or Milestone Invoice via Razorpay"
              >
                <CreditCard className="w-3.5 h-3.5 text-sky-400" />
                <span>Pay Invoice</span>
              </button>
            )}

            <button
              onClick={() => onOpenContact()}
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] rounded-lg transition-all shadow-md shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] focus-visible:ring-[#38BDF8]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#0E1422] border border-slate-800 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.view, link.href)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === link.view
                    ? 'bg-slate-800 text-[#38BDF8] font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              {onOpenPayment && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPayment();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg"
                >
                  <CreditCard className="w-3.5 h-3.5 text-sky-400" />
                  <span>Pay Invoice / Deposit (Razorpay)</span>
                </button>
              )}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-lg shadow-sm"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
