import { Bot, Database, Layout, Server, Terminal, Wrench } from 'lucide-react';

export const portfolioData = {
  hero: {
    name: "Kalash Harchandani",
    role: "AI Developer @ HERE Technologies • Freelance Engineer",
    tagline: "Building enterprise Agentic AI systems and production platforms for high-growth startups.",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1eKjvlhyJzHHzFbvNxsUpJayUOySzDYon"
  },
  about: {
    summary: "AI Developer Intern at HERE Technologies and Freelance Systems Engineer. Specializing in autonomous multi-agent pipelines (LangGraph, MCP, Bedrock) and full-stack startup platforms with custom Admin Backends & real-time IMS.",
    image: "/about_me.jpg"
  },
  contact: {
    email: "kalash.devworks@gmail.com",
    linkedin: "https://linkedin.com/in/kalash-kt20",
    github: "https://github.com/kalash-harchandani",
    codolio: "https://codolio.com/profile/Kalash_Harchandani",
    phone: "+91-7976725317"
  },
  skills: [
    {
      category: "Agentic AI & LLMs",
      icon: Bot,
      items: ["Agentic AI", "LangGraph", "LangChain", "Deep Agents", "MCP", "Amazon Bedrock", "RAG Systems", "Vector Search"]
    },
    {
      category: "Cloud & DevOps",
      icon: Server,
      items: ["AWS (EC2, S3, SQS)", "Docker", "Vercel"]
    },
    {
      category: "Languages",
      icon: Terminal,
      items: ["Python", "JavaScript", "C++"]
    },
    {
      category: "Databases & Search",
      icon: Database,
      items: ["OpenSearch", "Pinecone", "MongoDB", "MySQL"]
    },
    {
      category: "Full-Stack & Web",
      icon: Layout,
      items: ["React", "Node.js", "Express.js", "REST APIs", "Admin IMS"]
    },
    {
      category: "Architecture & Tools",
      icon: Wrench,
      items: ["Git", "GitHub", "VS Code", "Cursor", "HLD", "OOP"]
    }
  ],
  projects: [
    {
      title: "Chal Na Yaar",
      subtitle: "Startup Retail & E-Commerce Platform",
      client: "Chal Na Yaar",
      category: "startup",
      badge: "Production Client",
      description: "Production retail platform with dynamic Store Timings engine & custom Inventory Management System (IMS) backend.",
      highlights: ["Store Timings Engine", "Admin IMS", "Real-Time Stock"],
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      live: "https://chalnayaar.com/",
      github: "",
      image: "/chalnayaar.png"
    },
    {
      title: "The Better Desserts",
      subtitle: "Artisan Dessert Brand Storefront",
      client: "The Better Desserts",
      category: "startup",
      badge: "Production Client",
      description: "Luxury commerce storefront with interactive menu showcases and a high-conversion mobile ordering flow.",
      highlights: ["Visual Storefront", "High Conversion", "Framer Motion"],
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      live: "https://the-better-desserts.vercel.app/",
      github: "",
      image: "/betterdesserts.png"
    },
    {
      title: "RepoInsight AI",
      subtitle: "Codebase Intelligence & Vector Search",
      client: "AI Product",
      category: "ai",
      badge: "Flagship AI",
      description: "RAG system using high-dimensional vector embeddings and Gemini LLM for sub-second semantic code search.",
      highlights: ["Pinecone Vector DB", "Gemini API", "Semantic Search"],
      techStack: ["React", "Node.js", "Pinecone", "Gemini API", "AWS"],
      live: "https://repoinsight-ai.vercel.app/",
      github: "https://github.com/Kalash-Harchandani/repoinsight-ai",
      image: "/repoinsight.png"
    },
    {
      title: "Armour",
      subtitle: "Domain Security & OSINT Intelligence",
      client: "Security AI",
      category: "ai",
      badge: "AI & Security",
      description: "Automated OSINT reconnaissance pipeline and Gemini-driven risk scoring engine deployed on AWS EC2.",
      highlights: ["OSINT Recon", "Gemini Threat Analysis", "AWS EC2 Docker"],
      techStack: ["MERN", "Gemini API", "Docker", "AWS EC2"],
      live: "https://wearearmour.in/",
      github: "https://github.com/Kalash-Harchandani/Armour",
      image: "/armour.png"
    }
  ],
  experience: [
    {
      title: "AI Developer Intern",
      company: "HERE Technologies",
      location: "Netherlands / India",
      date: "Present",
      type: "work",
      bullets: [
        "Architecting Agentic AI solutions and multi-agent workflows using LangChain, LangGraph, and Deep Agents.",
        "Integrating Model Context Protocol (MCP) and Amazon Bedrock across AWS cloud pipelines (EC2, S3, SQS, OpenSearch)."
      ]
    },
    {
      title: "Freelance Software & AI Engineer",
      company: "Self-Employed (Startups)",
      location: "Remote",
      date: "2023 - Present",
      type: "work",
      bullets: [
        "Shipped production web platforms with custom Admin Backends, Store Timings, and real-time IMS for startups.",
        "End-to-end delivery from architecture to deployment for Chal Na Yaar and The Better Desserts."
      ]
    },
    {
      title: "SDE Intern",
      company: "TechKareer",
      location: "Faridabad, India",
      date: "Recent",
      type: "work",
      bullets: [
        "Selected in top 5% of applicants; integrated Gemini & ChatGPT APIs for AI features.",
        "Built and maintained responsive React frontend components."
      ]
    },
    {
      title: "B.Tech in Computer Science & Engineering",
      company: "Bennett University",
      location: "India",
      date: "Current",
      type: "education",
      bullets: [
        "CGPA: 8.52 • Focus: High-Level System Design, OOP, Data Structures & Algorithms."
      ]
    }
  ],
  certifications: [
    "Building Applications with Vector Databases: Pinecone (DeepLearning.AI)",
    "Prompt Engineering for Developers: OpenAI (DeepLearning.AI)",
    "Data Structures & Algorithms Cohort: CodeHelp by Love Babbar",
    "API Learning Path: Postman"
  ]
};
