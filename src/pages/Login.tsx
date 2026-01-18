import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [staffEmail, setStaffEmail] = useState("");
  const [staffPassword, setStaffPassword] = useState("");
  const [staffShowPassword, setStaffShowPassword] = useState(false);

  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentShowPassword, setStudentShowPassword] = useState(false);

  const handleStaffLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Staff login:", staffEmail);
  };

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student login:", studentEmail);
  };

  return (
    <div className="min-h-screen flex">
      {/* Back button - fixed */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-[#0a1628]/50 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Left side - University Staff (Dark Blue) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 bg-[#0a1628] flex items-center justify-center p-8"
      >
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-display font-bold text-white text-center mb-10">
            University Staff
          </h1>

          <form onSubmit={handleStaffLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Staff email"
                value={staffEmail}
                onChange={(e) => setStaffEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-transparent border-2 border-white/40 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type={staffShowPassword ? "text" : "password"}
                placeholder="Password"
                value={staffPassword}
                onChange={(e) => setStaffPassword(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-transparent border-2 border-white/40 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors pr-12"
              />
              <button
                type="button"
                onClick={() => setStaffShowPassword(!staffShowPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {staffShowPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3.5 rounded-full bg-white text-[#2563EB] font-semibold hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Log In
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm mb-4">
              Accounts for university staff are created by our team. Please contact us to get started.
            </p>
            <motion.button
              className="w-full py-3.5 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Right side - Students (White) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 bg-white flex items-center justify-center p-8"
      >
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-display font-bold text-[#2563EB] text-center mb-10">
            Students
          </h1>

          <form onSubmit={handleStudentLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-transparent border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#2563EB] focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type={studentShowPassword ? "text" : "password"}
                placeholder="Password"
                value={studentPassword}
                onChange={(e) => setStudentPassword(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-transparent border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#2563EB] focus:outline-none transition-colors pr-12"
              />
              <button
                type="button"
                onClick={() => setStudentShowPassword(!studentShowPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {studentShowPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#2563EB] text-white font-semibold hover:bg-[#2563EB]/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Log In
            </motion.button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account yet?{" "}
            <a href="#" className="text-[#2563EB] font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
