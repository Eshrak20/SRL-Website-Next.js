"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Award, Users, Building2, Scale, Target, Briefcase, ChevronRight, Sparkles } from "lucide-react";
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

  // Leadership principles
  const principles = [
    { icon: Scale, label: "Legal Integrity" },
    { icon: Target, label: "Strategic Vision" },
    { icon: Briefcase, label: "Excellence" },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${'currentColor'} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.02
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-0 relative">
        <div className="flex flex-col lg:flex-row min-h-screen relative">
          {/* Left Side: Chairman Portrait with Professional Effects */}
          <motion.div
            style={{ y: imageParallax }}
            className="relative w-full lg:w-1/2 h-175  overflow-hidden group"
            onHoverStart={() => setIsImageHovered(true)}
            onHoverEnd={() => setIsImageHovered(false)}
          >
            {/* Main Image */}
            <motion.div
              animate={{ scale: isImageHovered ? 1.05 : 1 }}
              transition={{ duration: 7 }}
              className="relative w-full h-175"
            >
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Professional Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />

            {/* Subtle Light Effect */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />

            {/* Minimal Corner Accents */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/30" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30" />

            {/* Name Badge */}
            <motion.div 
              animate={{ y: isImageHovered ? -10 : 0 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-sm shadow-xl"
            >
              <span className="text-sm font-bold text-gray-900">{data.name}</span>
              <p className="text-xs text-gray-500 mt-0.5">{data.designation}</p>
            </motion.div>
          </motion.div>

          {/* Right Side: Speech & Details */}
          <motion.div 
            style={{ y: textParallax }}
            className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 lg:py-0 relative"
          >
            {/* Section Identifier */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="-mt-32  inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-sm mb-8 w-fit"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Leadership Voice
              </span>
            </motion.div>

            {/* Main Quote */}
            <div className="relative">
              {/* Opening Quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute -top-6 -left-6"
              >
                <Quote size={40} className="text-primary/20" />
              </motion.div>

              {/* Speech Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 dark:text-gray-200 leading-relaxed mb-10 relative z-10"
              >
                "{data.speech}"
              </motion.p>

              {/* Closing Quote */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute -bottom-10 -right-4"
              >
                <Quote size={40} className="text-primary/20 rotate-180" />
              </motion.div>
            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-0.5 bg-primary/30 origin-left mb-8"
            />

            {/* Chairman Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {data.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {data.designation}
              </p>
            </motion.div>

            {/* Leadership Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 mb-10"
            >
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-sm"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Award, label: "Years of Excellence", value: "25+" },
                { icon: Building2, label: "Companies", value: "12" },
                { icon: Users, label: "Employees", value: "5,000+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-sm shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10"
            >
              <button className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <span className="text-sm font-medium uppercase tracking-wider">Read Full Bio</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeChairman;