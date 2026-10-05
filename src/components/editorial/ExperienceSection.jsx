import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { editorialData } from '../../data/editorialData';
import { SectionHeading } from './SectionHeading';

export const ExperienceSection = ({ onNavigate, isStandalone = false }) => {
  const { workExperience } = editorialData;

  const handleLinkClick = (e, url) => {
    if (url?.startsWith('#')) {
      e.preventDefault();
      const targetId = url.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (onNavigate) {
        onNavigate(targetId);
      }
    }
  };

  return (
    <section id="experience" className={isStandalone ? "pt-0" : "pt-24 sm:pt-32"}>
      <SectionHeading line1="+2 YEARS OF" line2="EXPERIENCE" />

      {/* Vertical text list without cards or connecting lines */}
      <div className="flex flex-col space-y-12 sm:space-y-14">
        {workExperience.map((item, index) => {
          const isInternal = item.companyUrl?.startsWith('#');

          const Content = (
            <div className="flex items-start justify-between group py-1 text-left">
              <div className="flex flex-col space-y-1.5 max-w-[480px]">
                {/* Company Name */}
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-tight leading-tight group-hover:text-[#ff5500] transition-colors">
                  {item.company}
                </h3>

                {/* Role */}
                {item.role && (
                  <p className="text-[15px] sm:text-[16px] text-zinc-300 font-medium">
                    {item.role}
                  </p>
                )}

                {/* Description */}
                <p className="text-[14px] sm:text-[16px] text-[#9ca3af] leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* Date range below with spacing */}
                <p className="text-[13px] sm:text-[14px] text-[#ff5500] font-mono font-medium pt-2">
                  {item.startDate} — {item.endDate}
                </p>
              </div>

              {/* Orange diagonal arrow only when company URL exists */}
              {item.companyUrl && (
                <div className="text-[#ff5500] p-2 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  <ArrowUpRight size={24} strokeWidth={2.2} />
                </div>
              )}
            </div>
          );

          return item.companyUrl ? (
            <a
              key={index}
              href={item.companyUrl}
              onClick={(e) => handleLinkClick(e, item.companyUrl)}
              target={isInternal ? undefined : "_blank"}
              rel={isInternal ? undefined : "noreferrer"}
              aria-label={`View ${item.company}`}
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
