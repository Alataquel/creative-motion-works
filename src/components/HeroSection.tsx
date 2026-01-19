import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, Activity, FileText, Send, TrendingUp, ChevronDown } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for the entire 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Spring physics for smooth animations
  const springConfig = { stiffness: 60, damping: 30, mass: 1 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // DNA Spiral transformations - panels RECEDE into the distance
  // Left panel spirals clockwise as it moves away
  const leftRotateY = useTransform(smoothProgress, [0, 0.3, 0.5, 0.7, 1], [0, -30, -90, -150, -180]);
  const leftRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [0, 15, 30]);
  const leftTranslateX = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 50, 100, 150]);
  const leftTranslateZ = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, -300, -600, -1000]);
  const leftScale = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [1, 0.8, 0.5, 0.2]);
  const leftY = useTransform(smoothProgress, [0, 0.5, 1], [0, -50, -150]);

  // Right panel spirals counter-clockwise as it moves away
  const rightRotateY = useTransform(smoothProgress, [0, 0.3, 0.5, 0.7, 1], [0, 30, 90, 150, 180]);
  const rightRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [0, -15, -30]);
  const rightTranslateX = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, -50, -100, -150]);
  const rightTranslateZ = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, -300, -600, -1000]);
  const rightScale = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [1, 0.8, 0.5, 0.2]);
  const rightY = useTransform(smoothProgress, [0, 0.5, 1], [0, -50, -150]);

  // Panel opacity - fade out as they recede
  const panelOpacity = useTransform(smoothProgress, [0, 0.5, 0.8, 1], [1, 0.8, 0.4, 0]);

  // DNA backbone / portal glow at center (appears as panels spiral)
  const portalOpacity = useTransform(smoothProgress, [0, 0.2, 0.6, 0.9], [0, 0.5, 1, 0]);
  const portalScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1.5, 2]);
  const portalGlow = useTransform(smoothProgress, [0.3, 0.7], [20, 60]);

  // Scroll indicator opacity
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  // Background transition to white
  const bgWhiteOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  // Headline color transition
  const headlineColor = useTransform(smoothProgress, [0.85, 1], ["#ffffff", "#1e293b"]);
  const subtitleColor = useTransform(smoothProgress, [0.85, 1], ["rgba(255,255,255,0.6)", "rgba(100,116,139,1)"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      {/* Sticky container that stays pinned in viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Dark hero background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#2563EB]">
          {/* Animated mesh background */}
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

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* White background that fades in at the end */}
        <motion.div
          className="absolute inset-0 bg-white"
          style={{ opacity: bgWhiteOpacity }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          {/* Main dual headline - STAYS PINNED */}
          <div className="text-center mb-6 relative z-30">
            <div className="overflow-hidden">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight"
                style={{ color: headlineColor }}
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
                <motion.span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: useTransform(
                      smoothProgress,
                      [0.85, 1],
                      [
                        "linear-gradient(to right, #93c5fd, #60a5fa, #3b82f6)",
                        "linear-gradient(to right, #3b82f6, #2563eb, #1d4ed8)"
                      ]
                    )
                  }}
                >
                  Give them clarity on their journey.
                </motion.span>
              </motion.h1>
            </div>
          </div>

          {/* Subtitle - STAYS PINNED */}
          <motion.p
            className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed relative z-30"
            style={{ color: subtitleColor }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
            <motion.span 
              className="font-medium"
              style={{ color: useTransform(smoothProgress, [0.85, 1], ["rgba(255,255,255,0.9)", "#1e293b"]) }}
            >
              real visibility
            </motion.span>.
          </motion.p>

          {/* DNA Spiral Panels Container - RECEDES INTO DISTANCE */}
          <motion.div
            className="relative max-w-6xl mx-auto w-full z-20"
            style={{ 
              perspective: 2000,
              perspectiveOrigin: "center center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Portal / Vanishing Point Glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              style={{ 
                opacity: portalOpacity, 
                scale: portalScale,
              }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="w-32 h-32 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
                  boxShadow: useTransform(portalGlow, (v) => `0 0 ${v}px ${v/2}px rgba(59, 130, 246, 0.3)`),
                }}
              />
              {/* Inner bright core */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 40px 15px rgba(255, 255, 255, 0.5)" }}
              />
              {/* Rotating energy rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-blue-400/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-300/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Split container */}
            <div className="relative grid md:grid-cols-2 gap-4 md:gap-6 items-stretch" style={{ transformStyle: 'preserve-3d' }}>
              {/* Left: Student Side - SPIRALS AWAY */}
              <motion.div
                className="relative h-full origin-center"
                style={{
                  rotateY: leftRotateY,
                  rotateZ: leftRotateZ,
                  x: leftTranslateX,
                  z: leftTranslateZ,
                  y: leftY,
                  scale: leftScale,
                  opacity: panelOpacity,
                  transformStyle: 'preserve-3d',
                }}
              >
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

              {/* Right: University Side - SPIRALS AWAY (opposite direction) */}
              <motion.div
                className="relative h-full origin-center"
                style={{
                  rotateY: rightRotateY,
                  rotateZ: rightRotateZ,
                  x: rightTranslateX,
                  z: rightTranslateZ,
                  y: rightY,
                  scale: rightScale,
                  opacity: panelOpacity,
                  transformStyle: 'preserve-3d',
                }}
              >
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
          </motion.div>

          {/* Scroll to Discover Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="text-white/60 text-sm font-medium tracking-wide">Scroll to Discover</span>
            <motion.div
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
