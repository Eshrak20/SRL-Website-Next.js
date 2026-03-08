"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Play,
  ArrowRight,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Heart,
  Share2,
  Bookmark,
  Star,
} from "lucide-react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

const BannerHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const yImage2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVideoModalOpen ? "hidden" : "unset";
  }, [isVideoModalOpen]);

  const titleText = "REAL ESTATE DEVELOPMENT";
  const words = titleText.split(" ");
  const youtubeVideoId = "3H6Evu2hPpE";

  const mainImageUrl =
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop";
  const interiorImageUrl =
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop";
  const luxuryImageUrl =
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop";
  const modernImageUrl =
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop";

  const images = [
    { url: mainImageUrl, title: "Exterior", desc: "Architectural Excellence" },
    { url: interiorImageUrl, title: "Interior", desc: "Luxury Living" },
    { url: luxuryImageUrl, title: "Premium", desc: "Elegant Spaces" },
    { url: modernImageUrl, title: "Modern", desc: "Contemporary Design" },
  ];

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      <section className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-primary/5">
        {/* --- BACKGROUND PARALLAX LAYER --- */}
        <motion.div style={{ scale, y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Animated particles */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, -30, 30, -30],
                  x: [null, 30, -30, 30],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <Image
            src={mainImageUrl}
            alt="Hero BG"
            fill
            className={`object-cover transition-all duration-1000 ${
              isLoaded ? "opacity-20 scale-100" : "opacity-0 scale-110"
            }`}
            onLoad={() => setIsLoaded(true)}
            priority
          />
        </motion.div>

        {/* Decorative lines */}
        <div className="absolute inset-0 z-1 opacity-10">
          <svg className="w-full h-full">
            <motion.path
              d="M0 100 L100 100 L200 300 L400 150 L600 250 L800 100 L1000 200 L1200 150"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="container relative z-20 px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 flex flex-col space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-xl rounded-full border border-primary/20 w-fit shadow-lg shadow-primary/10"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">
                  SRL Group LTD • Excellence Since 2010
                </span>
              </motion.div>

              <div className="relative">
                <h1 className="text-6xl md:text-7xl xl:text-[100px] font-black text-gray-900 leading-[0.8] tracking-tighter uppercase">
                  {words.map((word, i) => (
                    <span key={i} className="block overflow-hidden pb-2">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`inline-block ${
                          i === 2
                            ? "bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                            : "text-gray-900"
                        }`}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-1.5 bg-gradient-to-r from-primary to-primary/30 mt-8 rounded-full"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="max-w-xl text-lg text-gray-600 font-medium leading-relaxed"
              >
                We define the next generation of architectural elegance. Modern
                real estate and strategic investment solutions crafted for
                discerning global clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-black uppercase text-xs tracking-[0.3em] rounded-full shadow-2xl shadow-primary/30 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Project{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      style={{ opacity: 0.2 }}
                    />
                  </motion.button>
                </Link>

                <motion.button
                  onClick={() => setIsVideoModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition-all uppercase tracking-[0.2em] text-[10px] font-black group"
                >
                  <div className="relative w-14 h-14 rounded-full bg-white shadow-lg border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/30">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <span className="group-hover:tracking-[0.25em] transition-all">
                    Watch Showcase
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex gap-8 pt-8"
              >
                {[
                  { value: "15+", label: "Years Excellence" },
                  { value: "$2.5B", label: "Portfolio Value" },
                  { value: "200+", label: "Projects" },
                ].map((stat, i) => (
                  <div key={i} className="text-left">
                    <div className="text-2xl font-black text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-[8px] tracking-wider text-gray-500 uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT CONTENT - Enhanced Cinematic Image Stack */}
            <div className="lg:col-span-6 hidden lg:block relative h-[700px]">
              {/* Main Image with Parallax */}
              <motion.div
                style={{ y: y1, rotate: rotate }}
                className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl group"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[activeImageIndex].url}
                      alt="Arch"
                      fill
                      className="object-cover transition-transform duration-7000 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Image Info */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute bottom-6 left-6 text-white"
                    >
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-primary/90">
                        {images[activeImageIndex].title}
                      </div>
                      <div className="text-2xl font-bold mt-1">
                        {images[activeImageIndex].desc}
                      </div>
                    </motion.div>

                    {/* Rating Badge */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                      <div className="flex items-center gap-1">
                        <Star
                          size={14}
                          className="text-yellow-400 fill-yellow-400"
                        />
                        <span className="text-white text-sm font-bold">
                          4.9
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation Dots */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeImageIndex
                          ? "w-6 bg-primary"
                          : "bg-white/50 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Front Floating Image with Animation */}
              <motion.div
                style={{ y: yImage2 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute bottom-10 left-0 w-[60%] h-[60%] rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl z-20 group cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Image
                  src={interiorImageUrl}
                  alt="Interior"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white"
                    >
                      <Play
                        size={30}
                        className="text-white ml-1"
                        fill="white"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Floating Labels */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Heart size={16} className="text-primary" />
                    <span className="text-xs font-bold">Luxury Interior</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Animated Typewriter Card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-2xl border border-primary/20"
              >
                <div className="text-center">
                  <div className="text-primary font-black text-2xl tracking-tight leading-tight uppercase min-h-[80px]">
                    <Typewriter
                      options={{
                        strings: [
                          "Legal Mastery",
                          "Property Growth",
                          "Compliance First",
                          "Smart Investment",
                          "Global Reach",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                        cursor: "|",
                      }}
                    />
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-4" />
                  <p className="text-[8px] tracking-[0.4em] text-gray-500 uppercase">
                    Trusted Advisor
                  </p>
                </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-4 top-1/4 w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center shadow-xl"
              >
                <span className="text-white text-xs font-bold text-center leading-tight">
                  AWARD
                  <br />
                  WINNING
                </span>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-10 bottom-1/4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-primary/20"
              >
                <div className="flex items-center gap-2">
                  <Share2 size={14} className="text-primary" />
                  <span className="text-xs font-bold">Share Project</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- SCROLL INDICATOR --- */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="relative h-14 w-7 rounded-full border-2 border-primary/20 bg-white/50 backdrop-blur-sm flex justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
          <span className="text-[8px] font-black text-primary/40 tracking-[0.4em] uppercase">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ENHANCED VIDEO MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/80  backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-350 bg-black rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-white/60 text-sm font-medium ml-2">
                    Premium Showcase
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
                  >
                    {isFullscreen ? (
                      <Minimize2 size={18} />
                    ) : (
                      <Maximize2 size={18} />
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsVideoModalOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
                  >
                    <X size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&modestbranding=1&rel=0&showinfo=0`}
                  title="Real Estate Showcase"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Video Overlay Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Play size={14} fill="white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">
                          Luxury Estate Collection
                        </div>
                        <div className="text-xs text-white/60">
                          4K • Dolby Vision
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all">
                        <Heart size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all">
                        <Bookmark size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BannerHome;
