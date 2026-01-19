import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, Activity, FileText, Send, TrendingUp, ChevronDown } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for DNA helix animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 22, mass: 0.5 };
  const progress = useSpring(scrollYProgress, springConfig);

  // DNA HELIX ANIMATION - panels descend and converge
  const panelY = useTransform(progress, [0, 0.5, 1], [0, 150, 300]);

  // LEFT PANEL - Moves RIGHT to center
  const leftX = useTransform(progress, [0, 0.4, 0.7, 1], [0, 80, 160, 220]);
  const leftRotateY = useTransform(progress, [0, 0.35, 0.7, 1], [0, 20, 10, 0]);
  const leftRotateZ = useTransform(progress, [0, 0.5, 1], [0, -12, 0]);
  const leftScale = useTransform(progress, [0, 0.5, 1], [1, 0.9, 0.8]);

  // RIGHT PANEL - Moves LEFT to center
  const rightX = useTransform(progress, [0, 0.4, 0.7, 1], [0, -80, -160, -220]);
  const rightRotateY = useTransform(progress, [0, 0.35, 0.7, 1], [0, -20, -10, 0]);
  const rightRotateZ = useTransform(progress, [0, 0.5, 1], [0, 12, 0]);
  const rightScale = useTransform(progress, [0, 0.5, 1], [1, 0.9, 0.8]);

  // Panel opacity
  const panelOpacity = useTransform(progress, [0, 0.7, 1], [1, 0.8, 0.3]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(progress, [0, 0.1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#0a1628] overflow-hidden">
      {/* Clean grid background only */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-start items-center max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* HEADLINE - Centered */}
        <div className="text-center mb-8 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white">
            See what students are doing.
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]">
              Give them clarity on their journey.
            </span>
          </h1>
        </div>

        {/* SUBTITLE - Centered */}
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed text-white/60">
          ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
          <span className="text-white/90 font-medium">real visibility</span>.
        </p>

        {/* DNA PANELS CONTAINER - More breathing room */}
        <div
          className="relative w-full max-w-6xl mx-auto mt-4"
          style={{ perspective: 1400 }}
        >
          {/* DNA PANELS */}
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-6 items-stretch" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* LEFT PANEL - Students (Taller) */}
            <motion.div
              className="relative"
              style={{
                y: panelY,
                x: leftX,
                rotateY: leftRotateY,
                rotateZ: leftRotateZ,
                scale: leftScale,
                opacity: panelOpacity,
                transformStyle: 'preserve-3d',
                transformOrigin: 'right center',
              }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 min-h-[480px]">
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
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: FileText, text: "Resume uploaded", time: "2m ago", color: "from-blue-500 to-blue-600" },
                      { icon: Send, text: "Applied to Google", time: "1h ago", color: "from-blue-600 to-blue-700" },
                      { icon: Activity, text: "Interview prep complete", time: "3h ago", color: "from-indigo-500 to-indigo-600" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800">{item.text}</p>
                          <p className="text-xs text-slate-500">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle cx="32" cy="32" r="28" fill="none" strokeWidth="4" stroke="#e2e8f0" />
                          <circle
                            cx="32" cy="32" r="28" fill="none" stroke="url(#gradientStudent)" strokeWidth="4"
                            strokeLinecap="round" strokeDasharray="176" strokeDashoffset="44"
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
                  </div>

                  <div className="flex-1" />

                  <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                    <GraduationCap className="w-4 h-4" />
                    Explore the Platform
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* RIGHT PANEL - Universities (Taller) */}
            <motion.div
              className="relative"
              style={{
                y: panelY,
                x: rightX,
                rotateY: rightRotateY,
                rotateZ: rightRotateZ,
                scale: rightScale,
                opacity: panelOpacity,
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
              }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 min-h-[480px]">
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
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: "Active", value: "2,847", trend: "+12%" },
                      { label: "Applications", value: "8,234", trend: "+24%" },
                      { label: "Interviews", value: "456", trend: "+18%" },
                      { label: "Placed", value: "189", trend: "+31%" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200"
                      >
                        <p className="text-xl font-bold text-slate-800">
                          {stat.value}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{stat.label}</span>
                          <span className="text-xs text-emerald-600 font-medium">{stat.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-800">Engagement up 24% this week</p>
                        <p className="text-xs text-slate-500">Based on application activity</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg shadow-blue-500/20">
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
    </section>
  );
};

export default HeroSection;
