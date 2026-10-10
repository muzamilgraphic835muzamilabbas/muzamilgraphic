import React, { useState } from 'react';
import { Search, PenTool, Code, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

const stepIconMap: Record<number, React.ReactNode> = {
  1: <Search className="w-5 h-5 text-[#38BDF8]" />,
  2: <PenTool className="w-5 h-5 text-[#818CF8]" />,
  3: <Code className="w-5 h-5 text-[#C084FC]" />,
  4: <Rocket className="w-5 h-5 text-[#34D399]" />,
};

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#0E1422] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
              How We Work
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            A Clear Process From Idea to Launch.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            We follow a structured four-phase workflow to ensure predictable milestones, zero hidden surprises, and a website engineered to perform.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Stepper Buttons */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-[#111827] border-[#38BDF8]/60 shadow-lg shadow-sky-900/20'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700/80'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                    isActive ? 'bg-[#38BDF8] text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}>
                    0{step.step}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-slate-100 mb-1">
                  Step {step.step} — {step.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {step.subtitle}
                </p>

                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111827] border-b border-r border-[#38BDF8]/60 transform rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Card (Desktop) */}
        <div className="hidden lg:block p-8 rounded-2xl bg-[#111827] border border-slate-800 shadow-xl">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {stepIconMap[PROCESS_STEPS[activeStepIndex].step]}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold">
                    Phase 0{PROCESS_STEPS[activeStepIndex].step}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {PROCESS_STEPS[activeStepIndex].title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
                <span className="font-semibold text-slate-200 block mb-1">Phase Duration:</span>
                <span>{PROCESS_STEPS[activeStepIndex].duration}</span>
              </div>
            </div>

            <div className="col-span-7 grid grid-cols-2 gap-6 pl-4 border-l border-slate-800">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Core Activities
                </span>
                <ul className="space-y-2.5">
                  {PROCESS_STEPS[activeStepIndex].activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                  Key Deliverables
                </span>
                <ul className="space-y-2.5">
                  {PROCESS_STEPS[activeStepIndex].deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-[#111827] border border-slate-800/90 shadow-md space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 text-sky-400 font-mono font-bold flex items-center justify-center text-xs">
                    0{step.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Step {step.step} — {step.title}
                    </h3>
                    <span className="text-xs text-slate-400">{step.subtitle}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">{step.duration}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {step.description}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  Deliverables
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
