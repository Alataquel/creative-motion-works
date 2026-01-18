import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    Platform: ["Resume Grader", "Resume Builder", "Cover Letters", "Job Matching"],
    Company: ["About", "Careers", "Press", "Contact"],
    Resources: ["Blog", "Help Center", "Universities", "Students"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <footer className="py-16 px-6 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                ApplyLab
              </span>
            </motion.div>
            <p className="text-muted-foreground text-sm">
              Empowering career success through AI-powered intelligence.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2024 ApplyLab. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {["LinkedIn", "Twitter", "Instagram"].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;