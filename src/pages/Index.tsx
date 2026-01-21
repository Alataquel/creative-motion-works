import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveSection from "@/components/InteractiveSection";
import SharedBenefitsSection from "@/components/SharedBenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: 'linear-gradient(180deg, hsl(221 83% 98%) 0%, hsl(0 0% 100%) 30%, hsl(221 83% 99%) 100%)' }}>
      <Navbar />
      <HeroSection />
      <InteractiveSection />
      <SharedBenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
