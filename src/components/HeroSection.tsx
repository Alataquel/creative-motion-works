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
          
          {/* Split container */}
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Left: Student Side */}
            <motion.div
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredSide('student')}
              onMouseLeave={() => setHoveredSide(null)}
              animate={{
                scale: hoveredSide === 'student' ? 1.02 : hoveredSide === 'university' ? 0.98 : 1,
                opacity: hoveredSide === 'university' ? 0.6 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card glow on hover */}
              <motion.div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/30 to-blue-500/30 blur-xl"
                animate={{ opacity: hoveredSide === 'student' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
                animate={{
                  backgroundColor: hoveredSide === 'student' ? 'rgba(255,255,255,1)' : 'rgba(12,25,41,0.9)',
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Header */}
                <div 
                  className="flex items-center justify-between px-5 py-4 border-b transition-colors duration-400"
                  style={{
                    borderColor: hoveredSide === 'student' ? 'rgba(226,232,240,1)' : 'rgba(255,255,255,0.05)',
                    backgroundColor: hoveredSide === 'student' ? 'rgba(248,250,252,1)' : 'rgba(255,255,255,0.02)'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors duration-400"
                    style={{
                      backgroundColor: hoveredSide === 'student' ? 'rgba(37,99,235,0.1)' : 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <GraduationCap 
                      className="w-4 h-4 transition-colors duration-400"
                      style={{ color: hoveredSide === 'student' ? '#2563EB' : '#60a5fa' }}
                    />
                    <span 
                      className="text-sm font-semibold transition-colors duration-400"
                      style={{ color: hoveredSide === 'student' ? '#1e293b' : 'rgba(255,255,255,0.8)' }}
                    >
                      For Students
                    </span>
                  </motion.div>
                  <div className="w-16" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Activity stream */}
                  <div className="space-y-3 mb-4">
                    {[
                      { icon: FileText, text: "Resume uploaded", time: "2m ago", color: "from-blue-400 to-blue-500" },
                      { icon: Send, text: "Applied to Google", time: "1h ago", color: "from-blue-500 to-blue-600" },
                      { icon: Activity, text: "Interview prep complete", time: "3h ago", color: "from-blue-600 to-blue-700" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.text}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-400"
                        style={{
                          backgroundColor: hoveredSide === 'student' ? 'rgba(241,245,249,1)' : 'rgba(255,255,255,0.03)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: hoveredSide === 'student' ? 'rgba(226,232,240,1)' : 'rgba(255,255,255,0.05)'
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p 
                            className="text-sm font-medium transition-colors duration-400"
                            style={{ color: hoveredSide === 'student' ? '#1e293b' : 'white' }}
                          >
                            {item.text}
                          </p>
                          <p 
                            className="text-xs transition-colors duration-400"
                            style={{ color: hoveredSide === 'student' ? '#64748b' : 'rgba(255,255,255,0.4)' }}
                          >
                            {item.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress ring */}
                  <motion.div
                    className="p-4 rounded-xl transition-all duration-400"
                    style={{
                      backgroundColor: hoveredSide === 'student' ? 'rgba(241,245,249,1)' : 'rgba(255,255,255,0.02)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: hoveredSide === 'student' ? 'rgba(226,232,240,1)' : 'rgba(255,255,255,0.05)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle 
                            cx="32" cy="32" r="28" fill="none" strokeWidth="4"
                            stroke={hoveredSide === 'student' ? 'rgba(226,232,240,1)' : 'rgba(255,255,255,0.1)'}
                          />
                          <motion.circle
                            cx="32" cy="32" r="28" fill="none" stroke="url(#gradient)" strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="176"
                            initial={{ strokeDashoffset: 176 }}
                            animate={{ strokeDashoffset: 44 }}
                            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#2563eb" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span 
                          className="absolute inset-0 flex items-center justify-center font-bold text-sm transition-colors duration-400"
                          style={{ color: hoveredSide === 'student' ? '#1e293b' : 'white' }}
                        >
                          75%
                        </span>
                      </div>
                      <div>
                        <p 
                          className="font-medium transition-colors duration-400"
                          style={{ color: hoveredSide === 'student' ? '#1e293b' : 'white' }}
                        >
                          Career Ready
                        </p>
                        <p 
                          className="text-xs transition-colors duration-400"
                          style={{ color: hoveredSide === 'student' ? '#64748b' : 'rgba(255,255,255,0.4)' }}
                        >
                          3 tasks remaining
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-400"
                    style={{
                      backgroundColor: hoveredSide === 'student' ? '#2563EB' : 'rgba(37,99,235,0.2)',
                      color: hoveredSide === 'student' ? 'white' : 'rgba(255,255,255,0.9)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: hoveredSide === 'student' ? '#2563EB' : 'rgba(59,130,246,0.3)'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GraduationCap className="w-4 h-4" />
                    Explore the Platform
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: University/Career Team Side */}
            <motion.div
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredSide('university')}
              onMouseLeave={() => setHoveredSide(null)}
              animate={{
                scale: hoveredSide === 'university' ? 1.02 : hoveredSide === 'student' ? 0.98 : 1,
                opacity: hoveredSide === 'student' ? 0.6 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card glow on hover */}
              <motion.div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/30 to-blue-500/30 blur-xl"
                animate={{ opacity: hoveredSide === 'university' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
                animate={{
                  backgroundColor: hoveredSide === 'university' ? 'rgba(255,255,255,1)' : 'rgba(12,25,41,0.9)',
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Header */}
                <div 
                  className="flex items-center justify-between px-5 py-4 border-b transition-colors duration-400"
                  style={{
                    borderColor: hoveredSide === 'university' ? 'rgba(226,232,240,1)' : 'rgba(255,255,255,0.05)',
                    backgroundColor: hoveredSide === 'university' ? 'rgba(248,250,252,1)' : 'rgba(255,255,255,0.02)'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors duration-400"
                    style={{
                      backgroundColor: hoveredSide === 'university' ? 'rgba(37,99,235,0.1)' : 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <Building2 
                      className="w-4 h-4 transition-colors duration-400"
                      style={{ color: hoveredSide === 'university' ? '#2563EB' : '#60a5fa' }}
                    />
                    <span 
                      className="text-sm font-semibold transition-colors duration-400"
                      style={{ color: hoveredSide === 'university' ? '#1e293b' : 'rgba(255,255,255,0.8)' }}
                    >
                      For Universities
                    </span>
                  </motion.div>
                  <div className="w-16" />
                </div>

                {/* Content */}
                <div className="p-6">
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
                        className="p-3 rounded-xl transition-all duration-400"
                        style={{
                          backgroundColor: hoveredSide === 'university' ? 'rgba(241,245,249,1)' : 'rgba(255,255,255,0.03)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: hoveredSide === 'university' ? 'rgba(226,232,240,1)' : 'rgba(255,255,255,0.05)'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.08 }}
                      >
                        <motion.p
                          className="text-xl font-bold transition-colors duration-400"
                          style={{ color: hoveredSide === 'university' ? '#1e293b' : 'white' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.1 + i * 0.08 }}
                        >
                          {stat.value}
                        </motion.p>
                        <div className="flex items-center justify-between">
                          <span 
                            className="text-xs transition-colors duration-400"
                            style={{ color: hoveredSide === 'university' ? '#64748b' : 'rgba(255,255,255,0.4)' }}
                          >
                            {stat.label}
                          </span>
                          <span className="text-xs text-emerald-500 font-medium">{stat.trend}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Insight bar */}
                  <motion.div
                    className="p-4 rounded-xl transition-all duration-400"
                    style={{
                      background: hoveredSide === 'university' 
                        ? 'linear-gradient(to right, rgba(37,99,235,0.08), rgba(59,130,246,0.08))'
                        : 'linear-gradient(to right, rgba(37,99,235,0.1), rgba(59,130,246,0.1))',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: hoveredSide === 'university' ? 'rgba(37,99,235,0.2)' : 'rgba(59,130,246,0.2)'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                      <div>
                        <p 
                          className="text-sm font-medium transition-colors duration-400"
                          style={{ color: hoveredSide === 'university' ? '#1e293b' : 'white' }}
                        >
                          Engagement up 24% this week
                        </p>
                        <p 
                          className="text-xs transition-colors duration-400"
                          style={{ color: hoveredSide === 'university' ? '#64748b' : 'rgba(255,255,255,0.4)' }}
                        >
                          Compared to last week
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-400"
                    style={{
                      backgroundColor: hoveredSide === 'university' ? '#2563EB' : 'rgba(255,255,255,1)',
                      color: hoveredSide === 'university' ? 'white' : '#2563EB',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Building2 className="w-4 h-4" />
                    Request a Pilot
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Center divider indicator */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 animate-pulse" />
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
