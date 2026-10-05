import React from 'react';
import { Home, Store, Cpu, Briefcase, Wrench, Mail } from 'lucide-react';

export const IconNavigation = ({ activeSection, onSelectSection }) => {
  const navItems = [
    { id: 'all', label: 'Home / All', icon: Home },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'startup-projects', label: 'Startup Projects', icon: Store },
    { id: 'technical-projects', label: 'Technical Projects', icon: Cpu },
    { id: 'tools', label: 'Development Tools', icon: Wrench },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleClick = (id) => {
    // If clicking home or clicking the already active section, toggle to all
    if (id === 'all' || activeSection === id) {
      onSelectSection('all');
    } else {
      onSelectSection(id);
    }
  };

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed top-[18px] sm:top-[26px] left-1/2 -translate-x-1/2 z-50 h-[48px] bg-[#16161a]/95 border border-[#27272a] rounded-xl flex items-center justify-around px-2 sm:px-3 gap-0.5 sm:gap-1 shadow-2xl backdrop-blur-md"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id || (item.id === 'all' && activeSection === 'all');
        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            aria-label={item.label}
            className={`p-2 rounded-lg transition-all duration-200 cursor-pointer relative group ${
              isActive
                ? 'text-[#ff5500] bg-white/10 shadow-xs'
                : 'text-[#9ca3af] hover:text-white hover:bg-white/5'
            }`}
            title={item.label}
          >
            <Icon size={18} strokeWidth={isActive ? 2.3 : 1.8} />
            <span className="sr-only">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
