// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: "Online Loan Application & Verification System",
    description: "B.Sc. IT academic project using React and Node.js. Users submit loan applications with document upload and basic KYC. Admins review, approve/reject, and update status. Focus on authentication, forms, and secure data storage.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    image: "/images/project1.jpg",
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.netlify.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "GYM Management System",
    description: "College project to manage gym memberships, attendance, trainer schedules, and class bookings. Includes simple payment tracking and a clean dashboard. Built as part of B.Sc. IT coursework.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    image: "/images/project2.jpg",
    github: "https://github.com/username/task-manager",
    live: "https://taskapp-demo.netlify.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Online Voting System",
    description: "Academic project implementing secure voter registration with OTP verification and role-based access. Students cast votes once; admins see a live tally and basic audit logs. Built during B.Sc. IT.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PostgreSQL"],
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
    { name: "HTML/CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "Bootstrap/Tailwind", level: 70, category: "Frontend" }
  ],
  backend: [
    { name: "Node.js", level: 65, category: "Backend" },
    { name: "Express", level: 60, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Backend" },
    { name: "SQL (PostgreSQL/MySQL)", level: 60, category: "Backend" },
    { name: "Java (Basics)", level: 55, category: "Backend" }
  ],
  tools: [
    { name: "Git & GitHub", level: 80, category: "Tools" },
    { name: "VS Code", level: 85, category: "Tools" },
    { name: "Postman", level: 40, category: "Tools" },
    { name: "Firebase", level: 35, category: "Tools" },
    { name: "Netlify/Vercel", level: 40, category: "Tools" }
  ]
};

// Social links and contact information
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "dineshborse9321@gmail.com",
  phone: "8591679694"
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
      position: "Fresher",
      company: "Full‑Stack Web Developer (Seeking Opportunities)",
      period: "2025 - Present",
      description: "Entry‑level developer with academic experience in full‑stack projects and a focus on clean, responsive web apps.",
      achievements: [
        "Built academic projects: Loan System, Gym Management, Voting System",
        "Strengthening skills in React, Node.js, and Java"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Sc. Information Technology",
      institution: "University of Technology",
      period: "2022 - 2025",
      description: "Coursework focused on web development, data structures, and software engineering fundamentals."
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