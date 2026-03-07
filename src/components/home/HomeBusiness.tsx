"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { ArrowUpRight, Sparkles, ChevronRight, Building2, Globe, TrendingUp } from "lucide-react";
import {
  businessData,
  BusinessVertical,
} from "@/src/data/HomeData/HomeBusiness.data";
import SectionTitle from "../SectionTitle";

const HomeBusiness = () => {
  const [activeVertical, setActiveVertical] = useState<BusinessVertical>(
    businessData[0],
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotate through businesses
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      const currentIndex = businessData.findIndex(b => b.id === activeVertical.id);
      const nextIndex = (currentIndex + 1) % businessData.length;
      setActiveVertical(businessData[nextIndex]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeVertical, isAutoRotating]);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-background/95 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with animated elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Background decorative elements */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-primary/10 rounded-full"
          />
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Business Verticals</span>
            </motion.div>
            
            <SectionTitle name="Businesses" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Exploring diverse industries with innovative solutions and global reach
            </motion.p>
          </div>
        </motion.div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Grid: 2 Columns of Categories */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-5 h-fit"
          >
            {businessData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => {
                  setHoveredId(item.id);
                  setIsAutoRotating(false);
                }}
                onHoverEnd={() => {
                  setHoveredId(null);
                  setIsAutoRotating(true);
                }}
              >
                <button
                  onClick={() => {
                    setActiveVertical(item);
                    setIsAutoRotating(false);
                    setTimeout(() => setIsAutoRotating(true), 10000);
                  }}
                  className={cn(
                    "relative group w-full h-40 overflow-hidden rounded-2xl transition-all duration-500",
                    activeVertical.id === item.id
                      ? "ring-4 ring-primary ring-offset-4 ring-offset-background shadow-2xl"
                      : "shadow-lg hover:shadow-xl",
                  )}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated gradient overlays */}
                  <motion.div
                    animate={{
                      background: activeVertical.id === item.id 
                        ? "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(168,85,247,0.9))"
                        : "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))",
                    }}
                    className="absolute inset-0 transition-all duration-500"
                  />

                  {/* Hover shine effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredId === item.id ? "100%" : "-100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end items-start text-white">
                    <div className="w-full">
                      {/* Icon container */}
                      <motion.div
                        animate={{ rotate: activeVertical.id === item.id ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-2"
                      >
                        <Building2 className="w-5 h-5 text-white/80" />
                      </motion.div>
                      
                      <div className="flex justify-between w-full items-center border-b border-white/30 pb-2">
                        <span className="text-sm font-bold uppercase tracking-wider">
                          {item.title}
                        </span>
                        <motion.div
                          animate={{ x: hoveredId === item.id ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className={cn(
                            "w-4 h-4 transition-all duration-300",
                            hoveredId === item.id ? "opacity-100" : "opacity-0"
                          )} />
                        </motion.div>
                      </div>
                      
                      {/* Animated progress indicator for active item */}
                      {activeVertical.id === item.id && (
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          className="h-0.5 bg-white mt-2"
                        />
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section: Featured View */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 relative h-[600px] overflow-hidden rounded-3xl group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVertical.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeVertical.featuredImage}
                  alt={activeVertical.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Dynamic gradient overlay */}
            <motion.div 
              animate={{
                background: [
                  "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
                  "linear-gradient(to top, rgba(59,130,246,0.9), rgba(0,0,0,0.2))",
                  "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0"
            />

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Content on Image */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-10"
            >
              {/* Title with animation */}
              <motion.h2 
                key={activeVertical.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {activeVertical.title}
              </motion.h2>

              {/* Subcategories with hover effects */}
              <div className="flex flex-wrap gap-4 mb-8">
                <AnimatePresence>
                  {activeVertical.subCategories.map((sub, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        href={sub.link}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 text-sm font-medium border border-white/20"
                      >
                        <Globe className="w-3 h-3" />
                        {sub.name}
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Stats indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 mb-6"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-white/80 text-sm">Growth +45%</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80 text-sm">12 Countries</span>
                </div>
              </motion.div>

              {/* Explore link with animation */}
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href={activeVertical.exploreLink}
                  className="inline-flex items-center gap-3 text-white font-semibold uppercase text-xs tracking-[0.2em] group/link"
                >
                  <span className="relative">
                    Explore More
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 bg-white"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Interactive corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/30 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-white/30 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-white/30 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/30 rounded-br-3xl" />
          </motion.div>
        </div>

        {/* Bottom navigation dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-3 mt-10"
        >
          {businessData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveVertical(item);
                setIsAutoRotating(false);
                setTimeout(() => setIsAutoRotating(true), 10000);
              }}
              className="group"
            >
              <motion.div
                animate={{
                  scale: activeVertical.id === item.id ? 1.2 : 1,
                  backgroundColor: activeVertical.id === item.id 
                    ? "rgb(59, 130, 246)" 
                    : "rgba(59, 130, 246, 0.3)",
                }}
                whileHover={{ scale: 1.2 }}
                className="w-2.5 h-2.5 rounded-full cursor-pointer transition-all"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBusiness;