import React from 'react';
import { Briefcase, GraduationCap, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-white/[0.01] z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
              Career Path
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        <div className="relative">
          {/* Vertical Digital Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>

          {portfolioData.experience.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            
            return (
              <div key={index} className={`mb-20 flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                <FadeInSection 
                  direction={isEven ? "right" : "left"} 
                  delay={0.2}
                  className={`w-full md:w-5/12 p-8 glass-card rounded-[2.5rem] relative transition-all duration-500 hover:scale-[1.03] border border-white dark:border-white/10 group shadow-2xl ${isEven ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div className={`absolute top-0 ${isEven ? 'right-8' : 'left-8'} -translate-y-1/2`}>
                     <span className="px-4 py-1.5 bg-primary-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary-500 transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-bold text-slate-500 dark:text-primary-400 mb-6 uppercase tracking-tight">
                    {item.company} | {item.location}
                  </h4>
                  <ul className={`space-y-4 text-slate-600 dark:text-slate-300 font-medium ${isEven ? 'md:mr-0' : 'md:ml-0'}`}>
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm md:text-base flex items-start gap-3">
                        {!isEven && <Cpu size={14} className="mt-1 text-primary-500 shrink-0" />}
                        <span className="flex-1 leading-relaxed">{bullet}</span>
                        {isEven && <Cpu size={14} className="mt-1 text-primary-500 shrink-0" />}
                      </li>
                    ))}
                  </ul>
                </FadeInSection>

                {/* Glowing Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-[1.2rem] bg-slate-900 dark:bg-black border-2 border-primary-500 items-center justify-center z-20 shadow-[0_0_20px_rgba(99,102,241,0.6)] group-hover:rotate-45 transition-transform duration-500">
                  <Icon size={24} className="text-primary-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
