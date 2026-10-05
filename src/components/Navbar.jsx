import React, { useState, useEffect, useMemo } from 'react';
import { Moon, Sun, Menu, X, User, Cpu, Laptop, History, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(() => [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Laptop },
    { name: 'Experience', href: '#experience', icon: History },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link tracker
      const sections = links.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = '#' + section;
        }
      }
      setActiveHash(current || '#home');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[0.22,1,0.36,1] ${
      scrolled 
        ? 'top-4 w-[92%] max-w-[860px] rounded-full bg-white/80 dark:bg-[#0d0d12]/80 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]' 
        : 'top-0 w-full bg-transparent'
    }`}>
      <div className={`mx-auto transition-all duration-500 ${scrolled ? 'px-6' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-14' : 'h-20'} relative`}>
          
          {/* Technical Brand Signature */}
          <a 
            href="#home" 
            className="flex items-center gap-2 text-slate-900 dark:text-white group transition-transform hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs font-black tracking-widest uppercase">
              KH<span className="text-primary-500">.AI</span>
            </span>
          </a>
          
          {/* Centered Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-100/60 dark:bg-white/[0.04] p-1 rounded-full border border-slate-200/60 dark:border-white/[0.06]">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`relative px-3.5 py-1.5 flex items-center gap-1.5 rounded-full text-xs font-bold tracking-tight transition-all duration-300 group ${
                    isActive 
                      ? 'text-white dark:text-black bg-slate-900 dark:bg-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={13} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
          
          {/* Actions on Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-white border border-slate-200/80 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-slate-800 dark:text-white bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className={`absolute top-full left-0 right-0 mt-2 mx-4 overflow-hidden rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl md:hidden`}
          >
            <div className="p-4 space-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveHash(link.href);
                    }}
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl text-base font-bold text-slate-800 dark:text-white hover:bg-primary-500/10 hover:text-primary-600 transition-all"
                  >
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5">
                      <Icon size={20} />
                    </div>
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
