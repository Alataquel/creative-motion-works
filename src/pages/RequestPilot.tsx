import { useState } from "react";
import { ArrowLeft, ArrowRight, Building2, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/applylab-logo.png";

const RequestPilot = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    universityName: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Background effects */}
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.15) 0%, transparent 70%)" }}
      />

      {/* Simple Navbar */}
      <nav className="relative z-10 max-w-[1400px] mx-auto px-6 py-6 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
            <img src={logo} alt="ApplyLab" className="h-6 w-auto" />
          </div>
          <span className="text-xl font-display font-bold text-white">ApplyLab</span>
        </Link>
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </nav>

      {/* Full Screen Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          {!isSubmitted ? (
            <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                  <Building2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-display font-bold text-foreground mb-2">
                  Request a Pilot
                </h1>
                <p className="text-muted-foreground text-sm">
                  Get started with ApplyLab at your university
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-muted focus:bg-card focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-muted focus:bg-card focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                      placeholder="john@university.edu"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="universityName" className="block text-sm font-medium text-foreground mb-2">
                    University Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="universityName"
                      name="universityName"
                      value={formData.universityName}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-muted focus:bg-card focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                      placeholder="Stanford University"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary/20 group"
                >
                  Submit Request
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>

              <p className="text-center text-xs text-muted-foreground mt-6">
                By submitting, you agree to our terms and privacy policy.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl shadow-2xl p-8 border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Thank You!
              </h2>
              <p className="text-muted-foreground mb-6">
                We've received your request and will be in touch soon.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-accent text-foreground rounded-xl font-semibold text-sm transition-colors"
              >
                Back to Home
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RequestPilot;