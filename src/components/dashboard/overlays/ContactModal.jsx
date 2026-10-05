import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../../data/portfolioData';
import { ModalWrapper } from './ModalWrapper';

export const ContactModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ModalWrapper
      title="Initiate Collaboration"
      subtitle="// DIRECT COMMUNICATION CHANNEL"
      icon={Send}
      onClose={onClose}
      maxWidth="max-w-2xl"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
          Available for freelance engineering, autonomous Agentic AI workflows, and startup platforms with custom Admin IMS.
        </p>

        {/* Email Direct CTA */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-2.5">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="flex-1 w-full py-4 px-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl group"
          >
            <Mail size={18} className="text-primary-400 dark:text-primary-600 group-hover:rotate-12 transition-transform" />
            <span>{portfolioData.contact.email}</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto py-4 px-5 rounded-2xl bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-200 dark:border-white/5"
            title="Copy Email to Clipboard"
          >
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Channels Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1.5 group"
          >
            <FaLinkedin size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">LinkedIn</span>
          </a>

          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1.5 group"
          >
            <FaGithub size={20} className="text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">GitHub</span>
          </a>

          <a
            href={portfolioData.contact.codolio}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1.5 group"
          >
            <ExternalLink size={20} className="text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Codolio</span>
          </a>

          <a
            href={`tel:${portfolioData.contact.phone}`}
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1.5 group"
          >
            <Phone size={20} className="text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Direct Call</span>
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
};
