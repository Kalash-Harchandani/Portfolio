import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Store, Bot, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../../data/portfolioData';
import { TechIcon } from '../../TechIcon';
import { ModalWrapper } from './ModalWrapper';

export const ProjectsModal = ({ onClose }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = portfolioData.projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <ModalWrapper
      title="Featured Work & Systems"
      subtitle="// PROJECT GALLERY & CASE STUDIES"
      icon={FolderGit2}
      onClose={onClose}
      maxWidth="max-w-6xl"
    >
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {[
          { id: 'all', label: 'All Projects', count: portfolioData.projects.length },
          { id: 'startup', label: 'Startup Clients', icon: Store, count: 2 },
          { id: 'ai', label: 'AI Systems', icon: Bot, count: 2 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isActive 
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-md' 
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {Icon && <Icon size={14} className={isActive ? 'text-primary-400 dark:text-primary-600' : ''} />}
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                isActive 
                  ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black' 
                  : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const isStartup = project.category === 'startup';
            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] hover:border-primary-500/40 transition-all duration-300 flex flex-col group shadow-lg"
              >
                {/* Visual Image Viewport */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                  {/* Category Status Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                      isStartup 
                        ? 'bg-emerald-500/90 text-white' 
                        : 'bg-primary-600/90 text-white'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      {project.badge}
                    </span>
                  </div>

                  {/* Quick External Link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-110 transition-all"
                      title="Visit Live Site"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 z-20">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-300">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white dark:bg-[#0c0c12]">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-2">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="flex items-center text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 rounded border border-slate-200/60 dark:border-white/[0.05]"
                        >
                          <TechIcon tech={tech} className="mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60 dark:border-white/[0.06]">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-xs text-center flex items-center justify-center gap-1.5 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-colors"
                          title="View GitHub Code"
                        >
                          <FaGithub size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </ModalWrapper>
  );
};
