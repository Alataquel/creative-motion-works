import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, GraduationCap, Building2, TrendingUp, Briefcase, FileText, Mail, Calendar, BookOpen, MessageSquare, ClipboardList, Award, BarChart3, PieChart } from "lucide-react";
import { motion } from "framer-motion";

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
  

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-b from-primary via-[#1e3a5f] to-secondary overflow-hidden"
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
          { Icon: MessageSquare, x: 45, y: 85, size: 70, speed: 0.6, opacity: 0.04 },
          { Icon: Calendar, x: 90, y: 80, size: 85, speed: 0.35, opacity: 0.03 },
          { Icon: Award, x: 5, y: 45, size: 75, speed: 0.45, opacity: 0.035 },
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
      <div className="relative z-10 h-full flex flex-col items-center max-w-[1400px] mx-auto px-6 pt-32 pb-16">
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

        {/* SPLIT HERO CONTAINER - Full width */}
        <div className="relative w-full max-w-[1400px] mx-auto mt-8">
          <div 
            className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-stretch min-h-[650px]"
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

                {/* Content - Authentic Student Dashboard */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Job Discovery Interface */}
                  <div className={`p-3 rounded-xl mb-3 transition-colors duration-500 ${
                    hoveredSide === "left" 
                      ? "bg-slate-50 border border-slate-200" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "left" ? "text-blue-600" : "text-blue-400"}`} />
                      <span className={`text-xs font-semibold transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-700" : "text-white/80"}`}>Smart Job Discovery</span>
                    </div>
                    {/* Job Cards */}
                    <div className="space-y-2">
                      {[
                        { company: "Stripe", role: "Product Intern", match: "94%", logo: "S" },
                        { company: "Figma", role: "Design Engineer", match: "89%", logo: "F" },
                      ].map((job) => (
                        <div key={job.role} className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-500 ${
                          hoveredSide === "left" ? "bg-white border border-slate-100" : "bg-white/5 border border-white/5"
                        }`}>
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                            {job.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-medium truncate transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-800" : "text-white"}`}>{job.role}</p>
                            <p className={`text-[10px] transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-500" : "text-white/50"}`}>{job.company}</p>
                          </div>
                          <div className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${hoveredSide === "left" ? "bg-emerald-100 text-emerald-700" : "bg-emerald-500/20 text-emerald-300"}`}>
                            {job.match}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resume Builder Preview */}
                  <div className={`p-3 rounded-xl mb-3 transition-colors duration-500 ${
                    hoveredSide === "left" 
                      ? "bg-slate-50 border border-slate-200" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FileText className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "left" ? "text-blue-600" : "text-blue-400"}`} />
                        <span className={`text-xs font-semibold transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-700" : "text-white/80"}`}>Resume Builder</span>
                      </div>
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${hoveredSide === "left" ? "bg-amber-100 text-amber-700" : "bg-amber-500/20 text-amber-300"}`}>
                        <Award className="w-3 h-3" />
                        Score: 82/100
                      </div>
                    </div>
                    {/* Mini Resume Preview */}
                    <div className={`p-2 rounded-lg transition-colors duration-500 ${hoveredSide === "left" ? "bg-white border border-slate-100" : "bg-white/5 border border-white/5"}`}>
                      <div className="space-y-1.5">
                        <div className={`h-2 w-24 rounded transition-colors duration-500 ${hoveredSide === "left" ? "bg-slate-300" : "bg-white/30"}`} />
                        <div className={`h-1.5 w-full rounded transition-colors duration-500 ${hoveredSide === "left" ? "bg-slate-200" : "bg-white/15"}`} />
                        <div className={`h-1.5 w-3/4 rounded transition-colors duration-500 ${hoveredSide === "left" ? "bg-slate-200" : "bg-white/15"}`} />
                        <div className="flex gap-1 mt-2">
                          <div className={`h-4 w-12 rounded transition-colors duration-500 ${hoveredSide === "left" ? "bg-blue-100" : "bg-blue-500/20"}`} />
                          <div className={`h-4 w-10 rounded transition-colors duration-500 ${hoveredSide === "left" ? "bg-blue-100" : "bg-blue-500/20"}`} />
                          <div className={`h-4 w-8 rounded transition-colors duration-500 ${hoveredSide === "left" ? "bg-blue-100" : "bg-blue-500/20"}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application Tracker */}
                  <div className={`p-3 rounded-xl transition-colors duration-500 ${
                    hoveredSide === "left" 
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <ClipboardList className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "left" ? "text-blue-600" : "text-blue-400"}`} />
                      <span className={`text-xs font-semibold transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-700" : "text-white/80"}`}>Application Tracker</span>
                    </div>
                    <div className="flex gap-2">
                      {[
                        { stage: "Applied", count: 12, color: "blue" },
                        { stage: "Interview", count: 4, color: "amber" },
                        { stage: "Offer", count: 1, color: "emerald" },
                      ].map((item) => (
                        <div key={item.stage} className="flex-1 text-center">
                          <div className={`text-lg font-bold transition-colors duration-500 ${
                            hoveredSide === "left" 
                              ? item.color === "blue" ? "text-blue-600" : item.color === "amber" ? "text-amber-600" : "text-emerald-600"
                              : item.color === "blue" ? "text-blue-400" : item.color === "amber" ? "text-amber-400" : "text-emerald-400"
                          }`}>{item.count}</div>
                          <div className={`text-[10px] transition-colors duration-500 ${hoveredSide === "left" ? "text-slate-500" : "text-white/50"}`}>{item.stage}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1" />

                  <button className={`mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-500 ${
                    hoveredSide === "left"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
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

                {/* Content - Authentic University Analytics Dashboard */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Student Engagement Overview */}
                  <div className={`p-3 rounded-xl mb-3 transition-colors duration-500 ${
                    hoveredSide === "right" 
                      ? "bg-slate-50 border border-slate-200" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BarChart3 className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                        <span className={`text-xs font-semibold transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-700" : "text-white/80"}`}>Student Engagement</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${hoveredSide === "right" ? "bg-emerald-100 text-emerald-700" : "bg-emerald-500/20 text-emerald-300"}`}>Live</span>
                    </div>
                    {/* Activity Heat Timeline */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {[75, 45, 80, 90, 60, 30, 85].map((val, i) => (
                        <div key={i} className={`h-6 rounded transition-colors duration-500`} style={{
                          backgroundColor: hoveredSide === "right" 
                            ? `rgba(37, 99, 235, ${val / 100})` 
                            : `rgba(96, 165, 250, ${val / 100 * 0.6})`
                        }} />
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>Mon</span>
                      <span className={`text-[10px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>Sun</span>
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: "Active Users", value: "2,847", icon: GraduationCap },
                      { label: "Resumes Built", value: "1,234", icon: FileText },
                      { label: "Jobs Applied", value: "8,456", icon: Briefcase },
                    ].map((metric) => (
                      <div key={metric.label} className={`p-2 rounded-lg text-center transition-colors duration-500 ${
                        hoveredSide === "right" ? "bg-white border border-slate-100" : "bg-white/5 border border-white/5"
                      }`}>
                        <metric.icon className={`w-4 h-4 mx-auto mb-1 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                        <div className={`text-sm font-bold transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-800" : "text-white"}`}>{metric.value}</div>
                        <div className={`text-[9px] transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-500" : "text-white/50"}`}>{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Intelligence Insights */}
                  <div className={`p-3 rounded-xl mb-3 transition-colors duration-500 ${
                    hoveredSide === "right" 
                      ? "bg-slate-50 border border-slate-200" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className={`w-4 h-4 transition-colors duration-500 ${hoveredSide === "right" ? "text-blue-600" : "text-blue-400"}`} />
                      <span className={`text-xs font-semibold transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-700" : "text-white/80"}`}>Actionable Insights</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { insight: "CS majors need more interview prep", tag: "Action", color: "amber" },
                        { insight: "Finance internship demand up 40%", tag: "Trend", color: "blue" },
                      ].map((item) => (
                        <div key={item.insight} className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-500 ${
                          hoveredSide === "right" ? "bg-white border border-slate-100" : "bg-white/5 border border-white/5"
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${item.color === "amber" ? "bg-amber-500" : "bg-blue-500"}`} />
                          <span className={`text-[11px] flex-1 transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-700" : "text-white/80"}`}>{item.insight}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded transition-colors duration-500 ${
                            hoveredSide === "right" 
                              ? item.color === "amber" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                              : item.color === "amber" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/20 text-blue-300"
                          }`}>{item.tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Placement Success Rate */}
                  <div className={`p-3 rounded-xl transition-colors duration-500 ${
                    hoveredSide === "right" 
                      ? "bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100" 
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`text-xs font-medium transition-colors duration-500 ${hoveredSide === "right" ? "text-slate-600" : "text-white/70"}`}>Placement Rate</p>
                        <p className={`text-xl font-bold transition-colors duration-500 ${hoveredSide === "right" ? "text-emerald-600" : "text-emerald-400"}`}>78.5%</p>
                      </div>
                      <div className="relative w-12 h-12">
                        <svg className="w-12 h-12 -rotate-90">
                          <circle cx="24" cy="24" r="20" fill="none" strokeWidth="4" stroke={hoveredSide === "right" ? "#d1fae5" : "rgba(16, 185, 129, 0.2)"} />
                          <circle cx="24" cy="24" r="20" fill="none" stroke={hoveredSide === "right" ? "#10b981" : "#34d399"} strokeWidth="4" strokeLinecap="round" strokeDasharray="126" strokeDashoffset="27" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <button className={`mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-500 ${
                    hoveredSide === "right"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
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
