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
    <section className="py-24 container mx-auto px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
            <SectionTitle name="Business Verticals" />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Animated Halo Background */}
          <motion.div 
            animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Navigation Grid */}
          <motion.div className="lg:col-span-5 grid grid-cols-2 gap-4 h-fit">
            {businessData.map((item, index) => (
              <motion.div
                key={item.id}
                onHoverStart={() => { setHoveredId(item.id); setIsAutoRotating(false); }}
                onHoverEnd={() => { setHoveredId(null); setIsAutoRotating(true); }}
              >
                <button
                  onClick={() => { setActiveVertical(item); setIsAutoRotating(false); }}
                  className={cn(
                    "relative group w-full h-44 overflow-hidden rounded-[2rem] transition-all duration-500 border-2",
                    activeVertical.id === item.id
                      ? "border-primary shadow-2xl shadow-primary/20 scale-[1.02]"
                      : "border-transparent bg-card shadow-sm hover:shadow-md",
                  )}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-1000",
                      activeVertical.id === item.id ? "scale-110" : "group-hover:scale-105"
                    )}
                  />
                  
                  {/* Overlay using Shadcn Primary with Opacity */}
                  <div className={cn(
                    "absolute inset-0 transition-all duration-500",
                    activeVertical.id === item.id 
                      ? "bg-gradient-to-br from-primary/80 to-primary/40" 
                      : "bg-black/40 group-hover:bg-black/20"
                  )} />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <Building2 className={cn(
                      "w-5 h-5 mb-auto transition-all duration-500",
                      activeVertical.id === item.id ? "text-white" : "text-white/40"
                    )} />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-black uppercase tracking-tighter">
                          {item.title}
                        </span>
                        <ArrowUpRight className={cn(
                          "w-4 h-4 transition-transform",
                          activeVertical.id === item.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                        )} />
                      </div>
                      
                      {/* Progressive Loading Line for active item */}
                      {activeVertical.id === item.id && (
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          className="h-1 bg-white/40 rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Featured Preview */}
          <motion.div className="lg:col-span-7 relative h-192.5 overflow-hidden rounded-[3rem] group bg-black border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVertical.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeVertical.featuredImage}
                  alt={activeVertical.title}
                  fill
                  className="object-cover scale-[1.01]"
                  priority
                />
                {/* Modern Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
            
            {/* Featured Content Info */}
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <motion.div
                key={`content-${activeVertical.id}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                  {activeVertical.title}
                </h2>

                <div className="flex flex-wrap gap-3 mb-10">
                  {activeVertical.subCategories.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.link}
                      className="px-6 py-2.5 bg-background/20 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-primary hover:border-primary transition-all text-xs font-bold uppercase tracking-widest"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-8 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <TrendingUp size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Industry Leader</p>
                      <p className="text-white/60 text-xs">Top Tier Growth</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Globe size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Global Market</p>
                      <p className="text-white/60 text-xs">Active in 15+ Regions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Glassy Corner Indicators */}
            <div className="absolute top-8 left-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Venture No. {activeVertical.id.padStart(2, '0')}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Pagination Bar */}
        <div className="flex justify-center gap-4 mt-12">
          {businessData.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveVertical(item); setIsAutoRotating(false); }}
              className="relative p-2"
            >
              <motion.div
                animate={{
                  width: activeVertical.id === item.id ? 40 : 12,
                  backgroundColor: activeVertical.id === item.id 
                    ? "var(--primary)" 
                    : "var(--muted)",
                }}
                className="h-2 rounded-full cursor-pointer transition-colors"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBusiness;