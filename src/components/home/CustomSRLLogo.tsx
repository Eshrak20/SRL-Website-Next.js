"use client";

import React from "react";
import { motion } from "framer-motion";

const CustomSRLLogo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex flex-col items-center justify-center select-none"
    >
      {/* Background Decorative "S" - Large and Faded */}
      <span className="absolute -z-10 text-[12rem] font-black text-white/[0.03] pointer-events-none">
        S
      </span>

      <div className="flex items-baseline gap-0.5">
        {/* "SRL" Main Text */}
        <div className="relative group">
          <h2 className="text-7xl md:text-8xl font-black tracking-tighter flex items-center">
            <span className="text-white drop-shadow-2xl">S</span>
            <span className="text-primary -ml-2 drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">R</span>
            <span className="text-white -ml-2">L</span>
          </h2>
          
          {/* Animated underline for the letters */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1.5 bg-primary mt-[-10px] origin-left"
          />
        </div>
      </div>

      {/* "GROUP" Subtitle with high tracking */}
      <div className="mt-2 flex items-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/40" />
        <span className="text-sm md:text-base font-bold tracking-[0.6em] text-white/80 uppercase">
          Group
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/40" />
      </div>

      {/* "LTD" Vertical Badge */}
      <div className="absolute -right-12 top-0 h-full flex items-center">
        <span className="rotate-90 text-[10px] font-mono tracking-[0.3em] text-primary/60 uppercase whitespace-nowrap border-l border-primary/30 pl-4">
          Est. 2026
        </span>
      </div>
    </motion.div>
  );
};

export default CustomSRLLogo;