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
    description: "Advanced NLP algorithms analyze resumes, cover letters, and job descriptions to optimize content and improve matching.",
  },
  {
    icon: Target,
    title: "Skill-Based Matching",
    description: "Intelligent matching algorithms connect students with opportunities based on their skills, experience, and career goals.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Feedback Loops",
    description: "Continuous learning system that provides instant, actionable feedback and improves recommendations over time.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
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
          >
            AI Platform
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our AI Platform Fuels Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI technology powering intelligent career guidance and personalized recommendations.
          </p>
        </motion.div>

        {/* Feature cards - 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                borderColor: "hsl(var(--primary) / 0.3)"
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Icon */}
              <motion.div
                className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="relative text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;