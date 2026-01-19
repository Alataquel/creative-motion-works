import { motion } from "framer-motion";
import { 
  Search, 
  FileText, 
  Send, 
  BookOpen, 
  Globe, 
  TrendingUp,
  Users,
  Activity,
  BarChart3,
  Target,
  CheckCircle,
  Clock,
  MessageSquare,
  Calendar,
  Award,
  Briefcase,
  Star,
  ArrowUpRight,
  AlertCircle
} from "lucide-react";

interface MockupProps {
  featureIndex: number;
  isStaff?: boolean;
}

// Smart Job Discovery Mockup
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

// Resume Building Mockup
const ResumeBuildingMockup = () => (
  <div className="space-y-3">
    {/* Score Header */}
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

    {/* Feedback Items */}
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

// Application Tracking Mockup
const ApplicationTrackingMockup = () => (
  <div className="space-y-4">
    {/* Pipeline */}
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

    {/* Recent Activity */}
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

// Case Study Prep Mockup
const CaseStudyPrepMockup = () => (
  <div className="space-y-3">
    {/* Practice Case */}
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

    {/* Framework Cards */}
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

// Global Events Mockup
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
          event.rsvp ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-white/60 hover:bg-blue-500/20 hover:text-blue-300"
        }`}>
          {event.rsvp ? "RSVP'd ✓" : "RSVP"}
        </button>
      </motion.div>
    ))}
  </div>
);

// Progress Insights Mockup
const ProgressInsightsMockup = () => (
  <div className="space-y-3">
    {/* Weekly Chart */}
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

    {/* Stats Grid */}
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

// ======= STAFF MOCKUPS =======

// Cohort Engagement Mockup
const CohortEngagementMockup = () => (
  <div className="space-y-3">
    {/* Engagement Overview */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: "Active", value: "847", color: "text-emerald-400", bg: "bg-emerald-500/20" },
        { label: "At Risk", value: "56", color: "text-amber-400", bg: "bg-amber-500/20" },
        { label: "Inactive", value: "23", color: "text-red-400", bg: "bg-red-500/20" },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          className="bg-white/[0.08] rounded-lg p-2 text-center border border-white/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-white/40 text-[10px]">{stat.label}</div>
        </motion.div>
      ))}
    </div>

    {/* At-Risk Students */}
    <div className="bg-white/[0.05] rounded-xl p-3 border border-white/5">
      <div className="text-xs text-white/40 mb-2 flex items-center gap-2">
        <AlertCircle className="w-3 h-3 text-amber-400" />
        Needs Attention
      </div>
      {[
        { name: "Alex M.", lastActive: "5 days ago", apps: 0 },
        { name: "Jordan L.", lastActive: "1 week ago", apps: 1 },
      ].map((student, i) => (
        <motion.div
          key={student.name}
          className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 text-xs font-medium">
            {student.name.charAt(0)}
          </div>
          <div className="flex-1">
            <span className="text-white text-xs">{student.name}</span>
          </div>
          <span className="text-amber-400/70 text-[10px]">{student.lastActive}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

// Activity Tracking Mockup (Staff)
const ActivityTrackingMockup = () => (
  <div className="space-y-3">
    {/* Live Feed */}
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-white/70 text-xs font-medium">Live Activity</span>
      </div>
      {[
        { action: "submitted application", student: "Sarah K.", target: "Google", time: "2m" },
        { action: "updated resume", student: "Mike T.", target: "", time: "5m" },
        { action: "RSVP'd to event", student: "Emma L.", target: "Career Fair", time: "12m" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="flex items-start gap-2 py-2 border-b border-white/5 last:border-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <Activity className="w-3 h-3 text-blue-400 mt-0.5" />
          <div className="flex-1 text-xs">
            <span className="text-white">{item.student}</span>
            <span className="text-white/50"> {item.action}</span>
            {item.target && <span className="text-blue-300"> {item.target}</span>}
          </div>
          <span className="text-white/30 text-[10px]">{item.time}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

// Application Funnel Mockup (Staff)
const ApplicationFunnelMockup = () => (
  <div className="space-y-3">
    {/* Funnel Visual */}
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      {[
        { stage: "Applications", count: 2847, width: 100, color: "from-blue-500 to-blue-400" },
        { stage: "Screenings", count: 892, width: 75, color: "from-indigo-500 to-indigo-400" },
        { stage: "Interviews", count: 456, width: 50, color: "from-amber-500 to-amber-400" },
        { stage: "Offers", count: 189, width: 30, color: "from-emerald-500 to-emerald-400" },
      ].map((stage, i) => (
        <motion.div
          key={stage.stage}
          className="flex items-center gap-3 py-1.5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="w-20 text-right">
            <span className="text-white text-sm font-medium">{stage.count}</span>
          </div>
          <div className="flex-1">
            <motion.div
              className={`h-6 bg-gradient-to-r ${stage.color} rounded-r-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${stage.width}%` }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            />
          </div>
          <span className="text-white/50 text-xs w-20">{stage.stage}</span>
        </motion.div>
      ))}
    </div>

    {/* Conversion Rate */}
    <div className="flex items-center justify-between p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
      <span className="text-emerald-300 text-xs">Overall Conversion</span>
      <span className="text-emerald-400 font-bold text-sm">6.6%</span>
    </div>
  </div>
);

// Material Quality Mockup (Staff)
const MaterialQualityMockup = () => (
  <div className="space-y-3">
    {/* Quality Distribution */}
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/70 text-xs font-medium">Resume Quality Distribution</span>
        <span className="text-white/40 text-xs">926 total</span>
      </div>
      <div className="flex gap-0.5 h-4 rounded-full overflow-hidden">
        {[
          { pct: 35, color: "bg-emerald-500" },
          { pct: 40, color: "bg-blue-500" },
          { pct: 18, color: "bg-amber-500" },
          { pct: 7, color: "bg-red-500" },
        ].map((seg, i) => (
          <motion.div
            key={i}
            className={seg.color}
            initial={{ width: 0 }}
            whileInView={{ width: `${seg.pct}%` }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-[9px]">
        <span className="text-emerald-400">Excellent</span>
        <span className="text-blue-400">Good</span>
        <span className="text-amber-400">Fair</span>
        <span className="text-red-400">Poor</span>
      </div>
    </div>

    {/* Top Improvement Areas */}
    <div className="space-y-2">
      {[
        { area: "Quantified achievements", count: 234 },
        { area: "Action verbs usage", count: 156 },
      ].map((item, i) => (
        <motion.div
          key={item.area}
          className="flex items-center justify-between p-2 bg-white/[0.05] rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
        >
          <span className="text-white/60 text-xs">{item.area}</span>
          <span className="text-white text-xs font-medium">{item.count} need help</span>
        </motion.div>
      ))}
    </div>
  </div>
);

// Outcome Analytics Mockup (Staff)
const OutcomeAnalyticsMockup = () => (
  <div className="space-y-3">
    {/* Key Insight */}
    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-3 border border-blue-500/20">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-4 h-4 text-blue-400" />
        <span className="text-white/70 text-xs font-medium">Key Insight</span>
      </div>
      <p className="text-white text-sm">Students with 80+ resume scores are <span className="text-emerald-400 font-bold">3.2x</span> more likely to get interviews</p>
    </div>

    {/* Correlation Matrix */}
    <div className="bg-white/[0.08] rounded-xl p-3 border border-white/5">
      <div className="text-xs text-white/40 mb-2">Placement Predictors</div>
      {[
        { factor: "Resume Score", correlation: 0.82, impact: "High" },
        { factor: "Applications Sent", correlation: 0.71, impact: "High" },
        { factor: "Events Attended", correlation: 0.54, impact: "Medium" },
      ].map((item, i) => (
        <motion.div
          key={item.factor}
          className="flex items-center gap-2 py-1.5"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <span className="text-white/60 text-xs flex-1">{item.factor}</span>
          <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${item.correlation * 100}%` }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            />
          </div>
          <span className={`text-[10px] ${item.impact === "High" ? "text-emerald-400" : "text-amber-400"}`}>
            {item.impact}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

// Mapping of feature indices to mockup components
const studentMockups = [
  JobDiscoveryMockup,
  ResumeBuildingMockup,
  ApplicationTrackingMockup,
  CaseStudyPrepMockup,
  GlobalEventsMockup,
  ProgressInsightsMockup,
];

const staffMockups = [
  CohortEngagementMockup,
  ActivityTrackingMockup,
  ApplicationFunnelMockup,
  MaterialQualityMockup,
  OutcomeAnalyticsMockup,
];

export const FeatureMockup = ({ featureIndex, isStaff = false }: MockupProps) => {
  const mockups = isStaff ? staffMockups : studentMockups;
  const MockupComponent = mockups[featureIndex] || mockups[0];
  
  return <MockupComponent />;
};

export default FeatureMockup;
