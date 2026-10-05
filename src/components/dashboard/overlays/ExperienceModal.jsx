import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle, Clock } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { ModalWrapper } from './ModalWrapper';

export const ExperienceModal = ({ onClose }) => {
  return (
    <ModalWrapper
      title="Career Path & Track Record"
      subtitle="// EXPERIENCE & EDUCATION"
      icon={Clock}
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-5">
        {portfolioData.experience.map((item, index) => {
          const Icon = item.type === 'work' ? Briefcase : GraduationCap;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02] hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary-600/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 shrink-0">
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
                <span className="self-start sm:self-center px-3 py-1 bg-white dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold rounded-full border border-slate-200 dark:border-white/5">
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
            </motion.div>
          );
        })}
      </div>
    </ModalWrapper>
  );
};
