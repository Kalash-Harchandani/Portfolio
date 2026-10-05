import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, ArrowUpRight, Copy, Check, Send, X } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

export const ExpandedContact = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 dark:bg-black/90 backdrop-blur-xl"
      />

      {/* Modal Card */}
      <motion.div
        layoutId="contact-action-hub"
        transition={{ type: "spring", damping: 26, stiffness: 260 }}
        className="relative z-10 w-full max-w-xl rounded-3xl bg-white dark:bg-[#0c0c12] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary-600/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400">
              <Send size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {"// DIRECT INITIATION"}
              </p>
              <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Let's Build Together
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-white/[0.08] hover:bg-slate-300 dark:hover:bg-white/15 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold transition-all cursor-pointer"
          >
            <span className="text-[10px] text-slate-500 dark:text-slate-400">ESC</span>
            <X size={15} />
          </button>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Available for freelance engineering, autonomous Agentic AI workflows, and startup platforms with custom Admin IMS.
        </p>

        {/* Email Direct Trigger */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="flex-1 w-full py-3.5 px-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg group"
          >
            <Mail size={16} className="text-primary-400 dark:text-primary-600 group-hover:rotate-12 transition-transform" />
            <span>{portfolioData.contact.email}</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto py-3.5 px-4 rounded-2xl bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-200 dark:border-white/5"
          >
            {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1 group"
          >
            <FaLinkedin size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">LinkedIn</span>
          </a>

          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1 group"
          >
            <FaGithub size={18} className="text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">GitHub</span>
          </a>

          <a
            href={portfolioData.contact.codolio}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1 group"
          >
            <ExternalLink size={18} className="text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Codolio</span>
          </a>

          <a
            href={`tel:${portfolioData.contact.phone}`}
            className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-primary-500 transition-all flex flex-col items-center gap-1 group"
          >
            <Phone size={18} className="text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Phone</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
