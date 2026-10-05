import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';
import { TechIcon } from '../TechIcon';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-slate-50 dark:bg-[#070709] overflow-hidden">
      {/* Immersive background overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary-600 dark:text-primary-400">
              02 // TECHNICAL ARSENAL
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-1 uppercase tracking-tight">
              Skills & Stack
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mt-2 mb-3"></div>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
              Enterprise AI frameworks, AWS cloud services, and production full-stack systems.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {portfolioData.skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <FadeInSection key={index} delay={index * 0.05}>
                <div 
                  className="glass-card p-5 rounded-2xl transition-all duration-300 shadow-md border border-slate-200/80 dark:border-white/10 hover:border-primary-500/40 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-200/60 dark:border-white/[0.06]">
                    <div className="p-2 bg-slate-100 dark:bg-white/[0.05] text-primary-600 dark:text-primary-400 rounded-lg">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight uppercase">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/70 dark:border-white/5 hover:border-primary-500/40 transition-colors"
                      >
                        <TechIcon tech={item} className="mr-1.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
