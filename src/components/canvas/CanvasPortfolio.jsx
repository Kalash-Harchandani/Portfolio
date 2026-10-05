import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, 
  Download, 
  Terminal, 
  Sun, 
  Moon, 
  Sparkles,
  Bot,
  Briefcase,
  Layers,
  ChevronRight,
  Shield,
  Search
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { portfolioData } from '../../data/portfolioData';
import { TechIcon } from '../TechIcon';
import { ExpandedProject } from './ExpandedProject';
import { ExpandedSkills } from './ExpandedSkills';
import { ExpandedExperience } from './ExpandedExperience';
import { ExpandedContact } from './ExpandedContact';

export const CanvasPortfolio = ({ theme, toggleTheme }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeOverlay, setActiveOverlay] = useState(null); // 'skills' | 'experience' | 'contact'
  const [projectPair, setProjectPair] = useState('ai'); // 'ai' (RepoInsight + Armour) | 'startups' (Chal Na Yaar + Better Desserts)
  
  const { name, resumeUrl } = portfolioData.hero;

  // The 2 Flagship AI visual proof projects requested by the user
  const repoInsight = portfolioData.projects.find(p => p.title === 'RepoInsight AI') || portfolioData.projects[2];
  const armour = portfolioData.projects.find(p => p.title === 'Armour') || portfolioData.projects[3];
  
  // The 2 Startup commercial platform projects
  const chalNaYaar = portfolioData.projects.find(p => p.title === 'Chal Na Yaar') || portfolioData.projects[0];
  const betterDesserts = portfolioData.projects.find(p => p.title === 'The Better Desserts') || portfolioData.projects[1];

  const displayedProjects = projectPair === 'ai' ? [repoInsight, armour] : [chalNaYaar, betterDesserts];

  // Ambient mouse coordinate tracking for subtle depth spotlight
  const mouseX = useSpring(0, { damping: 40, stiffness: 200 });
  const mouseY = useSpring(0, { damping: 40, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setActiveOverlay(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mouseX, mouseY]);

  const isOverlayOpen = selectedProject !== null || activeOverlay !== null;

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-50 dark:bg-[#060608] text-slate-900 dark:text-slate-100 flex flex-col justify-between p-3 sm:p-5 lg:p-6 relative select-none font-sans">
      
      {/* Dynamic Ambient Background Grid & Cursor Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80 dark:to-[#060608]/90"></div>

        {/* Ambient Pulsing Atmospheric Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/15 dark:bg-primary-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-purple-600/10 blur-[150px] rounded-full"></div>

        {/* Cursor Reactive Glow */}
        <motion.div
          className="hidden md:block absolute -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-primary-500/10 via-indigo-500/10 to-transparent blur-[90px]"
          style={{ left: mouseX, top: mouseY }}
        />
      </div>

      {/* Main Single-Canvas Composition */}
      <motion.div
        animate={{
          scale: isOverlayOpen ? 0.94 : 1,
          filter: isOverlayOpen ? 'blur(10px)' : 'blur(0px)',
          opacity: isOverlayOpen ? 0.35 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full flex flex-col justify-between relative z-10 max-w-7xl mx-auto"
      >
        
        {/* Minimal Header */}
        <header className="flex items-center justify-between w-full px-1">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
              KALASH HARCHANDANI
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-slate-500 dark:text-slate-400">
              {"// AI DEVELOPER @ HERE TECHNOLOGIES"}
            </span>
          </div>

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
              title="GitHub Profile"
            >
              <FaGithub size={15} />
            </a>

            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all text-xs shadow-xs"
              title="LinkedIn Profile"
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

        {/* Central Spatial Stage: Split Identity & Visual Proof Projects */}
        <main className="flex-1 flex items-center justify-center w-full py-2 sm:py-3">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full">
            
            {/* Left Spatial Zone: Identity, Statement & Interactive Telemetry (6 cols) */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              
              {/* Role & Status Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 w-fit backdrop-blur-md">
                <Bot size={13} className="text-primary-500" />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                  AI ENGINEER & FULL-STACK DEVELOPER
                </span>
              </div>

              {/* Bold Headline */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                  Hi, I'm {name}. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-indigo-500 to-purple-500 dark:from-primary-400 dark:via-indigo-300 dark:to-purple-300">
                    Agentic AI Systems
                  </span> <br />
                  & Production Platforms.
                </h1>

                {/* Real-time Ticker */}
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-xs pt-1">
                  <Terminal size={14} className="text-primary-500 shrink-0" />
                  <span>
                    <Typewriter
                      options={{
                        strings: [
                          'LangGraph & Deep Agents Orchestration',
                          'Startup Admin IMS & Dynamic Store Timings',
                          'Amazon Bedrock & Model Context Protocol (MCP)',
                          'OSINT Threat Scoring & Vector RAG Engines'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 35,
                      }}
                    />
                  </span>
                </div>
              </div>

              {/* 1-Line Powerful Statement */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-lg">
                Engineering autonomous multi-agent pipelines with LangGraph & AWS Bedrock, and shipping production platforms with custom Admin IMS for startups.
              </p>

              {/* Visual Identity Thumbnail & Interactive Experience Capsule */}
              <div className="grid grid-cols-12 gap-3 pt-1">
                {/* Photo Thumbnail */}
                <div className="col-span-4 sm:col-span-3 aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 relative group bg-slate-950 shadow-md">
                  <img
                    src="/profile.jpg"
                    alt={name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[9px] font-mono font-bold text-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs border border-white/10 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Interactive Experience Node (Click to Expand Timeline) */}
                <motion.div
                  layoutId="experience-portal-hub"
                  onClick={() => setActiveOverlay('experience')}
                  className="col-span-8 sm:col-span-9 p-3 sm:p-3.5 rounded-2xl bg-white/70 dark:bg-[#0c0c12]/80 border border-slate-200/80 dark:border-white/10 hover:border-primary-500/50 shadow-md cursor-pointer flex flex-col justify-between group transition-all"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400">
                      <Briefcase size={14} />
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider">Experience & Track Record</span>
                    </div>
                    <span className="text-[10px] font-mono text-primary-500 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      <span>Timeline</span>
                      <ChevronRight size={12} />
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1">
                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">HERE Tech</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">AI Developer</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-emerald-600 dark:text-emerald-400">2 Startups</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Shipped Live</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">8.52 CGPA</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Bennett CSE</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Direct Cockpit Actions */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <motion.button
                  layoutId="contact-action-hub"
                  onClick={() => setActiveOverlay('contact')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-xs shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <Sparkles size={14} />
                  <span>Get In Touch</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>

                <button
                  onClick={() => setActiveOverlay('skills')}
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <Layers size={13} />
                  <span>Interactive Skill Map</span>
                </button>
              </div>

            </div>

            {/* Right Spatial Zone: Visual Proof (RepoInsight AI + Armour) (6 cols) */}
            <div className="lg:col-span-6 flex flex-col space-y-2.5">
              
              {/* Category Switcher Pill Header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-white/[0.05] p-1 rounded-xl">
                  <button
                    onClick={() => setProjectPair('ai')}
                    className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      projectPair === 'ai' 
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-xs' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    AI Systems (Flagships)
                  </button>
                  <button
                    onClick={() => setProjectPair('startups')}
                    className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      projectPair === 'startups' 
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-xs' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Startup Clients (Live)
                  </button>
                </div>

                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  {"Click to Expand ↗"}
                </span>
              </div>

              {/* 2 Visible Interactive Projects on Canvas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {displayedProjects.map((project) => {
                  const isAi = project.category === 'ai';
                  return (
                    <motion.div
                      key={project.title}
                      layoutId={`project-card-${project.title}`}
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0c0c12]/80 hover:border-primary-500/50 shadow-lg cursor-pointer group transition-shadow flex flex-col"
                    >
                      <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-950">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85"></div>
                        
                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                          <span className={`px-2 py-0.5 rounded-full text-white font-mono text-[9px] font-bold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1 ${
                            isAi ? 'bg-primary-600/90' : 'bg-emerald-500/90'
                          }`}>
                            <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                            {project.badge}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-black/60 text-white font-mono text-[9px] font-semibold backdrop-blur-xs border border-white/10 flex items-center gap-1">
                            {isAi ? <Search size={10} /> : <Shield size={10} />}
                            {project.highlights[0]}
                          </span>
                        </div>

                        <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all">
                          <ArrowUpRight size={14} />
                        </div>

                        <div className="absolute bottom-2.5 left-3 right-3 z-10">
                          <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-[11px] font-medium text-slate-300">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="p-2.5 sm:p-3 flex items-center justify-between text-[10px] font-mono">
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <span>Stack:</span>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {project.techStack.slice(0, 4).join(', ')}
                          </span>
                        </div>
                        <span className="font-bold text-primary-500 flex items-center gap-0.5">
                          <span>Expand</span>
                          <ChevronRight size={11} />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </main>

        {/* Bottom Minimal Strip: Strongest Technologies Cluster */}
        <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 border-t border-slate-200/60 dark:border-white/[0.06] text-xs">
          {/* Tech Chips Cluster */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
              CORE ARSENAL:
            </span>
            {['LangGraph', 'MCP', 'Amazon Bedrock', 'Python', 'React', 'OpenSearch', 'Docker', 'AWS'].map((tech) => (
              <span
                key={tech}
                onClick={() => setActiveOverlay('skills')}
                className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-bold bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 rounded border border-slate-200/70 dark:border-white/5 hover:border-primary-500/50 hover:scale-105 transition-all cursor-pointer"
              >
                <TechIcon tech={tech} className="mr-1" />
                {tech}
              </span>
            ))}
            <button
              onClick={() => setActiveOverlay('skills')}
              className="text-[10px] font-mono font-bold text-primary-500 hover:text-primary-400 ml-1 cursor-pointer flex items-center gap-0.5"
            >
              <span>+ More</span>
              <ChevronRight size={10} />
            </button>
          </div>

          {/* Quick Contact & Copyright */}
          <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 dark:text-slate-400">
            <button
              onClick={() => setActiveOverlay('contact')}
              className="hover:text-primary-500 transition-colors font-bold cursor-pointer"
            >
              kalash.devworks@gmail.com
            </button>
            <span>•</span>
            <span>© 2026 KALASH</span>
          </div>
        </footer>

      </motion.div>

      {/* Morphing Spatial Overlays */}
      <AnimatePresence>
        {selectedProject && (
          <ExpandedProject
            project={selectedProject}
            onSelectProject={setSelectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {activeOverlay === 'skills' && (
          <ExpandedSkills onClose={() => setActiveOverlay(null)} />
        )}
        {activeOverlay === 'experience' && (
          <ExpandedExperience onClose={() => setActiveOverlay(null)} />
        )}
        {activeOverlay === 'contact' && (
          <ExpandedContact onClose={() => setActiveOverlay(null)} />
        )}
      </AnimatePresence>

    </div>
  );
};
