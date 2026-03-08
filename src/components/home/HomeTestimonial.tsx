"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { testimonialData } from "@/src/data/HomeData/HomeTestimonial.data";

const HomeTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Quote marks decoration */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-5">
          <Quote size={120} className="text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
          <Quote size={80} className="text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-sm mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Client Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              What Our{" "}
              <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Real experiences from property owners who trusted us with their dreams
            </p>
          </div>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 bg-secondary px-6 py-3 rounded-sm"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-sm font-medium text-foreground">4.9/5</span>
            <span className="text-xs text-muted-foreground">(250+ reviews)</span>
          </motion.div>
        </motion.div>

        <Carousel 
          className="w-full"
          opts={{ loop: true }}
          onSelect={(index) => setActiveIndex(index)}
        >
          <CarouselContent>
            {testimonialData.map((item, index) => (
              <CarouselItem key={item.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left: Video/Avatar Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="relative aspect-[4/3] lg:aspect-square max-h-[500px] overflow-hidden rounded-sm group">
                      <Image
                        src={item.videoThumbnail}
                        alt={item.authorName}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Play Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-sm flex items-center justify-center border-2 border-white/50 group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                      >
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </motion.button>

                      {/* Project Badge */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider">
                          {item.projectName}
                        </p>
                      </div>

                      {/* Video Duration Badge */}
                      <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                        <p className="text-xs text-white font-medium">2:34 min</p>
                      </div>
                    </div>

                    {/* Video Title */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 text-sm text-muted-foreground uppercase tracking-wider font-medium"
                    >
                      <span className="text-primary">✦</span> {item.videoTitle}
                    </motion.p>
                  </motion.div>

                  {/* Right: Testimonial Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center relative"
                  >
                    {/* Large Quote Icon */}
                    <div className="absolute -top-8 -left-4 opacity-10">
                      <Quote size={60} className="text-primary" />
                    </div>

                    {/* Quote Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                      "{item.quoteTitle}"
                    </h3>

                    {/* Quote Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                      {item.quoteDescription}
                    </p>

                    {/* Author Info */}
                    <div className="mb-10">
                      <div className="flex items-center gap-4">
                        {/* Author Avatar Placeholder */}
                        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">
                            {item.authorName.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground">
                            {item.authorName}
                          </h4>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-muted-foreground">
                              {item.authorRole}
                            </p>
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            <p className="text-sm text-primary font-medium">
                              Verified Owner
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>

                    {/* Navigation and Progress */}
                    <div className="flex items-center justify-between">
                      {/* Navigation Buttons */}
                      <div className="flex gap-3">
                        <CarouselPrevious className="static translate-y-0 h-12 w-12 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-sm" />
                        <CarouselNext className="static translate-y-0 h-12 w-12 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-sm" />
                      </div>

                      {/* Slide Indicator */}
                      <div className="flex items-center gap-2">
                        {testimonialData.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-1.5 rounded-sm transition-all duration-300 ${
                              i === activeIndex 
                                ? 'w-8 bg-primary' 
                                : 'w-4 bg-border hover:bg-primary/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setIsVideoPlaying(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-sm overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-sm text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-45" />
                </button>
                
                {/* Video Player Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <p className="text-white/50">Video Player Integration</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeTestimonial;