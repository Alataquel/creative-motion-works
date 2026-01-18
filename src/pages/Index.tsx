import SlidingHero from "@/components/SlidingHero";
import InteractiveSection from "@/components/InteractiveSection";
import SharedBenefitsSection from "@/components/SharedBenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SlidingHero />
      <InteractiveSection />
      <SharedBenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
