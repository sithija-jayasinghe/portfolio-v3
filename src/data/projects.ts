export interface ProjectDetails {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  live: string | null;
  github: string | null;
  featured?: boolean;
  problemStatement: string;
  keyFeatures: string[];
  technicalHighlights: string[];
  mockups: string[];
}

export const projects: ProjectDetails[] = [
  {
    slug: "construction-management-system",
    title: "Construction Management System",
    description: "Architecting a full-stack SaaS solution using Spring Boot and Angular with RBAC and budget tracking. Leading a team of 7 and executing robust REST APIs and MySQL schemas.",
    tech: ["Spring Boot", "Angular", "MySQL", "REST API", "SaaS"],
    live: null,
    github: null,
    featured: true,
    problemStatement: "Construction projects often suffer from fragmented communication, inefficient budget tracking, and a lack of centralized role-based access control, leading to delays and cost overruns.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) accommodating various organizational tiers",
      "Real-time budget tracking and cost estimation",
      "Centralized document and blueprint management",
      "Task assignment and milestone tracking"
    ],
    technicalHighlights: [
      "Designed robust RESTful APIs using Spring Boot for reliable backend operations",
      "Implemented complex authorization flows with Spring Security",
      "Built a highly responsive SPA using Angular and RxJS",
      "Optimized MySQL schemas for quick data retrieval across large datasets"
    ],
    mockups: [
      "/mockups/cms-1.jpg",
      "/mockups/cms-2.jpg"
    ]
  },
  {
    slug: "error-solution-ai-buddy",
    title: "Error Solution AI Buddy",
    description: "An AI-powered CLI tool & VS Code extension that explains runtime errors directly in terminal. Captures errors across languages and uses a locally running Ollama LLM to generate fixes.",
    tech: ["Node.js", "Ollama LLM", "Regex", "VS Code Ext"],
    live: null,
    github: "#", 
    problemStatement: "Developers waste significant time context-switching between their IDE and web browsers to search for solutions to runtime errors, breaking their state of flow.",
    keyFeatures: [
      "Automatic capture of terminal errors",
      "Local LLM integration using Ollama for privacy-focused code reasoning",
      "VS Code extension for seamless IDE integration",
      "Support for multiple programming languages"
    ],
    technicalHighlights: [
      "Engineered flexible Regex patterns to parse diverse error stack traces",
      "Integrated with VS Code Extension API to manage terminal streams",
      "Optimized LLM prompts for fast, localized offline execution without relying on cloud APIs"
    ],
    mockups: [
      "/mockups/ai-buddy-1.jpg"
    ]
  },
  {
    slug: "medicare-sync",
    title: "MediCare Sync",
    description: "A multi-clinic SaaS platform streamlining registration, scheduling, prescriptions, and pharmacy. Features digital profiles and centralized medical records for quick access.",
    tech: ["Spring Boot", "React.js", "MySQL"],
    live: null,
    github: "#",
    problemStatement: "Independent clinics face challenges managing patient records across different departments, losing efficiency between reception, doctors, and pharmacy.",
    keyFeatures: [
      "Multi-clinic support with independent data siloing",
      "Digital patient profiles with historical medical records",
      "Integrated scheduling and prescription management",
      "Pharmacy inventory tracking"
    ],
    technicalHighlights: [
      "Implemented a secure multi-tenant architecture on the backend",
      "Developed an intuitive React.js frontend with complex form state management",
      "Ensured HIPAA-aligned data structure within MySQL for data privacy"
    ],
    mockups: [
      "/mockups/medicare-1.jpg"
    ]
  },
  {
    slug: "shades-by-jay",
    title: "Shades By Jay - UI Library",
    description: "An open-source UI component library with 250+ reusable components using HTML, CSS, & JS. Modular, accessible, and features an interactive code playground.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
    problemStatement: "Developing consistent, accessible user interfaces from scratch repeatedly slows down frontend development. Existing libraries can sometimes be overly opinionated or bloated.",
    keyFeatures: [
      "250+ lightweight, reusable UI components",
      "No framework dependencies (Vanilla HTML/CSS/JS)",
      "Interactive documentation and code playground",
      "Built-in light and dark mode support"
    ],
    technicalHighlights: [
      "Established a scalable CSS architecture using CSS variables for robust theming",
      "Ensured strong Web Accessibility (a11y) standards across all components",
      "Created a custom documentation generator to display live component demos"
    ],
    mockups: []
  },
  {
    slug: "brightmindaid",
    title: "BrightMindAid",
    description: "An educational resource platform for Sri Lankan students. Provides curated learning materials, user authentication, and data management.",
    tech: ["React", "Supabase"],
    live: "#",
    github: "#",
    problemStatement: "Students in Sri Lanka lack a centralized, high-quality repository for localized educational resources, making self-study difficult.",
    keyFeatures: [
      "Curated library of past papers, notes, and tutorials",
      "Secure user authentication and personalized dashboards",
      "Community contribution features",
      "Optimized search and filtering capabilities"
    ],
    technicalHighlights: [
      "Leveraged Supabase for rapid backend deployment, including Auth and Postgres",
      "Implemented client-side caching to reduce database read operations",
      "Designed a mobile-first responsive layout to cater to students using mobile devices"
    ],
    mockups: []
  },
  {
    slug: "disaster-management-system",
    title: "Disaster Management System",
    description: "Full-stack web app from a hackathon for real-time emergency reporting. Captures GPS offline and syncs when online, featuring a real-time admin dashboard.",
    tech: ["React", "Firebase"],
    live: null,
    github: "#",
    problemStatement: "In disaster zones, internet connectivity is often severed. Emergency response teams need a way to log incidents offline that will automatically sync when connectivity is restored.",
    keyFeatures: [
      "Offline-first incident logging",
      "Automatic background synchronization when internet is restored",
      "Geolocation and map API integration",
      "Real-time dispatch dashboard for administrators"
    ],
    technicalHighlights: [
      "Architected a robust offline-first caching layer using Service Workers",
      "Utilized Firebase Realtime Database for instant updates across admin consoles",
      "Integrated browser Geolocation hooks to automatically pinpoint distress signals"
    ],
    mockups: []
  }
];
