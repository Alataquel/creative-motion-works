import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: ["Features", "For Universities", "For Students", "Security"],
    Company: ["About", "Careers", "Contact", "Press"],
    Resources: ["Blog", "Case Studies", "Documentation", "Support"],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-display font-bold text-gray-900">ApplyLab</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              The career visibility platform that helps universities understand and improve student outcomes.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gray-900 font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-[#2563EB] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ApplyLab. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#2563EB] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
