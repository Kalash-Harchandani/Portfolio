import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, Cpu } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { name, tagline, resumeUrl } = portfolioData.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black pt-20">
      {/* Immersive Techy Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-100/[0.03] dark:bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
        {/* Animated Tech Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-500/10 dark:bg-primary-900/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-900/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-10 sm:px-20 lg:px-32 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-x-64 py-16">
          
          {/* Content Side - Constrained for max whitespace */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col text-left space-y-12 max-w-xl lg:flex-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800 w-fit">
              <Terminal size={14} />
              <span className="text-xs font-bold tracking-widest uppercase">
                <Typewriter
                  options={{
                    strings: ['Building Ai integrated systems', 'Full stack Mern developer', 'LLMs and RAG PipeLines', 'Problem solving skills'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]"
              >
                KALASH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-indigo-500 to-purple-500 dark:from-primary-400 dark:via-indigo-300 dark:to-purple-400 animate-gradient-x">
                  HARCHANDANI
                </span>
              </motion.h1>
              
              <motion.div variants={itemVariants} className="flex items-center gap-4 text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300">
                <span className="w-16 h-px bg-primary-500"></span>
                <p>Full Stack Developer & AI Integrator</p>
              </motion.div>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
            >
              {tagline}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-10 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-lg shadow-2xl hover:shadow-primary-500/30 transition-all flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="px-10 py-5 rounded-2xl bg-white dark:bg-transparent text-slate-900 dark:text-white font-black text-lg border-2 border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-400 transition-all flex items-center gap-2 group"
              >
                Resume
                <Download size={22} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Tech Badges Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 text-slate-400 dark:text-slate-600 pt-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <Cpu size={28} />
              <Database size={28} />
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
              <span className="text-sm font-black tracking-[0.3em] uppercase">Ready to Scale</span>
            </motion.div>
          </motion.div>

          {/* Immersive Photo Side */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:flex-shrink-0"
          >
            <div className="relative w-full aspect-[3/4] max-w-[450px] mx-auto">
              {/* Animated Decorative Frames */}
              <div className="absolute -inset-6 border border-primary-500/10 dark:border-primary-400/5 rounded-[3rem] animate-pulse"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-primary-500 dark:border-primary-500 rounded-tr-3xl z-20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-primary-500 dark:border-primary-500 rounded-bl-3xl z-20"></div>

              {/* Main Photo Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 border-2 border-white/50 dark:border-white/10">
                <img 
                  src="/profile.jpg" 
                  alt={name} 
                  className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 transition-opacity duration-700 hover:opacity-0"></div>
                
                {/* Techy Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                  <motion.div 
                    animate={{ y: ['-100%', '200%'] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-32 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent" 
                  />
                </div>
              </div>
              
              {/* Floating Data Tags - Simplified */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-12 top-1/3 glass-card px-5 py-3 rounded-2xl z-30 shadow-2xl hidden md:block border border-white/20 dark:border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500 animate-ping"></div>
                  <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest">Active</span>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -left-16 bottom-1/3 glass-card px-5 py-3 rounded-2xl z-30 shadow-2xl hidden md:block border border-white/20 dark:border-white/5"
              >
                <div className="flex items-center gap-3">
                  <Cpu size={18} className="text-primary-500" />
                  <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest">AI Engine</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
