import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import dev from "../image/dev.png";
import TechStackSection from "./TechStackSection";

const Home = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 max-w-5xl mx-auto overflow-visible">

      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-start justify-center pt-16 md:pt-24 lg:pt-32 pb-20 border-b border-neutral-900">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-medium text-emerald-400 font-mono uppercase tracking-wider">Available for work</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">

          <div className="lg:col-span-8 flex flex-col items-start text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-6 font-['Space_Grotesk']"
            >
              Building <br className="hidden sm:block" />
              <span className="text-neutral-500">digital</span> <br className="hidden sm:block" />
              experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              I'm <span className="text-white font-medium">Bilisuma Eresso</span>, a full-stack developer focused on creating clean, functional, and deeply satisfying web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/contact"
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition-all duration-300"
              >
                Let's talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-800 text-white rounded-xl font-medium hover:bg-neutral-800 transition-all duration-300"
              >
                Resume
                <Download size={18} className="text-neutral-400" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-6 mt-12"
            >
              <a href="https://github.com/bilisumaeresso" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/bilisuma-eresso" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:bilisumaere@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="lg:col-span-4 w-full flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-full lg:aspect-square max-w-[320px]">
              {/* Background accent block */}
              <div className="absolute inset-0 bg-neutral-800 rounded-3xl -rotate-6 scale-95 opacity-50 transition-transform duration-500 hover:-rotate-12"></div>
              {/* Image container */}
              <div className="absolute inset-0 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
                <img
                  src={dev}
                  alt="Bilisuma Eresso"
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 mix-blend-luminosity"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MANIFESTO / MINIMAL ABOUT */}
      <section className="w-full py-20 lg:py-32 border-b border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-xl text-neutral-500 font-medium font-mono uppercase tracking-widest mb-4">The Work</h2>
          </div>
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl text-neutral-300 font-light leading-snug font-['Space_Grotesk'] tracking-tight">
                Software should be <span className="text-white font-medium">fast</span>, <span className="text-white font-medium">reliable</span>, and <span className="text-white font-medium">beautiful</span>. I build web applications focusing on robust architecture and pixel-perfect interfaces.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Engineering</h3>
                  <p className="text-neutral-400 leading-relaxed">Clean code, scalable architectures, and modern tools. I focus on doing things the right way, from database to DOM.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Design</h3>
                  <p className="text-neutral-400 leading-relaxed">An interface is a conversation. I ensure every interaction is intuitive, accessible, and visually stunning.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="w-full py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-xl text-neutral-500 font-medium font-mono uppercase tracking-widest mb-4">Toolkit</h2>
          </div>
          <div className="md:col-span-8">
            <TechStackSection />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
