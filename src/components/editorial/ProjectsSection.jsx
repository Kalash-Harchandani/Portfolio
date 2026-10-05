import React, { useState } from 'react';
import { ArrowUpRight, Store, Cpu } from 'lucide-react';
import { editorialData } from '../../data/editorialData';
import { SectionHeading } from './SectionHeading';

export const ProjectsSection = () => {
  const { projects } = editorialData;
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'startup' | 'technical'

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="pt-24 sm:pt-32">
      <SectionHeading line1="RECENT" line2="PROJECTS" />

      {/* Filter Tabs: Startup Projects vs Technical Projects */}
      <div className="flex items-center gap-2 mb-10 flex-wrap">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-white text-black shadow-md'
              : 'bg-[#1a1a1e] text-[#9ca3af] hover:text-white'
          }`}
        >
          All Projects ({projects.length})
        </button>

        <button
          onClick={() => setActiveFilter('startup')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeFilter === 'startup'
              ? 'bg-[#ff5500] text-white shadow-md'
              : 'bg-[#1a1a1e] text-[#9ca3af] hover:text-white'
          }`}
        >
          <Store size={14} />
          <span>Startup Projects (2)</span>
        </button>

        <button
          onClick={() => setActiveFilter('technical')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeFilter === 'technical'
              ? 'bg-[#ff5500] text-white shadow-md'
              : 'bg-[#1a1a1e] text-[#9ca3af] hover:text-white'
          }`}
        >
          <Cpu size={14} />
          <span>Technical Projects (2)</span>
        </button>
      </div>

      {/* Vertical list of projects without card backgrounds */}
      <div className="flex flex-col space-y-10 sm:space-y-12">
        {filteredProjects.map((project, index) => {
          const isStartup = project.category === 'startup';

          const Content = (
            <div className="flex items-center justify-between group py-1 transition-opacity duration-200 hover:opacity-90">
              {/* Left thumbnail & details */}
              <div className="flex items-center gap-5 sm:gap-7">
                {/* Thumbnail 130px x 136px */}
                <div className="w-[110px] h-[115px] sm:w-[130px] sm:h-[136px] rounded-[16px] overflow-hidden bg-[#18181b] shrink-0 border border-white/10 shadow-md">
                  <img
                    src={project.thumbnail}
                    alt={project.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Name, Badge & Subtitle */}
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                      isStartup 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    }`}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[28px] font-semibold text-white tracking-tight leading-tight group-hover:text-[#ff5500] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-[#9ca3af] font-normal mt-1 leading-snug max-w-[450px]">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Small orange diagonal arrow on far right */}
              <div className="text-[#ff5500] p-2 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                <ArrowUpRight size={26} strokeWidth={2.2} />
              </div>
            </div>
          );

          return project.destination ? (
            <a
              key={index}
              href={project.destination}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name}`}
              className="block cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#ff5500] rounded-xl"
            >
              {Content}
            </a>
          ) : (
            <div key={index}>{Content}</div>
          );
        })}
      </div>
    </section>
  );
};
