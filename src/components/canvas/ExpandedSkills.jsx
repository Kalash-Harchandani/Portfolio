import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { TechIcon } from '../TechIcon';

export const ExpandedSkills = ({ onClose }) => {
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

      {/* Spatial Skill Map Canvas */}
      <motion.div
        layoutId="skills-cluster-hub"
        transition={{ type: "spring", damping: 26, stiffness: 260 }}
        className="relative z-10 w-full max-w-5xl rounded-3xl bg-white dark:bg-[#0c0c12] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary-600/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400">
              <Cpu size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {"// FULL STACK ARCHITECTURE"}
              </p>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Interactive Skill Matrix
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

        {/* 6-Domain Grid */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioData.skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
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

          {/* Certifications strip */}
          <div className="mt-6 p-4 rounded-2xl bg-primary-500/5 dark:bg-primary-500/[0.03] border border-primary-500/20">
            <p className="font-mono text-[10px] font-black uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
              {"// VERIFIED CERTIFICATIONS"}
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
        </div>
      </motion.div>
    </div>
  );
};
