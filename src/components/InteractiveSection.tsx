import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Briefcase,
  MessageSquare,
  Star,
  BookOpen,
  Globe
} from "lucide-react";

const studentFeatures = [
  { icon: Search, title: "Smart Job Discovery", desc: "AI-matched opportunities tailored to your skills" },
  { icon: FileText, title: "Resume Building", desc: "Get real-time feedback to stand out" },
  { icon: Send, title: "Application Tracking", desc: "Know where every application stands" },
  { icon: BookOpen, title: "Case Study Prep", desc: "Master consulting & finance case interviews" },
  { icon: Globe, title: "Global Events", desc: "Discover career fairs & networking worldwide" },
  { icon: TrendingUp, title: "Progress Insights", desc: "See your growth over time" },
];

const staffFeatures = [
  { icon: Users, title: "Cohort Engagement", desc: "See who's active and who needs support" },
  { icon: Activity, title: "Activity Tracking", desc: "Real-time visibility into student actions" },
  { icon: BarChart3, title: "Application Funnel", desc: "Track applications to placements" },
  { icon: Target, title: "Material Quality", desc: "Monitor resume and prep quality" },
  { icon: TrendingUp, title: "Outcome Analytics", desc: "Connect actions to results" },
];

const InteractiveSection = () => {
  const [activeTab, setActiveTab] = useState<"students" | "staff">("students");
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4"
          >
            One Platform, Two Experiences
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Built for everyone in the{" "}
            <span className="text-gradient">career journey</span>
          </h2>
        </motion.div>

        {/* Interactive layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left navigation */}
          <motion.div
            className="lg:w-72 flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32 space-y-4">
              {/* Students tab */}
              <motion.button
                className={`w-full relative group text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === "students"
                    ? "bg-[#2563EB] text-white border-transparent shadow-xl shadow-blue-500/25"
                    : "bg-card border-border hover:border-blue-300 hover:bg-blue-50/50"
                }`}
                onClick={() => setActiveTab("students")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeTab === "students" 
                      ? "bg-white/20" 
                      : "bg-blue-100 group-hover:bg-blue-200"
                  }`}>
                    <GraduationCap className={`w-6 h-6 ${
                      activeTab === "students" ? "text-white" : "text-blue-600"
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-lg ${
                      activeTab === "students" ? "text-white" : "text-foreground"
                    }`}>Students</h3>
                    <p className={`text-sm ${
                      activeTab === "students" ? "text-white/80" : "text-muted-foreground"
                    }`}>Your journey, one view</p>
                  </div>
                </div>
                
                {/* Active indicator */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-blue-600"
                  initial={{ height: 0 }}
                  animate={{ height: activeTab === "students" ? 40 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Staff tab */}
              <motion.button
                className={`w-full relative group text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === "staff"
                    ? "bg-[#1e40af] text-white border-transparent shadow-xl shadow-blue-600/25"
                    : "bg-card border-border hover:border-blue-300 hover:bg-blue-50/50"
                }`}
                onClick={() => setActiveTab("staff")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeTab === "staff" 
                      ? "bg-white/20" 
                      : "bg-blue-100 group-hover:bg-blue-200"
                  }`}>
                    <Building2 className={`w-6 h-6 ${
                      activeTab === "staff" ? "text-white" : "text-blue-600"
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-lg ${
                      activeTab === "staff" ? "text-white" : "text-foreground"
                    }`}>Career Teams</h3>
                    <p className={`text-sm ${
                      activeTab === "staff" ? "text-white/80" : "text-muted-foreground"
                    }`}>Real visibility, real insight</p>
                  </div>
                </div>
                
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-blue-700"
                  initial={{ height: 0 }}
                  animate={{ height: activeTab === "staff" ? 40 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Trust indicator */}
              <motion.div
                className="pt-6 mt-6 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Trusted by universities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content panel */}
          <div className="flex-1 min-h-[600px]">
            <AnimatePresence mode="wait">
              {activeTab === "students" ? (
                <motion.div
                  key="students"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  {/* Student panel header */}
                  <div className="mb-8">
                    <motion.h3
                      className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Your journey in{" "}
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                        one view
                      </span>
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      Discover jobs, build better materials, and track your progress — all in one place.
                    </motion.p>
                  </div>

                  {/* Student dashboard mockup - matching dark blue design */}
                  <motion.div
                    className="relative bg-gradient-to-br from-[#0c1929] to-[#1e40af] rounded-3xl border border-blue-500/20 p-6 md:p-8 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      {/* Progress bar */}
                      <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-white/80">Career Readiness</span>
                          <span className="text-sm font-bold text-blue-400">78%</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "78%" }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>

                      {/* Feature cards */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {studentFeatures.map((feature, i) => (
                          <motion.div
                            key={feature.title}
                            className="relative p-5 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 cursor-pointer group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            onMouseEnter={() => setHoveredFeature(i)}
                            onMouseLeave={() => setHoveredFeature(null)}
                            whileHover={{ 
                              y: -5, 
                              borderColor: "rgba(37,99,235,0.4)",
                              backgroundColor: "rgba(255,255,255,0.05)"
                            }}
                          >
                            <motion.div
                              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300"
                            >
                              <feature.icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                            </motion.div>
                            <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                            <p className="text-sm text-white/50">{feature.desc}</p>

                            {/* Hover indicator */}
                            <motion.div
                              className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: hoveredFeature === i ? 1 : 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Student testimonial */}
                      <motion.div
                        className="mt-6 p-5 bg-white/[0.03] rounded-2xl border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            JD
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-sm text-white/80 italic">
                              "Finally, I can see my whole career journey in one place. Game changer."
                            </p>
                            <p className="text-xs text-white/50 mt-1">— Computer Science, Class of 2025</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="staff"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  {/* Staff panel header */}
                  <div className="mb-8">
                    <motion.h3
                      className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      See what your students are{" "}
                      <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        actually doing
                      </span>
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      Track engagement, activity, and outcomes across your entire cohort.
                    </motion.p>
                  </div>

                  {/* Staff dashboard mockup */}
                  <motion.div
                    className="relative bg-gradient-to-br from-[#0c1929] to-[#1e40af] rounded-3xl border border-blue-500/20 p-6 md:p-8 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      {/* Stats row */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {[
                          { label: "Active Students", value: "2,847", trend: "+12%" },
                          { label: "Applications", value: "8,234", trend: "+24%" },
                          { label: "Interviews", value: "1,456", trend: "+18%" },
                          { label: "Placements", value: "892", trend: "+31%" },
                        ].map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            className="p-4 rounded-xl bg-white/[0.05] border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                          >
                            <motion.p
                              className="text-2xl font-bold text-white"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + i * 0.08 }}
                            >
                              {stat.value}
                            </motion.p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-white/50">{stat.label}</span>
                              <span className="text-xs text-emerald-400">{stat.trend}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Feature cards */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {staffFeatures.map((feature, i) => (
                          <motion.div
                            key={feature.title}
                            className="relative p-5 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 cursor-pointer group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.08 }}
                            onMouseEnter={() => setHoveredFeature(i + 10)}
                            onMouseLeave={() => setHoveredFeature(null)}
                            whileHover={{ 
                              y: -5, 
                              borderColor: "rgba(37,99,235,0.4)",
                              backgroundColor: "rgba(255,255,255,0.05)"
                            }}
                          >
                            <motion.div
                              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300"
                            >
                              <feature.icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                            </motion.div>
                            <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                            <p className="text-sm text-white/50">{feature.desc}</p>

                            <motion.div
                              className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: hoveredFeature === i + 10 ? 1 : 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Activity chart placeholder */}
                      <motion.div
                        className="mt-6 p-5 bg-white/[0.03] rounded-2xl border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-white font-medium">Weekly Activity</span>
                          <span className="text-emerald-400 text-sm">↑ 24% vs last week</span>
                        </div>
                        <div className="flex items-end gap-2 h-20">
                          {[40, 65, 45, 80, 60, 75, 90].map((height, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: 1.1 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-white/40">
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
