import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import dev from "../../image/dev.png";

const HeroSection = () => {
  return (
    <section id="home" className="w-full border-b border-neutral-900/80 pb-16 pt-12 md:pb-20 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300"
          >
            Open to product-focused roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            I build fast, reliable web products people actually enjoy using.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg"
          >
            I am Bilisuma Eresso, a Fullstack developer in Addis Ababa. I like turning messy ideas into clean interfaces, stable APIs, and shipping flows that feel effortless to use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 text-sm text-neutral-500"
          >
            Usually online after 6 PM EAT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Start a project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center gap-5 text-neutral-500"
          >
            <a href="https://github.com/bilisumaeresso" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/bilisuma-eresso" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              <Linkedin size={22} />
            </a>
            <a href="mailto:bilisumaere@gmail.com" className="transition-colors hover:text-white">
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2 lg:col-span-4 lg:justify-end"
        >
          <div className="relative h-64 w-64 max-w-[320px] sm:h-72 sm:w-72 lg:h-auto lg:w-full lg:aspect-square">
            <div className="absolute inset-0 -rotate-3 rounded-3xl border border-neutral-700/60 bg-neutral-800/50" />
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 shadow-xl">
              <img
                src={dev}
                alt="Bilisuma Eresso portrait"
                className="h-full w-full object-cover grayscale-[0.3] transition duration-700 hover:grayscale-0"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
