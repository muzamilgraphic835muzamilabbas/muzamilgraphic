import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, ShieldCheck, Monitor } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  onDiscussProject: (projectTitle?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onDiscussProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Corporate', 'E-commerce', 'Service', 'Restaurant', 'SaaS', 'Local Business'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#080B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                Selected Projects
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Digital Experiences Designed With Purpose.
            </h2>

            <p className="mt-4 text-base text-[#A1AAB8] leading-relaxed">
              Explore our sample architecture and concept implementations. Each project illustrates our focus on usability, clean visual hierarchy, and performance.
            </p>
          </div>

          {/* Category Filter Tabs (Interactive segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111827] border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-sky-400 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[#111827] border border-slate-800/80 hover:border-slate-700 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
            >
              {/* Browser Preview Window */}
              <div className="bg-[#0E1422] border-b border-slate-800 overflow-hidden relative">
                {/* Browser top bar */}
                <div className="bg-[#111827] px-3.5 py-2 border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[170px]">
                    {project.id}.demo
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                    {project.typeBadge}
                  </span>
                </div>

                {/* Simulated Preview Canvas */}
                <div className="p-5 min-h-[170px] bg-gradient-to-br from-[#0E1422] to-[#080B12] flex flex-col justify-between group-hover:bg-slate-900/40 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-400">{project.category}</span>
                      <span className="text-[11px] text-emerald-400 font-mono">99 PageSpeed</span>
                    </div>
                    <div className="font-heading font-bold text-base text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{project.techStack[0]}</span>
                    <span>·</span>
                    <span>{project.techStack[1]}</span>
                    <span>·</span>
                    <span>Responsive</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-[#A1AAB8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Services Provided (Unboxed text with separators) */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1.5 font-medium">
                      Services Provided
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
                      {project.servicesProvided.map((service, idx) => (
                        <React.Fragment key={service}>
                          <span className="text-slate-300">{service}</span>
                          {idx < project.servicesProvided.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Project Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>View Project Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Bottom CTA Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0E1422] via-[#111827] to-[#0E1422] border border-slate-800 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Have a Project in Mind? Let's Build It.
          </h3>
          <p className="mt-2 text-sm text-[#A1AAB8] max-w-lg mx-auto">
            Discuss your requirements with our team and receive a clear scope, timeline, and tailored strategy.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => onDiscussProject()}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] rounded-xl transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onDiscussProject={onDiscussProject}
      />
    </section>
  );
};
