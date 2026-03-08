import React from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { homeProjectData } from '@/src/data/HomeData/HomeProject.data';

const HomeProjects = () => {
  const { featuredLabel, sectionTitle, projects } = homeProjectData;

  return (
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
          
          {/* Controls - Styled like the circular buttons in your image */}
          <div className="flex gap-2 relative">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-muted dark:text-muted" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-muted dark:text-muted" />
          </div>
        </div>

        {/* Slider Content */}
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
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
  );
};

export default HomeProjects;