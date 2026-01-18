import AnimatedBlobs from "@/components/AnimatedBlobs";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SegmentsSection from "@/components/SegmentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBlobs />
      <Navbar />
      <HeroSection />
      <SegmentsSection />
      <FeaturesSection />
      <StatsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;