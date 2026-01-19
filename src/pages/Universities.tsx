import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Building2, 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  GraduationCap,
  FileText,
  Briefcase,
  Send,
  CheckCircle,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const staffFeatures = [
  { 
    icon: Users, 
    title: "Student Insights", 
    desc: "Behavioral data + engagement patterns",
    detail: "Track how students engage with career resources, identify at-risk students early, and understand behavioral patterns that predict success."
  },
  { 
    icon: Send, 
    title: "Applications Insights", 
    desc: "Roles applied for + outcome status",
    detail: "See what roles students are pursuing, track application outcomes, and understand where your cohort is finding success."
  },
  { 
    icon: Target, 
    title: "Qualification Insights", 
    desc: "Skills + materials quality scoring",
    detail: "Aggregate quality scores for resumes and cover letters, identify skill gaps, and track improvement across your cohort."
  },
  { 
    icon: TrendingUp, 
    title: "Market Insights", 
    desc: "Real-time opportunity + outcome intelligence",
    detail: "Understand market trends, which employers are hiring, and connect student activities to placement outcomes."
  },
];

// Feature Mockups for Universities
const StudentInsightsMockup = () => (
  <div className="space-y-3">
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: "Active", value: "847", color: "text-emerald-400" },
        { label: "At Risk", value: "56", color: "text-amber-400" },
        { label: "Inactive", value: "23", color: "text-red-400" },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          className="bg-white/[0.08] rounded-lg p-3 text-center border border-white/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-white/40 text-xs">{stat.label}</div>
        </motion.div>
      ))}
    </div>
    <div className="bg-white/[0.05] rounded-xl p-3 border border-white/5">
      <div className="text-white/40 text-xs mb-2 flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        Needs Attention
      </div>
      {[
        { name: "Alex M.", time: "5 days ago" },
        { name: "Jordan L.", time: "1 week ago" },
      ].map((student, i) => (
        <motion.div
          key={student.name}
          className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 text-xs font-medium">
              {student.name.charAt(0)}
            </div>
            <span className="text-white text-sm">{student.name}</span>
          </div>
          <span className="text-white/40 text-xs">{student.time}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const ApplicationsInsightsMockup = () => (
  <div className="space-y-3">
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="text-white/70 text-xs font-medium mb-3">Application Pipeline</div>
      {[
        { stage: "Applied", count: 2847, width: 100, color: "from-blue-500 to-blue-400" },
        { stage: "Screening", count: 892, width: 65, color: "from-indigo-500 to-indigo-400" },
        { stage: "Interview", count: 456, width: 40, color: "from-amber-500 to-amber-400" },
        { stage: "Offers", count: 189, width: 22, color: "from-emerald-500 to-emerald-400" },
      ].map((stage, i) => (
        <motion.div
          key={stage.stage}
          className="flex items-center gap-2 py-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="w-14 text-right">
            <span className="text-white text-sm font-medium">{stage.count}</span>
          </div>
          <div className="flex-1">
            <motion.div
              className={`h-5 bg-gradient-to-r ${stage.color} rounded-r-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${stage.width}%` }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            />
          </div>
          <span className="text-white/50 text-xs w-16">{stage.stage}</span>
        </motion.div>
      ))}
    </div>
    <div className="flex items-center justify-between p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
      <span className="text-emerald-300 text-xs">Conversion Rate</span>
      <span className="text-emerald-400 font-bold text-sm">6.6%</span>
    </div>
  </div>
);

const QualificationInsightsMockup = () => (
  <div className="space-y-3">
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/70 text-xs font-medium">Materials Quality</span>
        <span className="text-white/40 text-xs">926 students</span>
      </div>
      <div className="flex gap-0.5 h-6 rounded-full overflow-hidden">
        {[
          { pct: 35, color: "bg-emerald-500", label: "A" },
          { pct: 40, color: "bg-blue-500", label: "B" },
          { pct: 18, color: "bg-amber-500", label: "C" },
          { pct: 7, color: "bg-red-500", label: "D" },
        ].map((seg, i) => (
          <motion.div
            key={i}
            className={`${seg.color} flex items-center justify-center`}
            initial={{ width: 0 }}
            whileInView={{ width: `${seg.pct}%` }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          >
            <span className="text-white/80 text-[10px] font-medium">{seg.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="bg-white/[0.05] rounded-xl p-3 border border-white/5">
      <div className="text-white/40 text-xs mb-2">Top Skill Gaps</div>
      {[
        { skill: "Quantified achievements", count: 234 },
        { skill: "Technical depth", count: 156 },
      ].map((item, i) => (
        <motion.div
          key={item.skill}
          className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <span className="text-white/60 text-xs">{item.skill}</span>
          <span className="text-amber-400 text-xs font-medium">{item.count}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const MarketInsightsMockup = () => (
  <div className="space-y-3">
    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-3 border border-blue-500/20">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-4 h-4 text-blue-400" />
        <span className="text-white/70 text-xs font-medium">Market Trend</span>
      </div>
      <p className="text-white text-sm">Tech hiring up <span className="text-emerald-400 font-bold">23%</span> in Q1</p>
    </div>
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="text-white/40 text-xs mb-2">Top Hiring This Month</div>
      {[
        { company: "Google", openings: 47, trend: "+12" },
        { company: "Amazon", openings: 38, trend: "+8" },
        { company: "McKinsey", openings: 24, trend: "+15" },
      ].map((item, i) => (
        <motion.div
          key={item.company}
          className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <span className="text-white text-xs">{item.company}</span>
          <div className="flex items-center gap-2">
            <span className="text-white/50 text-xs">{item.openings} roles</span>
            <span className="text-emerald-400 text-[10px]">{item.trend}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const featureMockups = [StudentInsightsMockup, ApplicationsInsightsMockup, QualificationInsightsMockup, MarketInsightsMockup];

const Universities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1929] via-[#1e3a5f] to-[#2563EB]">
      <Navbar />

      {/* Hero Section with Dashboard Mockup */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">For Universities & Career Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              See what your students are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]">
                actually doing
              </span>
            </h1>
            
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Track engagement, activity, and outcomes across your entire cohort. Transform raw data into strategic insights.
            </p>
          </motion.div>

          {/* Hero Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
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
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm font-semibold">For Universities</span>
                </div>
                <div className="w-16" />
              </div>

              {/* Student Engagement Section */}
              <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-white/60" />
                    <span className="text-white font-medium text-sm">Student Engagement</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">Live</span>
                </div>
                <div className="flex gap-2 mb-2">
                  {[75, 60, 80, 45, 90, 55, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 h-10 bg-blue-500/60 rounded"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: h / 100 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      style={{ transformOrigin: "bottom" }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-white/40 text-xs">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { icon: GraduationCap, value: "2,847", label: "Active Users" },
                  { icon: FileText, value: "1,234", label: "Resumes Built" },
                  { icon: Briefcase, value: "8,456", label: "Jobs Applied" },
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

              {/* Actionable Insights */}
              <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-white/60" />
                  <span className="text-white font-medium text-sm">Actionable Insights</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white/[0.03] rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-white/80 text-sm">CS majors need more interview prep</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs">Action</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/[0.03] rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-white/80 text-sm">Finance internship demand up 40%</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-xs">Trend</span>
                  </div>
                </div>
              </div>

              {/* Placement Rate */}
              <div className="bg-white/[0.05] rounded-xl p-4 border border-white/10 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/60 text-sm mb-1">Placement Rate</div>
                    <div className="text-emerald-400 text-3xl font-bold">78.5%</div>
                  </div>
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 -rotate-90">
                      <circle cx="32" cy="32" r="28" fill="none" strokeWidth="4" stroke="rgba(16, 185, 129, 0.2)" />
                      <motion.circle
                        cx="32" cy="32" r="28" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round"
                        strokeDasharray="176"
                        initial={{ strokeDashoffset: 176 }}
                        animate={{ strokeDashoffset: 38 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/request-pilot">
                <motion.button
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-semibold text-sm group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Building2 className="w-5 h-5" />
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Scroll-Triggered Features */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          {staffFeatures.map((feature, i) => {
            const MockupComponent = featureMockups[i];
            const isEven = i % 2 === 0;
            
            return (
              <motion.div
                key={feature.title}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-24 md:py-32 px-6 ${
                  isEven ? "bg-white" : "bg-gradient-to-br from-[#0c1929] via-[#1e3a5f] to-[#2563EB]"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Text Content */}
                <motion.div
                  className={`flex-1 max-w-lg ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isEven ? "bg-blue-100" : "bg-blue-500/20"
                    }`}>
                      <feature.icon className={`w-6 h-6 ${isEven ? "text-blue-600" : "text-blue-400"}`} />
                    </div>
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${
                    isEven ? "text-slate-900" : "text-white"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg mb-4 ${isEven ? "text-slate-600" : "text-white/60"}`}>
                    {feature.desc}
                  </p>
                  <p className={`text-base ${isEven ? "text-slate-500" : "text-white/50"}`}>
                    {feature.detail}
                  </p>
                </motion.div>

                {/* Mockup */}
                <motion.div
                  className={`flex-1 w-full max-w-md ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative p-6 bg-[#1a2d47] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                        <div className="w-3 h-3 rounded-full bg-green-400/60" />
                      </div>
                      
                      <MockupComponent />
                      
                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="text-sm text-white/40">Feature {i + 1} of {staffFeatures.length}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(staffFeatures.length)].map((_, j) => (
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
      </section>

      {/* Social Proof */}
      <section className="bg-[#0c1929] py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-12">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-white/80 font-medium">Partnered with universities in Germany, Spain and Switzerland</span>
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
                  <div className="text-4xl font-display font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
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
              <Quote className="w-16 h-16 text-blue-500/20" />
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight mb-12">
                "ApplyLab gave us visibility we never had before.
                <span className="text-blue-400"> Now we can actually help students before they fall behind.</span>"
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
                  <p className="text-white font-medium text-lg">Dr. Maria Keller</p>
                  <p className="text-white/50">Director of Career Services • ETH Zürich</p>
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
              Ready to Transform Your Career Services?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join forward-thinking universities using data to drive better career outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/request-pilot">
                <motion.button
                  className="flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-semibold group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a Pilot
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

export default Universities;
