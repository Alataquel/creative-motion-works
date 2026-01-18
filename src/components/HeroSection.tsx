import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, GraduationCap, Building2, Activity, FileText, Send, TrendingUp, BarChart3 } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#1a365d]">
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }}
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* Dual audience badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <Building2 className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-medium text-white/80">For Universities</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-white/80">For Students</span>
          </motion.div>
        </motion.div>

        {/* Main dual headline */}
        <div className="text-center mb-6">
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              See what students are doing.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Give them clarity on their journey.
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
          <span className="text-white/90 font-medium">real visibility</span>.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0f2847] rounded-full font-semibold text-lg group shadow-lg shadow-white/10"
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Building2 className="w-5 h-5" />
            Request a Pilot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 text-white rounded-full font-semibold text-lg group"
            whileHover={{ scale: 1.03, borderColor: "rgba(129,140,248,0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <GraduationCap className="w-5 h-5" />
            Explore the Platform
          </motion.button>
        </motion.div>

        {/* Split-view Dashboard */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          style={{ y: dashboardY }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Dashboard glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />
          
          {/* Main container */}
          <div className="relative bg-[#0d1f38]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-8">
                <div className="w-full max-w-md mx-auto px-4 py-1.5 bg-white/5 rounded-lg text-center">
                  <span className="text-xs text-white/40">applylab.software</span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Split dashboard content */}
            <div className="grid md:grid-cols-2 divide-x divide-white/5">
              {/* Left: Student View */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <span className="text-white/60 text-sm font-medium">Student View</span>
                </div>

                {/* Activity stream */}
                <div className="space-y-3">
                  {[
                    { icon: FileText, text: "Resume uploaded", time: "2m ago", color: "from-blue-400 to-blue-600" },
                    { icon: Send, text: "Applied to Google", time: "1h ago", color: "from-indigo-400 to-indigo-600" },
                    { icon: Activity, text: "Interview prep complete", time: "3h ago", color: "from-purple-400 to-purple-600" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{item.text}</p>
                        <p className="text-white/40 text-xs">{item.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress ring */}
                <motion.div
                  className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 -rotate-90">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                        <motion.circle
                          cx="32" cy="32" r="28" fill="none" stroke="url(#gradient)" strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray="176"
                          initial={{ strokeDashoffset: 176 }}
                          animate={{ strokeDashoffset: 44 }}
                          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#818cf8" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">75%</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Career Ready</p>
                      <p className="text-white/40 text-xs">3 tasks remaining</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Career Team View */}
              <motion.div
                className="p-6 bg-white/[0.01]"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-sky-400" />
                  <span className="text-white/60 text-sm font-medium">Career Team View</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Active", value: "2,847", trend: "+12%" },
                    { label: "Applications", value: "8,234", trend: "+24%" },
                    { label: "Interviews", value: "456", trend: "+18%" },
                    { label: "Placed", value: "189", trend: "+31%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.08 }}
                    >
                      <motion.p
                        className="text-xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 + i * 0.08 }}
                      >
                        {stat.value}
                      </motion.p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">{stat.label}</span>
                        <span className="text-xs text-emerald-400">{stat.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Insight bar */}
                <motion.div
                  className="p-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 }}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-sky-400" />
                    <div>
                      <p className="text-white text-sm font-medium">Engagement up 24% this week</p>
                      <p className="text-white/40 text-xs">Compared to last week</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Floating connection line */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-sky-400/50 to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
