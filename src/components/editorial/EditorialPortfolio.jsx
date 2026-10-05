import React, { useState } from 'react';
import { IconNavigation } from './IconNavigation';
import { ProfileCard } from './ProfileCard';
import { HeroSection } from './HeroSection';
import { StartupProjectsSection } from './StartupProjectsSection';
import { TechnicalProjectsSection } from './TechnicalProjectsSection';
import { ExperienceSection } from './ExperienceSection';
import { ToolsSection } from './ToolsSection';
import { ContactSection } from './ContactSection';

export const EditorialPortfolio = () => {
  const [activeSection, setActiveSection] = useState('all'); 
  // 'all' | 'home' | 'startup-projects' | 'technical-projects' | 'experience' | 'tools' | 'contact'

  const isStandalone = activeSection !== 'all';

  const handleSectionSelect = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0e0e11] text-white selection:bg-[#ff5500]/30 selection:text-[#ff5500] font-sans antialiased relative">
      

      {/* Centered Top Icon Navigation */}
      <IconNavigation
        activeSection={activeSection}
        onSelectSection={handleSectionSelect}
      />

      {/* Main Two-Column Layout Container: Tightened padding when standalone to remove negative spacing */}
      <div className={`max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 pb-12 transition-all duration-300 ${
        isStandalone ? 'pt-[76px] sm:pt-[90px]' : 'pt-[100px] sm:pt-[130px]'
      }`}>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[50px] lg:gap-[100px] relative">
          
          {/* Left Column: White Profile Card (Sticky on Desktop, follows user scroll) */}
          <aside className={`w-full lg:w-[344px] shrink-0 self-start z-30 ${
            isStandalone ? 'lg:sticky lg:top-[85px]' : 'lg:sticky lg:top-[100px]'
          }`}>
            <ProfileCard />
          </aside>

          {/* Right Column: Content Area (Renders all sections at start, or specific section when clicked) */}
          <main className="w-full lg:w-[696px] flex flex-col min-h-[640px]">
            
            {/* Section Rendering: Hero -> Experience -> Startup Projects -> Technical Projects -> Tools -> Contact */}
            {(activeSection === 'all' || activeSection === 'home') && (
              <HeroSection onNavigate={handleSectionSelect} />
            )}

            {(activeSection === 'all' || activeSection === 'experience') && (
              <ExperienceSection onNavigate={handleSectionSelect} isStandalone={isStandalone} />
            )}

            {(activeSection === 'all' || activeSection === 'startup-projects') && (
              <StartupProjectsSection isStandalone={isStandalone} />
            )}

            {(activeSection === 'all' || activeSection === 'technical-projects') && (
              <TechnicalProjectsSection isStandalone={isStandalone} />
            )}

            {(activeSection === 'all' || activeSection === 'tools') && (
              <ToolsSection isStandalone={isStandalone} />
            )}

            {(activeSection === 'all' || activeSection === 'contact') && (
              <ContactSection isStandalone={isStandalone} />
            )}
          </main>

        </div>
      </div>

    </div>
  );
};
