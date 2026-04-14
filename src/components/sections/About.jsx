import React from 'react';
import { User, Target, Zap, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-black">
      <div className="absolute inset-0 bg-grid-slate-200/[0.05] dark:bg-grid-white/[0.02] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
              The Mission
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Photo Column - Takes 5/12 columns */}
          <FadeInSection delay={0.2} direction="right" className="lg:col-span-5">
            <div className="relative group">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 dark:border-white/10 aspect-[3/4]">
                <img 
                  src="/about_me.jpg" 
                  alt="Kalash Harchandani" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[0.2] hover:grayscale-0"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border-white/20 dark:border-white/5 backdrop-blur-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-600 text-white">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Experience</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Active Industry Integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          {/* Content Column - Takes 7/12 columns */}
          <FadeInSection delay={0.4} direction="left" className="lg:col-span-7 flex flex-col space-y-8">
            <div className="glass-card p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group border border-white dark:border-white/5 shadow-xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 text-primary-600 dark:text-primary-400">
                  <User size={28} className="font-bold" />
                  <span className="text-sm font-black uppercase tracking-[0.3em]">Developer Profile</span>
                </div>
                
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light mb-12 italic">
                   "{portfolioData.about.summary}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Architecture</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Scalable & HLD focused systems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="p-3 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">AI Injection</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">RAG, LLMs & Vector Search.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-6 px-10 glass-card rounded-3xl border border-white dark:border-white/5 shadow-lg">
               <div className="text-center">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">8.52</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CGPA</p>
               </div>
               <div className="w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
               <div className="text-center">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">5%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Top SDE Talent</p>
               </div>
               <div className="w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
               <div className="text-center">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">AI-1st</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Philosophy</p>
               </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
