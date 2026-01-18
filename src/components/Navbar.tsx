import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Students", "Universities", "Solutions", "About"];

  // Simple scroll detection
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <span className="text-primary font-bold text-sm">A</span>
          </div>
          <span className={`text-xl font-display font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
            ApplyLab
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href="#"
              className={`relative group text-sm font-medium transition-colors ${
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-primary" : "bg-white"
              }`} />
            </motion.a>
          ))}
        </div>

        <motion.button
          className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm group transition-all ${
            isScrolled 
              ? "bg-primary text-primary-foreground shadow-soft" 
              : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Partner With Us
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Mobile menu button */}
        <motion.button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-foreground" : "text-white"}`}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;