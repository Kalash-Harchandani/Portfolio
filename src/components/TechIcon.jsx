import React from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiDocker, 
  SiVercel, 
  SiCplusplus, 
  SiJavascript, 
  SiGoogle, 
  SiGooglegemini,
  SiGithub,
  SiTailwindcss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Code, Database } from 'lucide-react';

export const TechIcon = ({ tech, className = "mr-1.5" }) => {
  const normalized = tech.toLowerCase();
  
  if (normalized.includes('react')) return <SiReact size={14} className={`${className} text-[#61DAFB]`} />;
  if (normalized.includes('node')) return <SiNodedotjs size={14} className={`${className} text-[#339933]`} />;
  if (normalized.includes('express')) return <SiExpress size={14} className={`${className} text-slate-800 dark:text-white`} />;
  if (normalized.includes('mongo')) return <SiMongodb size={14} className={`${className} text-[#47A248]`} />;
  if (normalized.includes('mysql')) return <SiMysql size={14} className={`${className} text-[#4479A1]`} />;
  if (normalized.includes('aws')) return <FaAws size={14} className={`${className} text-[#FF9900]`} />;
  if (normalized.includes('docker')) return <SiDocker size={14} className={`${className} text-[#2496ED]`} />;
  if (normalized.includes('vercel')) return <SiVercel size={14} className={`${className} text-slate-900 dark:text-white`} />;
  if (normalized.includes('c++')) return <SiCplusplus size={14} className={`${className} text-[#00599C]`} />;
  if (normalized.includes('javascript')) return <SiJavascript size={14} className={`${className} text-[#F7DF1E] bg-black/5 dark:bg-transparent rounded-sm`} />;
  if (normalized.includes('gemini')) return <SiGooglegemini size={14} className={`${className} text-[#4285F4]`} />;
  if (normalized.includes('google')) return <SiGoogle size={14} className={`${className} text-[#4285F4]`} />;
  if (normalized.includes('pinecone')) return <Database size={14} className={`${className} text-primary-600`} />;
  if (normalized.includes('github') || normalized.includes('git')) return <SiGithub size={14} className={`${className} text-[#181717] dark:text-white`} />;
  if (normalized.includes('tailwind')) return <SiTailwindcss size={14} className={`${className} text-[#06B6D4]`} />;
  if (normalized.includes('mern')) return (
    <div className={`flex -space-x-1 ${className}`}>
      <SiMongodb size={12} className="text-[#47A248] z-10" />
      <SiExpress size={12} className="text-slate-800 dark:text-white z-20" />
      <SiReact size={12} className="text-[#61DAFB] z-30" />
      <SiNodedotjs size={12} className="text-[#339933] z-40" />
    </div>
  );

  return <Code size={14} className={`${className} text-slate-500`} />;
};
