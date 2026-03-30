import { motion } from "framer-motion";
import { p } from "framer-motion/client";
import { ArrowUpRight, Github, Link } from "lucide-react";

const AboutPage = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Full Stack Developer",
      company: "Freelance & Personal Projects",
      description:
        "Building modern web applications using React, Node.js, and modern databases. Focusing on UX and scalable architecture.",
    },
    {
      year: "2024",
      title: "Backend Developer",
      company: "Various Projects",
      description:
        "Developed REST APIs and database architectures for multiple applications using C#, PostgreSQL, and Express.",
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Learning & Practice",
      description:
        "Mastered frontend technologies and responsive web design principles. Built multiple UI/UX focused projects.",
    },
    {
      year: "2022",
      title: "Programming Fundamentals",
      company: "Self-Taught Journey",
      description:
        "Started learning programming with C++ and Java, building strong algorithmic thinking and data structure knowledge.",
    },
  ];

  const projects = [
    {
      title: "EduLingua - Language Learning platform",
      description:
        "A real-world working website used for teaching East African Languages using different native languages, and uses AI to generate lessons and exercises.",
      tech: ["React", "Node.js", "MongoDB", "Express", "AI", "Tailwind CSS"],
      githubUrl: "https://github.com/bilisumaeresso/EduLingua-FrontEnd",
    },
    {
      title: "E-Commerce Platform (AI powered)",
      description:
        "A complete online shopping solution featuring user authentication, shopping cart, payment integration, and admin dashboard. THis uses AI for personal recommendations and global trends",
      tech: ["React", "Node.js", "MongoDB", "Express", "AI", "Tailwind CSS"],
      githubUrl: "https://github.com/bilisumaeresso/ecommerce-frontend",
    },
    {
      title: "Tech Blog App",
      description:
        "A blogging platform for tech enthusiasts to share their knowledge and experiences.",
      tech: ["React", "Node.js", "MongoDB", "Express", "AI", "Tailwind CSS"],
      githubUrl: "https://github.com/bilisumaeresso/react-blog-app",
      liveUrl: "https://bilisa-blog.vercel.app",
    },
    {
      title: "Construction Company Website",
      description:
        "Modern frontend for a construction company showcasing services, portfolio projects, and contact information with smooth animations.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/bilisumaeresso/RE-front",
    },
  ];

  return (
    <div className="flex-grow flex flex-col items-center justify-start w-full px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* HEADER */}
      <section className="w-full pt-16 md:pt-24 pb-16 border-b border-neutral-900">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white font-['Space_Grotesk']"
        >
          About & <span className="text-neutral-500">Work.</span>
        </motion.h1>
      </section>

      {/* PHILOSOPHY / INTRO */}
      <section className="w-full py-16 lg:py-24 border-b border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-xl text-neutral-500 font-medium font-mono uppercase tracking-widest sticky top-32">
              Background
            </h2>
          </div>
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="prose prose-invert prose-lg text-neutral-400 font-light"
            >
              <p className="mb-6 leading-relaxed">
                I'm a full-stack developer based in Addis Ababa, Ethiopia. I
                build digital experiences that solve real problems. With a focus
                on clean code and modern technologies, I create applications
                that are both highly functional and visually stunning.
              </p>
              <p className="mb-6 leading-relaxed">
                My philosophy is straightforward:{" "}
                <strong className="text-white font-medium">
                  simplicity takes more effort than complexity.
                </strong>{" "}
                I value modular, scalable architecture, performance-optimized
                code, and thoughtful UX design. Whether I'm designing a database
                schema or animating a UI element, my goal is to deliver
                excellence.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, I'm usually exploring UI/UX design trends,
                diving into problem-solving algorithms, or continuously learning
                new technologies to push my limits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="w-full py-16 lg:py-24 border-b border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-xl text-neutral-500 font-medium font-mono uppercase tracking-widest sticky top-32">
              Experience
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-2 sm:gap-0">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-mono text-neutral-500">
                      {exp.year}
                    </span>
                  </div>
                  <div className="text-neutral-300 font-medium mb-4">
                    {exp.company}
                  </div>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-xl text-neutral-500 font-medium font-mono uppercase tracking-widest sticky top-32">
              Selected Projects
            </h2>
            <div className="mt-8 hidden md:block">
              <a
                href="https://github.com/bilisumaeresso"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium"
              >
                View all on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-col gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block"
                >
                  <div className="flex flex-col p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-4">
                      <div className="flex gap-2 text-neutral-400">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors p-2 -mr-2"
                          >
                            <Link size={20} />
                          </a>
                        ):""}
                      </div>
                      <div className="flex gap-2 text-neutral-400">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors p-2 -mr-2"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>

                      </div>
                    </div>
                    <p className="text-neutral-400 font-light leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-neutral-950 border border-neutral-800 text-neutral-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="md:hidden mt-4">
                <a
                  href="https://github.com/bilisumaeresso"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium"
                >
                  View all on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
