import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Flatten all skills into one array
  const allSkills = skills.flatMap(category => 
    category.items.map(skill => ({
      name: skill.name,
      icon: skill.icon
    }))
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
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
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="max-w-5xl mx-auto glass rounded-2xl p-8 md:p-12 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-wrap justify-center gap-4">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="glass rounded-xl p-4 flex flex-col items-center gap-3 min-w-[120px] hover:glow transition-all cursor-default group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
