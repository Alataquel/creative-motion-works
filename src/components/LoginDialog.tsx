import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Building2, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
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
      // For now, just close the dialog - auth will be implemented later
      console.log(`Continuing as ${selectedRole}`);
      onOpenChange(false);
      setSelectedRole(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#0c1929] border-white/10 p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5" />
        
        <div className="relative p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-display font-bold text-white text-center">
              Welcome to ApplyLab
            </DialogTitle>
            <p className="text-white/60 text-center mt-2">
              Choose how you'd like to sign in
            </p>
          </DialogHeader>

          <div className="space-y-3">
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

          <AnimatePresence>
            {selectedRole && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6"
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

          <p className="text-center text-white/40 text-xs mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Request access
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
