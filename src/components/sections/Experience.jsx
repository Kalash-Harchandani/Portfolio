import React from 'react';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-[#070709] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px] z-0 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary-600 dark:text-primary-400">
              04 // TRACK RECORD
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-1 uppercase tracking-tight">
              Experience
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mt-2 mb-3"></div>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
              Enterprise engineering at HERE Technologies alongside production startup delivery.
            </p>
          </div>
        </FadeInSection>

        <div className="space-y-6">
          {portfolioData.experience.map((item, index) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            
            return (
              <FadeInSection key={index} delay={index * 0.08}>
                <div className="p-5 sm:p-6 glass-card rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-primary-500/40 transition-all duration-300 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-600/10 text-primary-600 dark:text-primary-400 shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                          {item.company} • {item.location}
                        </p>
                      </div>
                    </div>
                    <span className="self-start sm:self-center px-3 py-1 bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold rounded-full border border-slate-200/60 dark:border-white/5">
                      {item.date}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pl-1 sm:pl-10 text-slate-600 dark:text-slate-300">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="text-xs sm:text-sm flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 text-primary-500 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
