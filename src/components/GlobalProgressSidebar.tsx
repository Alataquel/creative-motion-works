import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, GraduationCap, Briefcase, FileText, TrendingUp, CheckCircle } from "lucide-react";

const milestones = [
  { id: 0, label: "Start", icon: GraduationCap, position: 0 },
  { id: 1, label: "Discover", icon: Briefcase, position: 25 },
  { id: 2, label: "Build", icon: FileText, position: 50 },
  { id: 3, label: "Track", icon: TrendingUp, position: 75 },
  { id: 4, label: "Ready", icon: CheckCircle, position: 100 },
];

const GlobalProgressSidebar = () => {
  const { scrollYProgress } = useScroll();
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [displayProgress, setDisplayProgress] = useState(0);
  
  useEffect(() => {
    const unsubscribe = progressValue.on("change", (latest) => {
      setDisplayProgress(Math.min(100, Math.round(latest)));
    });
    return () => unsubscribe();
  }, [progressValue]);

  return (
    <motion.div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="relative p-4 rounded-2xl bg-[#0c1929]/95 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="flex flex-col items-center gap-4">
          {/* Header Icon */}
          <motion.div 
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-500/30"
            animate={displayProgress >= 100 ? { 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            } : {}}
            transition={{ duration: 0.5 }}
          >
            <Rocket className={`w-6 h-6 transition-all duration-500 ${displayProgress >= 100 ? "text-white rotate-45" : "text-white"}`} />
          </motion.div>
          
          {/* Progress Label */}
          <div className="text-center">
            <span className={`text-lg font-bold transition-colors duration-300 ${
              displayProgress >= 100 ? "text-emerald-400" : "text-[#3B82F6]"
            }`}>
              {displayProgress >= 100 ? "Ready!" : `${displayProgress}%`}
            </span>
            <p className="text-[10px] text-white/40 mt-0.5">Career Progress</p>
          </div>
          
          {/* Vertical Progress Bar with Milestones */}
          <div className="relative h-52 w-4 bg-white/10 rounded-full overflow-visible">
            {/* Progress Fill */}
            <motion.div
              className={`absolute bottom-0 left-0 right-0 rounded-full transition-colors duration-500 ${
                displayProgress >= 100 
                  ? "bg-gradient-to-t from-emerald-500 to-emerald-400" 
                  : "bg-gradient-to-t from-[#2563EB] to-[#3B82F6]"
              }`}
              style={{ height: `${displayProgress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
                   style={{ backgroundSize: '100% 200%' }} />
            </motion.div>
            
            {/* Milestone dots */}
            {milestones.map((milestone) => {
              const isActive = displayProgress >= milestone.position;
              const MilestoneIcon = milestone.icon;
              
              return (
                <div 
                  key={milestone.id}
                  className="absolute left-1/2 -translate-x-1/2 group"
                  style={{ bottom: `${milestone.position}%` }}
                >
                  {/* Dot */}
                  <motion.div 
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? displayProgress >= 100 
                          ? "bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/50" 
                          : "bg-[#3B82F6] border-[#3B82F6] shadow-lg shadow-blue-400/50"
                        : "bg-white/10 border-white/30"
                    }`}
                    animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 whitespace-nowrap">
                      <MilestoneIcon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : "text-white/50"}`} />
                      <span className={`text-xs font-medium ${isActive ? "text-white" : "text-white/50"}`}>
                        {milestone.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Scroll hint */}
          {displayProgress < 20 && (
            <motion.p 
              className="text-[10px] text-white/40 text-center max-w-[60px]"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalProgressSidebar;
