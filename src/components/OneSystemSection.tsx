import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Send, FileText, TrendingUp, ArrowRight } from "lucide-react";

const panels = [
  {
    icon: Users,
    title: "Student Engagement",
    description: "See who's active, who's preparing, and who needs support",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    delay: 0.2
  },
  {
    icon: Send,
    title: "Applications & Outcomes",
    description: "Track applications from submission to placement",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    delay: 0.35
  },
  {
    icon: FileText,
    title: "Preparation & Materials",
    description: "Monitor resume quality and interview readiness",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    delay: 0.5
  },
  {
    icon: TrendingUp,
    title: "Progress Over Time",
    description: "Understand trends across cohorts and programs",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    delay: 0.65
  }
];

const OneSystemSection = () => {
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
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            One System. One Source of Truth.
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            One clear view of student career activity.
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Everything your team needs to understand, support, and improve student outcomes.
          </motion.p>
        </motion.div>

        {/* Panels grid with assembly animation */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              className="relative group"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: panel.delay, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-sm overflow-hidden h-full"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                  borderColor: "hsl(var(--primary) / 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 ${panel.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${panel.color} flex items-center justify-center mb-5 shadow-lg`}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      delay: panel.delay + 0.2, 
                      type: "spring", 
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <panel.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-display font-bold text-foreground mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: panel.delay + 0.3 }}
                  >
                    {panel.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: panel.delay + 0.4 }}
                  >
                    {panel.description}
                  </motion.p>

                  {/* Animated arrow on hover */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                {/* Lock-in animation line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: panel.delay + 0.5, duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Central connecting element */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">All synced in real-time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OneSystemSection;
