import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const ModalWrapper = ({ title, subtitle, icon: Icon, onClose, children, maxWidth = 'max-w-6xl' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 dark:bg-black/85 backdrop-blur-md"
      />

      {/* Floating Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { type: 'spring', damping: 26, stiffness: 280 }
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.95, 
          y: 15,
          transition: { duration: 0.2 }
        }}
        className={`relative z-10 w-full ${maxWidth} max-h-[90vh] flex flex-col rounded-3xl bg-white/95 dark:bg-[#0c0c12]/95 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="p-2 rounded-xl bg-primary-600/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400">
                <Icon size={18} />
              </div>
            )}
            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {subtitle || '// INSPECTION PANEL'}
              </p>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                {title}
              </h2>
            </div>
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-white/[0.08] hover:bg-slate-300 dark:hover:bg-white/15 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold transition-all cursor-pointer group"
          >
            <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">
              ESC
            </span>
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scroll">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
