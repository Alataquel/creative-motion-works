import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Shuffle, FileQuestion, Link2Off } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "Student activity happens outside your systems",
    visual: "opacity-60"
  },
  {
    icon: Shuffle,
    text: "Applications are scattered across platforms",
    visual: "opacity-60"
  },
  {
    icon: FileQuestion,
    text: "Materials are reviewed without shared standards",
    visual: "opacity-60"
  },
  {
    icon: Link2Off,
    text: "Outcomes are hard to connect to actions",
    visual: "opacity-60"
  }
];

const RealitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-sm font-medium bg-red-50 text-red-600 rounded-full border border-red-100 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            The Reality Today
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            You can't improve what you can't see.
          </motion.h2>
        </motion.div>

        {/* Problem statements */}
        <div className="space-y-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.text}
              className="relative"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
                whileHover={{ scale: 1.01, x: 8 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                >
                  <problem.icon className="w-6 h-6 text-red-500" />
                </motion.div>

                {/* Text */}
                <p className="text-lg md:text-xl font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {problem.text}
                </p>

                {/* Animated line */}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-red-200 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Visual element - scattered to structured transition */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-muted-foreground text-lg">
            Career teams deserve better than scattered data and blind spots.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealitySection;
