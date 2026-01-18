import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, GraduationCap, Building2, FileText, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e3a5f] to-[#3b5998]">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[150px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: Sparkles, text: "AI-Powered" },
            { icon: GraduationCap, text: "100% Free for Students" },
            { icon: Building2, text: "Enterprise Ready" },
          ].map((badge, i) => (
            <motion.div
              key={badge.text}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <badge.icon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main headline */}
        <div className="text-center mb-8">
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Career Acceleration
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Platform
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering universities to deliver exceptional career outcomes for their students through{" "}
          <span className="text-cyan-400 font-medium">advanced AI technology</span> and comprehensive analytics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg group"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Partner With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-[#1e293b] text-white rounded-full font-semibold text-lg group shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Play className="w-4 h-4 fill-white" />
            </div>
          </motion.button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main browser window */}
          <motion.div
            className="relative bg-[#1e293b] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              {/* Top row cards */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-24 rounded-xl bg-[#2d3a4f] border border-white/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                  />
                ))}
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  className="col-span-2 h-40 rounded-xl bg-[#2d3a4f] border border-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                />
                <motion.div
                  className="h-40 rounded-xl bg-[#2d3a4f] border border-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -left-8 top-1/3 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800">Resume Score</span>
          </motion.div>

          <motion.div
            className="absolute -right-8 bottom-1/4 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800">Job Matches</span>
          </motion.div>

          {/* Animated particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;