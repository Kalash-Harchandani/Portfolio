import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { editorialData } from '../../data/editorialData';

export const ProfileCard = () => {
  const { fullName, profileCardBio, portraitImage } = editorialData.identity;
  const { github, linkedin, email } = editorialData.socialLinks;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (email) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="group relative w-full max-w-[344px] h-[640px] bg-white rounded-[24px] shadow-2xl p-5 flex flex-col justify-between text-center overflow-hidden mx-auto select-none border border-black/5 hover:border-[#ff5500]/60 hover:shadow-[0_24px_50px_-12px_rgba(255,85,0,0.22)] hover:-translate-y-1.5 transition-all duration-300 ease-out">
      
      {/* Subtle Glowing Orange Line at top on card hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff5500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Big, Crisp Portrait Photo with Smooth Zoom & Live Status Badge */}
      <div className="w-full h-[365px] rounded-[18px] overflow-hidden bg-slate-100 shadow-sm relative shrink-0">
        <img
          src={portraitImage}
          alt={fullName}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="eager"
        />

        {/* Live Status Badge */}
        <div className="absolute bottom-3 left-3 bg-[#0c0c0e]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 shadow-lg group-hover:border-[#ff5500]/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
          </span>
          <span className="text-[10px] font-mono font-semibold text-white tracking-wider uppercase">
            Available for Work
          </span>
        </div>
      </div>

      {/* Name: Font & Styling Matching the Site (Poppins, Uppercase, Extrabold) */}
      <div className="flex flex-col items-center mt-2.5">
        <h2 className="text-[25px] sm:text-[27px] font-extrabold uppercase tracking-tight text-[#0c0c0e] leading-tight group-hover:text-[#ff5500] transition-colors duration-200">
          {fullName}
        </h2>
        <span className="text-[11px] font-mono font-bold text-[#ff5500] tracking-widest uppercase mt-1">
          AI Engineer & Developer
        </span>
      </div>

      {/* About/Bio: Typography Matching the Site's Clean Body Text */}
      <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-relaxed font-normal max-w-[280px] mx-auto px-1">
        {profileCardBio}
      </p>

      {/* Clean Interactive Social Dock (CV Removed, Smooth Hover Elevation & Glow) */}
      <div className="flex items-center justify-center gap-4 pt-1 pb-1">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 rounded-full border border-[#ff5500] text-[#ff5500] flex items-center justify-center hover:bg-[#ff5500] hover:text-white hover:scale-115 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(255,85,0,0.35)] active:scale-95 transition-all duration-200 ease-out"
          >
            <FaGithub size={18} />
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-11 h-11 rounded-full border border-[#ff5500] text-[#ff5500] flex items-center justify-center hover:bg-[#ff5500] hover:text-white hover:scale-115 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(255,85,0,0.35)] active:scale-95 transition-all duration-200 ease-out"
          >
            <FaLinkedin size={18} />
          </a>
        )}

        {email && (
          <button
            onClick={handleCopyEmail}
            aria-label="Email or Copy Address"
            className="relative w-11 h-11 rounded-full border border-[#ff5500] text-[#ff5500] flex items-center justify-center hover:bg-[#ff5500] hover:text-white hover:scale-115 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(255,85,0,0.35)] active:scale-95 transition-all duration-200 ease-out cursor-pointer"
            title="Click to copy & email"
          >
            {copiedEmail ? <Check size={18} /> : <Mail size={18} />}
            {copiedEmail && (
              <span className="absolute -top-7 px-2 py-0.5 rounded bg-[#0c0c0e] text-white text-[10px] font-mono shadow-md whitespace-nowrap animate-fade-in">
                Copied!
              </span>
            )}
          </button>
        )}
      </div>

    </div>
  );
};
