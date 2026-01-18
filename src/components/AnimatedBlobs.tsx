import { motion } from "framer-motion";

const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Primary green blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-glow-primary/20 blur-[120px]"
        style={{ top: "-10%", left: "-10%" }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-glow-secondary/20 blur-[100px]"
        style={{ top: "30%", right: "-5%" }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Purple accent blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-glow-accent/15 blur-[80px]"
        style={{ bottom: "10%", left: "30%" }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default AnimatedBlobs;
