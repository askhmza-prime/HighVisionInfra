import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <FeaturedProjects />

      <AboutSection />

      <WhyChooseUs />

      <GallerySection />

      <TestimonialsSection />

      <CTASection />
    </main>
  );
}
