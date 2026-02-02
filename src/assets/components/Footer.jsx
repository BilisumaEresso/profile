import { useState } from "react";
import {
  Phone,
  Mail,
  Github,
  MessageSquare,
  Send,
  Home,
  User,
  Layers,
  Folder,
  MessageCircle,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("bilisumaere@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCallClick = () => {
    window.open("tel:+251938730818");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900/95 to-black border-t border-white/10 pt-10 pb-6 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand Section */}
          <div className="text-center md:text-left space-y-6">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="relative group">
                <img
                  src={logo}
                  alt="Bilisuma Eresso Logo"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Bilisuma Eresso
              </h2>
              <h3 className="text-gray-300 text-sm sm:text-base font-medium">
                Full Stack Developer
              </h3>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCallClick}
                className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group w-full md:w-auto"
              >
                <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">
                  +251 938 730 818
                </span>
              </button>

              <div className="relative">
                <button
                  onClick={handleEmailClick}
                  className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group w-full md:w-auto"
                >
                  <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    {emailCopied ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">
                    bilisumaere@gmail.com
                  </span>
                </button>

                {emailCopied && (
                  <span className="absolute left-0 -top-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Check className="w-3 h-3" />
                    Copied to clipboard
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-2 justify-center md:justify-start">
              <Home className="w-5 h-5 text-indigo-400" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                {
                  label: "Home",
                  path: "/#home",
                  icon: <Home className="w-4 h-4" />,
                },
                {
                  label: "About Me",
                  path: "/about",
                  icon: <User className="w-4 h-4" />,
                },
                {
                  label: "Tech Stack",
                  path: "/#tech",
                  icon: <Layers className="w-4 h-4" />,
                },
                {
                  label: "Projects",
                  path: "/about/#project",
                  icon: <Folder className="w-4 h-4" />,
                },
                {
                  label: "Contact",
                  path: "/contact",
                  icon: <MessageCircle className="w-4 h-4" />,
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
                    onMouseEnter={() => setHoveredLink(item.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div
                      className={`p-1.5 rounded-lg transition-all duration-300 ${
                        hoveredLink === item.label
                          ? "bg-indigo-500/20 scale-110"
                          : "bg-white/5"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="flex-1 text-left group-hover:translate-x-2 transition-transform">
                      {item.label}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === item.label
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-2 justify-center md:justify-start">
              <Send className="w-5 h-5 text-purple-400" />
              Connect With Me
            </h3>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {[
                  {
                    name: "GitHub",
                    icon: <Github className="w-5 h-5" />,
                    url: "https://github.com/bilisumaeresso",
                    color: "from-gray-700 to-gray-900",
                  },
                  {
                    name: "Telegram",
                    icon: <Send className="w-5 h-5" />,
                    url: "https://t.me/libertus_man",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    name: "WhatsApp",
                    icon: <MessageSquare className="w-5 h-5" />,
                    url: "https://wa.me/251938730818",
                    color: "from-green-500 to-emerald-500",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${social.color} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
                    >
                      {social.icon}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-bottom-10 transition-all duration-300 whitespace-nowrap border border-white/10">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-gray-400 text-sm mb-4">
                  Let's build something amazing together
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start a Conversation
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter/Updates Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-5 h-5 text-pink-400" />
              Stay Updated
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Subscribe to get updates on new projects and technologies I'm
                exploring.
              </p>

              <form className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Subscribe
                </button>
              </form>

              <p className="text-gray-500 text-xs pt-2">
                No spam, just occasional updates about my work.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bilisuma Eresso. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Add gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
