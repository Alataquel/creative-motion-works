import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileText, Send, MessageSquare, TrendingUp, Sparkles, Star, Zap } from "lucide-react";

const studentFeatures = [
  {
    icon: Search,
    title: "Smart Job Discovery",
    description: "Find opportunities matched to your skills, interests, and career goals.",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: FileText,
    title: "Resume Building & Improvement",
    description: "Get real-time feedback and AI-powered suggestions to stand out.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Send,
    title: "Application Tracking",
    description: "Know exactly where every application stands, from submission to offer.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: MessageSquare,
    title: "Interview & Case Prep",
    description: "Practice with AI-powered mock interviews and case study simulations.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50"
  },
  {
    icon: TrendingUp,
    title: "Clear Progress Over Time",
    description: "See your growth, celebrate wins, and know exactly what's next.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50"
  },
];

const StudentValueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-indigo-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header - more expressive */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 rounded-full border border-indigo-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">What Students Get</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-foreground">Finally see </span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">what's next</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Students finally see what they've done, what's next, and how they're improving.
          </motion.p>
        </motion.div>

        {/* Features grid - more expressive cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`relative group ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm h-full overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Floating sparkle */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </motion.div>

                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-display font-bold text-foreground mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.45 + i * 0.1 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-indigo-500/25 group"
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-5 h-5" />
            Try the Student Platform
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentValueSection;
