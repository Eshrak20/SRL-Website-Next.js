/* eslint-disable react-hooks/purity */
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { homeAboutData } from "@/src/data/HomeData/HomeAbout.data";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Home,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Building2,
  MapPin,
  BadgeCheck,
  Crown,
} from "lucide-react";
import Typewriter from "typewriter-effect";

export default function HomeAbout() {
  const { mainTitle, cards, images } = homeAboutData;
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Check if stats section is in view
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Multiple transform values for complex animations
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.2]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [10, 0]);

  // Smooth spring values for mouse follow
  const springX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const springY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  // Stats data
  const stats = [
    {
      icon: Building2,
      value: "250+",
      label: "Projects Completed",
      color: "from-primary to-primary",
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "from-primary to-primary",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      color: "from-primary to-primary",
    },
    {
      icon: MapPin,
      value: "25+",
      label: "Cities Covered",
      color: "from-primary to-primary",
    },
  ];

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        springX.set(x * 20);
        springY.set(y * 20);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  // Random icons for cards
  const cardIcons = [Award, Users, Home, Star, Shield, TrendingUp];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 30, -30, 0],
              x: [0, 30, -30, 30, 0],
              opacity: [0, 1, 0.5, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* LEFT SIDE - CINEMATIC IMAGE SECTION */}
          <div className="relative">
            {/* Animated title with gradient and typewriter */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full border border-primary/20 shadow-lg mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  About Our Legacy
                </span>
              </div>

              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                <span className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  {mainTitle}
                </span>
              </h3>

              {/* Typewriter Effect */}
              <div className="text-xl text-gray-600 dark:text-gray-400 font-medium h-12">
                <Typewriter
                  options={{
                    strings: [
                      "Building Dreams Since 2010",
                      "Architecture Excellence",
                      "Trusted by Global Clients",
                      "Innovation at Core",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </motion.div>

            {/* Cinematic image container with 3D tilt */}
            <motion.div
              style={{
                rotateX: springY,
                rotateY: springX,
              }}
              className="relative w-full h-125 group perspective-1000"
            >
              {/* Main Image with cinematic effects */}
              <motion.div
                style={{
                  scale: imageScale,
                  rotate: imageRotate,
                  x: imageX,
                  filter: `blur(${blur}px)`,
                }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform-gpu preserve-3d"
              >
                <Image
                  src={images.main}
                  alt="Real Estate Property"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110"
                  priority
                />

                {/* Cinematic overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating elements overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/40 rounded-full"
                      animate={{
                        y: [0, -40, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Verified Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-primary/20 z-10"
                >
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    <span className="font-bold text-sm">
                      Verified Excellence
                    </span>
                  </div>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                    <span className="ml-2 font-bold">4.9</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Small Overlay Image with cinematic movement */}
              <motion.div
                style={{ y: overlayY }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-10 -right-10 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group/image cursor-pointer z-20"
              >
                <Image
                  src={images.secondary}
                  alt="Luxury Interior"
                  fill
                  className="object-cover transition-all duration-700 group-hover/image:scale-125"
                />

                {/* Overlay shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3,
                  }}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                </div>
              </motion.div>

              {/* Decorative rotating elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                }}
                className="absolute -top-12 -left-12 w-24 h-24 border-2 border-primary/30 rounded-full"
              >
                <div className="absolute inset-2 border-2 border-primary/20 rounded-full" />
              </motion.div>

              {/* Floating emojis */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 left-1/4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl border border-primary/20"
              >
                <span className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Award className="w-4 h-4" />
                  Premium Quality
                </span>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      delay: index * 0.1 + 0.5,
                      stiffness: 200,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    className="relative group/stat"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                      {/* Animated gradient background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-10 rounded-2xl transition-opacity duration-500`}
                      />

                      <div className="relative">
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3"
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isStatsInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + 0.8 }}
                        >
                          <div className="text-2xl font-black text-gray-900 dark:text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                            {stat.label}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT SIDE - CONTENT SECTION */}
          <div>
            {/* Verified Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-2xl shadow-2xl mb-8"
            >
              <Crown className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wider">
                TRUSTED BY INDUSTRY LEADERS
              </span>
            </motion.div>

            {/* Typography effect with staggered animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-10"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With over a decade of excellence in real estate development,
                we've crafted spaces that redefine luxury and comfort. Our
                commitment to quality and innovation sets us apart.
              </p>

              {/* Feature list */}
              <div className="space-y-3">
                {[
                  "Premium architectural designs",
                  "Sustainable building practices",
                  "Client-centric approach",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
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
                    transition={{
                      delay: index * 0.15 + 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.02,
                      x: 15,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent"
                        animate={{
                          x: hoveredCard === index ? ["0%", "100%"] : "0%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-start gap-5">
                          {/* Icon container with advanced animation */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300"
                          >
                            <Icon className="w-8 h-8 text-primary" />

                            {/* Pulsing ring */}
                            <motion.div
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 rounded-xl border-2 border-primary"
                            />
                          </motion.div>

                          <div className="flex-1">
                            <motion.h4
                              className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                              animate={{
                                color:
                                  hoveredCard === index ? "#3b82f6" : "inherit",
                              }}
                            >
                              {card.title}
                            </motion.h4>

                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
                              {card.description}
                            </p>

                            {/* Interactive elements */}
                            <div className="flex items-center justify-between">
                              {/* Tags */}
                              <div className="flex gap-2">
                                {["Innovation", "Quality", "Trust"].map(
                                  (tag, i) => (
                                    <motion.span
                                      key={i}
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.8 + i * 0.1 }}
                                      className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary"
                                    >
                                      {tag}
                                    </motion.span>
                                  ),
                                )}
                              </div>

                              {/* Animated arrow */}
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 10 }}
                                className="flex items-center gap-2 text-primary text-sm font-medium cursor-pointer"
                              >
                                <span>Learn more</span>
                                <motion.div
                                  animate={{
                                    x: hoveredCard === index ? [0, 5, 0] : 0,
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat:
                                      hoveredCard === index ? Infinity : 0,
                                  }}
                                >
                                  <ArrowRight className="w-4 h-4" />
                                </motion.div>
                              </motion.div>
                            </div>

                            {/* Progress bar (animated) */}
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{
                                delay: 1 + index * 0.1,
                                duration: 1,
                              }}
                              className="h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-4"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
