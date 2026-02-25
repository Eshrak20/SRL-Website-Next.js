"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeGalleryData } from "@/src/data/HomeData/HomeGallery";

const HomeGallery = () => {
  const allImages = homeGalleryData.images;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (clickedIndex: React.SetStateAction<number>) => {
    setActiveIndex(clickedIndex);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(allImages[(activeIndex + i) % allImages.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-[10px] mb-3 block">
            Sustainability Law & Real Estate 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter italic">
            {homeGalleryData.sectionTitle}
          </h2>
        </div>
        <div className="text-gray-300 font-black text-5xl hidden md:block">
          {(activeIndex + 1).toString().padStart(2, '0')}
          <span className="text-sm text-gray-200 ml-2">/ {allImages.length}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[600px] gap-3 overflow-hidden">
        {visibleItems.map((item, index) => {
          const isActive = index === 0;
          const isCollapsed = !isActive;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => {
                const actualIdx = allImages.findIndex(img => img.id === item.id);
                handleImageClick(actualIdx);
              }}
              animate={{ 
                flex: isActive ? 6 : 0.6, // Much bigger difference between active and collapsed
              }}
              transition={{ 
                duration: 0.5, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className={`relative overflow-hidden rounded-xl h-full bg-neutral-900 shadow-xl ${
                isCollapsed ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-700 
                    ${isActive ? "opacity-100" : "opacity-40"}`}
                />
              </motion.div>
              
              {/* Gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                animate={{
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Vertical Label (Collapsed Items) */}
              <AnimatePresence>
                {isCollapsed && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <motion.p 
                      className="rotate-[-90deg] whitespace-nowrap text-white/60 font-bold tracking-[0.3em] uppercase text-[10px]"
                    >
                      {item.label}
                    </motion.p>
                    
                    {/* Subtle indicator that it's clickable */}
                    <motion.div 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.5, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
                        <ArrowRight size={12} className="text-white/50 rotate-45" />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content (Active Item) */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute inset-0 flex flex-col justify-end p-10 text-white"
                  >
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <div className="h-px w-8 bg-primary" />
                      <span className="text-[10px] tracking-[0.4em] font-bold text-primary uppercase">
                        {item.label}
                      </span>
                    </motion.div>

                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-3xl md:text-5xl font-black mb-4 uppercase leading-[0.9] max-w-lg italic"
                    >
                      {item.title}
                    </motion.h3>

                    {item.subtitle && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 max-w-sm mb-8 text-sm leading-relaxed"
                      >
                        {item.subtitle}
                      </motion.p>
                    )}

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="flex items-center justify-between border-t border-white/20 pt-6"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white">{item.statValue || "2026"}</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                          {item.statLabel || "COMPLIANCE"}
                        </span>
                      </div>
                       
                      <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-primary transition-colors rounded-full backdrop-blur-md group/btn"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest">Details</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Click indicator on collapsed items (shows on hover) */}
              {isCollapsed && (
                <motion.div 
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      
      {/* Instruction text */}
      <p className="text-center text-xs text-gray-400 mt-6 uppercase tracking-widest">
        Click on any collapsed image to make it active
      </p>
    </section>
  );
};

export default HomeGallery;