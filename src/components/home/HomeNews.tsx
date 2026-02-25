import { news } from "@/src/data/HomeData/HomeNews.data";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const HomeNews = () => {
  return (
    <section className="">
      {/* Section Title */}
      <div className="text-center mb-14">
        <SectionTitle name=" News & Media"/>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <div className="relative h-[320px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
              <p className="text-primary text-sm font-medium mb-2">
                {item.date}
              </p>
              <h3 className="text-white text-lg font-semibold leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeNews;