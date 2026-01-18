import { motion } from "framer-motion";
import { GraduationCap, Building2, Briefcase, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Accelerate your career journey with AI-powered tools that provide instant feedback for targeted careers and opportunities.",
    cta: "Learn more",
    href: "#",
    color: "from-cyan-400 to-blue-500",
    available: true,
  },
  {
    icon: Building2,
    title: "Universities",
    description: "Engage students and alumni with the most advanced AI-powered career services platform for measurable outcomes.",
    cta: "Learn more",
    href: "#",
    color: "from-blue-500 to-indigo-600",
    available: true,
  },
  {
    icon: Briefcase,
    title: "Corporates",
    description: "Manage talent navigation with intelligent solutions for internal mobility, strategic hiring, and workforce development.",
    cta: "Coming soon",
    href: "#",
    color: "from-indigo-500 to-purple-600",
    available: false,
  },
];

const SegmentsSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Segments We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            360° impact on the talent ecosystem with specialized solutions for every stakeholder.
          </p>
        </motion.div>

        {/* Segment cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.title}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${segment.color} flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <segment.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                {segment.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {segment.description}
              </p>

              {/* CTA */}
              <motion.a
                href={segment.href}
                className={`inline-flex items-center gap-2 font-semibold ${
                  segment.available 
                    ? "text-primary group-hover:gap-3" 
                    : "text-muted-foreground"
                } transition-all duration-300`}
              >
                {segment.cta}
                {segment.available && <ArrowRight className="w-4 h-4" />}
              </motion.a>

              {/* Corner glow */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${segment.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;