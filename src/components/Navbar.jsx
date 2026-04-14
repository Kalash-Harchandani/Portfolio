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
        ? 'top-6 w-[95%] max-w-[800px] rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]' 
        : 'top-0 w-full bg-transparent'
    }`}>
      <div className={`mx-auto transition-all duration-500 ${scrolled ? 'px-8' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`flex items-center justify-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'} relative`}>
          
          {/* Logo completely removed as requested */}
          
          {/* Centered Desktop Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveHash(link.href)}
                    className={`relative px-4 py-2 flex items-center gap-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 group ${
                      isActive 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-500/10' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon size={16} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span className={scrolled ? 'hidden lg:inline' : 'inline'}>{link.name}</span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-primary-500/10 dark:bg-primary-400/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Theme Toggle - Positioned to the right of center or absolute right */}
          <div className="absolute right-0 flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                scrolled 
                  ? 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10' 
                  : 'bg-white/10 dark:bg-white/5 text-slate-900 dark:text-white backdrop-blur-md border border-slate-200 dark:border-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-800 dark:text-white transition-transform active:scale-90"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
