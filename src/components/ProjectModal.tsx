import React, { useState } from 'react';
import { X, ExternalLink, Monitor, Smartphone, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onDiscussProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject
}) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl bg-[#0E1422] border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header */}
        <div className="bg-[#111827] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-medium text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
              {project.typeBadge}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs font-medium text-slate-300">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Viewport switch */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`p-1.5 rounded transition-colors ${
                  viewportMode === 'desktop'
                    ? 'bg-slate-800 text-sky-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Desktop View"
                aria-label="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`p-1.5 rounded transition-colors ${
                  viewportMode === 'mobile'
                    ? 'bg-slate-800 text-sky-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Mobile View"
                aria-label="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Title Area */}
          <div>
            <h2 id="project-modal-title" className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-[#38BDF8] mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Preview Canvas */}
          <div className="flex justify-center bg-[#080B12] rounded-xl p-4 sm:p-6 border border-slate-800">
            {viewportMode === 'desktop' ? (
              <div className="w-full max-w-3xl rounded-xl bg-[#0E1422] border border-slate-700/80 shadow-2xl overflow-hidden">
                {/* Desktop Chrome */}
                <div className="bg-[#111827] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="bg-[#080B12] px-3 py-0.5 rounded text-[11px] font-mono text-slate-400 border border-slate-800">
                    preview.primewebworks.com/{project.id}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">200 OK</span>
                </div>

                {/* Desktop Preview Content */}
                <div className="p-6 space-y-5 bg-gradient-to-b from-[#0E1422] to-[#080B12]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="font-bold text-slate-200 text-sm tracking-wide">{project.title}</span>
                    <span className="text-xs text-[#38BDF8] font-medium">Concept Demo Layout</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-bold text-white max-w-lg">
                      {project.subtitle}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-3">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-[#111827] border border-slate-800 text-center">
                        <span className="text-[11px] font-medium text-slate-200 block">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Mobile Preview Chrome */
              <div className="w-[300px] rounded-3xl bg-[#0E1422] border-4 border-slate-700/80 shadow-2xl overflow-hidden">
                <div className="bg-[#111827] py-2 px-4 flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800">
                  <span>9:41</span>
                  <div className="w-16 h-3 bg-black rounded-full" />
                  <span>5G</span>
                </div>
                <div className="p-4 space-y-4 bg-[#080B12] min-h-[360px]">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="font-bold text-xs text-white">{project.title}</span>
                    <span className="text-[10px] text-[#38BDF8]">☰</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-sky-400 uppercase tracking-wider font-semibold">Mobile Viewport</span>
                    <h4 className="font-bold text-sm text-slate-100">{project.subtitle}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="p-2 rounded bg-[#111827] border border-slate-800 text-[10px] text-emerald-400 flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    <span>Optimized for 4G/5G mobile networks</span>
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg text-xs font-semibold">
                    Inquire Online
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Details: Project Need & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4.5 rounded-xl bg-[#111827] border border-slate-800/80 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                The Core Challenge
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.clientNeed}
              </p>
            </div>
            <div className="p-4.5 rounded-xl bg-[#111827] border border-slate-800/80 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Our Solution & Architecture
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Services Provided & Tech Stack */}
          <div className="space-y-3 pt-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Services Provided
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                {project.servicesProvided.map((service, i) => (
                  <React.Fragment key={service}>
                    <span className="text-slate-200 font-medium">{service}</span>
                    {i < project.servicesProvided.length - 1 && (
                      <span className="text-slate-600" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Technology Framework
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                {project.techStack.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="text-slate-300">{tech}</span>
                    {i < project.techStack.length - 1 && (
                      <span className="text-slate-600" aria-hidden="true">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#111827] px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-400">
            *Demonstration concept developed by Prime Web Works to showcase technical execution.
          </span>
          <button
            onClick={() => {
              onClose();
              onDiscussProject(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#60A5FA] hover:to-[#A78BFA] rounded-lg transition-all shadow-md active:scale-95"
          >
            <span>Discuss Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
