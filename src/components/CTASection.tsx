import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GraduationCap, Building2, Star, Globe, CheckCircle } from "lucide-react";

const testimonials = [
  {
    type: "student",
    quote: "Finally, I can see my whole career journey in one place. It's a game changer.",
    author: "Jessica M.",
    role: "Computer Science, Class of 2025"
  },
  {
    type: "staff",
    quote: "We finally have visibility into what our students are actually doing. Data we never had before.",
    author: "Dr. Sarah Chen",
    role: "Director of Career Services"
  },
];

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#0c1929]">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Trust logos */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-white/40 text-sm mb-6">Trusted by forward-thinking universities</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <motion.div
                key={i}
                className="w-20 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <Globe className="w-5 h-5 text-white/30" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${
                testimonial.type === "student"
                  ? "bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20"
                  : "bg-gradient-to-br from-blue-600/10 to-blue-700/10 border-blue-600/20"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  testimonial.type === "student"
                    ? "bg-[#2563EB]"
                    : "bg-[#1e40af]"
                }`}>
                  {testimonial.type === "student" 
                    ? <GraduationCap className="w-5 h-5 text-white" />
                    : <Building2 className="w-5 h-5 text-white" />
                  }
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.author}</p>
                  <p className="text-white/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Make your career activity{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
              visible
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Join the universities and students already benefiting from real visibility.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-semibold text-lg group shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(37,99,235,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <GraduationCap className="w-5 h-5" />
              Explore ApplyLab
            </motion.button>

            <motion.button
              className="flex items-center gap-2 px-8 py-4 bg-white text-[#0f2847] rounded-full font-semibold text-lg group shadow-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Building2 className="w-5 h-5" />
              Start a Pilot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/40">
            {["No commitment required", "Dedicated onboarding", "Results in weeks"].map((text, i) => (
              <motion.div
                key={text}
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
