import React from 'react';
import { Bot, Store, ArrowUpRight } from 'lucide-react';

export const FeatureCard = ({ type, title, link, onNavigate }) => {
  const isOrange = type === 'orange';

  const handleClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(isOrange ? 'technical-projects' : 'startup-projects');
    }
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={`relative w-full h-[230px] sm:h-[240px] rounded-[14px] p-6 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-xl group cursor-pointer ${
        isOrange ? 'bg-[#ff5500] text-white' : 'bg-[#c6ff00] text-[#0c0c0e]'
      }`}
    >
      {/* Decorative lines SVG */}
      {isOrange ? (
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          viewBox="0 0 300 240"
          fill="none"
        >
          <path
            d="M -20,120 Q 80,40 180,120 T 320,120"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M -20,160 Q 80,80 180,160 T 320,160"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
          viewBox="0 0 300 240"
          fill="none"
        >
          <path
            d="M 10,200 L 60,160 L 110,200 L 160,160 L 210,200 L 260,160 L 310,200"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 10,220 L 60,180 L 110,220 L 160,180 L 210,220 L 260,180 L 310,220"
            stroke="#000000"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )}

      {/* Top Icon */}
      <div className="z-10">
        {isOrange ? (
          <Bot size={28} strokeWidth={1.8} className="text-white" />
        ) : (
          <Store size={28} strokeWidth={1.8} className="text-[#0c0c0e]" />
        )}
      </div>

      {/* Title & Arrow Button in bottom-right */}
      <div className="z-10 flex items-end justify-between gap-3">
        <h3 className="font-extrabold uppercase text-[20px] sm:text-[22px] leading-tight tracking-tight max-w-[210px]">
          {title}
        </h3>

        {/* Small outlined square arrow button */}
        <div
          className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            isOrange
              ? 'border-white/60 text-white'
              : 'border-black/50 text-[#0c0c0e]'
          }`}
        >
          <ArrowUpRight size={18} strokeWidth={2.2} />
        </div>
      </div>
    </a>
  );
};
