import { useState } from "react";
import logo from "../image/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex py-5 items-center justify-around relative"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <NavLink to="/" className="flex opacity-100 items-center z-20">
        <img width={100} className="self-center" src={logo} alt="Billy logo" />
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden opacity-100 md:flex space-x-8 lg:space-x-16">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-gray-300 hover:text-gray-200 transition-colors duration-200 ${
                isActive ? "font-semibold text-white" : ""
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-20 text-gray-300 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-10
          flex flex-col items-center justify-center
          transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="flex flex-col items-center space-y-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl text-gray-300 hover:text-white transition-colors duration-200 ${
                  isActive ? "font-semibold bg-gray-700 rounded-2xl px-10 py-5 opacity-100 text-white" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
