import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, GraduationCap, Building2, TrendingUp, Briefcase, FileText, Mail, Calendar, BookOpen, MessageSquare, ClipboardList, Award, BarChart3, PieChart, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

type HoveredSide = "left" | "right" | null;

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
  
  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress to percentage (0-100)
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [displayProgress, setDisplayProgress] = useState(0);
  
  useEffect(() => {
    const unsubscribe = progressValue.on("change", (latest) => {
      setDisplayProgress(Math.min(100, Math.round(latest)));
    });
    return () => unsubscribe();
  }, [progressValue]);

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
      
      {/* STICKY CAREER READINESS SIDEBAR */}
      <motion.div 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="relative p-3 rounded-2xl bg-[#0c1929]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex flex-col items-center gap-3">
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Rocket className={`w-5 h-5 transition-all duration-500 ${displayProgress >= 100 ? "text-white rotate-45" : "text-white"}`} />
            </div>
            
            {/* Vertical Progress Bar */}
            <div className="relative h-40 w-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={`absolute bottom-0 left-0 right-0 rounded-full transition-colors duration-500 ${
                  displayProgress >= 100 
                    ? "bg-gradient-to-t from-emerald-500 to-emerald-400" 
                    : "bg-gradient-to-t from-[#2563EB] to-[#3B82F6]"
                }`}
                style={{ height: `${displayProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
              
              {/* Milestone dots */}
              {[0, 25, 50, 75, 100].map((milestone) => (
                <div 
                  key={milestone}
                  className={`absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    displayProgress >= milestone 
                      ? displayProgress >= 100 ? "bg-emerald-400 shadow-emerald-400/50" : "bg-white shadow-white/50" 
                      : "bg-white/20"
                  }`}
                  style={{ bottom: `${milestone}%`, boxShadow: displayProgress >= milestone ? '0 0 6px currentColor' : 'none' }}
                />
              ))}
            </div>
            
            {/* Percentage */}
            <div className="text-center">
              <span className={`text-sm font-bold transition-colors duration-300 ${
                displayProgress >= 100 ? "text-emerald-400" : "text-[#3B82F6]"
              }`}>
                {displayProgress >= 100 ? "Ready!" : `${displayProgress}%`}
              </span>
              <p className="text-[10px] text-white/40 mt-0.5">Career</p>
            </div>
          </div>
        </div>
      </motion.div>

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

        {/* SPLIT HERO CONTAINER */}
        <div className="relative w-full max-w-6xl mx-auto mt-8">
          <div 
            className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-stretch min-h-[520px]"
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

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { icon: Briefcase, text: "Job Board" },
                      { icon: FileText, text: "Resume Builder" },
                      { icon: Award, text: "Resume Grader" },
                      { icon: Mail, text: "Cover Letter Maker" },
                      { icon: Calendar, text: "Events" },
                      { icon: BookOpen, text: "Case Study Preparation" },
                      { icon: MessageSquare, text: "Interview Preparation" },
                      { icon: ClipboardList, text: "Application Tracking" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className={`flex items-center gap-2 p-2.5 rounded-lg transition-colors duration-500 ${
                          hoveredSide === "left" 
                            ? "bg-slate-50 border border-slate-200" 
                            : "bg-white/5 border border-white/10"
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-md bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center shadow-sm`}>
                          <item.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <p className={`text-sm font-medium transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-800" : "text-white"}`}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className={`p-4 rounded-xl transition-colors duration-500 ${
                    hoveredSide === "left" 
                      ? "bg-slate-50 border border-slate-200" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle cx="32" cy="32" r="28" fill="none" strokeWidth="4" stroke={hoveredSide === "left" ? "#e2e8f0" : "rgba(255,255,255,0.2)"} />
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
                        <span className={`absolute inset-0 flex items-center justify-center font-bold text-sm transition-colors duration-500 ${
                          hoveredSide === "left" ? "text-slate-800" : "text-white"
                        }`}>75%</span>
                      </div>
                      <div>
                        <p className={`font-medium transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-800" : "text-white"}`}>
                          Career Ready
                        </p>
                        <p className={`text-xs transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-500" : "text-white/60"}`}>
                          3 tasks remaining
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <button className={`mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-500 ${
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

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: "Active", value: "2,847", trend: "+12%" },
                      { label: "Applications", value: "8,234", trend: "+24%" },
                      { label: "Interviews", value: "456", trend: "+18%" },
                      { label: "Placed", value: "189", trend: "+31%" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className={`p-3 rounded-xl transition-colors duration-500 ${
                          hoveredSide === "right" 
                            ? "bg-slate-50 border border-slate-200" 
                            : "bg-white/5 border border-white/10"
                        }`}
                      >
                        <p className={`text-xl font-bold transition-colors duration-500 ${
                          hoveredSide === "right" ? "text-slate-800" : "text-white"
                        }`}>
                          {stat.value}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs transition-colors duration-500 ${
                            hoveredSide === "right" ? "text-slate-500" : "text-white/60"
                          }`}>{stat.label}</span>
                          <span className="text-xs text-emerald-400 font-medium">{stat.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Charts Row */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Degree Types Mini Chart */}
                    <div className={`p-3 rounded-xl transition-colors duration-500 ${
                      hoveredSide === "right" 
                        ? "bg-slate-50 border border-slate-200" 
                        : "bg-white/5 border border-white/10"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <PieChart className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                        <span className={`text-xs font-medium transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-600" : "text-white/70"}`}>By Degree</span>
                      </div>
                      <div className="flex items-end gap-1 h-8">
                        {[65, 45, 30, 20].map((h, i) => (
                          <div key={i} className={`flex-1 rounded-sm transition-colors duration-500 ${hoveredSide === "right" ? "bg-blue-500" : "bg-blue-400/60"}`} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>CS</span>
                        <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>Bus</span>
                        <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>Eng</span>
                        <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>Other</span>
                      </div>
                    </div>

                    {/* Monthly Applications */}
                    <div className={`p-3 rounded-xl transition-colors duration-500 ${
                      hoveredSide === "right" 
                        ? "bg-slate-50 border border-slate-200" 
                        : "bg-white/5 border border-white/10"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                        <span className={`text-xs font-medium transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-600" : "text-white/70"}`}>Apps/Month</span>
                      </div>
                      <div className="flex items-end gap-1 h-8">
                        {[40, 55, 70, 85, 60, 90].map((h, i) => (
                          <div key={i} className={`flex-1 rounded-sm transition-colors duration-500 ${hoveredSide === "right" ? "bg-emerald-500" : "bg-emerald-400/60"}`} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>Sep</span>
                        <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>Feb</span>
                      </div>
                    </div>
                  </div>

                  {/* Success Insight */}
                  <div className={`p-4 rounded-xl transition-colors duration-500 ${
                    hoveredSide === "right" 
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center gap-3">
                      <TrendingUp className={`w-5 h-5 transition-colors duration-500 ${
                        hoveredSide === "right" ? "text-blue-600" : "text-blue-400"
                      }`} />
                      <div>
                        <p className={`text-sm font-medium transition-colors duration-500 ${
                          hoveredSide === "right" ? "text-slate-800" : "text-white"
                        }`}>CS majors: 78% placement rate</p>
                        <p className={`text-xs transition-colors duration-500 ${
                          hoveredSide === "right" ? "text-slate-500" : "text-white/60"
                        }`}>Highest success by degree type</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <button className={`mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-500 ${
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
