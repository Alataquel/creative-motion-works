import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, Activity, FileText, Send, TrendingUp, ChevronDown } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for the 250vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring for organic feel
  const springConfig = { stiffness: 50, damping: 20, mass: 0.8 };
  const progress = useSpring(scrollYProgress, springConfig);

  // ===== CORRECT SCROLL MAPPING =====
  // Scroll DOWN (0 → 1) = Panels SHRINK and move AWAY into distance
  // Scroll UP (1 → 0) = Panels GROW and come BACK toward user

  // Left panel - spirals clockwise INTO the screen
  const leftRotateY = useTransform(progress, [0, 0.25, 0.5, 0.75], [0, 25, 90, 180]);
  const leftRotateZ = useTransform(progress, [0, 0.5, 0.75], [0, -20, -45]);
  const leftTranslateX = useTransform(progress, [0, 0.25, 0.5, 0.75], [0, -60, -120, -180]);
  const leftTranslateY = useTransform(progress, [0, 0.5, 0.75], [0, -80, -200]);
  const leftScale = useTransform(progress, [0, 0.25, 0.5, 0.75], [1, 0.75, 0.45, 0.15]);

  // Right panel - spirals counter-clockwise INTO the screen
  const rightRotateY = useTransform(progress, [0, 0.25, 0.5, 0.75], [0, -25, -90, -180]);
  const rightRotateZ = useTransform(progress, [0, 0.5, 0.75], [0, 20, 45]);
  const rightTranslateX = useTransform(progress, [0, 0.25, 0.5, 0.75], [0, 60, 120, 180]);
  const rightTranslateY = useTransform(progress, [0, 0.5, 0.75], [0, -80, -200]);
  const rightScale = useTransform(progress, [0, 0.25, 0.5, 0.75], [1, 0.75, 0.45, 0.15]);

  // Panel opacity - FADE OUT by 75% scroll
  const panelOpacity = useTransform(progress, [0, 0.3, 0.6, 0.75], [1, 0.8, 0.4, 0]);

  // Depth-of-field BLUR as panels recede
  const panelBlur = useTransform(progress, [0, 0.3, 0.6, 0.75], [0, 2, 6, 12]);

  // Portal glow at vanishing point
  const portalOpacity = useTransform(progress, [0.1, 0.4, 0.7, 0.85], [0, 0.6, 1, 0]);
  const portalScale = useTransform(progress, [0.1, 0.5, 0.75], [0.3, 1.2, 2]);

  // Scroll indicator fades quickly
  const scrollIndicatorOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  // Background transitions to white AFTER panels vanish
  const bgWhiteOpacity = useTransform(progress, [0.75, 0.95], [0, 1]);

  // Text color transitions
  const headlineColor = useTransform(progress, [0.8, 1], ["#ffffff", "#1e293b"]);
  const subtitleOpacity = useTransform(progress, [0, 0.4], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      {/* STICKY CONTAINER - stays fixed while scrolling through runway */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Dark hero background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#2563EB]">
          {/* Animated blobs */}
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

        {/* White background fades in AFTER panels vanish */}
        <motion.div className="absolute inset-0 bg-white" style={{ opacity: bgWhiteOpacity }} />

        <div className="relative z-10 h-full flex flex-col justify-center items-center max-w-7xl mx-auto px-6">
          {/* HEADLINE - Stays pinned and visible */}
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
                      progress,
                      [0.8, 1],
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

          {/* SUBTITLE - Fades as panels travel */}
          <motion.p
            className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed relative z-30 text-white/60"
            style={{ opacity: subtitleOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
            <span className="text-white/90 font-medium">real visibility</span>.
          </motion.p>

          {/* DNA SPIRAL CONTAINER - 1500px perspective for deep tunnel */}
          <motion.div
            className="relative w-full max-w-6xl mx-auto z-20"
            style={{ perspective: 1500, perspectiveOrigin: "center center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* VANISHING POINT PORTAL */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              style={{ opacity: portalOpacity, scale: portalScale }}
            >
              {/* Outer glow */}
              <div
                className="w-40 h-40 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(96, 165, 250, 0.5) 0%, rgba(59, 130, 246, 0.25) 40%, transparent 70%)",
                  boxShadow: "0 0 80px 40px rgba(59, 130, 246, 0.3)",
                }}
              />
              {/* Bright core */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white"
                animate={{ scale: [1, 1.3, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 50px 20px rgba(255, 255, 255, 0.6)" }}
              />
              {/* Rotating rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-blue-400/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-300/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* PANELS GRID */}
            <div className="relative grid md:grid-cols-2 gap-4 md:gap-6 items-stretch" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* LEFT PANEL - Student Side */}
              <motion.div
                className="relative h-full origin-center"
                style={{
                  rotateY: leftRotateY,
                  rotateZ: leftRotateZ,
                  x: leftTranslateX,
                  y: leftTranslateY,
                  scale: leftScale,
                  opacity: panelOpacity,
                  filter: useTransform(panelBlur, (v) => `blur(${v}px)`),
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

                    <motion.div
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                          <svg className="w-16 h-16 -rotate-90">
                            <circle cx="32" cy="32" r="28" fill="none" strokeWidth="4" stroke="#e2e8f0" />
                            <motion.circle
                              cx="32" cy="32" r="28" fill="none" stroke="url(#gradientStudent)" strokeWidth="4"
                              strokeLinecap="round" strokeDasharray="176"
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

              {/* RIGHT PANEL - University Side */}
              <motion.div
                className="relative h-full origin-center"
                style={{
                  rotateY: rightRotateY,
                  rotateZ: rightRotateZ,
                  x: rightTranslateX,
                  y: rightTranslateY,
                  scale: rightScale,
                  opacity: panelOpacity,
                  filter: useTransform(panelBlur, (v) => `blur(${v}px)`),
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

          {/* SCROLL INDICATOR */}
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
