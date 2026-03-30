import { Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 py-8 mt-auto border-t border-neutral-900 border-dashed">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <span className="font-['Space_Grotesk'] font-bold text-xl text-white tracking-tighter">BE.</span>
          <span className="text-neutral-500 font-mono text-sm leading-none ml-2">© {currentYear}</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-neutral-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono">
          <span>Crafted with</span>
          <Heart size={12} className="text-neutral-500" />
          <span>in Ethiopia</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
