import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Building2, Shuffle, FileQuestion, Eye, Activity, Link2Off, AlertCircle, ArrowRight } from "lucide-react";

const studentProblems = [
  { icon: Shuffle, text: "Applications everywhere" },
  { icon: FileQuestion, text: "Feedback scattered" },
  { icon: Eye, text: "Progress hard to see" },
];

const teamProblems = [
  { icon: AlertCircle, text: "Activity outside institutional systems" },
  { icon: Activity, text: "No clear overview" },
  { icon: Link2Off, text: "Outcomes disconnected from actions" },
];

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"students" | "teams">("students");

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
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
            The Problem — From Both Sides
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Fragmented experiences. Missed opportunities.
          </motion.h2>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "students"
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            onClick={() => setActiveTab("students")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GraduationCap className="w-5 h-5" />
            For Students
          </motion.button>
          <motion.button
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "teams"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            onClick={() => setActiveTab("teams")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Building2 className="w-5 h-5" />
            For Career Teams
          </motion.button>
        </motion.div>

        {/* Problems display */}
        <motion.div
          className="relative"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {(activeTab === "students" ? studentProblems : teamProblems).map((problem, i) => (
              <motion.div
                key={problem.text}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-sm h-full text-center"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                    borderColor: activeTab === "students" ? "rgba(129,140,248,0.3)" : "rgba(56,189,248,0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${
                      activeTab === "students" ? "bg-indigo-50" : "bg-sky-50"
                    }`}
                    initial={{ scale: 0, rotate: -15 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <problem.icon className={`w-8 h-8 ${
                      activeTab === "students" ? "text-indigo-500" : "text-sky-500"
                    }`} />
                  </motion.div>

                  <p className="text-lg font-medium text-foreground/80">{problem.text}</p>

                  {/* Animated underline */}
                  <motion.div
                    className={`absolute bottom-0 left-6 right-6 h-1 rounded-full ${
                      activeTab === "students" 
                        ? "bg-gradient-to-r from-indigo-400 to-purple-400" 
                        : "bg-gradient-to-r from-sky-400 to-blue-400"
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  />
                </motion.div>

                {/* Chaos dots */}
                {[...Array(3)].map((_, j) => (
                  <motion.div
                    key={j}
                    className={`absolute w-2 h-2 rounded-full opacity-30 ${
                      activeTab === "students" ? "bg-indigo-400" : "bg-sky-400"
                    }`}
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-muted-foreground text-lg mb-4">
            It doesn't have to be this way.
          </p>
          <motion.div
            className="flex items-center justify-center gap-2 text-primary font-medium"
            whileHover={{ gap: "12px" }}
          >
            <span>See how ApplyLab brings it together</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
