import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      // Delay ensures DOM is ready before applying top offset.
      setTimeout(() => {
        const navOffset = 110;
        const elementY = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementY - navOffset),
          behavior: "smooth",
        });
      }, 50);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
