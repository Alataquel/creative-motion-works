import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Layers, Users2, LayoutDashboard, Shield, Zap, Globe, CheckCircle } from "lucide-react";

const features = [
  { icon: Layers, text: "Works alongside existing systems" },
  { icon: Building2, text: "Built with universities" },
  { icon: Users2, text: "Scales across cohorts and programs" },
  { icon: LayoutDashboard, text: "Clean, intuitive dashboards" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Zap, text: "Fast deployment" }
];

const InstitutionalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Building2 className="w-4 h-4" />
            Designed for Institutional Use
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Built for how universities actually work.
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            ApplyLab gives career teams visibility into how students explore, prepare, and apply — 
            so decisions are based on real behavior, not assumptions.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.text}
              className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border/50 shadow-sm group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              whileHover={{ 
                scale: 1.02, 
                borderColor: "hsl(var(--primary) / 0.3)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
              }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 200 }}
              >
                <feature.icon className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm md:text-base font-medium text-foreground/80">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-display font-bold text-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            Trusted by forward-thinking universities
          </motion.h3>

          {/* University logos placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <motion.div
                key={i}
                className="w-24 h-12 rounded-lg bg-muted/50 border border-border/30 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
              >
                <Globe className="w-6 h-6 text-muted-foreground/50" />
              </motion.div>
            ))}
          </div>

          {/* Trust statements */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["Strong engagement during pilots", "Built for long-term adoption", "Active support & onboarding"].map((text, i) => (
              <motion.div
                key={text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 + i * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
