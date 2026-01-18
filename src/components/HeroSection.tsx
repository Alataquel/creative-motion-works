import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Users, BarChart3, Target, Activity, TrendingUp, CheckCircle } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#1a365d]">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* Eyebrow badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-white/80">Trusted by forward-thinking universities</span>
          </motion.div>
        </motion.div>

        {/* Main headline */}
        <div className="text-center mb-6">
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Finally see what your
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              students are{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                actually doing.
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ApplyLab brings student activity, applications, and preparation into one clear system — 
          giving career teams{" "}
          <span className="text-white/90 font-medium">real visibility</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0f2847] rounded-full font-semibold text-lg group shadow-lg shadow-white/10"
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Pilot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg group"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            See the Platform
          </motion.button>
        </motion.div>

        {/* Animated Dashboard */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          style={{ y: dashboardY }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Dashboard glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />
          
          {/* Main browser window */}
          <motion.div
            className="relative bg-[#0d1f38]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Browser header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-8">
                <div className="w-full max-w-md mx-auto px-4 py-1.5 bg-white/5 rounded-lg text-center">
                  <span className="text-xs text-white/40">applylab.software/dashboard</span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Dashboard content */}
            <div className="p-6 md:p-8">
              {/* Dashboard header */}
              <motion.div 
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div>
                  <h3 className="text-white font-semibold text-lg">Career Services Dashboard</h3>
                  <p className="text-white/40 text-sm">Real-time student activity</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                    <span className="text-emerald-400 text-sm font-medium">Live</span>
                  </div>
                </div>
              </motion.div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: Users, label: "Active Students", value: "2,847", change: "+12%", color: "from-blue-400 to-blue-600" },
                  { icon: Activity, label: "Applications", value: "8,234", change: "+24%", color: "from-indigo-400 to-indigo-600" },
                  { icon: Target, label: "Interviews", value: "1,456", change: "+18%", color: "from-purple-400 to-purple-600" },
                  { icon: TrendingUp, label: "Placements", value: "892", change: "+31%", color: "from-emerald-400 to-emerald-600" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="relative p-4 rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden group"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                    <stat.icon className="w-5 h-5 text-white/40 mb-2" />
                    <motion.div 
                      className="text-2xl font-bold text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 + i * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-white/40">{stat.label}</span>
                      <span className="text-xs text-emerald-400">{stat.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Main content area */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Activity feed */}
                <motion.div
                  className="md:col-span-2 p-5 rounded-xl bg-white/[0.02] border border-white/5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-medium">Student Activity Stream</h4>
                    <BarChart3 className="w-4 h-4 text-white/40" />
                  </div>
                  
                  {/* Animated activity bars */}
                  <div className="space-y-3">
                    {[
                      { label: "Resume uploads", width: "85%", color: "bg-blue-500" },
                      { label: "Job applications", width: "72%", color: "bg-indigo-500" },
                      { label: "Interview prep", width: "58%", color: "bg-purple-500" },
                      { label: "Career coaching", width: "45%", color: "bg-sky-500" },
                    ].map((item, i) => (
                      <div key={item.label} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/50">{item.label}</span>
                          <span className="text-white/70">{item.width}</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${item.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: item.width }}
                            transition={{ delay: 2 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Insights panel */}
                <motion.div
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  <h4 className="text-white font-medium mb-4">Quick Insights</h4>
                  <div className="space-y-3">
                    {[
                      "87% material completion",
                      "Top 15% engagement rate",
                      "12 new placements today",
                    ].map((insight, i) => (
                      <motion.div
                        key={insight}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2 + i * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-white/60">{insight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating notification badges */}
          <motion.div
            className="absolute -left-4 md:-left-12 top-1/4 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-xl shadow-black/20"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-sm">New Activity</div>
              <div className="text-xs text-gray-500">47 students active now</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 md:-right-12 bottom-1/3 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-xl shadow-black/20"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-sm">Outcomes Up</div>
              <div className="text-xs text-gray-500">+24% this quarter</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
