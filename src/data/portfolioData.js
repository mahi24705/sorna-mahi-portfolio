export const personalInfo = {
  name: "Sorna Mahi S A",
  shortName: "Sorna Mahi",
  headline: "Full Stack Developer | AI Engineering Enthusiast",
  roles: ["Full Stack Developer", "Java Developer", "AI Enthusiast"],
  quote: "I'm an Integrated M.Tech Computer Science student passionate about building scalable web applications and intelligent AI-powered solutions. I enjoy solving real-world problems through programming, backend development and emerging AI technologies.",
  email: "sornamahisaravanan@gmail.com",
  phone: "+91 9789370283",
  location: "Tamil Nadu, India",
  graduationYear: "2027",
  cgpa: "8.0 / 10",
  degree: "M.Tech (5-Year Integrated) in Computer Science and Engineering",
  institution: "Erode Sengunthar Engineering College, Erode",
  github: "https://github.com/mahi24705",
  linkedin: "https://linkedin.com/in/sornamahi24",
  resumePath: "/assets/resume.pdf",
};

export const aboutHighlights = [
  {
    label: "Degree",
    value: "Integrated M.Tech",
    subtext: "CSE (5-Year Programme)"
  },
  {
    label: "Academic Merit",
    value: "8.0 / 10 CGPA",
    subtext: "Erode Sengunthar Engg. College"
  },
  {
    label: "Graduation",
    value: "Batch 2027",
    subtext: "Ready for Tech Opportunities"
  },
  {
    label: "Industry Exposure",
    value: "3 Internships",
    subtext: "NITTTR, NPCIL & AK Info Park"
  }
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code2",
    color: "from-purple-500 to-indigo-500",
    skills: ["Java", "Python", "JavaScript"]
  },
  {
    id: "aiml",
    title: "AI and Machine Learning",
    icon: "BrainCircuit",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "AI/ML Fundamentals",
      "Machine Learning Concepts",
      "Data Preprocessing",
      "Natural Language Processing",
      "Retrieval-Augmented Generation (RAG)"
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    color: "from-violet-500 to-purple-600",
    skills: ["Spring Boot", "REST APIs"]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    color: "from-cyan-500 to-blue-500",
    skills: ["HTML", "CSS", "React.js"]
  },
  {
    id: "database",
    title: "Database Management",
    icon: "Database",
    color: "from-indigo-500 to-blue-600",
    skills: ["MySQL", "SQL"]
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    icon: "CheckCircle2",
    color: "from-emerald-500 to-teal-500",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Selenium",
      "Playwright (Currently Learning)"
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: "Wrench",
    color: "from-amber-500 to-orange-500",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Excel",
      "Power BI",
      "IntelliJ IDEA",
      "VS Code",
      "SQL Server Management Studio (SSMS)",
      "MySQL Workbench"
    ]
  }
];

export const experiences = [
  {
    id: "nitttr",
    role: "Full Stack Development Intern",
    organization: "NITTTR (National Institute of Technical Teachers Training and Research)",
    location: "Chennai, Tamil Nadu",
    period: "February 2026 – March 2026",
    badge: "Recent Internship",
    description: "Built and integrated institutional web solutions with modern full-stack architectures.",
    points: [
      "Gained hands-on experience in React.js, Spring Boot, Java and MySQL.",
      "Developed the NITTTR Portal with complete CRUD functionality for institutional management.",
      "Integrated frontend components smoothly with RESTful backend APIs and managed database queries."
    ],
    techStack: ["React.js", "Spring Boot", "Java", "MySQL", "REST APIs"]
  },
  {
    id: "npcil",
    role: "In-Plant Training Student",
    organization: "NPCIL (Nuclear Power Corporation of India Limited)",
    location: "Kudankulam, Tamil Nadu",
    period: "December 2024",
    badge: "Industrial In-Plant Training",
    description: "Immersive industrial exposure to mission-critical infrastructure, systems, and enterprise security.",
    points: [
      "Learned networking protocols and enterprise firewall configuration in high-security environments.",
      "Studied DBMS concepts utilized in complex monitoring and control infrastructures.",
      "Gained firsthand exposure to nuclear reactors, turbines, industrial power generation, and critical safety processes."
    ],
    techStack: ["Networking", "Firewalls", "DBMS", "Enterprise Infrastructure"]
  },
  {
    id: "ak-info-park",
    role: "Full Stack Development Intern",
    organization: "AK Info Park",
    location: "Nagercoil, Tamil Nadu",
    period: "October 2024 – November 2024",
    badge: "Internship",
    description: "Practical web development training focusing on core software engineering and relational databases.",
    points: [
      "Gained practical exposure to web development and relational database concepts.",
      "Improved technical, analytical, and problem-solving skills through hands-on project activities."
    ],
    techStack: ["Web Development", "Database Systems", "Software Engineering"]
  }
];

export const projects = [
  {
    id: "ai-support-system",
    title: "AI-Powered Real-Time Customer Support & Ticket Prediction System",
    subtitle: "Enterprise Intelligent Support Platform",
    status: "In Development",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    description: "Developing an AI-powered customer support system that focuses on ticket classification, priority prediction, sentiment analysis and intelligent response suggestions using modern NLP and RAG techniques.",
    highlights: [
      "Automated ticket classification & priority prediction",
      "Real-time WebSocket interaction and sentiment analysis",
      "Intelligent response generation powered by NLP and RAG architectures"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "WebSocket",
      "AI/ML",
      "NLP",
      "RAG"
    ],
    githubUrl: "https://github.com/mahi24705",
    accentGradient: "from-purple-600 via-indigo-600 to-blue-600"
  },
  {
    id: "nitttr-portal",
    title: "NITTTR Portal",
    subtitle: "Institutional Data Management Platform",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    description: "Developed a comprehensive web portal with CRUD functionality for managing institutional data. Seamlessly integrated a responsive React frontend with a robust Spring Boot backend and MySQL relational database.",
    highlights: [
      "Comprehensive CRUD operations with robust data validation",
      "RESTful API integration connecting React.js with Spring Boot",
      "Clean, modern, responsive UI design with optimized SQL querying"
    ],
    technologies: [
      "React.js",
      "Spring Boot",
      "Java",
      "MySQL",
      "REST APIs"
    ],
    githubUrl: "https://github.com/mahi24705",
    accentGradient: "from-blue-600 via-cyan-600 to-indigo-600"
  },
  {
    id: "smart-cradle-iot",
    title: "Smart Cradle with Baby Monitoring System using IoT",
    subtitle: "Automated Healthcare & Infant Monitoring Solution",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    description: "Developed an IoT-based smart cradle concept to monitor temperature, movement, and crying-related conditions. Performed functional testing of sensor inputs, alerts, and reliable data transmission.",
    highlights: [
      "Automated sensor monitoring for temperature, motion, and cry detection",
      "Instant notification alerts and responsive microcontroller communication",
      "Rigorous functional testing of sensor accuracy and telemetry delivery"
    ],
    technologies: [
      "IoT",
      "Sensors",
      "Microcontroller",
      "Python",
      "Testing"
    ],
    githubUrl: "https://github.com/mahi24705",
    accentGradient: "from-purple-600 via-cyan-600 to-emerald-600"
  }
];

export const achievements = [
  {
    id: "jdbc-infosys",
    title: "Java Database Connectivity (JDBC)",
    organization: "Infosys Springboard",
    category: "Professional Certification",
    icon: "Award",
    badge: "Certified",
    description: "Successfully mastered JDBC architecture, connection management, PreparedStatement execution, transaction management, and database integration in enterprise Java applications."
  },
  {
    id: "nctiacs-2025",
    title: "1st Prize – 4th NCTIACS-2025 Paper Presentation",
    organization: "National Conference on Technology & Innovation (NCTIACS-2025)",
    category: "Research Award",
    icon: "Trophy",
    badge: "1st Prize",
    description: "Awarded First Prize for presenting the research paper titled 'AI & IoT in Infant Care: Revolutionizing Baby Monitoring with Advanced Technology'."
  },
  {
    id: "seminar-5g",
    title: "1st Prize – International-Level Seminar",
    organization: "International Paper Presentation Forum",
    category: "Technical Paper Presentation",
    icon: "Medal",
    badge: "1st Prize",
    description: "Secured First Prize in the international-level seminar paper presentation for 'AI Integration in 5G Technology', highlighting latency reduction and intelligent network routing."
  },
  {
    id: "anna-univ-chess",
    title: "3rd Place – Anna University Zonal Chess Tournament",
    organization: "Anna University Sports Board",
    category: "Strategic Sports Achievement",
    icon: "Crown",
    badge: "3rd Place",
    description: "Achieved 3rd place in the Anna University Zonal Level Chess Championship, demonstrating tactical foresight, composure under pressure, and strategic decision-making."
  }
];

export const education = [
  {
    id: "mtech",
    degree: "M.Tech (5-Year Integrated) in Computer Science and Engineering",
    institution: "Erode Sengunthar Engineering College",
    location: "Erode, Tamil Nadu",
    period: "2022 – 2027",
    score: "CGPA: 8.0 / 10",
    status: "Currently Pursuing (Graduating in 2027)",
    current: true,
    highlights: [
      "Focused on Advanced Data Structures, Object-Oriented Software Design, Operating Systems, and DBMS.",
      "Specializing in Java Backend Ecosystem, React Frontend, and Applied AI/ML.",
      "Active participant in technical symposiums, research paper presentations, and coding initiatives."
    ]
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC - Class 12)",
    institution: "DVD Higher Secondary School",
    location: "Nagercoil, Tamil Nadu",
    period: "Completed",
    score: "Higher Secondary Education",
    current: false,
    highlights: [
      "Strong foundation in Mathematics, Physics, Chemistry, and Computer Science."
    ]
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (SSLC - Class 10)",
    institution: "DVD Higher Secondary School",
    location: "Nagercoil, Tamil Nadu",
    period: "Completed",
    score: "Secondary School Education",
    current: false,
    highlights: [
      "Rigorous secondary education and participation in inter-school academic and sports competitions."
    ]
  }
];
