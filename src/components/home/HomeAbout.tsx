import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { homeAboutData } from "@/src/data/HomeData/HomeAbout.data";

export default function HomeAbout() {
  const {  mainTitle, cards, images } = homeAboutData;

  return (
    <section className="py-20 bg-background">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - IMAGE SECTION */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{mainTitle}</h3>

            <div className="relative w-full">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.main}
                  alt="Real Estate Property"
                  width={600}
                  height={500}
                  className="object-cover w-full h-112.5"
                />
              </div>

              {/* Small Overlay Image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <Image
                  src={images.secondary}
                  alt="Luxury Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT SECTION */}
          <div>
            <div className="space-y-6">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  className="hover:shadow-lg transition duration-300 border"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
