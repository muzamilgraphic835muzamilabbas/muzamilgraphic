import React from 'react';
import { 
  CheckCircle2, 
  MonitorSmartphone, 
  Zap, 
  Palette, 
  MessageSquareText, 
  TrendingUp,
  ShieldCheck,
  Check,
  X
} from 'lucide-react';
import { WHY_CHOOSE_POINTS } from '../data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#38BDF8]" />,
  MonitorSmartphone: <MonitorSmartphone className="w-5 h-5 text-[#818CF8]" />,
  Zap: <Zap className="w-5 h-5 text-[#38BDF8]" />,
  Palette: <Palette className="w-5 h-5 text-[#C084FC]" />,
  MessageSquareText: <MessageSquareText className="w-5 h-5 text-[#34D399]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#60A5FA]" />
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0E1422] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Why Choose Differentiators */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                Why Prime Web Works
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              More Than a Website.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#818CF8]">
                A Better Digital Experience.
              </span>
            </h2>

            <p className="text-base text-[#A1AAB8] leading-relaxed max-w-2xl">
              We approach every project with technical rigor and commercial understanding. We believe websites should be engineered to deliver clarity, load fast on any network, and serve real business needs.
            </p>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {WHY_CHOOSE_POINTS.map((point) => (
                <div key={point.title} className="p-4 rounded-xl bg-[#111827] border border-slate-800/80 hover:border-slate-700/80 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1 rounded-md bg-slate-900 border border-slate-800 shrink-0">
                      {iconMap[point.iconName] || <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-100">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#A1AAB8] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Standards & Architecture Comparison */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111827] border border-slate-800/90 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                  <span className="text-sm font-bold text-white font-heading">
                    Engineering Principles
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  Production Standards
                </span>
              </div>

              {/* Comparison Matrix */}
              <div className="space-y-4 pt-5">
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-300">
                    Structure & Codebase
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-emerald-200">
                      <strong>Prime Web Works:</strong> Clean, modular, semantic code with purposeful dependencies and minimal bundle sizes.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-500/20 flex items-start gap-2.5">
                    <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-rose-300">
                      <strong>Generic approach:</strong> Heavy multi-purpose themes loaded with 30+ unvetted plugins and slow assets.
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-semibold text-slate-300">
                    Device Responsiveness
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-emerald-200">
                      <strong>Prime Web Works:</strong> Pixel-checked layouts across smartphones, tablets, laptops, and ultra-wide screens.
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-semibold text-slate-300">
                    Client Collaboration & Honesty
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-emerald-200">
                      <strong>Prime Web Works:</strong> Honest timelines, transparent deliverables, and direct communication without false hype.
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Serving Pakistan & International Markets</span>
                <span className="text-sky-400 font-medium">Standards-First</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
