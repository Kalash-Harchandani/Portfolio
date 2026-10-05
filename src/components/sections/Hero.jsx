import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Sparkles, Terminal } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { name, resumeUrl } = portfolioData.hero;

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#070709] pt-24 pb-16">
      {/* Background Matrix & Lighting Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-[#070709]"></div>
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-600/10 dark:bg-primary-500/15 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clean & Impactful (7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Live Operational Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 w-fit backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                AI DEVELOPER @ HERE TECHNOLOGIES • FREELANCE ENGINEER
              </span>
            </motion.div>

            {/* Headline: Clean, Big, Instantly Understandable */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                Hi, I'm <span className="text-slate-900 dark:text-white">{name}</span>. <br />
                I build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-indigo-500 to-purple-500 dark:from-primary-400 dark:via-indigo-300 dark:to-purple-300">
                  Agentic AI Systems
                </span> <br className="hidden sm:inline" />
                & Startup Platforms.
              </h1>
              
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm pt-1">
                <Terminal size={14} className="text-primary-500 shrink-0" />
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        'LangGraph & Deep Agent Orchestration',
                        'Startup Admin Backends & Real-Time IMS',
                        'AWS Bedrock & Model Context Protocol (MCP)',
                        'Shipped: Chal Na Yaar & The Better Desserts'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 35,
                    }}
                  />
                </span>
              </div>
            </motion.div>

            {/* 1-Line Description: Zero fluff */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl"
            >
              Specializing in autonomous multi-agent workflows and high-converting commercial web systems with custom Admin IMS & store timing engines.
            </motion.p>

            {/* Direct Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>Explore Work</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-sm shadow-lg shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Sparkles size={15} />
                <span>Hire For Freelance</span>
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="px-5 py-3 rounded-xl bg-white dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all flex items-center gap-2"
              >
                <Download size={15} />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Minimal Metric Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-2 max-w-lg"
            >
              <div className="border-l-2 border-primary-500 pl-3 py-0.5">
                <p className="text-xs font-black uppercase text-slate-900 dark:text-white">HERE Tech</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">AI Developer</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                <p className="text-xs font-black uppercase text-slate-900 dark:text-white">2+ Startups</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Shipped Live</p>
              </div>
              <div className="border-l-2 border-indigo-500 pl-3 py-0.5">
                <p className="text-xs font-black uppercase text-slate-900 dark:text-white">8.52 CGPA</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Bennett CSE</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Portrait Frame with Live Tech Badges (5/12 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative max-w-[380px] mx-auto w-full"
          >
            <div className="relative rounded-3xl p-3 bg-white/70 dark:bg-[#0e0e14]/80 border border-slate-200 dark:border-white/[0.1] shadow-2xl backdrop-blur-xl">
              
              {/* Photo Viewport */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/[0.08] group">
                <img 
                  src="/profile.jpg" 
                  alt={name} 
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Tech Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85"></div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 font-mono text-[10px] font-bold text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  OPEN FOR PROJECTS
                </div>

                {/* Bottom Identity Block */}
                <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1">
                  <h3 className="text-lg font-black text-white tracking-tight">{name}</h3>
                  <p className="text-xs text-slate-300 font-medium">AI Developer • Systems Engineer</p>
                </div>
              </div>

              {/* Active Pipeline Flow */}
              <div className="mt-2.5 px-3 py-2 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300">
                <span>LangGraph</span>
                <span className="text-primary-500">→</span>
                <span>MCP</span>
                <span className="text-primary-500">→</span>
                <span>Bedrock</span>
                <span className="text-primary-500">→</span>
                <span>AWS</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
