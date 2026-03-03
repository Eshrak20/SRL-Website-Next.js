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
      <section className="mb-16">
        <BannerHome />
      </section>
      <div className="container mx-auto px-4">
        {/* About Section */}
        <section className="mb-16">
          <HomeAbout />
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <HomeGallery />
        </section>

        {/* Why Choose Section */}
        <section className="mb-16">
          <HomeWhyChoses />
        </section>

        {/* News Section */}
        <section className="mb-16">
          <HomeNews />
        </section>

        {/* Sustainability Section */}
        <section className="mb-16">
          <HomeSustain />
        </section>

        {/* Chairman Section */}
        <section className="mb-16">
          <HomeChairman />
        </section>
        <section className="mb-16">
          <HomeProjects/>
        </section>
        <section className="mb-16">
          <HomeBusiness/>
        </section>
        <section className="mb-16">
          <HomeTestimonial/>
        </section>
      </div>
    </>
  );
}
