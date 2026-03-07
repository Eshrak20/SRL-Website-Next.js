"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { homeAboutData } from "@/src/data/HomeData/HomeAbout.data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, Award, Users, Home, Star } from "lucide-react";

export default function HomeAbout() {
  const { mainTitle, cards, images } = homeAboutData;
  const containerRef = useRef(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Random icons for cards
  const cardIcons = [Award, Users, Home, Star];

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT SIDE - CINEMATIC IMAGE SECTION */}
          <div className="relative">
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Properties</span>
            </motion.div>

            {/* Animated title with gradient */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            >
              {mainTitle}
            </motion.h3>

            {/* Cinematic image container */}
            <div className="relative w-full h-[500px] group">
              {/* Main Image with cinematic effects */}
              <motion.div 
                style={{ scale: imageScale, y: imageY }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={images.main}
                  alt="Real Estate Property"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Cinematic overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Small Overlay Image with cinematic movement */}
              <motion.div 
                style={{ y: overlayY }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-background group cursor-pointer"
              >
                <Image
                  src={images.secondary}
                  alt="Luxury Interior"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
                className="absolute -top-10 -left-10 w-20 h-20 border-2 border-primary/20 rounded-full"
              />
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT SECTION */}
          <div>
            {/* Typography effect with staggered animations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              {/* <h4 className="text-2xl font-semibold text-primary">
                Why Choose Us
              </h4> */}
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experience excellence in real estate with our premium services and 
                unmatched expertise in the market.
              </p>
            </motion.div>

            {/* Animated Cards */}
            <div className="space-y-4">
              {cards.map((card, index) => {
                const Icon = cardIcons[index % cardIcons.length];
                
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-r from-background to-background/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Icon container with animation */}
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                          >
                            <Icon className="w-6 h-6 text-primary" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {card.description}
                            </p>
                            
                            {/* Animated arrow on hover */}
                            <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="mt-3 flex items-center gap-2 text-primary text-sm font-medium"
                            >
                              <span>Learn more</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t"
            >
              {[
                { value: "500+", label: "Properties" },
                { value: "98%", label: "Happy Clients" },
                { value: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}