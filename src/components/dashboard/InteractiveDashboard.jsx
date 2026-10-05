import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  FolderGit2, 
  Cpu, 
  Clock, 
  User, 
  Send, 
  ArrowUpRight, 
  Download, 
  Terminal, 
  Sun, 
  Moon,
  Sparkles
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { portfolioData } from '../../data/portfolioData';
import { AmbientBackground } from './AmbientBackground';
import { ProjectsModal } from './overlays/ProjectsModal';
import { SkillsModal } from './overlays/SkillsModal';
import { ExperienceModal } from './overlays/ExperienceModal';
import { AboutModal } from './overlays/AboutModal';
import { ContactModal } from './overlays/ContactModal';

export const InteractiveDashboard = ({ theme, toggleTheme }) => {
  const [activeModal, setActiveModal] = useState(null); // 'projects' | 'skills' | 'experience' | 'about' | 'contact'
  const { name, resumeUrl } = portfolioData.hero;

  // 3D Card Interactive Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-50 dark:bg-[#070709] text-slate-900 dark:text-slate-100 flex flex-col justify-between p-3 sm:p-5 lg:p-6 relative select-none">
      {/* Dynamic Ambient Background */}
      <AmbientBackground />

      {/* Main Cockpit Stage that smoothly blurs/scales when modal opens */}
      <motion.div
        animate={{
          scale: activeModal ? 0.94 : 1,
          filter: activeModal ? 'blur(8px)' : 'blur(0px)',
          opacity: activeModal ? 0.35 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full flex flex-col justify-between relative z-10"
      >
        {/* Top Control Bar */}
        <header className="flex items-center justify-between w-full max-w-7xl mx-auto px-2">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div>
              <p className="font-mono text-xs font-black tracking-widest uppercase text-slate-900 dark:text-white">
                KALASH HARCHANDANI
              </p>
              <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                AI DEVELOPER @ HERE TECH • FREELANCE
              </p>
            </div>
          </div>

          {/* Quick External Actions & Theme Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all text-xs font-bold shadow-xs cursor-pointer"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>

            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all text-xs shadow-xs"
              title="GitHub"
            >
              <FaGithub size={15} />
            </a>

            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all text-xs shadow-xs"
              title="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all text-xs shadow-xs cursor-pointer"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} className="text-yellow-400" /> : <Moon size={15} />}
            </button>
          </div>
        </header>

        {/* Central Core Cockpit: Who I am + What I build + Proof + CTAs */}
        <main className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-2 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column: Direct Statement, Ticker & Triggers (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 text-left"
            >
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 w-fit backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                  AVAILABLE FOR FREELANCE & AI SYSTEMS
                </span>
              </div>

              {/* High-Impact Headline */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                  Hi, I'm {name}. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-indigo-500 to-purple-500 dark:from-primary-400 dark:via-indigo-300 dark:to-purple-300">
                    Agentic AI Systems
                  </span> <br />
                  & Startup Platforms.
                </h1>

                {/* Dynamic Ticker */}
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm pt-0.5">
                  <Terminal size={14} className="text-primary-500 shrink-0" />
                  <span>
                    <Typewriter
                      options={{
                        strings: [
                          'LangGraph & Deep Agents Orchestration',
                          'Startup Admin IMS & Dynamic Store Timings',
                          'Amazon Bedrock & Model Context Protocol (MCP)',
                          'Shipped: Chal Na Yaar & The Better Desserts'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 30,
                      }}
                    />
                  </span>
                </div>
              </div>

              {/* 1-Line Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Engineering autonomous multi-agent pipelines at <strong>HERE Technologies</strong> while shipping custom full-stack solutions with real-time <strong>Admin IMS & Store Timings</strong> for active startups.
              </p>

              {/* Quick Proof Metrics Strip */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg pt-1">
                <div className="border-l-2 border-primary-500 pl-3 py-0.5">
                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">HERE Tech</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">AI Developer</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">2+ Startups</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Shipped Live</p>
                </div>
                <div className="border-l-2 border-indigo-500 pl-3 py-0.5">
                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">8.52 CGPA</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Bennett CSE</p>
                </div>
              </div>

              {/* Primary Direct Triggers */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveModal('projects')}
                  className="px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <FolderGit2 size={16} />
                  <span>Open Projects Gallery</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => setActiveModal('contact')}
                  className="px-5 py-3 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-primary-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles size={15} />
                  <span>Initiate Contact</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column: 3D Interactive Telemetry Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative max-w-[360px] mx-auto w-full hidden sm:block"
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="relative rounded-3xl p-3 bg-white/80 dark:bg-[#0e0e14]/85 border border-slate-200 dark:border-white/[0.1] shadow-2xl backdrop-blur-xl transition-shadow duration-300 hover:shadow-primary-500/10"
              >
                {/* Portrait Viewport */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/[0.08] group">
                  <img
                    src="/profile.jpg"
                    alt={name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85"></div>

                  {/* Top Status */}
                  <div className="absolute top-3 left-3 font-mono text-[10px] font-bold text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    SYS.READY // ONLINE
                  </div>

                  {/* Identity Bottom Block */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 space-y-1">
                    <h3 className="text-base font-black text-white">{name}</h3>
                    <p className="text-xs text-slate-300 font-mono">AI Developer • Systems Engineer</p>
                  </div>
                </div>

                {/* Quick Interactive Peek Actions */}
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center font-mono text-[10px] font-bold">
                  <button
                    onClick={() => setActiveModal('skills')}
                    className="py-1.5 px-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-primary-500 hover:text-white transition-all text-slate-700 dark:text-slate-300 cursor-pointer border border-slate-200 dark:border-white/5"
                  >
                    SKILLS ↗
                  </button>
                  <button
                    onClick={() => setActiveModal('experience')}
                    className="py-1.5 px-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-primary-500 hover:text-white transition-all text-slate-700 dark:text-slate-300 cursor-pointer border border-slate-200 dark:border-white/5"
                  >
                    CAREER ↗
                  </button>
                  <button
                    onClick={() => setActiveModal('about')}
                    className="py-1.5 px-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-primary-500 hover:text-white transition-all text-slate-700 dark:text-slate-300 cursor-pointer border border-slate-200 dark:border-white/5"
                  >
                    DOSSIER ↗
                  </button>
                </div>

                {/* Active Stack Ticker */}
                <div className="mt-2 px-3 py-1.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] flex items-center justify-between text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400">
                  <span>LangGraph</span>
                  <span className="text-primary-500">→</span>
                  <span>MCP</span>
                  <span className="text-primary-500">→</span>
                  <span>Bedrock</span>
                  <span className="text-primary-500">→</span>
                  <span>AWS</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </main>

        {/* Bottom Floating Control Dock */}
        <footer className="w-full flex justify-center pb-1">
          <nav className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white/80 dark:bg-[#0e0e14]/80 border border-slate-200/80 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
            {[
              { id: 'projects', label: 'Projects', icon: FolderGit2, badge: '4' },
              { id: 'skills', label: 'Skills', icon: Cpu, badge: 'Stack' },
              { id: 'experience', label: 'Experience', icon: Clock, badge: 'HERE' },
              { id: 'about', label: 'About', icon: User, badge: 'Bio' },
              { id: 'contact', label: 'Contact', icon: Send, badge: 'Direct' },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveModal(tab.id)}
                  className="px-3 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black cursor-pointer group"
                >
                  <Icon size={14} className="group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 font-mono font-bold group-hover:bg-white/20 group-hover:text-white dark:group-hover:bg-black/20 dark:group-hover:text-black">
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </nav>
        </footer>
      </motion.div>

      {/* Animated Overlays */}
      <AnimatePresence>
        {activeModal === 'projects' && (
          <ProjectsModal onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'skills' && (
          <SkillsModal onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'experience' && (
          <ExperienceModal onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'about' && (
          <AboutModal onClose={() => setActiveModal(null)} />
        )}
        {activeModal === 'contact' && (
          <ContactModal onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};
