import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building2, Users, TrendingUp, Eye, CheckCircle, Zap, Target } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Complete Visibility",
    student: "See your entire career journey in one dashboard",
    staff: "Monitor all student activity and engagement in real-time"
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    student: "Watch your skills grow and celebrate milestones",
    staff: "Measure cohort outcomes and identify trends"
  },
  {
    icon: Target,
    title: "Clear Direction",
    student: "Know exactly what to do next on your path",
    staff: "Get data-driven insights to guide your strategy"
  },
  {
    icon: Zap,
    title: "Better Outcomes",
    student: "Land opportunities that match your potential",
    staff: "Improve placement rates and student success"
  },
];

const SharedBenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-br from-[#0c1929] via-[#1e3a5f] to-[#1e40af] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 text-blue-300 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
            One Platform, Shared Success
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              students & teams
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Every feature creates value for both sides of the career journey
          </p>
        </motion.div>

        {/* Benefits list */}
        <div className="space-y-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 overflow-hidden group"
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(59,130,246,0.3)"
                }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                  {/* Center icon */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title - visible on mobile */}
                  <div className="lg:hidden text-center">
                    <h3 className="text-xl font-display font-bold text-white">{benefit.title}</h3>
                  </div>

                  {/* Two columns */}
                  <div className="flex-1 grid md:grid-cols-2 gap-4 md:gap-8 w-full">
                    {/* Student side */}
                    <motion.div
                      className="relative p-5 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wider text-blue-400">For Students</span>
                      </div>
                      <p className="text-white/80 font-medium">{benefit.student}</p>
                    </motion.div>

                    {/* Hidden title between columns on desktop */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      {/* Connecting line visual */}
                    </div>

                    {/* Staff side */}
                    <motion.div
                      className="relative p-5 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">For Career Teams</span>
                      </div>
                      <p className="text-white/80 font-medium">{benefit.staff}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop title overlay */}
                <div className="hidden lg:block absolute top-6 right-8">
                  <h3 className="text-lg font-display font-bold text-white/40">{benefit.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/50 text-sm">
            When students succeed, everyone wins
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SharedBenefitsSection;
