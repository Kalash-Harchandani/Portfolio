import React from 'react';

export const SectionHeading = ({ line1, line2, id }) => {
  return (
    <h2 id={id} className="font-extrabold uppercase tracking-tight leading-[0.92] text-left mb-10 sm:mb-12">
      <span className="block text-white text-[44px] sm:text-[68px] lg:text-[86px]">
        {line1}
      </span>
      <span className="block text-[#26262c] text-[44px] sm:text-[68px] lg:text-[86px]">
        {line2}
      </span>
    </h2>
  );
};
