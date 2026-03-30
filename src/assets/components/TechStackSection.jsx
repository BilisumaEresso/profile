import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS","Next.js", "Framer Motion", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", ".NET", "C#", "C++", "Java"] },
  { category: "Tools", items: ["Git", "VS Code", "GitHub", "Figma", "Postman", "Docker","Chrome"] }
];

const TechStackSection = () => {
  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      {skills.map((skillGroup, idx) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12"
        >
          <div className="w-32 flex-shrink-0">
            <h3 className="text-white font-medium text-lg">{skillGroup.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skillGroup.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-xl text-sm font-medium hover:border-neutral-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackSection;
