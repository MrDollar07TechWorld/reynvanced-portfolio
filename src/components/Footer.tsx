import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const { personal, social } = portfolioData;

  const socialIcons: Record<string, any> = {
    Github,
    Linkedin,
    Instagram,
    Mail,
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links (driven from data.js) */}
          <div className="flex gap-4">
            {social.map((link, index) => {
              const Icon = socialIcons[link.icon] || Github;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 text-primary" />
                </motion.a>
              );
            })}
          </div>

          {/* Tagline from data.js */}
          <div className="text-center text-lg font-semibold">
            {personal.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
