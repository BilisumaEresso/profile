import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS","Next.js", "Framer Motion", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", ".NET", "C#", "C++", "Java"] },
  { category: "Tools", items: ["Git", "VS Code", "GitHub", "Figma", "Postman", "Docker","Chrome"] }
];

const TechStackSection = () => {
  return (
    <div className="flex flex-col gap-9 sm:gap-10">
      {skills.map((skillGroup, idx) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: idx * 0.05 }}
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
                className="cursor-default rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:border-neutral-500 hover:text-white"
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
