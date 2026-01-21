import { useState, useRef } from "react";
import { ArrowRight, GraduationCap, Building2, TrendingUp, Briefcase, FileText, ClipboardList, Award, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GridBackground from "./GridBackground";

type HoveredSide = "left" | "right" | null;

const HeroSection = () => {
  const [hoveredSide, setHoveredSide] = useState<HoveredSide>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-background overflow-hidden"
    >
      {/* Grid background pattern */}
      <GridBackground />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center max-w-[1400px] mx-auto px-6 pt-32 pb-16">
        {/* Badge */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-accent-foreground/10">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Powered by AI
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.div 
          className="text-center mb-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-foreground text-center">
            See what students are doing.
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-center">
            <span className="text-secondary">
              Give them clarity on their journey.
            </span>
          </h1>
        </motion.div>

        {/* SUBTITLE */}
        <motion.p 
          className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
          <span className="text-foreground font-medium">real visibility</span>.
        </motion.p>

        {/* SPLIT HERO CONTAINER - Full width */}
        <motion.div 
          className="relative w-full max-w-[1400px] mx-auto mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div 
            className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-stretch min-h-[600px]"
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* LEFT PANEL - Students */}
            <motion.div 
              className="relative cursor-pointer rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredSide("left")}
              animate={{
                flex: hoveredSide === "left" ? 1.4 : hoveredSide === "right" ? 0.6 : 1,
                opacity: hoveredSide === "right" ? 0.7 : 1,
                scale: hoveredSide === "left" ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ originX: 0 }}
            >
              <div 
                className={`h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 border ${
                  hoveredSide === "left" 
                    ? "border-secondary/30 shadow-xl shadow-secondary/10" 
                    : "border-border shadow-soft"
                }`}
                style={{ background: 'linear-gradient(180deg, hsl(221 83% 98%) 0%, hsl(221 83% 99%) 100%)' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-accent-foreground/10">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      For Students
                    </span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Content - Authentic Student Dashboard */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Job Discovery Interface */}
                  <div className="p-3 rounded-xl mb-3 bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Smart Job Discovery</span>
                    </div>
                    {/* Job Cards */}
                    <div className="space-y-2">
                      {[
                        { company: "Stripe", role: "Product Intern", match: "94%", logo: "S" },
                        { company: "Figma", role: "Design Engineer", match: "89%", logo: "F" },
                      ].map((job) => (
                        <div key={job.role} className="flex items-center gap-2 p-2 rounded-lg bg-card border border-border">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs">
                            {job.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate text-foreground">{job.role}</p>
                            <p className="text-[10px] text-muted-foreground">{job.company}</p>
                          </div>
                          <div className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                            {job.match}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resume Builder Preview */}
                  <div className="p-3 rounded-xl mb-3 bg-muted/50 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-foreground">Resume Builder</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-700">
                        <Award className="w-3 h-3" />
                        Score: 82/100
                      </div>
                    </div>
                    {/* Mini Resume Preview */}
                    <div className="p-2 rounded-lg bg-card border border-border">
                      <div className="space-y-1.5">
                        <div className="h-2 w-24 rounded bg-muted-foreground/30" />
                        <div className="h-1.5 w-full rounded bg-muted" />
                        <div className="h-1.5 w-3/4 rounded bg-muted" />
                        <div className="flex gap-1 mt-2">
                          <div className="h-4 w-12 rounded bg-accent" />
                          <div className="h-4 w-10 rounded bg-accent" />
                          <div className="h-4 w-8 rounded bg-accent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application Tracker */}
                  <div className="p-3 rounded-xl bg-accent/50 border border-accent-foreground/10">
                    <div className="flex items-center gap-2 mb-2">
                      <ClipboardList className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Application Tracker</span>
                    </div>
                    <div className="flex gap-2">
                      {[
                        { stage: "Applied", count: 12, color: "text-secondary" },
                        { stage: "Interview", count: 4, color: "text-amber-600" },
                        { stage: "Offer", count: 1, color: "text-emerald-600" },
                      ].map((item) => (
                        <div key={item.stage} className="flex-1 text-center">
                          <div className={`text-lg font-bold ${item.color}`}>{item.count}</div>
                          <div className="text-[10px] text-muted-foreground">{item.stage}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1" />

                  <Link to="/students">
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                      <GraduationCap className="w-4 h-4" />
                      Explore the Platform
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* RIGHT PANEL - Universities */}
            <motion.div 
              className="relative cursor-pointer rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredSide("right")}
              animate={{
                flex: hoveredSide === "right" ? 1.4 : hoveredSide === "left" ? 0.6 : 1,
                opacity: hoveredSide === "left" ? 0.7 : 1,
                scale: hoveredSide === "right" ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ originX: 1 }}
            >
              <div 
                className={`h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 border ${
                  hoveredSide === "right" 
                    ? "border-secondary/30 shadow-xl shadow-secondary/10" 
                    : "border-border shadow-soft"
                }`}
                style={{ background: 'linear-gradient(180deg, hsl(221 83% 98%) 0%, hsl(221 83% 99%) 100%)' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-accent-foreground/10">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      For Universities
                    </span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Content - Authentic University Analytics Dashboard */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Student Engagement Overview */}
                  <div className="p-3 rounded-xl mb-3 bg-muted/50 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-foreground">Student Engagement</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Live</span>
                    </div>
                    {/* Activity Heat Timeline */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {[75, 45, 80, 90, 60, 30, 85].map((val, i) => (
                        <div 
                          key={i} 
                          className="h-6 rounded"
                          style={{
                            backgroundColor: `hsl(221 83% 53% / ${val / 100})`
                          }} 
                        />
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Mon</span>
                      <span className="text-[10px] text-muted-foreground">Sun</span>
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: "Active Users", value: "2,847", icon: GraduationCap },
                      { label: "Resumes Built", value: "1,234", icon: FileText },
                      { label: "Jobs Applied", value: "8,456", icon: Briefcase },
                    ].map((metric) => (
                      <div key={metric.label} className="p-2 rounded-lg text-center bg-card border border-border">
                        <metric.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                        <div className="text-sm font-bold text-foreground">{metric.value}</div>
                        <div className="text-[9px] text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Intelligence Insights */}
                  <div className="p-3 rounded-xl mb-3 bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Actionable Insights</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { insight: "CS majors need more interview prep", tag: "Action", color: "amber" },
                        { insight: "Finance internship demand up 40%", tag: "Trend", color: "blue" },
                      ].map((item) => (
                        <div key={item.insight} className="flex items-center gap-2 p-2 rounded-lg bg-card border border-border">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.color === "amber" ? "bg-amber-500" : "bg-secondary"}`} />
                          <span className="text-[11px] flex-1 text-foreground">{item.insight}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                            item.color === "amber" ? "bg-amber-100 text-amber-700" : "bg-accent text-secondary"
                          }`}>{item.tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Placement Success Rate */}
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Placement Rate</p>
                        <p className="text-xl font-bold text-emerald-600">78.5%</p>
                      </div>
                      <div className="relative w-12 h-12">
                        <svg className="w-12 h-12 -rotate-90">
                          <circle cx="24" cy="24" r="20" fill="none" strokeWidth="4" stroke="#d1fae5" />
                          <circle cx="24" cy="24" r="20" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeDasharray="126" strokeDashoffset="27" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <Link to="/request-pilot">
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                      <Building2 className="w-4 h-4" />
                      Request Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
