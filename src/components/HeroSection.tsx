import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, Activity, FileText, Send, TrendingUp, ChevronDown } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress over 200vh for controlled animation runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring for animations
  const springConfig = { stiffness: 80, damping: 20, mass: 0.5 };
  const progress = useSpring(scrollYProgress, springConfig);

  // ===== DNA HELIX CONVERGENCE ANIMATION =====
  
  // VERTICAL DESCENT - panels travel down toward the toggle buttons
  const panelY = useTransform(progress, [0, 0.4, 0.7, 1], [0, 300, 550, 750]);

  // LEFT PANEL - Moves RIGHT to center, converging with right panel
  const leftX = useTransform(progress, [0, 0.3, 0.6, 0.85, 1], [0, 100, 200, 280, 320]);
  const leftRotateY = useTransform(progress, [0, 0.3, 0.6, 0.85], [0, 25, 12, 0]);
  const leftRotateZ = useTransform(progress, [0, 0.4, 0.8, 1], [0, -15, -5, 0]);
  const leftScale = useTransform(progress, [0, 0.5, 0.8, 1], [1, 0.75, 0.45, 0.25]);

  // RIGHT PANEL - Moves LEFT to center, converging with left panel
  const rightX = useTransform(progress, [0, 0.3, 0.6, 0.85, 1], [0, -100, -200, -280, -320]);
  const rightRotateY = useTransform(progress, [0, 0.3, 0.6, 0.85], [0, -25, -12, 0]);
  const rightRotateZ = useTransform(progress, [0, 0.4, 0.8, 1], [0, 15, 5, 0]);
  const rightScale = useTransform(progress, [0, 0.5, 0.8, 1], [1, 0.75, 0.45, 0.25]);

  // PANEL OPACITY - Stay visible longer, fade only at the very end for morph
  const panelOpacity = useTransform(progress, [0, 0.75, 0.9, 1], [1, 1, 0.5, 0]);

  // MORPHED TOGGLE BUTTONS - appear as panels converge
  const toggleOpacity = useTransform(progress, [0.8, 0.95, 1], [0, 0.7, 1]);
  const toggleScale = useTransform(progress, [0.85, 1], [0.8, 1]);
  const toggleY = useTransform(progress, [0.85, 1], [30, 0]);

  // Headline transitions
  const headlineScale = useTransform(progress, [0, 0.4], [1, 1.08]);
  const headlineOpacity = useTransform(progress, [0.6, 0.85], [1, 0]);
  const subtitleOpacity = useTransform(progress, [0, 0.25], [1, 0]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  // Sparkle/glow at convergence point
  const sparkleOpacity = useTransform(progress, [0.6, 0.78, 0.88, 1], [0, 1, 1, 0]);
  const sparkleScale = useTransform(progress, [0.6, 0.85, 1], [0.2, 1.3, 1.8]);

  // Background: dark blue fades, white section shows through
  const blueBgOpacity = useTransform(progress, [0.7, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* STICKY VIEWPORT - Everything stays fixed while scrolling through 200vh */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* DARK BLUE BACKGROUND - Fades out to reveal white */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#2563EB] z-0"
          style={{ opacity: blueBgOpacity }}
        >
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
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </motion.div>

        {/* WHITE BACKGROUND - Behind blue, revealed as blue fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background z-[-1]" />

        {/* CONTENT LAYER */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center max-w-7xl mx-auto px-6">
          
          {/* HEADLINE */}
          <motion.div 
            className="text-center mb-6"
            style={{ scale: headlineScale, opacity: headlineOpacity }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              See what students are doing.
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]">
                Give them clarity on their journey.
              </span>
            </motion.h1>
          </motion.div>

          {/* SUBTITLE */}
          <motion.p
            className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-white/60"
            style={{ opacity: subtitleOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
            <span className="text-white/90 font-medium">real visibility</span>.
          </motion.p>

          {/* DNA PANELS CONTAINER - HIGH Z-INDEX to float over everything */}
          <div
            className="relative w-full max-w-6xl mx-auto z-50"
            style={{ perspective: 1600 }}
          >
            {/* CONVERGENCE SPARKLE/GLOW */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{ 
                opacity: sparkleOpacity, 
                scale: sparkleScale,
                y: useTransform(progress, [0, 1], [0, 650])
              }}
            >
              <div
                className="w-80 h-80 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(147, 197, 253, 0.8) 15%, rgba(59, 130, 246, 0.5) 40%, transparent 65%)",
                  boxShadow: "0 0 120px 60px rgba(255, 255, 255, 0.7), 0 0 200px 100px rgba(59, 130, 246, 0.5)",
                }}
              />
              {/* Sparkle particles */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
                  style={{
                    x: Math.cos((i * Math.PI) / 8) * 120 - 4,
                    y: Math.sin((i * Math.PI) / 8) * 120 - 4,
                    boxShadow: "0 0 8px 4px rgba(255,255,255,0.9)"
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.06,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>

            {/* MORPHED TOGGLE BUTTONS - Final landing spot */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-3 w-72"
              style={{ 
                opacity: toggleOpacity, 
                scale: toggleScale,
                y: useTransform(progress, [0, 1], [100, 700])
              }}
            >
              {/* Students Toggle */}
              <motion.div
                className="w-full p-5 rounded-2xl bg-[#2563EB] text-white shadow-xl shadow-blue-500/30 border border-blue-400/30"
                style={{ y: toggleY }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base">Students</h3>
                    <p className="text-sm text-white/75">Your journey, one view</p>
                  </div>
                </div>
              </motion.div>

              {/* Career Teams Toggle */}
              <motion.div
                className="w-full p-5 rounded-2xl bg-[#1e40af] text-white shadow-xl shadow-blue-600/30 border border-blue-500/30"
                style={{ y: toggleY }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base">Career Teams</h3>
                    <p className="text-sm text-white/75">Real visibility, real insight</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* DNA PANELS - Float in foreground */}
            <div className="relative grid md:grid-cols-2 gap-4 md:gap-6 items-stretch" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* LEFT PANEL - Students */}
              <motion.div
                className="relative h-full"
                style={{
                  y: panelY,
                  x: leftX,
                  rotateY: leftRotateY,
                  rotateZ: leftRotateZ,
                  scale: leftScale,
                  opacity: panelOpacity,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'right center',
                  zIndex: 60,
                }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-slate-200">
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

                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                      <GraduationCap className="w-4 h-4" />
                      Explore the Platform
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT PANEL - Universities */}
              <motion.div
                className="relative h-full"
                style={{
                  y: panelY,
                  x: rightX,
                  rotateY: rightRotateY,
                  rotateZ: rightRotateZ,
                  scale: rightScale,
                  opacity: panelOpacity,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'left center',
                  zIndex: 60,
                }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-slate-200">
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
                          <p className="text-xs text-slate-500">Based on application activity</p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex-1" />

                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg shadow-blue-500/20">
                      <Building2 className="w-4 h-4" />
                      Request Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
