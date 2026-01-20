import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  Search, 
  FileText, 
  Send, 
  TrendingUp, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Activity,
  Target,
  BookOpen,
  Globe,
  Star,
  Quote
} from "lucide-react";
import { FeatureMockup } from "./FeatureMockups";

const studentFeatures = [
  { 
    icon: Search, 
    title: "Smart Job Discovery", 
    desc: "AI-matched opportunities tailored to your skills and career goals",
    detail: "Our intelligent matching algorithm analyzes your profile, skills, and preferences to surface the most relevant opportunities from thousands of listings."
  },
  { 
    icon: FileText, 
    title: "Resume Building", 
    desc: "Get real-time feedback to stand out from the crowd",
    detail: "Build ATS-optimized resumes with instant feedback on formatting, keywords, and impact statements."
  },
  { 
    icon: Send, 
    title: "Application Tracking", 
    desc: "Know where every application stands at a glance",
    detail: "Never lose track of an application again. Visual pipeline shows you exactly where you are in each process."
  },
  { 
    icon: BookOpen, 
    title: "Case Study Prep", 
    desc: "Master consulting & finance case interviews",
    detail: "Interactive case library with frameworks, practice problems, and AI-powered feedback on your solutions."
  },
  { 
    icon: Globe, 
    title: "Global Events", 
    desc: "Discover career fairs & networking worldwide",
    detail: "Curated calendar of recruiting events, info sessions, and networking opportunities tailored to your interests."
  },
  { 
    icon: TrendingUp, 
    title: "Progress Insights", 
    desc: "See your growth over time with detailed analytics",
    detail: "Track your career readiness score, skill development, and activity trends with beautiful visualizations."
  },
];

const staffFeatures = [
  { 
    icon: Users, 
    title: "Student Insights", 
    desc: "Behavioral data + engagement patterns",
    detail: "Track how students engage with career resources, identify at-risk students early, and understand behavioral patterns that predict success."
  },
  { 
    icon: Send, 
    title: "Applications Insights", 
    desc: "Roles applied for + outcome status",
    detail: "See what roles students are pursuing, track application outcomes, and understand where your cohort is finding success."
  },
  { 
    icon: Target, 
    title: "Qualification Insights", 
    desc: "Skills + materials quality scoring",
    detail: "Aggregate quality scores for resumes and cover letters, identify skill gaps, and track improvement across your cohort."
  },
  { 
    icon: TrendingUp, 
    title: "Market Insights", 
    desc: "Real-time opportunity + outcome intelligence",
    detail: "Understand market trends, which employers are hiring, and connect student activities to placement outcomes."
  },
];

const InteractiveSection = () => {
  const [activeTab, setActiveTab] = useState<"students" | "staff">("students");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const features = activeTab === "students" ? studentFeatures : staffFeatures;

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Full-width Header Section */}
      <div className="bg-gradient-to-b from-background via-muted/20 to-background py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 text-sm font-medium bg-accent text-accent-foreground rounded-full border border-accent-foreground/20 mb-6"
            >
              One Platform, Two Experiences
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Built for everyone in the{" "}
              <span className="text-secondary">
                career journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a student navigating your path or a career team guiding the way, ApplyLab brings clarity to every step.
            </p>
          </motion.div>

          {/* Tab Selector - Centered */}
          <div className="flex justify-center gap-4 mb-12">
            <motion.button
              className={`relative group px-8 py-4 rounded-2xl border transition-all duration-300 ${
                activeTab === "students"
                  ? "bg-primary text-primary-foreground border-transparent shadow-xl shadow-primary/25"
                  : "bg-card border-border hover:border-secondary/50 hover:bg-secondary/5 shadow-sm"
              }`}
              onClick={() => setActiveTab("students")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === "students" ? "bg-white/20" : "bg-accent"
                }`}>
                  <GraduationCap className={`w-6 h-6 ${activeTab === "students" ? "text-white" : "text-secondary"}`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-display font-bold text-lg ${activeTab === "students" ? "text-white" : "text-foreground"}`}>
                    For Students
                  </h3>
                  <p className={`text-sm ${activeTab === "students" ? "text-white/80" : "text-muted-foreground"}`}>
                    Your journey, one view
                  </p>
                </div>
              </div>
            </motion.button>

            <motion.button
              className={`relative group px-8 py-4 rounded-2xl border transition-all duration-300 ${
                activeTab === "staff"
                  ? "bg-primary text-primary-foreground border-transparent shadow-xl shadow-primary/25"
                  : "bg-card border-border hover:border-secondary/50 hover:bg-secondary/5 shadow-sm"
              }`}
              onClick={() => setActiveTab("staff")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === "staff" ? "bg-white/20" : "bg-accent"
                }`}>
                  <Building2 className={`w-6 h-6 ${activeTab === "staff" ? "text-white" : "text-secondary"}`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-display font-bold text-lg ${activeTab === "staff" ? "text-white" : "text-foreground"}`}>
                    For Career Teams
                  </h3>
                  <p className={`text-sm ${activeTab === "staff" ? "text-white/80" : "text-muted-foreground"}`}>
                    Real visibility, real insight
                  </p>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Full-Width Scroll-Triggered Feature Journey */}
      <div className="bg-gradient-to-br from-primary via-[#1e3a5f] to-secondary relative">
        {/* Parallax background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-blue-500/5 rounded-full blur-3xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          />
        </div>

        <div className="relative z-10 py-24">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-20 px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              {activeTab === "students" ? "Your journey in " : "See what your students are "}
              <span className="bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
                {activeTab === "students" ? "one view" : "actually doing"}
              </span>
            </h3>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              {activeTab === "students" 
                ? "Discover jobs, build better materials, and track your progress — all in one place."
                : "Track engagement, activity, and outcomes across your entire cohort."}
            </p>
          </motion.div>

          {/* Vertical Scroll-Triggered Features */}
          <div className="max-w-[1400px] mx-auto px-6 space-y-32">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Content - alternating sides */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8 shadow-2xl shadow-secondary/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-xl text-white/70 mb-6">
                    {feature.desc}
                  </p>
                  <p className="text-lg text-white/50 leading-relaxed">
                    {feature.detail}
                  </p>
                </div>

                {/* Visual Card - Authentic Feature Mockup */}
                <motion.div 
                  className={`${i % 2 === 1 ? "lg:order-1" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative p-6 bg-white/[0.05] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
                    
                    {/* Authentic Feature UI */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                        <div className="w-3 h-3 rounded-full bg-green-400/60" />
                      </div>
                      
                      {/* Feature-specific mockup */}
                      <FeatureMockup featureIndex={i} isStaff={activeTab === "staff"} />
                      
                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="text-sm text-white/40">Feature {i + 1} of {features.length}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(features.length)].map((_, j) => (
                            <div 
                              key={j} 
                              className={`w-2 h-2 rounded-full transition-colors ${j === i ? "bg-blue-400" : "bg-white/20"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Width Social Proof Section */}
      <div className="bg-card py-32 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent border border-accent-foreground/10 mb-8">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-foreground font-medium">Partnered with universities in Germany, Spain and Switzerland</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
              {[
                { value: "10+", label: "Universities" },
                { value: "5/5", label: "Satisfaction" },
                { value: "10k+", label: "Job Positions" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-4xl font-display font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-secondary/30" />
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-12">
                "ApplyLab gave us visibility we never had before.
                <span className="text-secondary"> Now we can actually help students before they fall behind.</span>"
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-secondary/30">
                  MK
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground font-medium text-lg">Dr. Maria Keller</p>
                  <p className="text-muted-foreground">Director of Career Services • LMU Munich</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
