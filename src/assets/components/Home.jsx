import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import dev from "../image/dev.png";
import TechStackSection from "./TechStackSection";

const facts = [
  "I believe simplicity takes more effort than complexity.",
  "I enjoy solving problems most people avoid.",
  "I value clarity over cleverness.",
  "Details matter — especially the invisible ones.",
  "I build with intention, not noise.",
];

function RotatingFacts({ items = facts, intervalMs = 10000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (!isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((s) => (s + 1) % items.length);
      }, intervalMs);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused, items.length, intervalMs, prefersReducedMotion]);

  const go = (next) => {
    setIndex((prev) =>
      next
        ? (prev + 1) % items.length
        : (prev - 1 + items.length) % items.length,
    );
    clearInterval(intervalRef.current);
  };

  const togglePause = () => setIsPaused((p) => !p);

  return (
    <div
      className="max-w-sm rounded-xl"
      role="group"
      tabIndex={0}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[64px] sm:min-h-[80px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="absolute inset-0 flex items-center text-lg sm:text-xl leading-snug text-gray-200 px-2 sm:px-0"
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
            }
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.36 }}
          >
            "{items[index]}"
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-xs text-gray-400 tracking-wide text-center sm:text-left">
        — personal note
      </p>

      {/* Controls */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-2">
        <div className="flex gap-2 order-2 sm:order-1">
          <button
            onClick={() => go(false)}
            className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            ‹
          </button>

          <button
            onClick={togglePause}
            className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isPaused ? "▶ Play" : "⏸ Pause"}
          </button>

          <button
            onClick={() => go(true)}
            className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            ›
          </button>
        </div>

        {/* Pagination */}
        <div className="flex gap-2 order-1 sm:order-2 mb-2 sm:mb-0">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-6 sm:w-8 rounded-full transition-colors ${
                i === index ? "bg-indigo-500" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to fact ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-tl from-indigo-500/25 via-purple-500/20 to-transparent overflow-hidden"
    >
      {/* HERO */}
      <section className="relative mt-10 md:mt-5 flex justify-center pt-12 sm:pt-16 md:pt-25 z-10 px-4">
        <div className="absolute -top-16 sm:-top-24 right-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent blur-2xl sm:blur-3xl" />

        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
          <motion.img
            src={dev}
            alt="Developer avatar"
            className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] rounded-3xl sm:rounded-4xl object-cover shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm Bilisuma Eresso
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-indigo-200 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Full Stack Web Developer
            </motion.p>
            <RotatingFacts />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative mt-16 sm:mt-20 md:mt-32 py-12 sm:py-16 md:py-24 overflow-hidden z-10 px-4">
        <div className="absolute -left-8 sm:-left-16 md:-left-20 top-1/4 h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full blur-2xl sm:blur-3xl" />

        <motion.div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10 text-white">
            About My Work
          </h2>

          <div className="space-y-4 sm:space-y-6 text-gray-200">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I design and build modern web applications from idea to
              deployment.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I enjoy working across the stack, focusing on clean interfaces and
              reliable logic.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I care about maintainable code, performance, and thoughtful user
              experience.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Currently studying Information Systems and building real-world
              projects.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CURRENTLY LOOKING */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden z-10 px-4">
        <div className="absolute -left-12 sm:-left-24 md:-left-48 top-1/2 h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-transparent blur-2xl sm:blur-3xl" />

        <motion.div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-wider text-indigo-300 mb-4 sm:mb-6">
            Currently Looking For
          </p>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              I'm currently looking for opportunities where I can grow through
              real-world experience.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              I'm open to internships, junior roles, and collaborative projects.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              I'm especially interested in teams that value learning, code
              quality, and mentorship.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              If you're building something meaningful, I'd love to contribute.
            </p>
          </div>

          <motion.div
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:your.bilisumaere@gmail.com"
              className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-block px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="relative z-10 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TechStackSection />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
