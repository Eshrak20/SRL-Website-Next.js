"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
import { testimonialData } from "@/src/data/HomeData/HomeTestimonial.data";

const HomeTestimonial = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 border-l-2 border-primary pl-6">
          <p className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-2">
            Testimonial
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase leading-tight">
            What Customers <br /> Say About Us
          </h2>
        </div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {testimonialData.map((item) => (
              <CarouselItem key={item.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Video Thumbnail */}
                  <div className="relative aspect-video lg:aspect-square max-h-[500px] overflow-hidden rounded-sm group cursor-pointer">
                    <Image
                      src={item.videoThumbnail}
                      alt={item.authorName}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark Overlay for Video Text */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all">
                          <Play className="fill-white text-white w-5 h-5 ml-1" />
                        </div>
                        <p className="text-sm font-bold tracking-wide max-w-[200px] leading-snug">
                          {item.videoTitle}
                        </p>
                      </div>
                      <div className="flex justify-between items-center border-t border-white/30 pt-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/80">
                          {item.authorRole}
                        </span>
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
                          {item.projectName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content Area */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-6 leading-tight">
                      {item.quoteTitle}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg italic">
                      &ldquo;{item.quoteDescription}&rdquo;
                    </p>

                    <div className="mb-10">
                      <h4 className="text-lg font-bold text-foreground">
                        {item.authorName}
                      </h4>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest">
                        {item.authorRole}
                      </p>
                    </div>

                    {/* Navigation Buttons (Placed under content) */}
                    <div className="flex gap-4 relative">
                      <CarouselPrevious className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary hover:text-white transition-all" />
                      <CarouselNext className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary hover:text-white transition-all" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeTestimonial;
