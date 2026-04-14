import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Dynamic techy background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.03] dark:bg-grid-white/[0.01] z-0"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
                Let's Build Together
             </h2>
             <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full"></div>
             <p className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
               I'm currently looking for new opportunities and collaborations. Drop me a line and let's start a conversation.
             </p>
          </div>
        </FadeInSection>

        <div className="flex flex-col items-center space-y-12">
          {/* Primary CTA - The Mail Button */}
          <FadeInSection delay={0.2}>
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="group relative inline-flex items-center gap-4 px-12 py-8 rounded-[2.5rem] bg-slate-900 dark:bg-white text-white dark:text-black font-black text-2xl md:text-4xl uppercase tracking-tighter shadow-2xl hover:scale-105 transition-all duration-500 border-4 border-transparent hover:border-primary-500"
            >
              <Mail size={40} className="group-hover:rotate-12 transition-transform" />
              Send an Email
              
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-[2.6rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            </a>
          </FadeInSection>

          {/* Secondary Social Links */}
          <FadeInSection delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all font-bold group"
              >
                <FaLinkedin size={24} className="text-blue-600 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a 
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all font-bold group"
              >
                <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a 
                href={portfolioData.contact.codolio}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all font-bold group"
              >
                <ExternalLink size={24} className="group-hover:scale-110 transition-transform" />
                Codolio
              </a>
            </div>
          </FadeInSection>
          
          {/* Footer-like simple credits since we removed the footer */}
          <FadeInSection delay={0.6}>
             <div className="pt-20 text-center">
                <p className="text-sm font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em]">
                  © 2026 KALASH HARCHANDANI
                </p>
             </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
