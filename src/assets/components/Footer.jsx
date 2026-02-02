import { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Heart,
  Code,
  Globe,
} from "lucide-react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    navigator.clipboard.writeText("bilisumaere@gmail.com");
    setEmailCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCallClick = () => {
    window.open("tel:+251938730818");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/libertus_man");
  };

  return (
    <footer className="bg-black/95 border-t border-white/10 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand & Info */}
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-20 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Bilisuma Eresso
                  </h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm text-center md:text-left leading-relaxed">
              Building digital solutions with modern technologies and clean
              code.
            </p>

            <div className="flex flex-col items-center md:items-start gap-3 pt-2">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+251 938 730 818</span>
              </button>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div
                  className={`p-2 rounded-lg ${
                    emailCopied
                      ? "bg-green-500/20"
                      : "bg-white/5 group-hover:bg-white/10"
                  }`}
                >
                  <Mail
                    className={`w-4 h-4 ${emailCopied ? "text-green-400" : ""}`}
                  />
                </div>
                <span className="text-sm">bilisumaere@gmail.com</span>
              </button>
              <button
                onClick={handleTelegramClick}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-white/5 text-white/70 rounded-lg group-hover:bg-white/10">
                  <BsTelegram className="w-4 h-4" />
                </div>
                <span className="text-sm">@libertus_man</span>
              </button>
            </div>
          </div>

          {/* Quick Links - Simple */}
          <div>
            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-blue-400" />
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/#home" },
                { label: "About", path: "/about" },
                { label: "Projects", path: "/about#projects" },
                { label: "Tech Stack", path: "/#tech" },
                { label: "Contact", path: "/contact#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 py-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Clean */}
          <div>
            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/bilisumaeresso"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700">
                  <Github className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-sm">GitHub</span>
                  <p className="text-xs text-gray-500">@bilisumaeresso</p>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.linkedin.com/in/bilisuma-eresso/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <span className="text-sm">LinkedIn</span>
                  <p className="text-xs text-gray-500">
                    Connect professionally
                  </p>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-colors mt-4"
              >
                <Mail className="w-3 h-3" />
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/5 my-6" />

        {/* Copyright - Minimal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} Bilisuma Eresso. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Code className="w-4 h-4" />
              <span>Built with React & Tailwind</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Heart className="w-3 h-3 text-red-400 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
