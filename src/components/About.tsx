import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Target } from "lucide-react";

const About = () => {
  const { personal } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Portrait Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30" />
                <img
                  src={personal.portraitImage}
                  alt={personal.name}
                  className="relative rounded-2xl w-full max-w-sm glass shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="glass rounded-2xl p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="relative">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {personal.about}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    With a keen eye for design and a commitment to writing clean, maintainable code, 
                    I transform complex requirements into elegant solutions. My approach combines technical 
                    excellence with creative problem-solving to deliver exceptional user experiences.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  className="glass rounded-xl p-4 text-center group hover:glow transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Clean Code</div>
                </motion.div>
                <motion.div
                  className="glass rounded-xl p-4 text-center group hover:glow-secondary transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <div className="text-sm text-muted-foreground">Fast Performance</div>
                </motion.div>
                <motion.div
                  className="glass rounded-xl p-4 text-center group hover:glow transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Target className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="text-sm text-muted-foreground">User Focused</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <motion.div
              className="glass rounded-xl p-6 text-center hover:glow transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            
            <motion.div
              className="glass rounded-xl p-6 text-center hover:glow-secondary transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-secondary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
            
            <motion.div
              className="glass rounded-xl p-6 text-center col-span-2 md:col-span-1 hover:glow transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
