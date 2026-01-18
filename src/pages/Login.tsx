import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Building2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<"student" | "staff" | null>(null);

  const roles = [
    {
      id: "student" as const,
      title: "Student",
      description: "Track applications, prep for interviews, and land your dream job",
      icon: GraduationCap,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "staff" as const,
      title: "University Staff",
      description: "Access analytics, manage students, and drive career outcomes",
      icon: Building2,
      gradient: "from-blue-600 to-blue-700",
    },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      console.log(`Continuing as ${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Card */}
        <div className="bg-[#0c1929] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5" />

          <div className="relative">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-2xl font-display font-bold text-white">ApplyLab</span>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-display font-bold text-white mb-2">
                Welcome back
              </h1>
              <p className="text-white/60">
                Choose how you'd like to sign in
              </p>
            </div>

            {/* Role selection */}
            <div className="space-y-3 mb-6">
              {roles.map((role) => (
                <motion.button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full p-4 rounded-xl border transition-all text-left group ${
                    selectedRole === role.id
                      ? "bg-white/10 border-blue-500/50"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shrink-0`}>
                      <role.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white mb-1">{role.title}</h3>
                      <p className="text-sm text-white/50">{role.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                      selectedRole === role.id
                        ? "border-blue-500 bg-blue-500"
                        : "border-white/30"
                    }`}>
                      {selectedRole === role.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-white"
                        />
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Continue button */}
            <AnimatePresence>
              {selectedRole && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <motion.button
                    onClick={handleContinue}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue as {selectedRole === "student" ? "Student" : "Staff"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <p className="text-center text-white/40 text-sm mt-8">
              Don't have an account?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Request access
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
