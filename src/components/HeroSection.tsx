import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, GraduationCap, Building2, TrendingUp, Briefcase, FileText, Calendar, CheckCircle, Circle, MapPin, Clock, Users, Activity, BarChart3, Target } from "lucide-react";
import { motion } from "framer-motion";

type HoveredSide = "left" | "right" | null;
type HoveredChart = string | null;

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speed: number;
}

const PARTICLE_COUNT = 40;

const HeroSection = () => {
  const [hoveredSide, setHoveredSide] = useState<HoveredSide>(null);
  const [hoveredChart, setHoveredChart] = useState<HoveredChart>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      initialParticles.push({
        id: i,
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }
    setParticles(initialParticles);
  }, []);
  
  // Handle mouse movement for particle repulsion
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);
  
  // Update particles based on mouse position
  useEffect(() => {
    if (particles.length === 0) return;
    
    const repulsionRadius = 15; // percentage
    const repulsionStrength = 8;
    
    setParticles(prev => prev.map(particle => {
      const dx = particle.baseX - mousePos.x;
      const dy = particle.baseY - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < repulsionRadius && distance > 0) {
        const force = (repulsionRadius - distance) / repulsionRadius;
        const angle = Math.atan2(dy, dx);
        return {
          ...particle,
          x: particle.baseX + Math.cos(angle) * force * repulsionStrength,
          y: particle.baseY + Math.sin(angle) * force * repulsionStrength,
        };
      }
      
      // Gradually return to base position
      return {
        ...particle,
        x: particle.x + (particle.baseX - particle.x) * 0.1,
        y: particle.y + (particle.baseY - particle.y) * 0.1,
      };
    }));
  }, [mousePos, particles.length]);
  

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#2563EB] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(96, 165, 250, ${particle.opacity})`,
            }}
            animate={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          />
        ))}
        
        {/* Connection lines between nearby particles */}
        <svg className="absolute inset-0 w-full h-full">
          {particles.map((p1, i) => 
            particles.slice(i + 1).map((p2) => {
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 12) {
                const opacity = (1 - distance / 12) * 0.15;
                return (
                  <line
                    key={`${p1.id}-${p2.id}`}
                    x1={`${p1.x}%`}
                    y1={`${p1.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke={`rgba(96, 165, 250, ${opacity})`}
                    strokeWidth="1"
                  />
                );
              }
              return null;
            })
          )}
        </svg>
      </div>
      
      {/* Parallax Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { Icon: Briefcase, x: 8, y: 15, size: 80, speed: 0.3, opacity: 0.04 },
          { Icon: FileText, x: 85, y: 25, size: 100, speed: 0.5, opacity: 0.03 },
          { Icon: GraduationCap, x: 15, y: 70, size: 120, speed: 0.2, opacity: 0.04 },
          { Icon: TrendingUp, x: 75, y: 60, size: 90, speed: 0.4, opacity: 0.03 },
          { Icon: Users, x: 45, y: 85, size: 70, speed: 0.6, opacity: 0.04 },
          { Icon: Calendar, x: 90, y: 80, size: 85, speed: 0.35, opacity: 0.03 },
          { Icon: Target, x: 5, y: 45, size: 75, speed: 0.45, opacity: 0.035 },
        ].map(({ Icon, x, y, size, speed, opacity }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ 
              left: `${x}%`, 
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              y: [0, -20 * speed, 0],
              x: [0, 10 * speed, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon 
              style={{ 
                width: size, 
                height: size, 
                opacity,
                stroke: 'currentColor',
                strokeWidth: 0.5,
              }} 
              className="text-blue-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Background effects */}
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* HEADLINE */}
        <div className="text-center mb-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white text-center">
            See what students are doing.
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]">
              Give them clarity on their journey.
            </span>
          </h1>
        </div>

        {/* SUBTITLE */}
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed text-white/60">
          ApplyLab brings student career activity into one clear system — helping students stay on track and career teams gain{" "}
          <span className="text-white/90 font-medium">real visibility</span>.
        </p>

        {/* SPLIT HERO CONTAINER - 20% larger */}
        <div className="relative w-full max-w-7xl mx-auto mt-8">
          <div 
            className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-stretch min-h-[624px]"
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* LEFT PANEL - Students */}
            <motion.div 
              className="relative cursor-pointer rounded-2xl md:rounded-r-none overflow-hidden"
              onMouseEnter={() => setHoveredSide("left")}
              animate={{
                flex: hoveredSide === "left" ? 1.4 : hoveredSide === "right" ? 0.6 : 1,
                opacity: hoveredSide === "right" ? 0.6 : 1,
                scale: hoveredSide === "left" ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ originX: 0 }}
            >
              <div 
                className={`h-full flex flex-col rounded-2xl md:rounded-r-none overflow-hidden transition-all duration-500 ${
                  hoveredSide === "left" 
                    ? "bg-white shadow-2xl shadow-blue-500/20" 
                    : "bg-white/10 backdrop-blur-xl border border-white/20"
                }`}
              >
                {/* Header */}
                <div className={`flex items-center justify-between px-5 py-4 border-b transition-colors duration-500 ${
                  hoveredSide === "left" 
                    ? "border-slate-200 bg-slate-50" 
                    : "border-white/10 bg-white/5"
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${hoveredSide === "left" ? "bg-red-400" : "bg-red-400/50"}`} />
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${hoveredSide === "left" ? "bg-yellow-400" : "bg-yellow-400/50"}`} />
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${hoveredSide === "left" ? "bg-green-400" : "bg-green-400/50"}`} />
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors duration-500 ${
                    hoveredSide === "left" 
                      ? "bg-blue-50 border border-blue-100" 
                      : "bg-white/10 border border-white/20"
                  }`}>
                    <GraduationCap className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "left" ? "text-blue-600" : "text-white"}`} />
                    <span className={`text-sm font-semibold transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-800" : "text-white"}`}>
                      For Students
                    </span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Content - Student Journey Dashboard */}
                <div className="p-5 flex-1 flex flex-col gap-4">
                  {/* Journey Timeline Path */}
                  <div className={`p-4 rounded-xl transition-all duration-500 ${
                    hoveredSide === "left" 
                      ? "bg-slate-50/80 border border-slate-200" 
                      : "bg-white/[0.03] backdrop-blur-sm border border-white/10"
                  }`}>
                    <p className={`text-xs font-semibold mb-3 transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-500" : "text-white/50"}`}>
                      YOUR JOURNEY
                    </p>
                    <div className="relative">
                      {/* Vertical line */}
                      <div className={`absolute left-[11px] top-3 bottom-3 w-0.5 transition-colors duration-500 ${hoveredSide === "left" ? "bg-slate-200" : "bg-white/10"}`} />
                      
                      {[
                        { label: "Profile Complete", status: "done", icon: CheckCircle },
                        { label: "Resume Uploaded", status: "done", icon: FileText },
                        { label: "First Application", status: "current", icon: Briefcase },
                        { label: "Interview Prep", status: "pending", icon: Calendar },
                      ].map((step, i) => (
                        <div key={step.label} className="flex items-center gap-3 relative mb-3 last:mb-0">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                            step.status === "done" 
                              ? "bg-emerald-500 text-white" 
                              : step.status === "current"
                                ? hoveredSide === "left" ? "bg-blue-500 text-white ring-4 ring-blue-100" : "bg-blue-500 text-white ring-4 ring-blue-500/20"
                                : hoveredSide === "left" ? "bg-slate-200 text-slate-400" : "bg-white/10 text-white/40"
                          }`}>
                            {step.status === "done" ? (
                              <CheckCircle className="w-3.5 h-3.5" />
                            ) : (
                              <Circle className="w-3 h-3" />
                            )}
                          </div>
                          <span className={`text-sm font-medium transition-colors duration-500 ${
                            step.status === "done" 
                              ? hoveredSide === "left" ? "text-emerald-600" : "text-emerald-400"
                              : step.status === "current"
                                ? hoveredSide === "left" ? "text-blue-600" : "text-blue-400"
                                : hoveredSide === "left" ? "text-slate-400" : "text-white/40"
                          }`}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Cards Row */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Resume Score Card */}
                    <div className={`p-3 rounded-xl transition-all duration-500 ${
                      hoveredSide === "left" 
                        ? "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100" 
                        : "bg-white/[0.03] backdrop-blur-sm border border-white/10"
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <FileText className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "left" ? "text-blue-600" : "text-blue-400"}`} />
                        <span className="text-xs font-bold text-emerald-500">+5</span>
                      </div>
                      <p className={`text-2xl font-bold transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-800" : "text-white"}`}>
                        85%
                      </p>
                      <p className={`text-xs transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-500" : "text-white/50"}`}>
                        Resume Score
                      </p>
                      {/* Mini circular gauge */}
                      <div className="mt-2 h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Upcoming Interview Card */}
                    <div className={`p-3 rounded-xl transition-all duration-500 ${
                      hoveredSide === "left" 
                        ? "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100" 
                        : "bg-white/[0.03] backdrop-blur-sm border border-white/10"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "left" ? "text-emerald-600" : "text-emerald-400"}`} />
                        <span className={`text-[10px] font-medium transition-colors duration-500 ${hoveredSide === "left" ? "text-emerald-600" : "text-emerald-400"}`}>
                          Tomorrow
                        </span>
                      </div>
                      <p className={`text-sm font-bold transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-800" : "text-white"}`}>
                        Google
                      </p>
                      <p className={`text-xs transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-500" : "text-white/50"}`}>
                        PM Interview
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <Clock className={`w-3 h-3 transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-400" : "text-white/40"}`} />
                        <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-400" : "text-white/40"}`}>
                          2:00 PM PST
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Career Ready Progress Ring */}
                  <div className={`p-4 rounded-xl transition-all duration-500 ${
                    hoveredSide === "left" 
                      ? "bg-slate-50/80 border border-slate-200" 
                      : "bg-white/[0.03] backdrop-blur-sm border border-white/10"
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle cx="32" cy="32" r="26" fill="none" strokeWidth="6" stroke={hoveredSide === "left" ? "#e2e8f0" : "rgba(255,255,255,0.1)"} />
                          <motion.circle
                            cx="32" cy="32" r="26" fill="none" stroke="url(#gradientStudent)" strokeWidth="6"
                            strokeLinecap="round" strokeDasharray="163.36"
                            initial={{ strokeDashoffset: 163.36 }}
                            animate={{ strokeDashoffset: 163.36 * 0.25 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                          <defs>
                            <linearGradient id="gradientStudent" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className={`absolute inset-0 flex items-center justify-center font-bold text-lg transition-colors duration-500 ${
                          hoveredSide === "left" ? "text-slate-800" : "text-white"
                        }`}>75%</span>
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-800" : "text-white"}`}>
                          Career Ready
                        </p>
                        <p className={`text-xs transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-500" : "text-white/60"}`}>
                          3 tasks remaining
                        </p>
                        <div className="flex gap-1 mt-2">
                          {["Resume", "LinkedIn", "Portfolio"].map((task, i) => (
                            <span 
                              key={task}
                              className={`text-[9px] px-1.5 py-0.5 rounded transition-colors duration-500 ${
                                i < 2 
                                  ? "bg-emerald-100 text-emerald-600" 
                                  : hoveredSide === "left" ? "bg-slate-100 text-slate-500" : "bg-white/10 text-white/50"
                              }`}
                            >
                              {task}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <button className={`mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-500 ${
                    hoveredSide === "left"
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}>
                    <GraduationCap className="w-4 h-4" />
                    Explore the Platform
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* CENTER DIVIDER */}
            <div className="hidden md:block w-px bg-white/20 z-10" />

            {/* RIGHT PANEL - Universities */}
            <motion.div 
              className="relative cursor-pointer rounded-2xl md:rounded-l-none overflow-hidden"
              onMouseEnter={() => setHoveredSide("right")}
              animate={{
                flex: hoveredSide === "right" ? 1.4 : hoveredSide === "left" ? 0.6 : 1,
                opacity: hoveredSide === "left" ? 0.6 : 1,
                scale: hoveredSide === "right" ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ originX: 1 }}
            >
              <div 
                className={`h-full flex flex-col rounded-2xl md:rounded-l-none overflow-hidden transition-all duration-500 ${
                  hoveredSide === "right" 
                    ? "bg-white shadow-2xl shadow-blue-500/20" 
                    : "bg-white/10 backdrop-blur-xl border border-white/20"
                }`}
              >
                {/* Header */}
                <div className={`flex items-center justify-between px-5 py-4 border-b transition-colors duration-500 ${
                  hoveredSide === "right" 
                    ? "border-slate-200 bg-slate-50" 
                    : "border-white/10 bg-white/5"
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${hoveredSide === "right" ? "bg-red-400" : "bg-red-400/50"}`} />
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${hoveredSide === "right" ? "bg-yellow-400" : "bg-yellow-400/50"}`} />
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${hoveredSide === "right" ? "bg-green-400" : "bg-green-400/50"}`} />
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors duration-500 ${
                    hoveredSide === "right" 
                      ? "bg-blue-50 border border-blue-100" 
                      : "bg-white/10 border border-white/20"
                  }`}>
                    <Building2 className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-white"}`} />
                    <span className={`text-sm font-semibold transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-800" : "text-white"}`}>
                      For Universities
                    </span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Content - University Analytics Dashboard */}
                <div className="p-5 flex-1 flex flex-col gap-4">
                  {/* Live Engagement Banner */}
                  <div className={`p-3 rounded-xl flex items-center justify-between transition-all duration-500 ${
                    hoveredSide === "right" 
                      ? "bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100" 
                      : "bg-emerald-500/10 border border-emerald-500/20"
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        hoveredSide === "right" ? "bg-emerald-100" : "bg-emerald-500/20"
                      }`}>
                        <Activity className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold transition-colors duration-500 ${
                          hoveredSide === "right" ? "text-emerald-700" : "text-emerald-400"
                        }`}>
                          Engagement up 24% this week
                        </p>
                      </div>
                    </div>
                    {/* Sparkline */}
                    <svg className="w-16 h-6" viewBox="0 0 64 24">
                      <motion.path
                        d="M0,18 L8,15 L16,16 L24,12 L32,10 L40,8 L48,6 L56,4 L64,2"
                        fill="none"
                        stroke={hoveredSide === "right" ? "#10b981" : "#34d399"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </svg>
                  </div>

                  {/* Placement Rate Line Chart */}
                  <div 
                    className={`p-4 rounded-xl transition-all duration-500 relative ${
                      hoveredSide === "right" 
                        ? "bg-slate-50/80 border border-slate-200" 
                        : "bg-white/[0.03] backdrop-blur-sm border border-white/10"
                    }`}
                    onMouseEnter={() => setHoveredChart("placement")}
                    onMouseLeave={() => setHoveredChart(null)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                        <span className={`text-xs font-semibold transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-600" : "text-white/70"}`}>
                          Placement Rate
                        </span>
                      </div>
                      <span className="text-emerald-500 text-xs font-bold">92%</span>
                    </div>
                    {/* Line Chart */}
                    <div className="relative h-12">
                      <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M0,40 L25,35 L50,32 L75,28 L100,22 L125,18 L150,12 L175,8 L200,4"
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                        />
                        <path
                          d="M0,40 L25,35 L50,32 L75,28 L100,22 L125,18 L150,12 L175,8 L200,4 L200,48 L0,48 Z"
                          fill="url(#areaGradient)"
                          opacity="0.5"
                        />
                      </svg>
                      {/* Tooltip */}
                      {hoveredChart === "placement" && (
                        <motion.div 
                          className="absolute right-0 -top-8 px-2 py-1 bg-slate-800 text-white text-[10px] rounded shadow-lg"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          92% placed this semester
                        </motion.div>
                      )}
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-400" : "text-white/40"}`}>Sep</span>
                      <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-400" : "text-white/40"}`}>Feb</span>
                    </div>
                  </div>

                  {/* Department Engagement Bar Chart */}
                  <div 
                    className={`p-4 rounded-xl transition-all duration-500 relative ${
                      hoveredSide === "right" 
                        ? "bg-slate-50/80 border border-slate-200" 
                        : "bg-white/[0.03] backdrop-blur-sm border border-white/10"
                    }`}
                    onMouseEnter={() => setHoveredChart("department")}
                    onMouseLeave={() => setHoveredChart(null)}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Users className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                      <span className={`text-xs font-semibold transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-600" : "text-white/70"}`}>
                        Department Engagement
                      </span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { dept: "Computer Science", value: 92, color: "from-blue-500 to-blue-400" },
                        { dept: "Business", value: 78, color: "from-emerald-500 to-emerald-400" },
                        { dept: "Engineering", value: 65, color: "from-violet-500 to-violet-400" },
                      ].map((item) => (
                        <div key={item.dept} className="group relative">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[11px] font-medium transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-600" : "text-white/60"}`}>
                              {item.dept}
                            </span>
                            <span className={`text-[11px] font-bold transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-800" : "text-white"}`}>
                              {item.value}%
                            </span>
                          </div>
                          <div className={`h-2 rounded-full overflow-hidden ${hoveredSide === "right" ? "bg-slate-200" : "bg-white/10"}`}>
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          {/* Hover tooltip */}
                          {hoveredChart === "department" && (
                            <motion.div 
                              className="absolute -right-2 -top-6 px-2 py-1 bg-slate-800 text-white text-[9px] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              {item.value}% active
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats Row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Active", value: "2.8K", icon: Users },
                      { label: "Apps", value: "8.2K", icon: FileText },
                      { label: "Placed", value: "892", icon: Target },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className={`p-2.5 rounded-xl text-center transition-all duration-500 ${
                          hoveredSide === "right" 
                            ? "bg-slate-50 border border-slate-200" 
                            : "bg-white/[0.03] border border-white/10"
                        }`}
                      >
                        <stat.icon className={`w-4 h-4 mx-auto mb-1 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                        <p className={`text-lg font-bold transition-colors duration-500 ${
                          hoveredSide === "right" ? "text-slate-800" : "text-white"
                        }`}>
                          {stat.value}
                        </p>
                        <p className={`text-[10px] transition-colors duration-500 ${
                          hoveredSide === "right" ? "text-slate-500" : "text-white/50"
                        }`}>{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1" />

                  <button className={`mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-500 ${
                    hoveredSide === "right"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/20"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}>
                    <Building2 className="w-4 h-4" />
                    Request Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
