"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, Star, X, Sparkles, Volume2 } from "lucide-react";
import { testimonialData } from "@/src/data/HomeData/HomeTestimonial.data";

const HomeTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Prevent scroll when video is open
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "unset";
  }, [selectedVideo]);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Subtle Background Textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Success Stories</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              Trusted by <span className="text-primary italic">Visionaries.</span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6 bg-card p-6 rounded-2xl border border-border shadow-sm"
          >
            <div className="space-y-1 text-center">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-2xl font-black leading-none">4.9/5</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Global Rating</p>
            </div>
          </motion.div>
        </div>

        <Carousel className="w-full" onSelect={(index) => setActiveIndex(index)}>
          <CarouselContent>
            {testimonialData.map((item) => (
              <CarouselItem key={item.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Visual Side */}
                  <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(item.youtubeId)}>
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl">
                      <Image
                        src={item.videoThumbnail}
                        alt={item.authorName}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                      
                      {/* Play Button - High End Design */}
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-xl">
                            <Play fill="currentColor" size={24} className="ml-1" />
                          </div>
                        </div>
                      </motion.div>

                      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                        <div className="bg-background/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                           <p className="text-[10px] font-black uppercase tracking-widest text-primary">{item.projectName}</p>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 bg-black/40 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                           <Volume2 size={12} /> Sound On
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="relative lg:pl-10">
                    <Quote size={80} className="absolute -top-10 -left-6 text-primary/10 -z-10" />
                    
                    <h3 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight italic">
                      &ldquo;{item.quoteTitle}&rdquo;
                    </h3>
                    
                    <p className="text-muted-foreground text-xl leading-relaxed mb-10 font-medium italic">
                      {item.quoteDescription}
                    </p>

                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-2xl border border-primary/20">
                        {item.authorName.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-foreground">{item.authorName}</h4>
                        <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">{item.authorRole}</p>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-6">
                      <div className="flex gap-4">
                        <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-card border-border hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all shadow-sm" />
                        <CarouselNext className="static translate-y-0 h-14 w-14 bg-card border-border hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all shadow-sm" />
                      </div>
                      <div className="flex gap-2">
                        {testimonialData.map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-10 bg-primary' : 'w-3 bg-muted'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Cinematic Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/80 backdrop-blur-2xl"
              onClick={() => setSelectedVideo(null)}
            >
              <button 
                className="absolute top-10 right-10 p-4 bg-primary text-primary-foreground rounded-full hover:rotate-90 transition-all z-[110]"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-6xl aspect-video bg-black rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&modestbranding=1&rel=0`}
                  title="Testimonial Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeTestimonial;