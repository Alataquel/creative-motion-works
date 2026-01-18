import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"logo" | "expand" | "done">("logo");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("expand"), 2000);
    const timer2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#060d18] via-[#0a1628] to-[#0f2847]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central logo container */}
          <div className="relative">
            {/* Rotating dotted circles */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ 
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              <svg className="w-48 h-48" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(59,130,246,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, rotate: -360 }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.2 },
                scale: { duration: 0.5, delay: 0.2 },
                rotate: { duration: 30, repeat: Infinity, ease: "linear" }
              }}
            >
              <svg className="w-64 h-64" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="rgba(99,102,241,0.2)"
                  strokeWidth="1"
                  strokeDasharray="2 12"
                />
              </svg>
            </motion.div>

            {/* Logo */}
            <motion.div
              className="relative z-10 flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: phase === "expand" ? 1.1 : 1,
              }}
              transition={{ 
                opacity: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              {/* Logo mark */}
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/30"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span
                  className="text-white font-bold text-3xl font-display"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  A
                </motion.span>
              </motion.div>

              {/* Wordmark */}
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span className="text-3xl font-display font-bold text-white">Apply</span>
                <span className="text-3xl font-display font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Lab</span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="text-white/50 text-sm tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Career Visibility Platform
              </motion.p>
            </motion.div>

            {/* Pulse rings */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full border border-sky-400/30"
                  animate={{ scale: [1, 2.5, 3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Loading indicator */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-sky-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-sky-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-sky-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
