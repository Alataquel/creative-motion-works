import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const titleWords = ["Build", "Something", "Extraordinary"];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Kinetic Typography */}
        <div className="overflow-hidden mb-8">
          {titleWords.map((word, i) => (
            <motion.h1
              key={word}
              className="text-7xl md:text-9xl font-display font-bold leading-none"
              initial={{ y: 200, rotateX: -90 }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className={i === 1 ? "text-gradient" : "text-foreground"}>
                {word}
              </span>
            </motion.h1>
          ))}
        </div>

        {/* Subtitle with stagger */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The next generation platform for creators, builders, and visionaries
          who refuse to settle for ordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow-box group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 80px hsl(145 80% 50% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-8 py-4 border border-border rounded-full font-semibold text-lg text-foreground hover:bg-muted transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          className="mt-16 inline-flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Trusted by 10,000+ teams worldwide
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
