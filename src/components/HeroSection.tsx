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
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)`,
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
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
            whileHover={{ scale: 1.02, backgroundColor: "rgb(239,246,255)" }}
          >
            <Building2 className="w-4 h-4 text-[#2563EB]" />
            <span className="text-sm font-medium text-gray-700">For Universities</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
            whileHover={{ scale: 1.02, backgroundColor: "rgb(239,246,255)" }}
          >
            <GraduationCap className="w-4 h-4 text-[#2563EB]" />
            <span className="text-sm font-medium text-gray-700">For Students</span>
          </motion.div>
        </motion.div>

        {/* Main dual headline */}
        <div className="text-center mb-6">
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] tracking-tight"
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
              <span className="bg-gradient-to-r from-[#2563EB] to-blue-500 bg-clip-text text-transparent">
                Give them clarity on their journey.
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
          <span className="text-gray-900 font-medium">real visibility</span>.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-semibold text-lg group shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(37,99,235,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Building2 className="w-5 h-5" />
            Request a Pilot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-lg group hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            whileHover={{ scale: 1.03 }}
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
          {/* Dashboard shadow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-3xl blur-2xl opacity-60" />
          
          {/* Main container */}
          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-8">
                <div className="w-full max-w-md mx-auto px-4 py-1.5 bg-white rounded-lg border border-gray-200 text-center">
                  <span className="text-xs text-gray-400">applylab.software</span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Split dashboard content */}
            <div className="grid md:grid-cols-2 divide-x divide-gray-100">
              {/* Left: Student View */}
              <motion.div
                className="p-6 bg-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-gray-500 text-sm font-medium">Student View</span>
                </div>

                {/* Activity stream */}
                <div className="space-y-3">
                  {[
                    { icon: FileText, text: "Resume uploaded", time: "2m ago", color: "from-blue-500 to-blue-600" },
                    { icon: Send, text: "Applied to Google", time: "1h ago", color: "from-blue-500 to-blue-600" },
                    { icon: Activity, text: "Interview prep complete", time: "3h ago", color: "from-blue-500 to-blue-600" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 text-sm font-medium">{item.text}</p>
                        <p className="text-gray-400 text-xs">{item.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress ring */}
                <motion.div
                  className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 -rotate-90">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="4" />
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
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[#2563EB] font-bold text-sm">75%</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Career Ready</p>
                      <p className="text-gray-500 text-xs">3 tasks remaining</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Career Team View */}
              <motion.div
                className="p-6 bg-gray-50/50"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-gray-500 text-sm font-medium">Career Team View</span>
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
                      className="p-3 rounded-xl bg-white border border-gray-100"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.08 }}
                    >
                      <motion.p
                        className="text-xl font-bold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 + i * 0.08 }}
                      >
                        {stat.value}
                      </motion.p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{stat.label}</span>
                        <span className="text-xs text-emerald-500">{stat.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Insight bar */}
                <motion.div
                  className="p-4 rounded-xl bg-blue-50 border border-blue-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 }}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-[#2563EB]" />
                    <div>
                      <p className="text-gray-900 text-sm font-medium">Engagement up 24% this week</p>
                      <p className="text-gray-500 text-xs">Compared to last week</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
