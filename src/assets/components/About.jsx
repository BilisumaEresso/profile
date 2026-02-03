import { useState } from "react";
import {
  User,
  Clock,
  Zap,
  Rocket,
  Lightbulb,
  Star,
  Mail,
  Github,
  Code2,
  Palette,
  Brain,
  BookOpen,
  Briefcase,
  Calendar,
  ChevronRight,
  Sparkles,
  Target,
  CheckCircle,
  FolderOpen,
  ExternalLink,
  Code,
  Tag,
  Eye,
} from "lucide-react";

// Simple particle background
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("projects");

  // Experience timeline data
  const experiences = [
    {
      year: "Present",
      title: "Full Stack Developer",
      company: "Freelance & Personal Projects",
      description:
        "Building modern web applications using React, Node.js, and modern databases.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      year: "2024",
      title: "Adding Backend Developer",
      company: "Various Projects",
      description:
        "Developed REST APIs and database architectures for multiple applications.",
      technologies: ["C#", "PostgreSQL", "Express", "JavaScript"],
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Learning & Practice",
      description:
        "Mastered frontend technologies and responsive web design principles.",
      technologies: ["React", "CSS", "Tailwind", "HTML"],
    },
    {
      year: "2022",
      title: "Programming Fundamentals",
      company: "Self-Taught Journey",
      description:
        "Started learning programming with C++ and Java, building strong algorithmic thinking.",
      technologies: ["C++", "Java", "Data Structures", "Algorithms"],
    },
  ];

  // Skills data
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "CSS/Tailwind", level: 85, color: "#38BDF8" },
        { name: "HTML", level: 80, color: "#E34F26" },
      ],
    },
    {
      category: "Backend",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Node.js", level: 85, color: "#3C873A" },
        { name: "MongoDB", level: 90, color: "#47A248" },
        { name: "Express", level: 85, color: "#000000" },
        { name: "PostgreSQL", level: 60, color: "#336791" },
      ],
    },
    {
      category: "Tools & Extras",
      icon: <Briefcase className="w-5 h-5" />,
      skills: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: ".NET", level: 80, color: "#512BD4" },
        { name: "C++", level: 80, color: "#00599C" },
        { name: "Java", level: 70, color: "#007396" },
      ],
    },
  ];

  // Projects data - Top 5 GitHub Projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A complete online shopping solution featuring user authentication, shopping cart, payment integration, and admin dashboard for managing products and orders.",
      date: "2025",
      languages: ["React", "Node.js", "MongoDB", "Express"],
      skills: [
        "Full-Stack Development",
        "REST API",
        "Payment Gateway",
        "User Authentication",
        "Admin Dashboard",
      ],
      image: "/images/ecommerce.png",
      githubUrl: "https://github.com/bilisumaeresso/ecommerce-backend",
      liveUrl: "",
    },
    {
      id: 2,
      title: "E-Learning Platform",
      description:
        "Interactive learning platform with course management, progress tracking, quiz system, and video lessons. Designed for both students and instructors.",
      date: "2025",
      languages: ["HTML", "CSS", "JavaScript"],
      skills: [
        "Responsive Design",
        "Interactive UI",
        "Course Management",
        "Progress Tracking",
        "Quiz System",
      ],
      image: "/images/elearn.jpg",
      githubUrl: "https://github.com/bilisumaeresso/e-learning",
      liveUrl: "",
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "Full-stack task and project management application with drag-and-drop functionality, team collaboration features, deadlines, and priority tracking.",
      date: "2024",
      languages: ["React", "Node.js", "MongoDb", "RESTful API"],
      skills: [
        "Task Management",
        "Drag & Drop",
        "Team Collaboration",
        "Real-time Updates",
        "Priority System",
      ],
      image: "/images/todo.jpg",
      githubUrl: "https://github.com/bilisumaeresso/react-blog-app",
      liveUrl: "",
    },
    {
      id: 4,
      title: "Construction Company Website",
      description:
        "Modern frontend for a construction company showcasing services, portfolio projects, team members, and contact information with smooth animations.",
      date: "2025",
      languages: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
      skills: [
        "Responsive Design",
        "UI/UX Design",
        "Animation Effects",
        "Contact Forms",
        "Portfolio Showcase",
      ],
      image: "/images/construction.jpg",
      githubUrl: "https://github.com/bilisumaeresso/RE-front",
      liveUrl: "",
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description:
        "Interactive portfolio featuring 3D animations, project showcases, responsive design, and contact integration. Built with modern React practices.",
      date: "2026",
      languages: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
      skills: [
        "Interactive Design",
        "3D Animations",
        "Performance Optimization",
        "SEO Friendly",
        "Responsive Layout",
      ],
      image: "/images/portfolio.png",
      githubUrl: "https://github.com/bilisumaeresso/profile",
      liveUrl: "",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-tl from-indigo-500/25 via-purple-500/20 to-transparent overflow-hidden text-white relative">
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="mt-12 mb-16 md:mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm a passionate full-stack developer who builds digital
                experiences that solve real problems. With a focus on clean code
                and modern technologies, I create applications that are both
                functional and beautiful.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">15+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Target className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">15+</div>
                    <div className="text-gray-400 text-sm">Technologies</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">3+</div>
                    <div className="text-gray-400 text-sm">Years Learning</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
                <div className="relative w-full h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <div className="w-full h-full bg-gray-900/90 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <pre className="text-sm font-mono text-gray-300 overflow-auto">
                      {`const developer = {
  name: "Bilisuma Eresso",
  role: "Full Stack Developer",
  location: "Addis Ababa, Ethiopia",
  skills: [
    "React", "Node.js", ".NET",
    "PostgreSQL", "MongoDB"
  ],
  passion: "Building solutions 
  that make a difference"
};`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <button
              className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-emerald-500 shadow-lg shadow-emerald-500/25"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <FolderOpen className="w-4 h-4" />
              Projects
            </button>
            <button
              className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "about"
                  ? "bg-blue-500 shadow-lg shadow-blue-500/25"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("about")}
            >
              <User className="w-4 h-4" />
              About
            </button>
            <button
              className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "journey"
                  ? "bg-purple-500 shadow-lg shadow-purple-500/25"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("journey")}
            >
              <Clock className="w-4 h-4" />
              Journey
            </button>
            <button
              className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-pink-500 shadow-lg shadow-pink-500/25"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              <Zap className="w-4 h-4" />
              Skills
            </button>
          </div>

          {/* About Tab */}
          {activeTab === "about" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Rocket className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">My Philosophy</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I believe in building software that not only works but also
                  delights users. Clean code, thoughtful design, and attention
                  to detail are at the core of everything I build.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Approach</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Modular & Scalable Architecture",
                    "Performance-Optimized Code",
                    "Clean & Maintainable Solutions",
                    "Testing & Quality Assurance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold">Beyond Code</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                    <Palette className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                    <div className="text-sm">UI/UX Design</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                    <Brain className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                    <div className="text-sm">Problem Solving</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                    <Rocket className="w-6 h-6 mx-auto mb-2 text-pink-400" />
                    <div className="text-sm">Innovation</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-green-400" />
                    <div className="text-sm">Continuous Learning</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Get in Touch</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I'm always open to discussing new projects, opportunities, or
                  just chatting about tech.
                </p>
                <div className="flex gap-3">
                  <a
                    href="mailto:bilisumaeresso@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href="https://github.com/bilisumaeresso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Journey Tab */}
          {activeTab === "journey" && (
            <div className="relative">
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative mb-8 md:mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2 md:pl-8" : "md:pl-1/2 md:pr-8"
                  }`}
                >
                  {/* Year */}
                  <div
                    className={`mb-3 ${
                      index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {exp.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 md:ml-0">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-5 hover:border-gray-600 transition-colors">
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <div className="text-blue-400 mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-900/50 rounded-full text-sm border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div id="projects" className="space-y-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-3">
                  <FolderOpen className="w-8 h-8 text-emerald-400" />
                  <h2 className="text-3xl font-bold">Top 5 GitHub Projects</h2>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Here are my top projects showcasing my skills in full-stack
                  development, UI/UX design, and problem-solving.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                  >
                    {/* Project Image */}
                    <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy" // Add lazy loading
                        decoding="async" // Async decoding
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
                            title="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4 text-sm">
                        {project.description}
                      </p>

                      {/* Languages */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Code2 className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-medium">Languages</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.languages.map((lang, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="w-4 h-4 text-indigo-400" />
                          <span className="text-sm font-medium">Skills</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-purple-500/10 text-indigo-400 rounded-full text-xs border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View More Button */}
                      <div className="mt-6 pt-4 border-t border-gray-700/50">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-2 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                        >
                          <Eye className="w-4 h-4" />
                          View Project Details
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Projects Button */}
              <div className="text-center pt-8">
                <a
                  href="https://github.com/bilisumaeresso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-emerald-500 hover:bg-gray-800 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>View All Projects on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
