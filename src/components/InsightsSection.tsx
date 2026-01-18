import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Activity, CheckCircle2, BarChart2, Target } from "lucide-react";

const insights = [
  {
    icon: Eye,
    title: "How students engage with opportunities",
    description: "Track which roles attract attention, which get applications, and where interest drops off.",
    metric: "3.2x",
    metricLabel: "engagement visibility"
  },
  {
    icon: Activity,
    title: "Which applications progress and which stall",
    description: "Follow every application from first click to final outcome with full transparency.",
    metric: "89%",
    metricLabel: "tracking coverage"
  },
  {
    icon: CheckCircle2,
    title: "Quality and consistency of materials",
    description: "See resume scores, cover letter quality, and preparation levels at a glance.",
    metric: "47%",
    metricLabel: "quality improvement"
  },
  {
    icon: BarChart2,
    title: "Preparation activity across cohorts",
    description: "Compare readiness across programs, years, and demographics in real-time.",
    metric: "12+",
    metricLabel: "cohort metrics"
  }
];

const InsightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#1a365d] relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-white/10 text-white/80 rounded-full border border-white/10 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Target className="w-4 h-4" />
            What You Can See
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Features framed as visibility gains.
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Every feature is designed to give you insight, not just data.
          </motion.p>
        </motion.div>

        {/* Insights grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.title}
              className="relative group"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 overflow-hidden h-full"
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: "rgba(255,255,255,0.2)",
                  backgroundColor: "rgba(255,255,255,0.05)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon and metric row */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -15 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 200 }}
                    >
                      <insight.icon className="w-6 h-6 text-sky-400" />
                    </motion.div>

                    {/* Animated metric */}
                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.12 }}
                    >
                      <div className="text-2xl font-bold text-white">{insight.metric}</div>
                      <div className="text-xs text-white/40">{insight.metricLabel}</div>
                    </motion.div>
                  </div>

                  <motion.h3
                    className="text-lg font-display font-semibold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.12 }}
                  >
                    {insight.title}
                  </motion.h3>

                  <motion.p
                    className="text-white/50 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.55 + i * 0.12 }}
                  >
                    {insight.description}
                  </motion.p>

                  {/* Animated data visualization line */}
                  <motion.div
                    className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.12 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${60 + Math.random() * 30}%` } : {}}
                      transition={{ delay: 0.8 + i * 0.12, duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
