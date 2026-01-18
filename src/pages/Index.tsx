import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RealitySection from "@/components/RealitySection";
import OneSystemSection from "@/components/OneSystemSection";
import InsightsSection from "@/components/InsightsSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <RealitySection />
      <OneSystemSection />
      <InsightsSection />
      <InstitutionalSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
