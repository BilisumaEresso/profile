import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import dev from "../../image/dev.png";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "> init() — let's build something.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full pb-16 pt-12 md:pb-20 md:pt-20"
      style={{ borderBottom: "1px solid", borderImage: "linear-gradient(to right, transparent, rgb(38, 38, 38), transparent) 1" }}
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 rounded-lg border border-neutral-700/40 bg-neutral-900/40 px-3 py-2 font-mono text-xs text-emerald-400"
          >
            {typedText}
            <span className="animate-pulse">_</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Space_Grotesk'] text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            <span className="text-gradient-accent">Bilisuma Eresso</span>
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-['Space_Grotesk'] mt-3 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            <span className="text-gradient-accent">Full-stack engineer</span>{" "}
            building products — web, mobile, and whatever it takes to ship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg"
          >
            I'm building across React, React Native, and Node.js. Currently the
            sole technical founder at OmishGO, an agriculture e-commerce
            platform. I turn complex ideas into fast, scalable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-5 flex flex-wrap items-center gap-2 text-xs text-neutral-500"
          >
            <span>4+ Projects shipped</span>
            <span className="text-neutral-700">·</span>
            <span>3 Clients served</span>
            <span className="text-neutral-700">·</span>
            <span>1 Startup founded</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Start a project
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-neutral-500 hover:bg-neutral-800"
            >
              Resume
              <Download size={16} className="text-neutral-400" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex items-center gap-5 text-neutral-500"
          >
            <a
              href="https://github.com/bilisumaeresso"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/bilisuma-eresso"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:bilisumaere@gmail.com"
              className="transition-colors hover:text-white"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2 lg:col-span-4 lg:justify-end"
        >
          <div className="relative flex flex-col items-center gap-4">
            <div className="relative h-72 w-72 max-w-[320px] sm:h-80 sm:w-80 lg:h-auto lg:w-full lg:aspect-square">
              <div className="absolute inset-0 -rotate-3 rounded-3xl border border-neutral-700/60 bg-neutral-800/50" />
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 shadow-xl">
                <img
                  src={dev}
                  alt="Bilisuma Eresso portrait"
                  className="h-full w-full object-cover grayscale-[0.3] transition duration-700 hover:grayscale-0"
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  📍 Addis Ababa, ET
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-full border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-xs font-medium text-neutral-300 backdrop-blur-sm"
            >
              🌐 Open to remote · Based in Africa
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
