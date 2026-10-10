import React from 'react';
import { Layers, Smartphone, Gauge, Compass } from 'lucide-react';
import { TRUST_POINTS } from '../data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-[#38BDF8]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#818CF8]" />,
  Gauge: <Gauge className="w-5 h-5 text-[#38BDF8]" />,
  Compass: <Compass className="w-5 h-5 text-[#8B5CF6]" />
};

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-slate-800/80 bg-[#0E1422]/70 py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="flex items-start gap-3.5 group">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 group-hover:border-slate-700 transition-colors">
                {iconMap[point.iconName] || <Layers className="w-5 h-5 text-[#38BDF8]" />}
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs text-[#A1AAB8] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
