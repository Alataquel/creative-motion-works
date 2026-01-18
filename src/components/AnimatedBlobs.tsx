import { motion } from "framer-motion";

const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Navy blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-navy/5 blur-[150px]"
        style={{ top: "-20%", right: "-10%" }}
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

      {/* Royal blue blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-royal/8 blur-[120px]"
        style={{ top: "40%", left: "-10%" }}
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

      {/* Indigo accent blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-indigo/5 blur-[100px]"
        style={{ bottom: "10%", right: "20%" }}
        animate={{
          x: [0, 30, -15, 0],
          y: [0, -30, 15, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};

export default AnimatedBlobs;