import React from 'react';
import { Mail, MessageCircle, ExternalLink, ArrowUpRight, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { PageView } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (view: PageView, href: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenContact: (serviceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenContact
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080B12] border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 px-2 rounded-xl bg-[#0E1422] border border-slate-700/80 flex items-center justify-center p-0.5 shadow-sm">
                <Logo size={24} />
              </div>
              <span className="font-heading font-bold text-base text-white tracking-wider">
                PRIME WEB WORKS
              </span>
            </div>

            <p className="text-xs text-[#A1AAB8] leading-relaxed max-w-sm">
              Modern websites. Thoughtful design. Digital experiences built around your business goals.
            </p>

            <div className="pt-1 text-xs text-slate-500">
              <span>Primary market: Pakistan</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>International delivery</span>
            </div>

            {/* Social profiles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter profile"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home', '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', '#about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', '#services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio', '#portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process', '#process')}
                  className="hover:text-white transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact', '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services Column (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenContact('Custom Website Development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('WordPress Development')}
                  className="hover:text-white transition-colors text-left"
                >
                  WordPress Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('Shopify Development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Shopify Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('Headless Development')}
                  className="hover:text-white transition-colors text-left"
                >
                  Headless Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('Website Redesign')}
                  className="hover:text-white transition-colors text-left"
                >
                  Website Redesign
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Inquiries & Contact
            </h4>
            <div className="space-y-2 text-xs text-[#A1AAB8]">
              <a
                href={`tel:${AGENCY_INFO.phoneNumber}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call: {AGENCY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {AGENCY_INFO.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{AGENCY_INFO.email}</span>
              </a>
              <p className="pt-2 text-[11px] text-slate-500">
                Operating domain: <strong className="text-slate-400">{AGENCY_INFO.domain}</strong>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Prime Web Works ({AGENCY_INFO.domain}). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
