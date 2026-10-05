import React, { useState } from 'react';
import { FaPython, FaAws, FaReact, FaNodeJs, FaDocker, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiVercel } from 'react-icons/si';
import { Bot, Database, Workflow } from 'lucide-react';
import { editorialData } from '../../data/editorialData';
import { SectionHeading } from './SectionHeading';

export const ToolsSection = ({ isStandalone = false }) => {
  const { toolStacks } = editorialData;
  const [selectedStackId, setSelectedStackId] = useState('all'); // 'all' | 'ai' | 'dev' | 'cloud'

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'python':
        return <FaPython size={32} className="text-[#3776AB]" />;
      case 'langgraph':
        return <Workflow size={32} className="text-[#ff5500]" />;
      case 'langchain':
        return <Bot size={32} className="text-[#10b981]" />;
      case 'aws':
        return <FaAws size={34} className="text-[#FF9900]" />;
      case 'react':
        return <FaReact size={32} className="text-[#61DAFB]" />;
      case 'node':
        return <FaNodeJs size={32} className="text-[#339933]" />;
      case 'javascript':
        return <FaJs size={32} className="text-[#F7DF1E]" />;
      case 'tailwind':
        return <SiTailwindcss size={32} className="text-[#06B6D4]" />;
      case 'docker':
        return <FaDocker size={32} className="text-[#2496ED]" />;
      case 'opensearch':
        return <Database size={30} className="text-[#005EB8]" />;
      case 'pinecone':
        return <Database size={30} className="text-[#0c0c0e]" />;
      case 'vercel':
        return <SiVercel size={30} className="text-[#000000]" />;
      default:
        return <Bot size={30} className="text-black" />;
    }
  };

  const visibleStacks = selectedStackId === 'all'
    ? toolStacks
    : toolStacks.filter(s => s.id === selectedStackId);

  return (
    <section id="tools" className={isStandalone ? "pt-0" : "pt-24 sm:pt-32"}>
      <SectionHeading line1="DEVELOPMENT" line2="TOOLS" />

      {/* Stack Breakdown Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 flex-wrap">
        <button
          onClick={() => setSelectedStackId('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedStackId === 'all'
              ? 'bg-white text-black shadow-md'
              : 'bg-[#1a1a1e] text-[#9ca3af] hover:text-white'
          }`}
        >
          All Stacks
        </button>

        {toolStacks.map((stack) => (
          <button
            key={stack.id}
            onClick={() => setSelectedStackId(stack.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedStackId === stack.id
                ? 'bg-[#ff5500] text-white shadow-md'
                : 'bg-[#1a1a1e] text-[#9ca3af] hover:text-white'
            }`}
          >
            {stack.stackName}
          </button>
        ))}
      </div>

      {/* Render Categorized Stacks */}
      <div className="space-y-12">
        {visibleStacks.map((stack) => (
          <div key={stack.id} className="space-y-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5500] text-left border-b border-white/5 pb-2">
              {`// ${stack.stackName}`}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-left">
              {stack.tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-5 group"
                >
                  {/* White rounded square logo tile (60px x 60px) */}
                  <div className="w-[60px] h-[60px] rounded-[16px] bg-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200">
                    {renderIcon(tool.iconType)}
                  </div>

                  {/* Tool Name & Category */}
                  <div className="flex flex-col">
                    <h4 className="text-[19px] sm:text-[22px] font-semibold text-white tracking-tight group-hover:text-[#ff5500] transition-colors leading-snug">
                      {tool.name}
                    </h4>
                    <p className="text-[13px] sm:text-[14px] text-[#9ca3af] font-normal leading-snug">
                      {tool.category}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
