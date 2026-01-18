import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Activity, FileCheck, BarChart2, Building2, ArrowRight } from "lucide-react";

const teamFeatures = [
  {
    icon: Users,
    title: "Student Engagement Patterns",
    description: "See who's active, who's preparing, and who needs support — in real time.",
    metric: "2.8k",
    metricLabel: "active this week"
  },
  {
    icon: Activity,
    title: "Application Activity & Progress",
    description: "Track applications from first click to final outcome with full transparency.",
    metric: "89%",
    metricLabel: "visibility coverage"
  },
  {
    icon: FileCheck,
    title: "Preparation & Material Quality",
    description: "Monitor resume quality, cover letters, and interview readiness at a glance.",
    metric: "47%",
    metricLabel: "quality improvement"
  },
  {
    icon: BarChart2,
    title: "Cohort-Level Visibility",
    description: "Compare readiness across programs, years, and demographics instantly.",
    metric: "12+",
    metricLabel: "cohort metrics"
  },
];

const CareerTeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#1a365d] relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, delay: 5 }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">What Career Teams See</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Clarity without{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              adding friction
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Career teams gain visibility without adding friction for students.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {teamFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 h-full overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: "rgba(56,189,248,0.3)",
                  backgroundColor: "rgba(255,255,255,0.05)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-sky-500/20 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -15 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <feature.icon className="w-7 h-7 text-sky-400" />
                    </motion.div>

                    {/* Metric */}
                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-white">{feature.metric}</div>
                      <div className="text-xs text-white/40">{feature.metricLabel}</div>
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.description}</p>

                  {/* Animated data bar */}
                  <motion.div className="mt-6 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${60 + i * 10}%` } : {}}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f2847] rounded-full font-semibold text-lg shadow-lg group"
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            See the Dashboard
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerTeamSection;
