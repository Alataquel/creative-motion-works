import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, Activity, FileText, Send, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredSide, setHoveredSide] = useState<'student' | 'university' | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#2563EB]">
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }}
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
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
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Give them clarity on their journey.
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
          <span className="text-white/90 font-medium">real visibility</span>.
        </motion.p>

        {/* Split-screen Interactive Toggle */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          style={{ y: dashboardY }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Dashboard glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl opacity-50" />
          
          {/* Split container - equal height with grid */}
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {/* Left: Student Side */}
            <motion.div
              className="relative cursor-pointer group h-full"
              onMouseEnter={() => setHoveredSide('student')}
              onMouseLeave={() => setHoveredSide(null)}
              animate={{
                scale: hoveredSide === 'student' ? 1.02 : hoveredSide === 'university' ? 0.98 : 1,
                opacity: hoveredSide === 'university' ? 0.7 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card glow on hover */}
              <motion.div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/30 to-blue-500/30 blur-xl"
                animate={{ opacity: hoveredSide === 'student' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-800">For Students</span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Activity stream */}
                  <div className="space-y-3 mb-4">
                    {[
                      { icon: FileText, text: "Resume uploaded", time: "2m ago", color: "from-blue-500 to-blue-600" },
                      { icon: Send, text: "Applied to Google", time: "1h ago", color: "from-blue-600 to-blue-700" },
                      { icon: Activity, text: "Interview prep complete", time: "3h ago", color: "from-indigo-500 to-indigo-600" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.text}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800">{item.text}</p>
                          <p className="text-xs text-slate-500">{item.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress ring */}
                  <motion.div
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle 
                            cx="32" cy="32" r="28" fill="none" strokeWidth="4"
                            stroke="#e2e8f0"
                          />
                          <motion.circle
                            cx="32" cy="32" r="28" fill="none" stroke="url(#gradientStudent)" strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="176"
                            initial={{ strokeDashoffset: 176 }}
                            animate={{ strokeDashoffset: 44 }}
                            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                          />
                          <defs>
                            <linearGradient id="gradientStudent" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#2563eb" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-sm text-slate-800">75%</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Career Ready</p>
                        <p className="text-xs text-slate-500">3 tasks remaining</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* CTA Button */}
                  <motion.button
                    className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GraduationCap className="w-4 h-4" />
                    Explore the Platform
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right: University/Career Team Side */}
            <motion.div
              className="relative cursor-pointer group h-full"
              onMouseEnter={() => setHoveredSide('university')}
              onMouseLeave={() => setHoveredSide(null)}
              animate={{
                scale: hoveredSide === 'university' ? 1.02 : hoveredSide === 'student' ? 0.98 : 1,
                opacity: hoveredSide === 'student' ? 0.7 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card glow on hover */}
              <motion.div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/30 to-blue-500/30 blur-xl"
                animate={{ opacity: hoveredSide === 'university' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-800">For Universities</span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
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
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.08 }}
                      >
                        <motion.p
                          className="text-xl font-bold text-slate-800"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.1 + i * 0.08 }}
                        >
                          {stat.value}
                        </motion.p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className="text-xs text-emerald-600 font-medium">{stat.trend}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Insight bar */}
                  <motion.div
                    className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-800">Engagement up 24% this week</p>
                        <p className="text-xs text-slate-500">Compared to last week</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* CTA Button */}
                  <motion.button
                    className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Building2 className="w-4 h-4" />
                    Request a Pilot
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center divider indicator */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
