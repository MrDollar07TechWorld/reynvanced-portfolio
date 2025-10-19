import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Server, Zap, Cpu, Box, Users, Layers } from "lucide-react";

const iconForSkill = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("react")) return <Code className="h-7 w-7 text-primary" />;
  if (n.includes("typescript") || n === "ts") return <Code className="h-7 w-7 text-blue-600" />;
  if (n.includes("javascript") || n === "js") return <Zap className="h-7 w-7 text-yellow-500" />;
  if (n.includes("node")) return <Server className="h-7 w-7 text-green-600" />;
  if (n.includes("mongo") || n.includes("mongodb")) return <Database className="h-7 w-7 text-green-700" />;
  if (n.includes("mysql") || n.includes("sql")) return <Database className="h-7 w-7 text-sky-600" />;
  if (n.includes("python")) return <Cpu className="h-7 w-7 text-amber-600" />;
  if (n.includes("tailwind")) return <Box className="h-7 w-7 text-cyan-500" />;
  // fallback
  return <Code className="h-7 w-7 text-muted-foreground" />;
};

const coreSkills = [
  { title: "Full‑stack Web Development", icon: <Code className="h-8 w-8 text-primary" />, blurb: "React, Node, APIs, and production delivery" },
  { title: "Project Management & Leadership", icon: <Users className="h-8 w-8 text-secondary" />, blurb: "Delivery, estimation, and team leadership" },
  { title: "Programming", icon: <Cpu className="h-8 w-8 text-amber-600" />, blurb: "Writing maintainable, testable code" },
  { title: "Prompt & Vibe Coding Specialist", icon: <Zap className="h-8 w-8 text-yellow-500" />, blurb: "AI-assisted development and creative prompts" },
  { title: "Problem Solving", icon: <Layers className="h-8 w-8 text-sky-500" />, blurb: "Architecture, debugging and optimisation" },
  { title: "Public Speaking", icon: <Users className="h-8 w-8 text-secondary" />, blurb: "Architecture, debugging and optimisation" },
];

const Skills = () => {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Flatten all skills into one array
  const allSkills = skills.flatMap((category) =>
    category.items.map((skill) => ({ name: skill.name }))
  );


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="max-w-5xl mx-auto glass rounded-2xl p-8 md:p-12 relative space-y-8"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />

            {/* Core Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coreSkills.map((c, idx) => (
                  <motion.div key={idx} variants={item} whileHover={{ y: -6 }} className="glass rounded-2xl p-6 flex gap-4 items-start">
                    <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/5">{c.icon}</div>
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <div className="text-sm text-muted-foreground">{c.blurb}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages & Tools - marquee ribbon */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Languages & Tools</h3>
              <div className="relative overflow-hidden">
                <div className="marquee">
                  <div className="marquee__track" aria-hidden="false">
                    {allSkills.map((skill, index) => (
                      <div key={index} className="marquee__item flex items-center gap-3 mr-8">
                        <div className="w-8 h-8 flex items-center justify-center">{iconForSkill(skill.name)}</div>
                        <div className="text-sm font-medium whitespace-nowrap">{skill.name}</div>
                      </div>
                    ))}
                    {/* duplicate for seamless loop */}
                    {allSkills.map((skill, index) => (
                      <div key={`dup-${index}`} className="marquee__item flex items-center gap-3 mr-8" aria-hidden="true">
                        <div className="w-8 h-8 flex items-center justify-center">{iconForSkill(skill.name)}</div>
                        <div className="text-sm font-medium whitespace-nowrap">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
