import { useState, useEffect } from "react";
import logo from "../image/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
              scrolled
                ? "glass px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                : "px-2 py-2"
            }`}
            aria-label="Main navigation"
          >
            {/* Logo area */}
            <NavLink to="/" className="flex items-center gap-3 z-50 group">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden group-hover:border-neutral-600 transition-colors">
                <span className="font-['Space_Grotesk'] font-bold text-xl text-white tracking-tighter">
                  BE.
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-neutral-800/80 text-white shadow-sm"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button - Also Desktop 'Let's Connect' CTA area */}
            <div className="flex items-center gap-4 z-50">
              <NavLink
                to="/contact"
                className="hidden md:flex items-center px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                Let's connect
              </NavLink>

              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-2 w-full max-w-sm mx-auto">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block text-4xl font-semibold tracking-tight py-4 border-b border-neutral-800 transition-colors ${
                        isActive ? "text-white" : "text-neutral-500"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: links.length * 0.1 }}
                className="pt-8"
              >
                <NavLink
                  to="/contact"
                  className="block w-full text-center px-6 py-4 rounded-xl bg-white text-black text-lg font-semibold hover:bg-neutral-200 transition-colors"
                >
                  Let's connect
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
