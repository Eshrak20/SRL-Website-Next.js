"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { ArrowUpRight } from "lucide-react";
import {
  businessData,
  BusinessVertical,
} from "@/src/data/HomeData/HomeBusiness.data";
import SectionTitle from "../SectionTitle";

const HomeBusiness = () => {
  const [activeVertical, setActiveVertical] = useState<BusinessVertical>(
    businessData[0],
  );

  return (
    <>
      <div className="text-center">
        <SectionTitle name="Businesses" />
      </div>
      <section className="bg-background transition-colors duration-300">
        <div className="">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-border pb-4">
            {/* <div className="flex gap-8 mt-4 md:mt-0 text-sm font-semibold uppercase tracking-widest">
            <button className="text-primary border-b-2 border-primary pb-1">Verticals</button>
            <button className="text-muted-foreground hover:text-primary transition-colors">Listed Companies</button>
          </div> */}
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Grid: 2 Columns of Categories */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-fit">
              {businessData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveVertical(item)}
                  className={cn(
                    "relative group h-32 overflow-hidden rounded-sm transition-all",
                    activeVertical.id === item.id
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-80 hover:opacity-100",
                  )}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-300",
                      activeVertical.id === item.id
                        ? "bg-gradient-to-br from-blue-600/80 to-purple-600/80"
                        : "bg-black/40 group-hover:bg-black/20",
                    )}
                  />

                  <div className="absolute inset-0 p-4 flex flex-col justify-end items-start text-white">
                    <div className="flex justify-between w-full items-center border-b border-white/30 pb-1">
                      <span className="text-xs font-medium uppercase tracking-wider">
                        {item.title}
                      </span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Section: Featured View */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-full min-h-[550px] overflow-hidden rounded-sm group">
              <Image
                src={activeVertical.featuredImage}
                alt={activeVertical.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Dark gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content on Image */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                  {activeVertical.subCategories.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.link}
                      className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6">
                  <Link
                    href={activeVertical.exploreLink}
                    className="inline-flex items-center text-white font-semibold uppercase text-xs tracking-[0.2em] group/link"
                  >
                    <span className="border-b border-white pb-1 group-hover/link:border-primary transition-colors">
                      Explore More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBusiness;
