import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LoginDialog from "./LoginDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: "Platform", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "For Universities", href: "/universities" },
    { label: "About", href: "#" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0c1929]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-display font-bold text-white">ApplyLab</span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Login
              </button>
              <motion.button
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#2563EB] rounded-full font-semibold text-sm group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Pilot
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>

            <button className="md:hidden p-2 text-white" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </>
  );
};

export default Navbar;