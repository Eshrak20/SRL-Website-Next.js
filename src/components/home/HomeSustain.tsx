import { sustain } from "@/src/data/HomeData/HomeSustain.data";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const HomeSustain = () => {
  const data = sustain[0];
  const imgList = data.images;

  // We split the images into two columns to maintain the staggered "masonry" look from your design
  const leftCol = imgList.slice(0, 2);
  const rightCol = imgList.slice(2, 4);

  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image Collage with Loops */}
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          
          {/* Column 1: Top heavy */}
          <div className="flex flex-col gap-4 h-full">
            {leftCol.map((src, index) => (
              <div 
                key={`left-${index}`} 
                className={`relative w-full rounded-lg overflow-hidden shadow-md ${index === 0 ? "h-[60%]" : "h-[40%]"}`}
              >
                <Image
                  src={src}
                  alt={`sustain-left-${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Column 2: Bottom heavy + Offset */}
          <div className="flex flex-col gap-4 h-full pt-12">
            {rightCol.map((src, index) => (
              <div 
                key={`right-${index}`} 
                className={`relative w-full rounded-lg overflow-hidden shadow-md ${index === 0 ? "h-[40%]" : "h-[60%]"}`}
              >
                <Image
                  src={src}
                  alt={`sustain-right-${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center lg:pl-8">
          <SectionTitle name="Sustainability" />

          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 leading-tight">
              {data.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              In the evolving landscape of 2026, we define sustainability as 
              <span className="text-primary font-medium italic"> &quot;growth through legal resilience.&quot;</span> 
            </p>

            <p className="text-gray-500 leading-relaxed">
              Our firm integrates a holistic legal approach toward sustainable real estate development. 
              We focus on five core pillars: <strong>Regulatory Compliance, Environmental Integrity, 
              Asset Longevity, Community Impact,</strong> and <strong>Energy Efficiency.</strong>
            </p>

            <div className="pt-6 border-t border-gray-100">
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-2">
                 Legal Notice & Update
               </span>
               <p className="text-sm text-gray-400 font-medium">
                 {data.description}
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSustain;     