import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  Search, 
  FileText, 
  Send, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Activity,
  Target,
  BookOpen,
  Globe,
  ArrowRight
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
  const [hoveredSide, setHoveredSide] = useState<"students" | "staff" | null>(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a1628] via-[#0c1929] to-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-4"
          >
            One Platform, Two Experiences
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Built for everyone in the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">career journey</span>
          </h2>
        </motion.div>

        {/* Split screen cards - Jobandtalent style */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Students Card */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 md:p-10 cursor-pointer group overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredSide("students")}
            onMouseLeave={() => setHoveredSide(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hover background effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSide === "students" ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                For Students
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                Your entire career journey in one view. Discover opportunities, build materials, track progress.
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-8">
                {studentFeatures.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">{feature.title}</span>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="flex items-center gap-2 text-[#2563EB] font-semibold group/btn"
                whileHover={{ x: 5 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50" />
          </motion.div>

          {/* Career Teams Card */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 md:p-10 cursor-pointer group overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredSide("staff")}
            onMouseLeave={() => setHoveredSide(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hover background effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSide === "staff" ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e40af] to-[#0c1929] flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25"
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                For Career Teams
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                See what your students are actually doing. Track engagement, activity, and outcomes.
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-8">
                {staffFeatures.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-[#1e40af]" />
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">{feature.title}</span>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="flex items-center gap-2 text-[#1e40af] font-semibold group/btn"
                whileHover={{ x: 5 }}
              >
                Request Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full opacity-50" />
          </motion.div>
        </div>

        {/* Center divider decoration for desktop */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default InteractiveSection;
