import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  GraduationCap,
  Search,
  FileText,
  Send,
  BookOpen,
  Globe,
  TrendingUp,
  Briefcase,
  Award,
  Calendar,
  ClipboardList,
  CheckCircle,
  Star,
  Quote,
  ArrowUpRight,
  AlertCircle,
  Target,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const studentFeatures = [
  { 
    icon: Search, 
    title: "Smart Job Discovery", 
    desc: "AI-matched opportunities tailored to your skills and career goals",
    detail: "Our intelligent matching algorithm analyzes your profile, skills, and preferences to surface the most relevant opportunities from thousands of listings."
  },
  { 
    icon: FileText, 
    title: "Resume Building", 
    desc: "Get real-time feedback to stand out from the crowd",
    detail: "Build ATS-optimized resumes with instant feedback on formatting, keywords, and impact statements."
  },
  { 
    icon: Send, 
    title: "Application Tracking", 
    desc: "Know where every application stands at a glance",
    detail: "Never lose track of an application again. Visual pipeline shows you exactly where you are in each process."
  },
  { 
    icon: BookOpen, 
    title: "Case Study Prep", 
    desc: "Master consulting & finance case interviews",
    detail: "Interactive case library with frameworks, practice problems, and AI-powered feedback on your solutions."
  },
  { 
    icon: Globe, 
    title: "Global Events", 
    desc: "Discover career fairs & networking worldwide",
    detail: "Curated calendar of recruiting events, info sessions, and networking opportunities tailored to your interests."
  },
  { 
    icon: TrendingUp, 
    title: "Progress Insights", 
    desc: "See your growth over time with detailed analytics",
    detail: "Track your career readiness score, skill development, and activity trends with beautiful visualizations."
  },
];

// Feature Mockups for Students
const JobDiscoveryMockup = () => (
  <div className="space-y-3">
    {[
      { company: "Stripe", role: "Product Intern", match: 94, logo: "S", location: "SF / Remote" },
      { company: "Figma", role: "Design Engineer", match: 89, logo: "F", location: "New York" },
      { company: "Notion", role: "Software Intern", match: 85, logo: "N", location: "Remote" },
    ].map((job, i) => (
      <motion.div
        key={job.company}
        className="bg-white/[0.08] rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:border-blue-500/30 transition-colors"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1 }}
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {job.logo}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium text-sm truncate">{job.role}</span>
            <ArrowUpRight className="w-3 h-3 text-white/40" />
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>{job.company}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
          job.match >= 90 ? "bg-emerald-500/20 text-emerald-300" : "bg-blue-500/20 text-blue-300"
        }`}>
          {job.match}% match
        </div>
      </motion.div>
    ))}
    <div className="flex items-center justify-between pt-2">
      <span className="text-xs text-white/40">Showing top matches</span>
      <span className="text-xs text-blue-400">View all 47 jobs →</span>
    </div>
  </div>
);

const ResumeBuildingMockup = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between p-3 bg-white/[0.08] rounded-xl border border-white/5">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 -rotate-90">
            <circle cx="24" cy="24" r="20" fill="none" strokeWidth="3" stroke="rgba(255,255,255,0.1)" />
            <motion.circle 
              cx="24" cy="24" r="20" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"
              initial={{ strokeDasharray: "126", strokeDashoffset: "126" }}
              whileInView={{ strokeDashoffset: "25" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">82</span>
        </div>
        <div>
          <div className="text-white font-medium text-sm">Resume Score</div>
          <div className="text-emerald-400 text-xs">Strong • 8 improvements</div>
        </div>
      </div>
      <Award className="w-5 h-5 text-yellow-400" />
    </div>
    <div className="space-y-2">
      {[
        { text: "Add quantified achievements", status: "warn", icon: AlertCircle },
        { text: "Skills section optimized", status: "done", icon: CheckCircle },
        { text: "ATS-friendly formatting", status: "done", icon: CheckCircle },
      ].map((item, i) => (
        <motion.div
          key={item.text}
          className="flex items-center gap-2 p-2 bg-white/[0.05] rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
        >
          <item.icon className={`w-4 h-4 ${item.status === "done" ? "text-emerald-400" : "text-amber-400"}`} />
          <span className="text-white/70 text-xs">{item.text}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const ApplicationTrackingMockup = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-1">
      {[
        { stage: "Applied", count: 12, color: "bg-blue-500" },
        { stage: "Screening", count: 5, color: "bg-indigo-500" },
        { stage: "Interview", count: 3, color: "bg-amber-500" },
        { stage: "Offer", count: 1, color: "bg-emerald-500" },
      ].map((stage, i) => (
        <motion.div
          key={stage.stage}
          className="flex-1 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className={`h-2 ${stage.color} rounded-full mb-2`} style={{ opacity: 0.6 + i * 0.1 }} />
          <div className="text-white font-bold text-lg">{stage.count}</div>
          <div className="text-white/50 text-[10px]">{stage.stage}</div>
        </motion.div>
      ))}
    </div>
    <div className="bg-white/[0.05] rounded-xl p-3 border border-white/5">
      <div className="text-xs text-white/40 mb-2">Recent Updates</div>
      {[
        { company: "Google", action: "Interview scheduled", time: "2h ago", icon: Calendar },
        { company: "Meta", action: "Application viewed", time: "1d ago", icon: Send },
      ].map((item, i) => (
        <motion.div
          key={item.company}
          className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <item.icon className="w-4 h-4 text-blue-400" />
          <div className="flex-1">
            <span className="text-white text-xs">{item.company}</span>
            <span className="text-white/50 text-xs"> • {item.action}</span>
          </div>
          <span className="text-white/40 text-[10px]">{item.time}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const CaseStudyPrepMockup = () => (
  <div className="space-y-3">
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="w-4 h-4 text-blue-400" />
        <span className="text-white/70 text-xs font-medium">Current Case</span>
      </div>
      <div className="text-white font-medium text-sm mb-1">Market Entry Strategy</div>
      <div className="text-white/50 text-xs mb-3">McKinsey Practice • Intermediate</div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "65%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        <span className="text-white/50 text-xs">65%</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {[
        { name: "MECE", completed: true },
        { name: "Porter's 5", completed: true },
        { name: "4P's", completed: false },
        { name: "BCG Matrix", completed: false },
      ].map((fw, i) => (
        <motion.div
          key={fw.name}
          className={`p-2 rounded-lg text-center text-xs border ${
            fw.completed 
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" 
              : "bg-white/[0.05] border-white/10 text-white/50"
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          {fw.name}
        </motion.div>
      ))}
    </div>
  </div>
);

const GlobalEventsMockup = () => (
  <div className="space-y-3">
    {[
      { title: "Goldman Sachs Info Session", date: "Tomorrow, 6 PM", type: "Virtual", rsvp: true },
      { title: "Tech Career Fair 2025", date: "Jan 25", type: "Stanford", rsvp: false },
      { title: "Consulting Workshop", date: "Feb 3", type: "NYC", rsvp: false },
    ].map((event, i) => (
      <motion.div
        key={event.title}
        className="bg-white/[0.08] rounded-xl p-3 border border-white/5 flex items-center gap-3"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-600/30 flex items-center justify-center shrink-0">
          <Calendar className="w-5 h-5 text-blue-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white font-medium text-sm truncate">{event.title}</div>
          <div className="text-white/50 text-xs">{event.date} • {event.type}</div>
        </div>
        <button className={`px-2 py-1 rounded-full text-[10px] font-medium ${
          event.rsvp ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-white/60"
        }`}>
          {event.rsvp ? "RSVP'd ✓" : "RSVP"}
        </button>
      </motion.div>
    ))}
  </div>
);

const ProgressInsightsMockup = () => (
  <div className="space-y-3">
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/70 text-xs font-medium">Weekly Activity</span>
        <span className="text-emerald-400 text-xs">+23% ↑</span>
      </div>
      <div className="flex items-end gap-1 h-16">
        {[40, 65, 45, 80, 70, 90, 55].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-white/30 text-[9px]">Mon</span>
        <span className="text-white/30 text-[9px]">Sun</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: "Apps", value: "12", trend: "+4" },
        { label: "Views", value: "89", trend: "+31" },
        { label: "Score", value: "82", trend: "+5" },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          className="bg-white/[0.05] rounded-lg p-2 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
        >
          <div className="text-white font-bold text-lg">{stat.value}</div>
          <div className="text-white/40 text-[10px]">{stat.label}</div>
          <div className="text-emerald-400 text-[9px]">{stat.trend}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

const featureMockups = [JobDiscoveryMockup, ResumeBuildingMockup, ApplicationTrackingMockup, CaseStudyPrepMockup, GlobalEventsMockup, ProgressInsightsMockup];

const Students = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Student Dashboard Mockup */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-primary">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">For Students</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Your journey in{" "}
              <span className="text-secondary">
                one view
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Discover jobs, build better materials, and track your progress — all in one place.
            </p>
          </motion.div>

          {/* Hero Student Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative p-6 bg-[#1a2d47]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/10">
              {/* Window Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm font-semibold">For Students</span>
                </div>
                <div className="w-16" />
              </div>

              {/* Job Matches Section */}
              <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-white/60" />
                    <span className="text-white font-medium text-sm">Top Job Matches</span>
                  </div>
                  <span className="text-blue-400 text-xs">47 new</span>
                </div>
                <div className="space-y-2">
                  {[
                    { company: "Stripe", role: "Product Intern", match: "94%" },
                    { company: "Figma", role: "Design Engineer", match: "89%" },
                  ].map((job, i) => (
                    <motion.div
                      key={job.company}
                      className="flex items-center gap-3 p-2 bg-white/[0.03] rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                        {job.company.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm">{job.role}</div>
                        <div className="text-white/50 text-xs">{job.company}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">{job.match}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { icon: ClipboardList, value: "12", label: "Applications" },
                  { icon: MessageSquare, value: "3", label: "Interviews" },
                  { icon: Award, value: "82", label: "Resume Score" },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    className="bg-white/[0.05] rounded-xl p-3 border border-white/10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <metric.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">{metric.value}</div>
                    <div className="text-white/50 text-xs">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Career Ready Progress */}
              <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">Career Readiness</span>
                  <span className="text-emerald-400 font-bold">75%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
                <div className="text-white/40 text-xs mt-2">3 tasks remaining to reach 100%</div>
              </div>

              {/* CTA Button */}
              <Link to="/login">
                <motion.button
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-semibold text-sm group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GraduationCap className="w-5 h-5" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll-Triggered Features */}
      <section ref={sectionRef} className="bg-primary relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full blur-3xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full blur-3xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          />
        </div>

        <div className="relative z-10 py-24">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-20 px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Everything you need in{" "}
              <span className="text-secondary">
                one place
              </span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From job discovery to interview prep, we've got you covered.
            </p>
          </motion.div>

          {/* Vertical Scroll-Triggered Features */}
          <div className="max-w-[1400px] mx-auto px-6 space-y-32">
            {studentFeatures.map((feature, i) => {
              const MockupComponent = featureMockups[i];
              return (
                <motion.div
                  key={feature.title}
                  className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Content - alternating sides */}
                  <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8 shadow-2xl shadow-secondary/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-xl text-white/70 mb-6">
                      {feature.desc}
                    </p>
                    <p className="text-lg text-white/50 leading-relaxed">
                      {feature.detail}
                    </p>
                  </div>

                  {/* Visual Card */}
                  <motion.div 
                    className={`${i % 2 === 1 ? "lg:order-1" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative p-6 bg-white/[0.05] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-400/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                          <div className="w-3 h-3 rounded-full bg-green-400/60" />
                        </div>
                        
                        <MockupComponent />
                        
                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/5">
                          <span className="text-sm text-white/40">Feature {i + 1} of {studentFeatures.length}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(studentFeatures.length)].map((_, j) => (
                              <div 
                                key={j} 
                                className={`w-2 h-2 rounded-full transition-colors ${j === i ? "bg-blue-400" : "bg-white/20"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700 font-medium">Partnered with universities in Germany, Spain and Switzerland</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
              {[
                { value: "10+", label: "Universities" },
                { value: "5/5", label: "Satisfaction" },
                { value: "10k+", label: "Job Positions" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-4xl font-display font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-blue-200" />
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-slate-800 leading-tight mb-12">
                "ApplyLab gave us visibility we never had before.
                <span className="text-blue-600"> Now we can actually help students before they fall behind.</span>"
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-500/30">
                  MK
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-800 font-medium text-lg">Dr. Maria Keller</p>
                  <p className="text-slate-500">Director of Career Services • LMU Munich</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-[#0c1929]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of students who are landing their dream jobs with ApplyLab.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login">
                <motion.button
                  className="flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-semibold group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Students;
