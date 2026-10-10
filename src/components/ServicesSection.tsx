import React, { useState } from 'react';
import { 
  Code2, 
  LayoutTemplate, 
  ShoppingBag, 
  Cpu, 
  Target, 
  Building2, 
  RefreshCw, 
  Zap, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onRequestQuote: (serviceTitle: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-[#38BDF8]" />,
  LayoutTemplate: <LayoutTemplate className="w-6 h-6 text-[#818CF8]" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#C084FC]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#38BDF8]" />,
  Target: <Target className="w-6 h-6 text-[#34D399]" />,
  Building2: <Building2 className="w-6 h-6 text-[#60A5FA]" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-[#A78BFA]" />,
  Zap: <Zap className="w-6 h-6 text-[#FBBF24]" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#080B12] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
              What We Do
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Everything Your Business Needs to Grow Online.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            From your first business website to a complete e-commerce experience, we create digital solutions tailored to your goals.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#111827] border border-slate-800/80 hover:border-slate-700 hover:shadow-xl hover:shadow-black/50 transition-all duration-300"
            >
              {/* Top: Icon + Titles */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-slate-700 transition-transform">
                  {serviceIconMap[service.iconName] || <Code2 className="w-6 h-6 text-[#38BDF8]" />}
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#A1AAB8] leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom: Learn More CTA */}
              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] group-hover:text-[#60A5FA] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <span className="text-[11px] text-slate-400 font-mono">
                  {service.turnaroundTime.split(' ')[0]} {service.turnaroundTime.split(' ')[1]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};
