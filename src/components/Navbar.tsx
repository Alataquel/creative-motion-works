import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import applyLabLogo from "@/assets/applylab-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: "For Students", href: "/students" },
    { label: "For Universities", href: "/universities" },
    { label: "About", href: "#" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/" className="flex items-center">
                <img 
                  src={applyLabLogo} 
                  alt="ApplyLab" 
                  className="h-8 w-auto"
                />
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-[#1e3a5f] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-[#1e3a5f] transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="text-sm font-medium text-slate-600 hover:text-[#1e3a5f] transition-colors"
              >
                Login
              </Link>
              <Link to="/request-pilot">
                <motion.button
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white rounded-full font-semibold text-sm group shadow-lg shadow-blue-500/25"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Pilot
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </Link>
            </div>

            <button className="md:hidden p-2 text-[#1e3a5f]" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default Navbar;