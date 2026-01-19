import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GraduationCap, Building2, Star } from "lucide-react";

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
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Subtle animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${
                testimonial.type === "student"
                  ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
                  : "bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200"
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
              <p className="text-slate-800 text-lg mb-6 italic">"{testimonial.quote}"</p>
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
                  <p className="text-slate-800 font-medium text-sm">{testimonial.author}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
            Make your career activity{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              visible
            </span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
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
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg group shadow-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Building2 className="w-5 h-5" />
              Start a Pilot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
