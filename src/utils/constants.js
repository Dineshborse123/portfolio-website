// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/images/project1.jpg",
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.netlify.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Firebase", "Material-UI", "Context API"],
    image: "/images/project2.jpg",
    github: "https://github.com/username/task-manager",
    live: "https://taskapp-demo.netlify.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps, location-based services, and historical data visualization.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
    image: "/images/project3.jpg",
    github: "https://github.com/username/weather-dashboard",
    live: "https://weather-dash-demo.netlify.app",
    featured: false,
    category: "Frontend"
  }
];

// Skills data
export const SKILLS = {
  frontend: [
    { name: "React", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Redux", level: 75, category: "Frontend" }
  ],
  backend: [
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Backend" },
    { name: "PostgreSQL", level: 65, category: "Backend" },
    { name: "REST APIs", level: 85, category: "Backend" },
    { name: "GraphQL", level: 60, category: "Backend" }
  ],
  tools: [
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 70, category: "Tools" },
    { name: "AWS", level: 65, category: "Tools" },
    { name: "Jest", level: 75, category: "Tools" },
    { name: "Webpack", level: 70, category: "Tools" },
    { name: "Figma", level: 80, category: "Tools" }
  ]
};

// Social links and contact information
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567"
};

// Navigation items
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

// Resume data
export const RESUME_DATA = {
  experience: [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Led frontend development for multiple client projects, implemented responsive designs, and mentored junior developers.",
      achievements: [
        "Improved application performance by 40%",
        "Implemented CI/CD pipeline",
        "Led team of 4 developers"
      ]
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Startup XYZ",
      period: "2020 - 2022",
      description: "Developed and maintained React applications, collaborated with design team, and implemented new features.",
      achievements: [
        "Built 10+ reusable components",
        "Reduced bundle size by 30%",
        "Implemented testing suite"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      description: "Graduated with honors. Focus on web technologies and software engineering."
    }
  ]
};

// Animation delays
export const ANIMATION_DELAYS = {
  short: 100,
  medium: 300,
  long: 500,
  veryLong: 800
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
};