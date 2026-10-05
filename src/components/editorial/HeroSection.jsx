import React from 'react';
import { editorialData } from '../../data/editorialData';
import { FeatureCard } from './FeatureCard';

export const HeroSection = ({ onNavigate }) => {
  const { heroHeadingLine1, heroHeadingLine2, heroIntro } = editorialData.identity;
  const { heroStats, featureCards } = editorialData;

  return (
    <section id="home" className="flex flex-col space-y-10 sm:space-y-12">
      {/* 2-Line Hero Headline */}
      <div className="space-y-0 text-left">
        <h1 className="font-extrabold uppercase tracking-tight leading-[0.9] text-[64px] sm:text-[96px] lg:text-[112px]">
          <span className="block text-white">
            {heroHeadingLine1}
          </span>
          <span className="block text-[#26262c]">
            {heroHeadingLine2}
          </span>
        </h1>
      </div>

      {/* Hero Introduction */}
      <p className="text-[17px] sm:text-[18px] text-[#9ca3af] leading-relaxed max-w-[480px] font-normal text-left">
        {heroIntro}
      </p>

      {/* Three Statistics in Horizontal Row */}
      <div className="flex items-start gap-8 sm:gap-14 pt-2 pb-4 text-left">
        {heroStats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-[54px] sm:text-[68px] lg:text-[72px] font-extrabold text-white leading-none tracking-tight">
              {stat.value}
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase text-[#9ca3af] tracking-wider mt-2 leading-tight max-w-[100px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Two Feature Cards:
          - Orange: Agentic AI -> Opens Technical Projects
          - Lime: E-Commerce & Startups -> Opens Startup Projects
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        <FeatureCard
          type="orange"
          title={featureCards.orange.title}
          link={featureCards.orange.link}
          onNavigate={onNavigate}
        />
        <FeatureCard
          type="lime"
          title={featureCards.lime.title}
          link={featureCards.lime.link}
          onNavigate={onNavigate}
        />
      </div>
    </section>
  );
};
