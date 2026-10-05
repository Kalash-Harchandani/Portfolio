import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import { TechIcon } from '../TechIcon';

export const ExpandedProject = ({ project, onSelectProject, onClose }) => {
  if (!project) return null;
  const isStartup = project.category === 'startup';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Cinematic Backdrop Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 dark:bg-black/90 backdrop-blur-xl"
      />

      {/* Morphing Expanded Project Canvas */}
      <motion.div
        layoutId={`project-card-${project.title}`}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="relative z-10 w-full max-w-5xl rounded-3xl bg-white dark:bg-[#0c0c12] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02]">
          {/* Quick Project Switcher Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {portfolioData.projects.map((p) => (
              <button
                key={p.title}
                onClick={() => onSelectProject(p)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  p.title === project.title
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm'
                    : 'bg-slate-200/60 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-white/10'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-white/[0.08] hover:bg-slate-300 dark:hover:bg-white/15 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold transition-all cursor-pointer ml-3 shrink-0"
          >
            <span className="hidden sm:inline text-[10px] text-slate-500 dark:text-slate-400">ESC</span>
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scroll space-y-6">
          
          {/* Visual Showcase Banner */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 shadow-lg group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85"></div>

            {/* Badges on Image */}
            <div className="absolute top-4 left-4 z-20">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                isStartup ? 'bg-emerald-500/90 text-white' : 'bg-primary-600/90 text-white'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                {project.badge}
              </span>
            </div>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/20 flex items-center gap-1.5 hover:scale-105 transition-all"
              >
                <span>Live Site</span>
                <ArrowUpRight size={14} />
              </a>
            )}

            <div className="absolute bottom-5 left-6 right-6 z-20">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm font-semibold text-slate-300 mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Details & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-4">
              <div>
                <p className="font-mono text-[10px] font-black uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-1">
                  {"// CORE SYSTEM OVERVIEW"}
                </p>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Highlight Deliverables */}
              <div className="space-y-2 pt-2">
                <p className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {"// PRODUCTION DELIVERABLES"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 size={16} className="text-primary-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: Tech Stack & Actions */}
            <div className="md:col-span-4 space-y-4">
              <div>
                <p className="font-mono text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  {"// TECH STACK"}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center text-xs font-mono font-bold px-2.5 py-1 bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/80 dark:border-white/[0.06]"
                    >
                      <TechIcon tech={tech} className="mr-1.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-colors"
                  >
                    <FaGithub size={15} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
