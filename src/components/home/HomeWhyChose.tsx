"use client";

import React, { useState } from "react";
import { features } from "@/src/data/HomeData/HomeWhyChose.data";
import SectionTitle from "../SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, Award, Star, TrendingUp, Zap, 
  Shield, CheckCircle, Sparkles, Gem, Building2,
  Briefcase, Scale, Landmark, ChevronRight
} from "lucide-react";

const HomeWhyChoses = () => {
  const [selectedCard, setSelectedCard] = useState(1); // Middle card selected by default (index 1)

  // Stats data
  const stats = [
    { value: "500+", label: "Venture Assets", icon: Award },
    { value: "98%", label: "Legal Success", icon: Star },
    { value: "15+", label: "Years in Market", icon: TrendingUp },
    { value: "24/7", label: "Priority Support", icon: Zap },
  ];

  // Achievement badges
  const achievements = [
    { icon: Shield, label: "ISO Certified" },
    { icon: Scale, label: "Legal Excellence" },
    { icon: Gem, label: "Premium Partner" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-secondary rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">
                The SRL Advantage
              </span>
              <div className="w-1 h-1 rounded-full bg-primary/30" />
              <span className="text-xs text-muted-foreground">
                Est. 2010
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SectionTitle name="Why SRL for Real Estate & Law?" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mt-4"
            >
              We bridge the gap between luxury architecture and sophisticated legal frameworks, 
              delivering excellence through integrated solutions.
            </motion.p>
          </div>

          {/* Achievement Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-2"
          >
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="bg-secondary px-3 py-1.5 rounded-md flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const isSelected = selectedCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCard(index)}
                className="group relative cursor-pointer"
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="selectedCard"
                    className="absolute -inset-0.5 bg-primary rounded-lg opacity-20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Card Body */}
                <div className={`relative h-full p-6 rounded-lg border-2 transition-all duration-300
                  ${isSelected 
                    ? 'bg-primary border-primary' 
                    : 'bg-card border-border hover:border-primary/30 hover:shadow-lg'
                  }`}
                >
                  {/* Icon Container - Fixed hover issue */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center transition-colors duration-300
                      ${isSelected 
                        ? 'bg-white text-primary-foreground' 
                        : 'bg-secondary text-primary'
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-lg font-semibold mb-2 transition-colors
                    ${isSelected ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'}`}
                  >
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4
                    ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}
                  >
                    {item.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {['Premium', 'Trusted', 'Global'].map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-0.5 rounded
                          ${isSelected 
                            ? 'bg-primary-foreground/20 text-primary-foreground' 
                            : 'bg-secondary text-muted-foreground'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className={`h-1 rounded-full overflow-hidden
                    ${isSelected ? 'bg-primary-foreground/20' : 'bg-secondary'}`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ delay: 0.3, duration: 1 }}
                      className={`h-full rounded-full
                        ${isSelected ? 'bg-primary-foreground' : 'bg-primary'}`}
                    />
                  </div>

                  {/* Success Rate */}
                  <div className="mt-3 flex items-center gap-1.5">
                    <CheckCircle className={`w-3.5 h-3.5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className={`text-xs ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      98% Satisfaction
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="group"
                >
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="p-2 rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-md">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Trusted by 500+ global enterprises</span>
              <span className="text-sm text-primary font-medium">→</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeWhyChoses;