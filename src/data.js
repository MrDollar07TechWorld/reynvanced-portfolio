// Centralized portfolio data
export const portfolioData = {
  personal: {
    name: "Yallanuru Revanth Kumar",
    role: "Full Stack Developer",
    tagline: "Building the future, one line of code at a time",
    about: "Passionate full-stack developer with expertise in modern web technologies. I create beautiful, performant, and user-centric applications that solve real-world problems. Specialized in React, Node.js, and cloud technologies.",
    email: "revanthkumaryallanuru103@gmail.com",
    location: "India",
    portraitImage: "../../src/assets/portrait.jpg",
    resumeUrl: "#", // Update with your resume link
    // EmailJS Configuration (required for contact form)
    emailJsServiceId: "service_wh1e55s", // Replace with your EmailJS service ID
    emailJsTemplateId: "template_v7hlhyr", // Replace with your EmailJS template ID
    emailJsPublicKey: "wYWNraaxlIDzx3Yc7", // Replace with your EmailJS public key
  },

  social: [
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com/revanthkumaryallanuru",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com/in/revanthkumaryallanuru",
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com/revanthkumaryallanuru",
    },
    {
      name: "Email",
      icon: "Mail",
      url: "mailto:revanthkumaryallanuru103@gmail.com",
    },
  ],

  skills: [
    {
      category: "All",
      items: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "Python", icon: "🐍" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "Firebase", icon: "🔥" },
        { name: "Tailwind", icon: "🎨" },
        { name: "HTML5", icon: "📄" },
        { name: "CSS3", icon: "🎭" },
        { name: "Git", icon: "📦" },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered SaaS Platform",
      description: "A modern SaaS application with AI integration, real-time collaboration, and advanced analytics dashboard.",
      tech: ["React", "Node.js", "OpenAI", "PostgreSQL", "AWS"],
      image: "/projects/saas.jpg",
      link: "https://github.com/revanthkumar",
      github: "https://github.com/revanthkumar/ai-saas",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      image: "/projects/ecommerce.jpg",
      link: "https://github.com/revanthkumar",
      github: "https://github.com/revanthkumar/ecommerce",
      featured: true,
    },
    
  ],


};
