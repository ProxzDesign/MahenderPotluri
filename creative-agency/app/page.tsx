import HeroSection from "@/components/sections/home/HeroSection";
import VideoSection from "@/components/sections/home/videoSecection";
import CaseStudies from "@/components/sections/home/caseStudies";
import Testimonials from "@/components/sections/home/Testimonials";
import ServiceSection from "@/components/sections/home/ServiceSection";
import Achievement from "@/components/sections/home/Achievement";
import RatingSection from "@/components/sections/home/RatingSection";

export default function HomePage() {
  return (
    <div className="wrapper">
      <HeroSection />
      <VideoSection />
      <CaseStudies />
      <Testimonials />
      <ServiceSection />
      <Achievement />
      <RatingSection />
    </div>
  );
}
