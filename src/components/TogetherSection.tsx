import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building2, ArrowRight, Layers, Zap, Globe, CheckCircle } from "lucide-react";

const TogetherSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const benefits = [
    { icon: Layers, text: "Works alongside existing tools" },
    { icon: Building2, text: "Built with universities" },
    { icon: Globe, text: "Scales across programs" },
    { icon: Zap, text: "Fast deployment" },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Built to Work Together
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Student actions →{" "}
            <span className="text-gradient">structured visibility</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            No extra effort. No separate systems. Shared understanding.
          </motion.p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Student side */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Students Use</h3>
              <p className="text-muted-foreground text-sm">
                Natural, intuitive tools for job search, applications, and prep
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500 flex items-center justify-center shadow-xl"
                animate={{ 
                  boxShadow: [
                    "0 10px 30px rgba(99,102,241,0.3)",
                    "0 10px 50px rgba(59,130,246,0.4)",
                    "0 10px 30px rgba(99,102,241,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Team side */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Teams See</h3>
              <p className="text-muted-foreground text-sm">
                Real-time insights into activity, progress, and outcomes
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.text}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground/80">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-muted-foreground text-sm mb-6">Trusted by forward-thinking universities</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Strong pilot engagement", "Built for long-term adoption", "Active support & onboarding"].map((text, i) => (
              <motion.div
                key={text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.3 + i * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-muted-foreground">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TogetherSection;
