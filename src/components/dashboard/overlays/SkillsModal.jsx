import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { TechIcon } from '../../TechIcon';
import { ModalWrapper } from './ModalWrapper';

export const SkillsModal = ({ onClose }) => {
  return (
    <ModalWrapper
      title="Technical Arsenal & Stack"
      subtitle="// INTERACTIVE SKILL MATRIX"
      icon={Cpu}
      onClose={onClose}
      maxWidth="max-w-5xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolioData.skills.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02] hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-slate-200/80 dark:border-white/[0.06]">
                <div className="p-2 rounded-lg bg-primary-600/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/80 dark:border-white/5 hover:border-primary-500/40 hover:scale-105 transition-all cursor-default"
                  >
                    <TechIcon tech={item} className="mr-1.5" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications Banner */}
      <div className="mt-8 p-5 rounded-2xl bg-primary-500/5 dark:bg-primary-500/[0.03] border border-primary-500/20">
        <p className="font-mono text-[10px] font-black uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
          {"// RECOGNIZED CERTIFICATIONS & COHORTS"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
          {portfolioData.certifications.map((cert, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  );
};
