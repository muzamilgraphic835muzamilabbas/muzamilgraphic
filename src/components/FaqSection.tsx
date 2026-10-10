import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, AGENCY_INFO } from '../data/agencyData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0E1422] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Clear Answers to Common Questions.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            Everything you need to know about our scope, timeline, platforms, and collaborative process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#111827] border border-slate-800/90 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-5 py-4.5 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-slate-100 hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-sky-400 border-sky-500/40' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#A1AAB8] leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 max-w-xl mx-auto">
          <p className="text-xs text-slate-300">
            Have a question not addressed here?
          </p>
          <a
            href={`https://wa.me/${AGENCY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Prime%20Web%20Works!%20I%20have%20a%20question%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-[#60A5FA] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Ask our team directly on WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
