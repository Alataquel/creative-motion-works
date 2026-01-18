import { motion } from "framer-motion";
import { FileCheck, FileText, Mail, Search, MessageSquare, BookOpen } from "lucide-react";

const solutions = [
  {
    icon: FileCheck,
    title: "AI-Powered Resume Grader",
    description: "Get instant, actionable feedback on your resume with advanced AI analysis. Receive detailed scoring and personalized improvement suggestions.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional, ATS-optimized resumes with our intuitive builder. Choose from multiple templates and let AI guide you.",
  },
  {
    icon: Mail,
    title: "Cover Letter Maker",
    description: "Generate tailored cover letters that highlight your strengths and match job requirements perfectly.",
  },
  {
    icon: Search,
    title: "Job Matching",
    description: "Intelligent algorithms connect you with opportunities based on your skills, experience, and career goals.",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    description: "Practice with AI-powered mock interviews and get real-time feedback to ace your next interview.",
  },
  {
    icon: BookOpen,
    title: "Case Study Tools",
    description: "Prepare for case interviews with structured frameworks and industry-specific practice problems.",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Comprehensive Solutions
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Solutions for Every Career Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From resume grading and building to job search and application tracking — with AI-powered cover letters, interview prep, and case study tools.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
            >
              {/* Icon with animation */}
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <solution.icon className="w-6 h-6 text-primary" />
              </motion.div>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;