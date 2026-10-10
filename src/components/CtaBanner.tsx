import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

interface CtaBannerProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onStartProject,
  onExploreServices
}) => {
  return (
    <section className="py-20 sm:py-24 bg-[#080B12] relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#111827] to-[#0E1422] border border-slate-700/60 shadow-2xl relative overflow-hidden">
          
          {/* Subtle accent border top */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />

          <span className="text-xs font-semibold tracking-wider uppercase text-sky-400 block mb-3">
            Prime Web Works
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight max-w-2xl mx-auto">
            Your Next Website Starts Here.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1AAB8] max-w-xl mx-auto leading-relaxed">
            Let's create a professional digital experience that reflects your brand and supports your business goals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] rounded-xl transition-all shadow-lg shadow-sky-500/15 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Explore Our Services</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4 font-mono">
            <span>Fast Turnaround</span>
            <span>·</span>
            <span>No Template Bloat</span>
            <span>·</span>
            <span>Direct Lead Engineer Access</span>
          </div>

        </div>
      </div>
    </section>
  );
};
