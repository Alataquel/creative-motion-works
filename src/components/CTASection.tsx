import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GraduationCap, Building2, Star, CheckCircle, Quote } from "lucide-react";

const stats = [
  { value: "10+", label: "Universities" },
  { value: "5/5", label: "Satisfaction" },
  { value: "10k+", label: "Job Positions" },
];

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Social Proof Section */}
      <div className="bg-white py-32 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700 font-medium">Partnered with universities in Germany, Spain and Switzerland</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-4xl font-display font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-blue-200" />
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-slate-800 leading-tight mb-12">
                "ApplyLab gave us visibility we never had before.
                <span className="text-blue-600"> Now we can actually help students before they fall behind.</span>"
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-500/30">
                  MK
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-800 font-medium text-lg">Dr. Maria Keller</p>
                  <p className="text-slate-500">Director of Career Services • LMU Munich</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 md:py-32 relative overflow-hidden bg-white">
        {/* Subtle animated background */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
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
      </div>
    </section>
  );
};

export default CTASection;
