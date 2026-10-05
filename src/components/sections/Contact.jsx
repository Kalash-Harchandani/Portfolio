import React from 'react';
import { Mail, ExternalLink, Phone, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import { FadeInSection } from '../FadeInSection';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#070709] relative overflow-hidden">
      {/* Dynamic techy background */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
             <span className="font-mono text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
               05 // CONTACT
             </span>
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-1 uppercase tracking-tight">
                Let's Build Together
             </h2>
             <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full mt-2 mb-3"></div>
             <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto font-medium">
               Available for freelance startup engineering, custom Admin IMS backends, and Agentic AI workflows.
             </p>
          </div>
        </FadeInSection>

        <div className="flex flex-col items-center space-y-6">
          {/* Primary CTA - The Mail Button */}
          <FadeInSection delay={0.15}>
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-base sm:text-lg uppercase tracking-tight shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary-500"
            >
              <Mail size={20} className="text-primary-400 dark:text-primary-600" />
              <span>kalash.devworks@gmail.com</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </FadeInSection>

          {/* Secondary Social & Direct Links */}
          <FadeInSection delay={0.25}>
            <div className="flex flex-wrap justify-center gap-2.5">
              <a 
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all font-bold text-xs group shadow-xs"
              >
                <FaLinkedin size={16} className="text-blue-600 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all font-bold text-xs group shadow-xs"
              >
                <FaGithub size={16} className="group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a 
                href={portfolioData.contact.codolio}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all font-bold text-xs group shadow-xs"
              >
                <ExternalLink size={15} className="group-hover:scale-110 transition-transform" />
                <span>Codolio</span>
              </a>
              <a 
                href={`tel:${portfolioData.contact.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-primary-500 transition-all font-bold text-xs group shadow-xs"
              >
                <Phone size={15} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>{portfolioData.contact.phone}</span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
