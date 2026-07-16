// ============================================================
// Portfolio Data — single source of truth for all content
// ============================================================

export const personalInfo = {
  name: "Nithishkumar B",
  title: "Java Full Stack Developer",
  email: "nithishkumardev07@gmail.com",
  phone: "+91 9080159716",
  location: "Coimbatore, Tamil Nadu",
  github: "https://github.com/Nithish-107",
  linkedin: "https://www.linkedin.com/in/nithishkumar07/",
  resumeUrl: "/resume.pdf",
  summary:
    "I am a passionate Java Full Stack Developer with hands-on experience building responsive and scalable web applications using Java, Spring Boot, React.js, MySQL, HTML, CSS, and JavaScript. I enjoy solving real-world problems, developing clean and maintainable applications, and continuously learning modern technologies. I am eager to contribute to innovative software solutions while growing as a professional developer.",
  objective:
    "Seeking a challenging role where I can leverage my full-stack expertise to build impactful products, grow professionally, and contribute to a forward-thinking team.",
  strengths: [
    "Problem Solving",
    "Team Collaboration",
    "Quick Learner",
    "Clean Code Advocate",
    "Agile Mindset",
    "Attention to Detail",
  ],
};

export const skills = {
  Languages: [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
  ],
  Frontend: [
    { name: "React.js", level: 78 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
  ],
  Backend: [
    { name: "Spring Boot", level: 80 },
  ],
  Database: [
    { name: "MySQL", level: 78 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Visual Studio Code", level: 90 },
    { name: "IntelliJ IDEA", level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "CRM Portal",
    category: "Full Stack",
    description:
      "A full-featured CRM application with customer management, meeting scheduling, role-based authentication, analytics dashboards, and automated email notifications.",
    features: [
      "Customer & lead management",
      "Meeting scheduler with reminders",
      "JWT-based authentication",
      "Analytics dashboard",
      "Email notifications",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/Nithish-107/TechnextCrm",
    demo: null,
    image: null,
  },
  {
    id: 2,
    title: "Movie Booking Website",
    category: "Full Stack",
    description:
      "An online movie ticket booking platform with seat selection, payment integration, booking history, and admin panel for show management.",
    features: [
      "Interactive seat selection",
      "Real-time availability",
      "Booking history",
      "Admin panel",
      "Payment flow",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/Nithish-107/MovieBookingProject",
    demo: null,
    image: null,
  },
  {
    id: 3,
    title: "Omeg Global Logistics",
    category: "Full Stack",
    description:
      "Developed a modern logistics management web application to streamline logistics operations, shipment management, customer interactions, and business workflows. Built secure REST APIs using Spring Boot, designed a responsive React.js user interface, and integrated MySQL for efficient data management.",
    features: [
      "Shipment management",
      "Secure REST APIs",
      "Responsive React.js UI",
      "Customer interaction workflows",
      "MySQL data management",
    ],
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    github: "https://github.com/Nithish-107/omeg-global-logistics",
    demo: null,
    image: null,
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "TechNext Solutions and Technologies Services Private Limited",
    location: "Bangalore, Karnataka",
    duration: "2024 – Present",
    type: "Full-time",
    description:
      "Developed enterprise-level web applications using Java, Spring Boot, React.js, and MySQL.",
    highlights: [
      "Designed and developed RESTful APIs for business applications",
      "Built responsive user interfaces using React.js",
      "Worked on CRM modules, authentication, dashboards, and customer management features",
      "Integrated frontend and backend services",
      "Used Git and GitHub for version control and team collaboration",
      "Improved application performance, responsiveness, and code quality",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Sri Ramakrishna Institute of Technology",
    location: "Coimbatore, TN",
    duration: "2021 – 2025",
    grade: "7.30 CGPA",
    highlights: ["Full Stack Development", "Data Structures", "DBMS", "OS"],
  },
];

export const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "TAP Academy",
    date: "2024",
    icon: "🖥️",
    color: "#2563eb",
    link: "#",
  },
  {
    id: 2,
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    date: "2023",
    icon: "🌐",
    color: "#f89820",
    link: "#",
  },
  {
    id: 3,
    title: "Business English Certificate (BEC)",
    issuer: "Cambridge Assessment English",
    date: "2023",
    icon: "📜",
    color: "#6db33f",
    link: "#",
  },
  {
    id: 4,
    title: "Full Stack Development Internship",
    issuer: "Nxtlogic Software Solution",
    date: "2024",
    icon: "💼",
    color: "#7c3aed",
    link: "#",
  },
  {
    id: 5,
    title: "HackerRank Java (Basic)",
    issuer: "HackerRank",
    date: "2023",
    icon: "☕",
    color: "#00758f",
    link: "#",
  },
];
