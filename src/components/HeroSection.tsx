import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, Building2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4" />
          Partnering with Leading Universities
        </motion.div>

        {/* Kinetic Typography */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-foreground"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Career Acceleration
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient">Powered by AI</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering universities to deliver exceptional career outcomes for their 
          students through advanced AI technology and comprehensive analytics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow-box group"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 50px hsl(230 65% 28% / 0.35)" }}
            whileTap={{ scale: 0.95 }}
          >
            Partner With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-full font-semibold text-lg text-foreground hover:bg-muted transition-colors group shadow-soft"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GraduationCap className="w-5 h-5" />
            I'm a Student
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Sparkles, text: "100% Free for Students" },
            { icon: Building2, text: "Universities Are Our Clients" },
            { icon: Sparkles, text: "AI-Powered Intelligence" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-soft"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;