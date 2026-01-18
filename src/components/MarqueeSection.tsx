import { motion } from "framer-motion";

const MarqueeSection = () => {
  const items = [
    "DESIGN SYSTEMS",
    "✦",
    "MOTION GRAPHICS",
    "✦",
    "WEB EXPERIENCES",
    "✦",
    "CREATIVE TECH",
    "✦",
    "BRAND IDENTITY",
    "✦",
    "DIGITAL PRODUCTS",
    "✦",
  ];

  return (
    <section className="py-20 overflow-hidden border-y border-border relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* First row */}
      <div className="flex gap-8 mb-4">
        <motion.div
          className="flex gap-8 text-6xl md:text-8xl font-display font-bold whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={item === "✦" ? "text-primary" : "text-foreground/10"}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Second row - reverse */}
      <div className="flex gap-8">
        <motion.div
          className="flex gap-8 text-6xl md:text-8xl font-display font-bold whitespace-nowrap"
          animate={{ x: [-2000, 0] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={item === "✦" ? "text-secondary" : "text-foreground/10"}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
