import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';
import { TechIcon } from '../TechIcon';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-white dark:bg-black overflow-hidden">
      {/* Immersive background overlay */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-white/[0.01] z-0"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
              Tech Arsenal
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-10 rounded-[2.5rem] transition-all duration-500 shadow-2xl border border-white dark:border-white/5 group relative overflow-hidden h-full flex flex-col"
                >
                   {/* Techy background pulse on group hover */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
                  
                  <div className="flex items-center gap-5 mb-10">
                    <div className="p-4 bg-slate-50 dark:bg-white/5 text-primary-600 dark:text-primary-400 rounded-2xl shadow-inner group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i}
                        className="flex items-center px-4 py-2.5 text-sm font-bold bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm group-hover:border-primary-500/50 transition-all duration-300"
                      >
                        <TechIcon tech={item} className="mr-2" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
