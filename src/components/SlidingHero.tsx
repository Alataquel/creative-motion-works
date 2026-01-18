import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useState, useRef } from "react";
import { GraduationCap, Building2, ArrowRight, FileText, Send, Activity, TrendingUp, BarChart3, Users, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const SlidingHero = () => {
  const [activePanel, setActivePanel] = useState<"students" | "careers">("students");
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  const backgroundOpacity = useTransform(x, [-200, 0, 200], [0.3, 0, 0.3]);
  
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -100) {
      setActivePanel("careers");
    } else if (info.offset.x > 100) {
      setActivePanel("students");
    }
  };

  const togglePanel = () => {
    setActivePanel(prev => prev === "students" ? "careers" : "students");
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated background that shifts with panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePanel}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activePanel === "students" ? (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2563EB] to-[#3b82f6]">
              <motion.div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
                animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(96,165,250,0.25) 0%, transparent 70%)" }}
                animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c1929] via-[#1e3a5f] to-[#2563EB]">
              <motion.div
                className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }}
                animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(30,58,95,0.4) 0%, transparent 70%)" }}
                animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* ApplyLab Logo - Fixed top center */}
      <motion.div 
        className="absolute top-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-[#2563EB] font-bold text-lg">A</span>
          </motion.div>
          <span className="text-white font-display font-bold text-xl">ApplyLab</span>
        </div>
        
        {/* Subtle animated dotted circle */}
        <motion.div 
          className="absolute -inset-4 border border-dashed border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Slide indicator */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3"
        style={{ left: "2rem" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => setActivePanel("students")}
          className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all ${
            activePanel === "students" 
              ? "bg-white text-[#2563EB]" 
              : "bg-white/10 text-white/70 hover:bg-white/20"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GraduationCap className="w-5 h-5" />
          <span className="font-medium hidden md:block">Students</span>
        </motion.button>
        
        <motion.button
          onClick={() => setActivePanel("careers")}
          className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all ${
            activePanel === "careers" 
              ? "bg-white text-[#2563EB]" 
              : "bg-white/10 text-white/70 hover:bg-white/20"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Building2 className="w-5 h-5" />
          <span className="font-medium hidden md:block">Career Teams</span>
        </motion.button>
      </motion.div>

      {/* Slide arrows */}
      <motion.button
        className="absolute left-4 md:left-auto md:right-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        onClick={() => setActivePanel("students")}
        initial={{ opacity: 0 }}
        animate={{ opacity: activePanel === "careers" ? 1 : 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: activePanel === "careers" ? "flex" : "none" }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      
      <motion.button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        onClick={() => setActivePanel("careers")}
        initial={{ opacity: 0 }}
        animate={{ opacity: activePanel === "students" ? 1 : 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: activePanel === "students" ? "flex" : "none" }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Main draggable content area */}
      <motion.div
        ref={containerRef}
        className="relative z-10 min-h-screen flex items-center justify-center cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ x }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <AnimatePresence mode="wait">
            {activePanel === "students" ? (
              <motion.div
                key="students"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Students Content */}
                <div className="text-center lg:text-left">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <GraduationCap className="w-4 h-4 text-blue-300" />
                    <span className="text-sm font-medium text-white/80">For Students</span>
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Your career journey,{" "}
                    <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                      in one place.
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl text-white/70 mb-8 max-w-lg mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Discover opportunities, track applications, and see your progress clearly.
                  </motion.p>

                  <motion.button
                    className="flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-semibold text-lg group shadow-lg shadow-black/20 mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore as a Student
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Students Visual */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-3xl blur-2xl" />
                  
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
                    {/* Progress Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Your Progress</p>
                          <p className="text-white/50 text-sm">Career Readiness</p>
                        </div>
                      </div>
                      <motion.div 
                        className="text-3xl font-bold text-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                      >
                        78%
                      </motion.div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-6">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                      />
                    </div>

                    {/* Activity cards */}
                    <div className="space-y-3">
                      {[
                        { icon: FileText, text: "Resume uploaded", status: "Complete", color: "from-emerald-400 to-emerald-500" },
                        { icon: Send, text: "12 Applications sent", status: "Active", color: "from-blue-400 to-blue-500" },
                        { icon: Activity, text: "Interview prep", status: "In Progress", color: "from-amber-400 to-amber-500" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.text}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">{item.text}</p>
                            <p className="text-white/40 text-xs">{item.status}</p>
                          </div>
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="careers"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Career Teams Content */}
                <div className="text-center lg:text-left">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Building2 className="w-4 h-4 text-blue-300" />
                    <span className="text-sm font-medium text-white/80">For Career Teams</span>
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    See what your students are{" "}
                    <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                      actually doing.
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl text-white/70 mb-8 max-w-lg mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    One clear view of student activity, preparation, and progress.
                  </motion.p>

                  <motion.button
                    className="flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-semibold text-lg group shadow-lg shadow-black/20 mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request a Pilot
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Career Teams Visual */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-2xl" />
                  
                  <div className="relative bg-[#0c1929]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Cohort Overview</p>
                          <p className="text-white/50 text-sm">Class of 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { label: "Active Students", value: "2,847", trend: "+12%", icon: Users },
                        { label: "Applications", value: "8,234", trend: "+24%", icon: Send },
                        { label: "Interviews", value: "456", trend: "+18%", icon: Activity },
                        { label: "Placed", value: "189", trend: "+31%", icon: CheckCircle },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          className="p-4 rounded-xl bg-white/5 border border-white/10"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          <stat.icon className="w-4 h-4 text-blue-400 mb-2" />
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/50">{stat.label}</span>
                            <span className="text-xs text-emerald-400">{stat.trend}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Activity Chart */}
                    <motion.div
                      className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                        <p className="text-white text-sm font-medium">Weekly Activity</p>
                      </div>
                      <div className="flex items-end gap-2 h-16">
                        {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 1.1 + i * 0.05, duration: 0.5 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Drag hint */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronLeft className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/60">Drag or click to explore</span>
          <ChevronRight className="w-4 h-4 text-white/60" />
        </motion.div>
      </motion.div>

      {/* Panel indicator dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        <motion.button
          className={`w-3 h-3 rounded-full transition-all ${activePanel === "students" ? "bg-white scale-125" : "bg-white/30"}`}
          onClick={() => setActivePanel("students")}
          whileHover={{ scale: 1.2 }}
        />
        <motion.button
          className={`w-3 h-3 rounded-full transition-all ${activePanel === "careers" ? "bg-white scale-125" : "bg-white/30"}`}
          onClick={() => setActivePanel("careers")}
          whileHover={{ scale: 1.2 }}
        />
      </div>
    </section>
  );
};

export default SlidingHero;
