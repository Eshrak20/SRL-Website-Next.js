"use client"
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

const BannerHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const titleText = "REAL ESTATE DEVELOPMENT";
  const words = titleText.split(" ");

  return (
    <section className="relative w-full h-screen min-h-200 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* --- CINEMATIC BACKGROUND LAYER --- */}
      <motion.div style={{ scale, y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black/40 z-10" />
        {/* Replace with your high-res hero image */}
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Architecture"
          fill
          className={`object-cover transition-all duration-1000 ${
            isLoaded
              ? "scale-100 blur-0 opacity-60"
              : "scale-110 blur-2xl opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>

      {/* --- NOISE & OVERLAYS --- */}
      <div
        className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- TECH ELEMENTS (Circuitry from your first design) --- */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 z-2 pointer-events-none opacity-30"
      >
        <svg className="w-full h-full text-primary">
          <motion.path
            d="M-100 200 C 200 200, 400 400, 1200 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono tracking-[0.3em] text-white/80 uppercase">
                SRL Group LTD - Premium Quality
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
                {words.map((word, i) => (
                  <span key={i} className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className={`inline-block ${i === 2 ? "text-primary" : ""}`}
                    >
                      {word}
                    </motion.span>
                    {i === 1 && <br />}
                  </span>
                ))}
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="max-w-xl text-lg md:text-xl text-white/60 font-light leading-relaxed"
            >
              Transforming skyline visions into architectural reality. We
              provide modern legal and real estate solutions tailored for the
              21st century.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
                  <span className="relative z-10">Start Project</span>
                  <ArrowRight
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"
                    size={20}
                  />
                </button>
              </Link>

              <button className="flex items-center gap-4 text-white/80 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Play size={18} fill="currentColor" />
                </div>
                Showcase
              </button>
            </motion.div>
          </div>

          {/* RIGHT CONTENT (The Interactive Branding Box) */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Spinning Hexagon Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/20 rounded-[20%] dashed-border"
              />

              <div className="text-center space-y-4">
                <div className="text-primary font-mono text-lg md:text-xl h-20">
                  <Typewriter
                    options={{
                      strings: [
                        "Legal Consultation",
                        "Property Advisory",
                        "Compliance Support",
                        "Investment Growth",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <div className="h-px w-24 bg-primary/40 mx-auto" />
                <p className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase">
                  Think out of the box
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM DECORATION --- */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
      />

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default BannerHome;
