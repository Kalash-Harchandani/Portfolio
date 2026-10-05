import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { editorialData } from '../../data/editorialData';
import { SectionHeading } from './SectionHeading';

export const StartupProjectsSection = ({ isStandalone = false }) => {
  const startupProjects = editorialData.projects.filter(p => p.category === 'startup');

  return (
    <section id="startup-projects" className={isStandalone ? "pt-0" : "pt-24 sm:pt-32"}>
      <SectionHeading line1="STARTUP" line2="PROJECTS" />

      {/* Vertical list of Startup projects */}
      <div className="flex flex-col space-y-10 sm:space-y-12">
        {startupProjects.map((project, index) => {
          const Content = (
            <div className="flex items-center justify-between group py-1 transition-opacity duration-200 hover:opacity-90">
              {/* Left thumbnail & details */}
              <div className="flex items-center gap-5 sm:gap-7">
                {/* Thumbnail 16:10 landscape rectangle */}
                <div className="w-[140px] h-[90px] sm:w-[220px] sm:h-[135px] rounded-[16px] overflow-hidden bg-[#18181b] shrink-0 border border-white/10 shadow-md">
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
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Live Startup Client
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[28px] font-semibold text-white tracking-tight leading-tight group-hover:text-[#ff5500] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-[#9ca3af] font-normal mt-1 leading-snug max-w-[460px]">
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
