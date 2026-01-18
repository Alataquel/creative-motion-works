import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building2, Users, TrendingUp, Eye, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    student: "See your complete journey",
    staff: "See all student activity"
  },
  {
    icon: TrendingUp,
    student: "Track your progress",
    staff: "Track cohort outcomes"
  },
  {
    icon: CheckCircle,
    student: "Know what's next",
    staff: "Get actionable insights"
  },
  {
    icon: Users,
    student: "Connect with opportunities",
    staff: "Support students better"
  },
];

const SharedBenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4">
            Shared Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Better outcomes for{" "}
            <span className="text-gradient">everyone</span>
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <motion.div
                className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-sm overflow-hidden"
                whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              >
                {/* Center icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-indigo-500/10 border border-primary/20 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                >
                  <benefit.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Split content */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Student side */}
                  <motion.div
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <GraduationCap className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{benefit.student}</p>
                  </motion.div>

                  {/* Staff side */}
                  <motion.div
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Building2 className="w-5 h-5 text-sky-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{benefit.staff}</p>
                  </motion.div>
                </div>

                {/* Connecting line */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-300 via-primary to-sky-300"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ top: "calc(50% + 32px)" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SharedBenefitsSection;
