import React from 'react';
import { 
  MapPin, 
  Briefcase, 
  Utensils, 
  ShoppingBag, 
  Building, 
  Hammer, 
  Sun, 
  Car, 
  Rocket, 
  Users 
} from 'lucide-react';
import { TARGET_INDUSTRIES } from '../data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-5 h-5 text-sky-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-indigo-400" />,
  Utensils: <Utensils className="w-5 h-5 text-amber-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-purple-400" />,
  Building: <Building className="w-5 h-5 text-blue-400" />,
  Hammer: <Hammer className="w-5 h-5 text-orange-400" />,
  Sun: <Sun className="w-5 h-5 text-yellow-400" />,
  Car: <Car className="w-5 h-5 text-rose-400" />,
  Rocket: <Rocket className="w-5 h-5 text-emerald-400" />,
  Users: <Users className="w-5 h-5 text-teal-400" />
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#080B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
              Sectors & Industries
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Tailored for Your Industry's Commercial Needs.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1AAB8] leading-relaxed">
            Every business model has distinct customer journeys and trust signals. We tailor structure, functionality, and integrations to match how your specific market conducts business.
          </p>
        </div>

        {/* 10-Industry Clean Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TARGET_INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="p-5 rounded-2xl bg-[#111827] border border-slate-800/80 hover:border-slate-700 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {iconMap[ind.iconName] || <Briefcase className="w-5 h-5 text-sky-400" />}
                </div>

                <h3 className="font-heading font-bold text-sm text-slate-100 group-hover:text-white transition-colors">
                  {ind.name}
                </h3>

                <p className="mt-2 text-xs text-[#A1AAB8] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60">
                <span className="text-[10px] text-sky-400 block font-medium">
                  Key Focus:
                </span>
                <span className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                  {ind.keyFeature}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 rounded-xl bg-[#0E1422] border border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            Don't see your specific sector? Every project is individually scoped from first principles according to your verified business requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
