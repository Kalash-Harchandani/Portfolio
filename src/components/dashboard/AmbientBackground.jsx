import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const AmbientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const springX = useSpring(mousePosition.x, { damping: 30, stiffness: 200 });
  const springY = useSpring(mousePosition.y, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px] opacity-70"></div>
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80 dark:to-[#070709]/90"></div>

      {/* Ambient Pulsing Atmospheric Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/20 dark:bg-primary-500/15 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.2, 0.12],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/15 dark:bg-purple-600/15 blur-[150px] rounded-full"
      />

      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        className="hidden md:block absolute -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary-500/10 via-indigo-500/10 to-transparent blur-[80px]"
        style={{
          left: springX,
          top: springY,
        }}
      />
    </div>
  );
};
