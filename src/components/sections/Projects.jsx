import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';
import { TechIcon } from '../TechIcon';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Techy background overlay for the whole section */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      <div className="absolute inset-0 bg-grid-slate-100/[0.02] dark:bg-grid-white/[0.01] z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
              Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-32">
          {portfolioData.projects.map((project, index) => (
            <FadeInSection key={index} delay={0.1} direction={index % 2 === 0 ? "right" : "left"}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Massive Hero Preview Image with Techy Frame */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-2xl aspect-[16/9] border border-white dark:border-white/5">
                  <div className="absolute inset-0 bg-primary-900/10 dark:bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover origin-top transform group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  
                  {/* Digital corner accents on image */}
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/30 z-20"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/30 z-20"></div>
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  
                  <div className="absolute bottom-8 left-8 z-20 md:hidden">
                    <h3 className="text-2xl font-black text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Content Card that overlaps slightly on Desktop */}
                <div className="mt-8 md:-mt-20 md:ml-12 md:mr-12 p-8 md:p-12 glass-card rounded-[2.5rem] z-20 relative border border-white dark:border-white/10 shadow-2xl backdrop-blur-2xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
                    <div className="space-y-2">
                       <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors tracking-tighter">
                        {project.title}
                      </h3>
                      <div className="h-1 w-12 bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="flex gap-4 text-slate-500 dark:text-slate-400 shrink-0">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110 shadow-sm" title="View Source on GitHub">
                          <FaGithub size={24} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110 shadow-sm" title="Visit Live Site">
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-4xl font-medium">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Rendering with Branded Logos */}
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="flex items-center text-sm font-bold px-4 py-2.5 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-200 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm transition-all hover:border-primary-500/50"
                      >
                        <TechIcon tech={tech} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
