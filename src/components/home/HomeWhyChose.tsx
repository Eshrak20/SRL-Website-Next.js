"use client";

import { features } from "@/src/data/HomeData/HomeWhyChose.data";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Shield, Star, TrendingUp, Award, Zap } from "lucide-react";

// Map of icon components (you can adjust based on your actual icons)
const iconMap: { [key: string]: React.ElementType } = {
  Shield: Shield,
  Star: Star,
  TrendingUp: TrendingUp,
  Award: Award,
  Zap: Zap,
  Sparkles: Sparkles,
};

const HomeWhyChoses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-background/95 overflow-hidden relative">
      {/* Decorative background elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity },
        }}
        className="absolute -top-40 -right-40 w-80 h-80 border-2 border-primary/5 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity },
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 border-2 border-primary/5 rounded-full"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + i,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </motion.div>

          <SectionTitle name="Why SRL ?" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg"
          >
            Discover what makes us the preferred choice for businesses worldwide
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                
                <div className="relative bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:border-transparent transition-all duration-500 h-full flex flex-col backdrop-blur-sm">
                  {/* Icon with animated background */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6 w-16 h-16"
                  >
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-45 group-hover:rotate-0 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Ripple effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 2],
                        opacity: [0.5, 0.2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="absolute inset-0 bg-primary/20 rounded-full"
                    />
                  </motion.div>

                  {/* Title with gradient on hover */}
                  <motion.h3 
                    className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/60 transition-all duration-300"
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 grow">
                    {item.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary text-sm font-medium mt-auto"
                  >
                    <span>Learn more</span>
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl group-hover:border-primary/50 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl group-hover:border-primary/50 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats counter section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Projects Completed", icon: Award },
            { value: "98%", label: "Client Satisfaction", icon: Star },
            { value: "15+", label: "Years Experience", icon: TrendingUp },
            { value: "24/7", label: "Support Available", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-3">
                <stat.icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-primary/20 rounded-full blur"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeWhyChoses;