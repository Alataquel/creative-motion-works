import { ArrowRight, GraduationCap, Building2, Activity, FileText, Send, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#2563EB] overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 opacity-[0.02]" style={{
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

        {/* PANELS CONTAINER */}
        <div className="relative w-full max-w-6xl mx-auto mt-8">
          {/* PANELS */}
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
            
            {/* LEFT PANEL - Students */}
            <motion.div 
              className="relative h-full min-h-[480px]"
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-slate-200 cursor-pointer">
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
              className="relative h-full min-h-[480px]"
              initial={{ rotate: 2 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-slate-200 cursor-pointer">
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
      </div>
    </section>
  );
};

export default HeroSection;
