"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { HomeChairmanData } from "@/src/data/HomeData/HomeChairman.data";

const HomeChairman = () => {
  const data = HomeChairmanData[0];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-150">
        {/* Left Side: Chairman Portrait */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full lg:w-1/2 h-125 lg:h-auto bg-primary"
        >
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover object-top  hover:grayscale-0 transition-all duration-700"
            priority
          />
          {/* Subtle Blue Gradient Overlay to match image style */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Side: Speech & Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16 lg:py-0 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Quote Icon decorative */}
            <Quote
              size={40}
              className="text-primary/10 absolute top-20 left-10 lg:left-16"
            />

            <div className="relative z-10">
              <span className="text-6xl font-serif text-gray-200 absolute -top-10 -left-6 select-none">
                &ldquo;
              </span>

              <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed italic mb-10">
                {data.speech}
                <span className="text-6xl font-serif text-gray-200 inline-block align-bottom ml-2">
                  &rdquo;
                </span>
              </p>

              {/* Decorative Quote Line similar to uploaded image */}
              <div className="flex items-start gap-4">
                <div className="w-1 bg-primary h-12 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 tracking-tight">
                    {data.name}
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mt-1">
                    {data.designation}
                  </p>
                </div>
              </div>

              {/* Profile Button */}
              {/* <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                View Profile
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeChairman;
