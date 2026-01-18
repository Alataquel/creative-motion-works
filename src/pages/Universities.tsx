import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Target, Zap, TrendingUp, Eye, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Universities = () => {
  const stats = [
    { value: "40%", label: "Increase in student engagement" },
    { value: "3x", label: "Faster time to insights" },
    { value: "85%", label: "Student satisfaction rate" },
  ];

  const valueProps = [
    {
      icon: Target,
      title: "One-Stop Solution for Students",
      description: "ApplyLab gives your students everything they need in one place—application tracking, interview prep, case study practice, and networking tools. No more scattered spreadsheets or missed opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Usage Feeds the Intelligence Layer",
      description: "Every student interaction creates data. Every application tracked, every interview prepped, every connection made—it all feeds into our intelligence layer, building a comprehensive picture of what's actually happening.",
    },
    {
      icon: BarChart3,
      title: "Actionable Data, Not Just Reports",
      description: "See what actually works. Which companies are hiring your students? What prep methods lead to offers? Where are students struggling? Move from reactive support to proactive, data-informed career partnership.",
    },
    {
      icon: Eye,
      title: "Complete Visibility",
      description: "Real-time dashboards show you exactly where every student stands in their job search. No more chasing students for updates or discovering problems too late.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Students Use the Platform",
      description: "Your students track applications, prepare for interviews, access case studies, and build their network—all within ApplyLab.",
      icon: Users,
    },
    {
      step: "02",
      title: "Data Flows to Intelligence Layer",
      description: "Every action creates structured data. We aggregate, anonymize, and analyze to identify patterns across your entire student body.",
      icon: Zap,
    },
    {
      step: "03",
      title: "You Get Strategic Insights",
      description: "Transform raw usage into actionable intelligence. See which companies are responsive, which prep methods work, and where to focus resources.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-medium">For Universities & Career Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Transform Career Support with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Data-Driven Insights
              </span>
            </h1>
            
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Give your students the tools they need while gaining unprecedented visibility into what actually drives career success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-semibold group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="text-4xl font-display font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              From Reactive to Proactive
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Stop guessing what works. Start knowing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <prop.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{prop.title}</h3>
                <p className="text-white/60 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              How the Intelligence Layer Works
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Student engagement becomes your strategic advantage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 p-8 rounded-2xl bg-white/[0.03] border border-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-display font-bold text-blue-500/30">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              See What Actually Works
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real insights from real student activity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Applications Tracked", value: "12,450", trend: "+23%" },
                { label: "Interviews Completed", value: "3,280", trend: "+18%" },
                { label: "Offers Received", value: "890", trend: "+31%" },
                { label: "Avg. Time to Offer", value: "47 days", trend: "-12%" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/[0.03] border border-white/10"
                >
                  <div className="text-white/50 text-sm mb-2">{metric.label}</div>
                  <div className="text-3xl font-display font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className={`text-sm ${metric.trend.startsWith('+') ? 'text-green-400' : 'text-blue-400'}`}>
                    {metric.trend} vs last year
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Intelligence Insight</h4>
                  <p className="text-white/70 text-sm">
                    Students who complete at least 3 mock interviews before their first real interview are 2.4x more likely to receive an offer. Consider promoting the interview prep module earlier in the semester.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
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
              Join forward-thinking universities using data to drive better career outcomes for their students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-semibold group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
