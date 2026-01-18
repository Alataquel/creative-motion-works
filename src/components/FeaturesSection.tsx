import { motion } from "framer-motion";
import { Brain, MessageSquare, Target, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Powered by state-of-the-art LLMs to understand context, generate personalized content, and provide intelligent career guidance.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced NLP algorithms analyze resumes, cover letters, and job descriptions to optimize content and improve keyword matching.",
  },
  {
    icon: Target,
    title: "Skill-Based Matching",
    description: "Intelligent matching algorithms connect students with opportunities based on their skills, experience, and career goals.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Feedback Loops",
    description: "Continuous learning system that provides instant, actionable feedback and improves recommendations based on success patterns.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            AI Platform
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Our AI Platform <span className="text-gradient">Fuels Your Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI technology powering intelligent career guidance and personalized recommendations.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden card-hover cursor-pointer shadow-soft"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;