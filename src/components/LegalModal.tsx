import React from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div 
        className="relative w-full max-w-3xl bg-[#0E1422] border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <div className="bg-[#111827] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-sky-400" />
            <h2 id="legal-modal-title" className="font-heading text-lg font-bold text-white">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[72vh] overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-5 leading-relaxed">
          
          {/* Note about customization */}
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-2.5 text-amber-200/90 text-xs">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
            <span>
              <strong>Editorial Notice:</strong> This document contains standard web agency starter provisions for Prime Web Works (PrimeWebWorks.com). Specific corporate registration and local statutory particulars should be reviewed by legal counsel before full enterprise deployment.
            </span>
          </div>

          {isPrivacy ? (
            <>
              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  1. Information We Collect
                </h3>
                <p>
                  Prime Web Works collects information you provide directly through our project inquiry forms, including your name, email address, phone/WhatsApp number, business name, and project requirements. We collect this solely to communicate regarding project feasibility, estimates, and delivery.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  2. Use of Information
                </h3>
                <p>
                  We use your details strictly to:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-1 text-slate-400">
                  <li>Review and respond to your web development inquiries</li>
                  <li>Draft tailored project proposals and timeline estimates</li>
                  <li>Coordinate development deliverables and project milestones</li>
                  <li>Prevent automated spam submissions and abuse</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  3. Non-Disclosure & Confidentiality
                </h3>
                <p>
                  We treat all submitted project briefs, business plans, technical requirements, and intellectual concepts with strict confidentiality. We do not sell, rent, or trade your contact data to third-party marketing services.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  4. Data Security & Retention
                </h3>
                <p>
                  We apply industry-standard digital security practices to protect client correspondence. Inquiry records are maintained for as long as necessary to fulfill communication or project administration duties.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  5. Contact Us Regarding Your Privacy
                </h3>
                <p>
                  If you wish to review, update, or request the deletion of any inquiry data you have submitted, please email us directly at <strong>muzamilgraphic@gmail.com</strong>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  1. Project Scoping & Proposals
                </h3>
                <p>
                  Every engagement with Prime Web Works begins with an agreed Scope of Work (SOW). Any features, platforms, or integrations requested outside the agreed specification will be quoted as separate milestone phases.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  2. Milestone Delivery & Client Feedback
                </h3>
                <p>
                  Projects proceed according to sequential phases: Discovery, Design, Development, and Launch. Timely client feedback is essential to maintaining scheduled delivery timelines.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  3. Intellectual Property Rights
                </h3>
                <p>
                  Upon settlement of final project invoices, full ownership of custom code, layout designs, and final graphics created specifically for the project is transferred to the client. Open-source libraries and third-party platforms retain their respective standard licenses.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  4. Third-Party Services & Hosting
                </h3>
                <p>
                  Third-party software, domain names, third-party hosting, paid plugins, and gateway charges are governed by their respective vendor terms and are the client's direct responsibility unless explicitly included in an active maintenance agreement.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-base mb-1.5">
                  5. Inquiries & Invoicing
                </h3>
                <p>
                  For questions regarding engagement contracts, quotes, or statements of work, contact <strong>muzamilgraphic@gmail.com</strong>.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-slate-800 text-slate-500 text-xs">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} · Prime Web Works
          </div>
        </div>

        <div className="bg-[#111827] px-6 py-3.5 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-200 hover:bg-white rounded-lg transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
