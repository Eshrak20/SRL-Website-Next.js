/* eslint-disable react-hooks/immutability */
"use client";

import { news } from "@/src/data/HomeData/HomeNews.data";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { ArrowUpRight, X, Clock, User, Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Install: npm install framer-motion

const HomeNews = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isModalOpen]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
  }, [isModalOpen]);

  const openModal = (item) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="pt-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle name="News & Media" />
          <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:opacity-80 transition-all">
            Explore All <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              onClick={() => openModal(item)}
              className="group cursor-pointer bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-5 left-5 bg-background/60 backdrop-blur-xl px-4 py-1.5 rounded-2xl border border-white/20 shadow-xl">
                  <p className="text-[10px] font-black uppercase tracking-tighter text-foreground">
                    {item.date}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-6 bg-primary"></span>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Insight</p>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-muted-foreground flex items-center gap-2 group-hover:text-foreground transition-colors">
                    READ STORY <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modern Modal with Framer Motion */}
      <AnimatePresence>
        {isModalOpen && selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-background/80 backdrop-blur-md" 
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-full overflow-hidden bg-card border border-border rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Floating & Minimal */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-110 p-3 rounded-full bg-secondary text-secondary-foreground hover:rotate-90 transition-all duration-300"
              >
                <X size={24} />
              </button>

              {/* Left Side: Visuals */}
              <div className="relative w-full md:w-5/12 h-75 md:h-auto">
                <Image
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent md:hidden" />
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-7/12 p-8 md:p-14 overflow-y-auto custom-scrollbar">
                <header className="mb-8">
                  <div className="flex items-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest text-primary">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">Media Center</span>
                    <span className="text-muted-foreground">{selectedNews.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                    {selectedNews.title}
                  </h2>
                </header>

                <div className="flex items-center gap-6 mb-10 pb-6 border-b border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <User size={16} className="text-primary" />
                    <span>Editorial Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock size={16} className="text-primary" />
                    <span>5 min read</span>
                  </div>
                  <button className="ml-auto text-muted-foreground hover:text-primary transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>

                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium mb-6">
                    This development marks a significant milestone in our journey toward redefining the industry standards of excellence and innovation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our team has been working tirelessly to ensure that every aspect of this project meets the highest quality benchmarks. By integrating cutting-edge technology with user-centric design, we are creating experiences that resonate on a global scale.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground bg-accent/30 rounded-r-xl mb-6">
                    "Innovation is not just about new tools; it's about a new mindset that prioritizes the user at every touchpoint."
                  </blockquote>
                </div>

                <div className="mt-12">
                  <button 
                    onClick={closeModal}
                    className="w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20"
                  >
                    Close & Return
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeNews;