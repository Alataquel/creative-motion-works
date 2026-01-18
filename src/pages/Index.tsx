import { useState } from "react";
import Navbar from "@/components/Navbar";
import IntroAnimation from "@/components/IntroAnimation";
import HeroSection from "@/components/HeroSection";
import InteractiveSection from "@/components/InteractiveSection";
import SharedBenefitsSection from "@/components/SharedBenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <>
          <Navbar />
          <HeroSection />
          <InteractiveSection />
          <SharedBenefitsSection />
          <CTASection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
