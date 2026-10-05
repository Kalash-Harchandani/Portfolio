import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle, Clock, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ExpandedExperience = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 dark:bg-black/90 backdrop-blur-xl"
      />

      {/* Spatial Timeline Canvas */}
      <motion.div
        layoutId="experience-portal-hub"
        transition={{ type: "spring", damping: 26, stiffness: 260 }}
        className="relative z-10 w-full max-w-4xl rounded-3xl bg-white dark:bg-[#0c0c12] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary-600/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400">
              <Clock size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {"// CAREER PATH & TRACK RECORD"}
              </p>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Engineering Experience
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-white/[0.08] hover:bg-slate-300 dark:hover:bg-white/15 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold transition-all cursor-pointer"
          >
            <span className="hidden sm:inline text-[10px] text-slate-500 dark:text-slate-400">ESC</span>
            <X size={16} />
          </button>
        </div>

        {/* Timeline Items */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scroll space-y-4">
          {portfolioData.experience.map((item, index) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02] hover:border-primary-500/40 transition-all duration-300"
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
      </motion.div>
    </div>
  );
};
