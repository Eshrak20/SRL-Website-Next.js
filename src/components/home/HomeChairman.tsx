"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Award, Users, Building2 } from "lucide-react";
import { HomeChairmanData } from "@/src/data/HomeData/HomeChairman.data";

const HomeChairman = () => {
  const data = HomeChairmanData[0];
  const containerRef = useRef(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="relative overflow-hidden container mx-auto px-4 bg-gradient-to-br from-gray-50 to-white">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity }
        }}
        className="absolute -top-20 -right-20 w-64 h-64 border-2 border-primary/5 rounded-full"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity }
        }}
        className="absolute -bottom-20 -left-20 w-80 h-80 border-2 border-primary/5 rounded-full"
      />

      <div className="flex flex-col lg:flex-row min-h-screen relative">
        {/* Left Side: Chairman Portrait with Cinematic Effects */}
        <motion.div
          style={{ y: imageParallax }}
          className="relative w-full lg:w-1/2 h-[500px] lg:h-screen overflow-hidden group"
          onHoverStart={() => setIsImageHovered(true)}
          onHoverEnd={() => setIsImageHovered(false)}
        >
          {/* Main Image with zoom effect */}
          <motion.div
            animate={{ scale: isImageHovered ? 1.1 : 1 }}
            transition={{ duration: 7 }}
            className="relative w-full h-full"
          >
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* Cinematic gradient overlays */}
          <motion.div 
            animate={{ opacity: isImageHovered ? 0.3 : 0.6 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
          />
          <motion.div 
            animate={{ opacity: isImageHovered ? 0.4 : 0.2 }}
            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"
          />

          {/* Animated light sweep effect */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />

          {/* Floating particles around image */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.8,
                  repeat: Infinity,
                }}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
              />
            ))}
          </div>

          {/* Decorative frame elements */}
          <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-white/40" />
          <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-white/40" />
          <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-white/40" />
          <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-white/40" />

          {/* Name badge on image (mobile/tablet) */}
          <motion.div 
            animate={{ y: isImageHovered ? 10 : 0 }}
            className="absolute bottom-8 left-8 lg:hidden bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          >
            <span className="text-white font-semibold">{data.name}</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Speech & Details with Elegant Typography */}
        <motion.div 
          style={{ y: textParallax }}
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-0 relative"
        >
          {/* Decorative quote marks */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-20 left-10 lg:left-16"
          >
            <Quote size={60} className="text-primary/10" />
          </motion.div>

          {/* Content with staggered animations */}
          <div className="relative z-10 max-w-2xl">
            {/* Greeting text */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm uppercase tracking-[0.3em] text-primary/70 font-medium mb-4 block"
            >
              Message from the Chairman
            </motion.span>

            {/* Main speech with animated quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <span className="text-7xl font-serif text-primary/20 absolute -top-8 -left-4 select-none">
                &ldquo;
              </span>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-8"
              >
                {data.speech}
              </motion.p>
              
              <span className="text-7xl font-serif text-primary/20 absolute -bottom-12 right-0 select-none">
                &rdquo;
              </span>
            </motion.div>

            {/* Signature line with animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-24 h-1 bg-primary/30 mb-6"
            />

            {/* Chairman info with animated entrance */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="w-1.5 bg-gradient-to-b from-primary to-primary/40 h-16 rounded-full" />
              <div>
                <motion.h4 
                  animate={{ x: isImageHovered ? 5 : 0 }}
                  className="text-2xl font-bold text-gray-900 tracking-tight"
                >
                  {data.name}
                </motion.h4>
                <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mt-2">
                  {data.designation}
                </p>
              </div>
            </motion.div>

            {/* Stats/achievements grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {[
                { icon: Award, label: "Years of Excellence", value: "25+" },
                { icon: Building2, label: "Companies", value: "12" },
                { icon: Users, label: "Employees", value: "5000+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-3 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 right-10 opacity-10">
            <svg width="120" height="120" viewBox="0 0 100 100" className="text-primary">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeChairman;