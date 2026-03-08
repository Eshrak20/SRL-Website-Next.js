import HomeAbout from "../components/home/HomeAbout";
import BannerHome from "../components/home/HomeBanner";
import HomeBusiness from "../components/home/HomeBusiness";
import HomeChairman from "../components/home/HomeChairman";
import HomeGallery from "../components/home/HomeGallery";
import HomeNews from "../components/home/HomeNews";
import HomeProjects from "../components/home/HomeProjects";
import HomeSustain from "../components/home/HomeSustain";
import HomeTestimonial from "../components/home/HomeTestimonial";
import HomeWhyChoses from "../components/home/HomeWhyChose";

export default function Home() {
  return (
    <>
      {/* Banner / Hero Section */}
      <section className="w-full mb-16">
        <BannerHome />
        <HomeAbout />
      </section>

      <div className="container mx-auto px-4">
        {/* Projects Section */}
        <section className="mb-16">
          <HomeProjects />
        </section>
        {/* Why Choose Us Section */}

        {/* Gallery Section */}
        <section className="mb-16">
          <HomeGallery />
        </section>
        <section className="mb-16 text-center">
          <HomeWhyChoses />
        </section>
        <section className="mb-16">
          <HomeSustain />
        </section>
        <section className="mb-16">
          <HomeBusiness />
        </section>

        {/* Chairman Section */}
        <section className="mb-16 text-center">
          <HomeChairman />
        </section>

        {/* News Section */}
        <section className="mb-16">
          <HomeNews />
        </section>
      </div>

      {/* Testimonials Section - Full Width */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <HomeTestimonial />
        </div>
      </section>
    </>
  );
}
