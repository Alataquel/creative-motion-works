import { useState } from "react";
import Navbar from "@/components/Navbar";
import IntroAnimation from "@/components/IntroAnimation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import OneSystemSection from "@/components/OneSystemSection";
import StudentValueSection from "@/components/StudentValueSection";
import CareerTeamSection from "@/components/CareerTeamSection";
import TogetherSection from "@/components/TogetherSection";
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
          <ProblemSection />
          <OneSystemSection />
          <StudentValueSection />
          <CareerTeamSection />
          <TogetherSection />
          <CTASection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;