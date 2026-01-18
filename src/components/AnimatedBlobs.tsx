import { motion } from "framer-motion";

const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* These blobs are for the light sections below the hero */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]"
        style={{ top: "60%", right: "-10%" }}
        animate={{
          x: [0, -50, -25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]"
        style={{ top: "80%", left: "-10%" }}
        animate={{
          x: [0, 40, 20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
};

export default AnimatedBlobs;