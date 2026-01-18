import { motion } from "framer-motion";
import { Shield, Zap, BarChart3, HeartHandshake, Rocket, Layers } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with security best practices and compliance-ready architecture.",
  },
  {
    icon: Zap,
    title: "Quick Deployment",
    description: "Get started quickly with seamless integration and comprehensive onboarding.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    description: "Track student engagement and career outcomes with comprehensive analytics.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Personalized onboarding, training, and ongoing support for your institution.",
  },
  {
    icon: Rocket,
    title: "Continuous Innovation",
    description: "Regular platform updates with the latest AI advancements and features.",
  },
  {
    icon: Layers,
    title: "Scalable Platform",
    description: "Designed to grow with your institution from pilot programs to full deployment.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            Why Partner With Us
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Why Universities <span className="text-gradient">Choose ApplyLab</span>
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="relative p-6 rounded-2xl bg-card border border-border group shadow-soft"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 15px 50px hsl(230 65% 28% / 0.15)" }}
            >
              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <benefit.icon className="w-6 h-6 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-display font-bold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>

              {/* Glow effect on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;