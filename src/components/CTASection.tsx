import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
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
              <Link to="/students">
                <motion.button
                  className="flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-semibold text-lg group shadow-lg shadow-blue-500/25"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(37,99,235,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GraduationCap className="w-5 h-5" />
                  Explore ApplyLab
                </motion.button>
              </Link>

              <Link to="/request-pilot">
                <motion.button
                  className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg group shadow-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Building2 className="w-5 h-5" />
                  Start a Pilot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
