import React from 'react';
import { Bot, Store, Database, GraduationCap } from 'lucide-react';
import { FadeInSection } from '../FadeInSection';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[#070709]">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary-600 dark:text-primary-400">
              01 // PROFILE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-1 uppercase tracking-tight">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mt-2"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Visual Photo Card (5 cols) */}
          <FadeInSection delay={0.15} direction="right" className="lg:col-span-5">
            <div className="relative group max-w-[340px] mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 aspect-[3/4] bg-slate-900">
                <img 
                  src="/about_me.jpg" 
                  alt="Kalash Harchandani" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-black">Kalash Harchandani</p>
                  <p className="text-xs text-slate-300 font-mono">AI Developer & Systems Builder</p>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          {/* Concise Info & 4 Metric Blocks (7 cols) */}
          <FadeInSection delay={0.25} direction="left" className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* 1-2 Punchy Sentences */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              AI Developer Intern at <strong className="text-slate-900 dark:text-white font-bold">HERE Technologies</strong> and freelance systems engineer. I architect autonomous multi-agent pipelines with LangGraph & AWS Bedrock, and build production web apps with custom <strong className="text-slate-900 dark:text-white font-bold">Admin IMS & Store Timing backends</strong> for active startups.
            </p>

            {/* 4 Compact Visual Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-1">
                  <Bot size={16} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Enterprise AI</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">HERE Technologies</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">LangGraph, MCP & Bedrock</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <Store size={16} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Commercial Startups</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">2+ Live Platforms</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Chal Na Yaar & Better Desserts</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                  <Database size={16} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Custom Backends</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Store Timings & IMS</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time inventory management</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
                  <GraduationCap size={16} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Academics</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">8.52 CGPA</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">B.Tech CSE, Bennett University</p>
              </div>
            </div>

          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
