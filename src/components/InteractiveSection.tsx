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
    title: "Cohort Engagement", 
    desc: "See who's active and who needs support",
    detail: "Real-time dashboard showing student engagement levels, helping you identify and support students who may be falling behind."
  },
  { 
    icon: Activity, 
    title: "Activity Tracking", 
    desc: "Real-time visibility into student actions",
    detail: "Comprehensive activity feeds showing resume updates, applications submitted, and events attended."
  },
  { 
    icon: BarChart3, 
    title: "Application Funnel", 
    desc: "Track applications to placements",
    detail: "Visual funnel analytics from initial applications through interviews to final placements."
  },
  { 
    icon: Target, 
    title: "Material Quality", 
    desc: "Monitor resume and prep quality",
    detail: "Aggregate quality scores across your cohort with drill-down into individual student materials."
  },
  { 
    icon: TrendingUp, 
    title: "Outcome Analytics", 
    desc: "Connect actions to results",
    detail: "Correlation analysis showing which activities drive the best placement outcomes."
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
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-6"
            >
              One Platform, Two Experiences
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Built for everyone in the{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
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
                  ? "bg-[#2563EB] text-white border-transparent shadow-xl shadow-blue-500/25"
                  : "bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm"
              }`}
              onClick={() => setActiveTab("students")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === "students" ? "bg-white/20" : "bg-blue-100"
                }`}>
                  <GraduationCap className={`w-6 h-6 ${activeTab === "students" ? "text-white" : "text-blue-600"}`} />
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
                  ? "bg-[#2563EB] text-white border-transparent shadow-xl shadow-blue-500/25"
                  : "bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm"
              }`}
              onClick={() => setActiveTab("staff")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === "staff" ? "bg-white/20" : "bg-blue-100"
                }`}>
                  <Building2 className={`w-6 h-6 ${activeTab === "staff" ? "text-white" : "text-blue-600"}`} />
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
      <div className="bg-gradient-to-br from-[#0c1929] via-[#1e3a5f] to-[#2563EB] relative">
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
          <div className="max-w-6xl mx-auto px-6 space-y-32">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Content - alternating sides */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/30"
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

                {/* Visual Card */}
                <motion.div 
                  className={`${i % 2 === 1 ? "lg:order-1" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative p-8 bg-white/[0.05] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
                    
                    {/* Mock UI */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-400/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                        <div className="w-3 h-3 rounded-full bg-green-400/60" />
                      </div>
                      
                      <div className="space-y-4">
                        {[...Array(3)].map((_, j) => (
                          <motion.div 
                            key={j}
                            className="h-12 bg-white/[0.08] rounded-xl flex items-center px-4 gap-3"
                            initial={{ width: "60%" }}
                            whileInView={{ width: `${70 + j * 10}%` }}
                            transition={{ delay: 0.2 + j * 0.1, duration: 0.5 }}
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/30" />
                            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${60 + j * 15}%` }}
                                transition={{ delay: 0.4 + j * 0.1, duration: 0.8 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between">
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
      <div className="bg-[#0c1929] py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Trust indicators */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-8">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-white/80 font-medium">Trusted by leading universities worldwide</span>
            </div>
            
            {/* University logos placeholder */}
            <div className="flex justify-center items-center gap-12 opacity-40">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/50 text-xs font-medium">University</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Testimonial */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-blue-500/20" />
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight mb-12">
                "Finally, I can see my whole career journey in one place. 
                <span className="text-blue-400"> ApplyLab changed everything</span> about how I approach my job search."
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-500/30">
                  JD
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white font-medium text-lg">Jessica Davis</p>
                  <p className="text-white/50">Computer Science, Class of 2025 • Stanford University</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { value: "50,000+", label: "Students empowered" },
              { value: "200+", label: "University partners" },
              { value: "92%", label: "Placement rate" },
              { value: "4.9/5", label: "Student satisfaction" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <motion.p 
                  className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
