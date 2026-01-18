import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            For University Partners
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Your Partner in <span className="text-gradient">Career Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work exclusively with universities to provide comprehensive career services. 
            Your institution is our client, your success is our mission.
          </p>
        </motion.div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* University Dashboard */}
          <motion.div
            className="relative p-8 rounded-3xl bg-primary text-primary-foreground overflow-hidden group"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 60px hsl(230 65% 28% / 0.4)" }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
              ))}
            </div>

            <Building2 className="w-10 h-10 mb-6" />
            <h3 className="text-2xl font-display font-bold mb-4">University Dashboard</h3>
            <p className="text-primary-foreground/80 mb-6">
              Comprehensive analytics, outcome tracking, and market insights to demonstrate the value of your career services.
            </p>
            <ul className="space-y-2 mb-8">
              {["Real-time Placement Tracking", "Student Engagement Analytics", "ROI Reporting"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <motion.button
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Partner Portal
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Student Platform */}
          <motion.div
            className="relative p-8 rounded-3xl bg-card border border-border overflow-hidden group shadow-soft"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 60px hsl(230 65% 28% / 0.15)" }}
          >
            <GraduationCap className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Student Platform</h3>
            <p className="text-muted-foreground mb-6">
              Free, powerful tools for students to discover opportunities, optimize applications, and track their career journey.
            </p>
            <ul className="space-y-2 mb-8">
              {["AI-Powered Job Matching", "Resume Builder & Grader", "Application Tracking"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <motion.button
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold group/btn"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsl(230 65% 28% / 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Career Journey
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>

            {/* Corner glow */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;