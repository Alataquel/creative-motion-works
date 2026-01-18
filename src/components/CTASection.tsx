import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#0a1628]">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          When students see their journey clearly,
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            outcomes improve.
          </span>
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0f2847] rounded-full font-semibold text-lg group shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Building2 className="w-5 h-5" />
            Start a Pilot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 text-white rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <GraduationCap className="w-5 h-5" />
            See the Student Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;