import React from 'react';
import { User, Download, Bot, Store, Database, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { ModalWrapper } from './ModalWrapper';

export const AboutModal = ({ onClose }) => {
  const { resumeUrl } = portfolioData.hero;

  return (
    <ModalWrapper
      title="Engineering Dossier"
      subtitle="// PROFILE & ARCHITECTURE"
      icon={User}
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Portrait Frame */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 group">
            <img
              src="/about_me.jpg"
              alt="Kalash Harchandani"
              className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE ENGINEER
              </span>
              <h3 className="text-base font-black">Kalash Harchandani</h3>
              <p className="text-xs text-slate-300 font-mono">AI Developer • India</p>
            </div>
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
            className="mt-4 w-full max-w-[280px] py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
          >
            <Download size={14} />
            <span>Download Official Resume</span>
          </a>
        </div>

        {/* Right Column: Bio & Metric Blocks */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-3">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              AI Developer Intern at <strong className="text-slate-900 dark:text-white font-bold">HERE Technologies</strong> and freelance systems builder. Specializing in autonomous multi-agent pipelines (LangGraph, MCP, Bedrock) and full-stack startup platforms with custom Admin Backends & real-time IMS.
            </p>
          </div>

          {/* 4 Visual Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 mb-1">
                <Bot size={15} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Enterprise AI</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">HERE Technologies</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">LangGraph, MCP & Bedrock</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                <Store size={15} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Startups Shipped</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">2+ Live Clients</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Chalnayaar & Better Desserts</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 mb-1">
                <Database size={15} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Custom Backends</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Store Timings & IMS</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time inventory engine</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 mb-1">
                <GraduationCap size={15} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Academics</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">8.52 CGPA</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bennett University CSE</p>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
