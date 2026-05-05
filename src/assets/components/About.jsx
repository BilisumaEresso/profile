import { motion } from "framer-motion";
import { ArrowUpRight, Github, Link } from "lucide-react";
import SectionHeading from "./sections/SectionHeading";
import SectionReveal from "./sections/SectionReveal";
import SectionShell from "./sections/SectionShell";

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
     title: "EduLingua",
     description:
       "An educational platform for East African languages using LLM-generated lessons and adaptive exercises.",
     tech: [
       "React",
       "Node.js",
       "MongoDB",
       "Express",
       "OpenAI API",
       "Tailwind CSS",
     ],
     githubUrl: "https://github.com/bilisumaeresso/EduLingua-FrontEnd",
   },
   {
     title: "AI-Powered E-Commerce",
     description:
       "A MERN commerce app with JWT auth, Stripe checkout, and an admin dashboard for inventory and reporting.",
     tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
     githubUrl: "https://github.com/bilisumaeresso/ecommerce-frontend",
   },
   {
     title: "DevPulse Tech Blog",
     description:
       "A developer blog platform with markdown support, SEO basics, and a clean dark-mode reading experience.",
     tech: ["React", "Node.js", "MongoDB", "Express", "Vercel"],
     githubUrl: "https://github.com/bilisumaeresso/react-blog-app",
     liveUrl: "https://bilisa-blog.vercel.app",
   },
   {
     title: "RE Construction",
     description:
       "A conversion-focused landing page for a construction firm with interactive visuals and polished transitions.",
     tech: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
     githubUrl: "https://github.com/bilisumaeresso/RE-front",
   },
  ];

  return (
    <>
      <SectionShell id="about">
        <SectionHeading
          eyebrow="Background"
          title="About & work"
          description="I build products end to end, from shaping requirements to polishing final interactions."
        />
        <SectionReveal className="prose prose-invert prose-lg md:col-span-8">
          <p className="leading-relaxed text-neutral-300">
            I am a full-stack developer based in Addis Ababa, Ethiopia. Most of my work sits at the intersection of product and engineering: shipping features that are clear for users and maintainable for teams.
          </p>
          <p className="leading-relaxed text-neutral-400">
            I care about strong foundations: clean React architecture, resilient APIs, sensible database design, and interfaces that communicate state clearly.
          </p>
          <p className="leading-relaxed text-neutral-400">
            Outside coding, I study interaction design patterns and break down products I admire to understand why they feel intuitive.
          </p>
        </SectionReveal>
      </SectionShell>

      <SectionShell id="experience">
        <SectionHeading
          eyebrow="Timeline"
          title="Experience"
          description="A quick look at the projects and roles that shaped my current approach."
        />
        <div className="space-y-10 md:col-span-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-7"
            >
              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight text-white">{exp.title}</h3>
                <span className="text-xs uppercase tracking-[0.14em] text-neutral-500">{exp.year}</span>
              </div>
              <p className="text-sm font-medium text-neutral-300">{exp.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{exp.description}</p>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="projects" className="border-b-0 pb-4">
        <SectionHeading
          eyebrow="Selected"
          title="Projects"
          description="Focused products I built across education, commerce, publishing, and business websites."
        />
        <div className="flex flex-col gap-6 md:col-span-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors duration-200 hover:border-neutral-600"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
                <div className="flex gap-1 text-neutral-400">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-md p-2 transition-colors hover:text-white">
                      <Link size={18} />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-md p-2 transition-colors hover:text-white">
                      <Github size={18} />
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}

          <a
            href="https://github.com/bilisumaeresso"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            View all on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </SectionShell>
    </>
  );
};

export default AboutPage;
