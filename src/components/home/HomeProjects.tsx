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
import { Button } from "@/components/ui/button";
import {
  homeProjectData,
  ProjectImage,
} from "@/src/data/HomeData/HomeProject.data";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Calendar,
  User,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
} from "lucide-react";

const HomeProjects = () => {
  const { featuredLabel, sectionTitle, projects } = homeProjectData;

  const [selectedProject, setSelectedProject] = useState<ProjectImage | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectImage) => {
    setSelectedProject(project);
    setIsModalOpen(true);

    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section className="py-16 bg-background text-foreground transition-colors duration-300">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="container mx-auto px-4"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground mb-4 uppercase">
                {featuredLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-primary uppercase">
                {sectionTitle}
              </h2>
            </div>

            {/* Controls */}
            <div className="flex gap-2 relative">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-muted dark:text-muted" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-muted dark:text-muted" />
            </div>
          </div>

          {/* Slider Content */}
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative h-[500px] overflow-hidden rounded-sm transition-all duration-500">
                  {/* Image background */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                    <h3 className="text-xl font-bold tracking-wide uppercase mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light text-gray-300 mb-4 uppercase">
                      {project.location}
                    </p>

                    {project.description && (
                      <p className="text-xs leading-relaxed text-gray-400 mb-6 max-w-[250px] line-clamp-3">
                        {project.description}
                      </p>
                    )}

                    <Button
                      onClick={() => openModal(project)}
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none px-8 text-xs uppercase transition-all duration-300"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90"
            onClick={closeModal}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white dark:bg-gray-900 rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-sm text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Gallery Navigation (if you want to add prev/next) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = projects.findIndex(
                    (p) => p.id === selectedProject.id,
                  );
                  const prevIndex =
                    currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
                  setSelectedProject(projects[prevIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-sm text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = projects.findIndex(
                    (p) => p.id === selectedProject.id,
                  );
                  const nextIndex =
                    currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
                  setSelectedProject(projects[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-sm text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Image */}
                <div className="relative h-[300px] lg:h-[600px]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Image Overlay Info */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-sm text-white hover:bg-white/30 transition-colors">
                      <Maximize2 size={16} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-sm text-white hover:bg-white/30 transition-colors">
                      <Share2 size={16} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-sm text-white hover:bg-white/30 transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="p-8 lg:p-12 bg-white dark:bg-gray-900">
                  {/* Status Badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    Featured Project
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h2>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <MapPin size={16} />
                    <span className="text-sm">{selectedProject.location}</span>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.description ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident.
                    </p>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-secondary rounded-sm">
                      <p className="text-xs text-muted-foreground mb-1">
                        Client
                      </p>
                      <p className="font-semibold">SRL Group</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-sm">
                      <p className="text-xs text-muted-foreground mb-1">Year</p>
                      <p className="font-semibold">2024</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-sm">
                      <p className="text-xs text-muted-foreground mb-1">
                        Category
                      </p>
                      <p className="font-semibold">Residential</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-sm">
                      <p className="text-xs text-muted-foreground mb-1">
                        Architect
                      </p>
                      <p className="font-semibold">John Doe</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm">
                      Request Info
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm"
                    >
                      Schedule Tour
                    </Button>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {["Luxury", "Modern", "Architecture", "Premium"].map(
                        (tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-sm"
                          >
                            #{tag}
                          </span>
                        ),
                      )}
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

export default HomeProjects;
