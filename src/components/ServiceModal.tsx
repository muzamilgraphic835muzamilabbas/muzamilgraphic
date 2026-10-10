import React from 'react';
import { X, CheckCircle2, ArrowRight, Clock, Layers, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-2xl bg-[#0E1422] border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Header */}
        <div className="bg-[#111827] px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
              Service Scope & Details
            </span>
            <h2 id="service-modal-title" className="font-heading text-xl font-bold text-white mt-0.5">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Full description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="bg-[#111827] p-4.5 rounded-xl border border-slate-800/80">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
              <span>Standard Deliverables</span>
            </h3>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for & Turnaround */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Ideal For
              </span>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {service.idealFor}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Estimated Turnaround</span>
              </span>
              <p className="text-xs text-slate-200 font-medium mt-1">
                {service.turnaroundTime}
              </p>
              <span className="text-[10px] text-slate-500 block mt-1">
                *Subject to confirmed scope and assets
              </span>
            </div>
          </div>

          {/* Tech Stack Tags (Zero-Pill Discipline: unboxed clean text with separators) */}
          <div className="pt-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              {service.techStack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="text-slate-300 font-medium">{tech}</span>
                  {i < service.techStack.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#111827] px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] rounded-lg transition-all shadow-md active:scale-95"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
