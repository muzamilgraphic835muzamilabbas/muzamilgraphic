import React, { useState } from 'react';
import { ArrowRight, Eye, ShieldCheck, Zap, Sparkles, Check, Smartphone, Monitor } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<'corporate' | 'ecommerce' | 'service'>('corporate');

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center bg-[#080B12]">
      {/* Ambient background glows & delicate grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#38BDF8]/10 via-[#8B5CF6]/08 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Main Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                Web Design & Development Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
              Websites That Turn Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
                Visitors Into Customers.
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-[#A1AAB8] max-w-2xl leading-relaxed">
              We design and develop fast, modern, and conversion-focused websites that help businesses build credibility, attract the right audience, and grow online.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] rounded-xl transition-all shadow-lg shadow-sky-500/15 hover:shadow-sky-500/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] focus-visible:ring-[#38BDF8]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <Eye className="w-4 h-4 text-slate-400" />
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Supporting statement */}
            <div className="pt-3 text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="font-medium text-slate-300">Custom Websites</span>
              <span className="text-slate-600" aria-hidden="true">•</span>
              <span className="font-medium text-slate-300">WordPress</span>
              <span className="text-slate-600" aria-hidden="true">•</span>
              <span className="font-medium text-slate-300">Shopify</span>
              <span className="text-slate-600" aria-hidden="true">•</span>
              <span className="font-medium text-slate-300">Headless Development</span>
            </div>

          </div>

          {/* Right Column: Interactive Browser Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Interactive Showcase Tabs */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-medium text-slate-400">Interactive Previews:</span>
              <div className="flex items-center gap-1 p-1 bg-[#111827] border border-slate-800 rounded-lg">
                <button
                  onClick={() => setActiveTab('corporate')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'corporate'
                      ? 'bg-slate-800 text-sky-400 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Corporate
                </button>
                <button
                  onClick={() => setActiveTab('ecommerce')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'ecommerce'
                      ? 'bg-slate-800 text-purple-400 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  E-Commerce
                </button>
                <button
                  onClick={() => setActiveTab('service')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'service'
                      ? 'bg-slate-800 text-emerald-400 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Landing
                </button>
              </div>
            </div>

            {/* Browser Window Mockup */}
            <div className="relative rounded-2xl bg-[#0E1422] border border-slate-700/60 shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Browser Header / Chrome */}
              <div className="bg-[#111827] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                
                {/* Browser URL bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#080B12]/80 border border-slate-800 rounded-md text-[11px] text-slate-400 font-mono max-w-[240px] truncate">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>https://primewebworks.com/demo/{activeTab}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="hidden sm:inline text-[11px]">200 OK</span>
                </div>
              </div>

              {/* Browser Viewport Content Mockup */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0E1422] to-[#080B12] min-h-[340px] flex flex-col justify-between">
                
                {activeTab === 'corporate' && (
                  <div className="space-y-4">
                    {/* Mock Nav */}
                    <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-[10px] font-bold text-sky-400">
                          A
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Apex Capital</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <span>Portfolio</span>
                        <span>Insights</span>
                        <span className="text-sky-400 font-medium">Schedule Meeting</span>
                      </div>
                    </div>

                    {/* Mock Hero */}
                    <div className="pt-2 space-y-2.5">
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">
                        Advisory & Capital Formation
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-100 leading-snug">
                        Disciplined Capital for High-Growth Enterprises
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Supporting institutional ventures across Asia and global markets with transparent financial modeling.
                      </p>
                    </div>

                    {/* Mock Data Row */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-[#111827] border border-slate-800">
                        <div className="text-[10px] text-slate-400">Deployments</div>
                        <div className="text-sm font-bold text-sky-400 font-mono">100% On-Time</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#111827] border border-slate-800">
                        <div className="text-[10px] text-slate-400">Page Speed</div>
                        <div className="text-sm font-bold text-emerald-400 font-mono">99 / 100</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#111827] border border-slate-800">
                        <div className="text-[10px] text-slate-400">Compliance</div>
                        <div className="text-sm font-bold text-purple-400 font-mono">Verified</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'ecommerce' && (
                  <div className="space-y-4">
                    {/* Mock Nav */}
                    <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-[10px] font-bold text-purple-300">
                          L
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Lumina Minimal</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-purple-300 font-medium">
                        <span>Cart (1)</span>
                      </div>
                    </div>

                    {/* Product Mockup */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="h-32 rounded-lg bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/20 flex items-center justify-center p-3 relative overflow-hidden">
                        <div className="w-16 h-20 rounded bg-slate-800 border border-slate-700 shadow-md transform -rotate-6" />
                        <span className="absolute bottom-1 right-2 text-[9px] text-slate-400 font-mono">Ergonomic Stand</span>
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <div className="text-[10px] text-purple-400 font-medium">Direct-to-Consumer</div>
                          <div className="text-sm font-bold text-slate-100">Matte Aluminum Desk Riser</div>
                          <div className="text-xs text-slate-300 font-semibold mt-1">USD $129.00</div>
                        </div>
                        <div className="pt-2">
                          <button className="w-full py-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded text-[11px] font-semibold">
                            Add to Cart →
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                      <span>✓ Express Worldwide Dispatch</span>
                      <span>✓ Stripe & Local Currency</span>
                    </div>
                  </div>
                )}

                {activeTab === 'service' && (
                  <div className="space-y-4">
                    {/* Mock Nav */}
                    <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-[10px] font-bold text-emerald-400">
                          V
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Vanguard Law</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold">Urgent Consultation</span>
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        Commercial Dispute Resolution
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-100 leading-snug">
                        Corporate Counsel for High-Stakes Contracts
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Cross-border regulatory advisory with transparent milestones and senior advocate attention.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#111827] border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs text-slate-300">Confidential Inquiry Form</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Encrypted 256-Bit</span>
                    </div>
                  </div>
                )}

                {/* Footer of browser card */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Responsive Layout Engine</span>
                  </div>
                  <span className="font-mono text-slate-400">Zero Bloat • Clean Code</span>
                </div>

              </div>

            </div>

            {/* Floating Floating UI Card 1: Lighthouse Performance */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 p-3 rounded-xl bg-[#111827]/95 border border-slate-700/80 shadow-xl backdrop-blur-md items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-medium text-slate-400">Performance Metric</div>
                <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                  <span>99/100 Lighthouse</span>
                  <span className="text-[10px] text-emerald-400 font-mono">(0.4s LCP)</span>
                </div>
              </div>
            </div>

            {/* Floating UI Card 2: Responsive Devices */}
            <div className="hidden sm:flex absolute -top-5 -right-5 p-3 rounded-xl bg-[#111827]/95 border border-slate-700/80 shadow-xl backdrop-blur-md items-center gap-2.5 animate-float-reverse">
              <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400">Screen Fidelity</div>
                <div className="text-xs font-bold text-slate-100">100% Mobile Ready</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
