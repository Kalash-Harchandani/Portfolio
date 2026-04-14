import { Code, Database, Layout, Server, Terminal, Wrench } from 'lucide-react';

export const portfolioData = {
  hero: {
    name: "Kalash Harchandani",
    role: "Full Stack Developer & AI Integrator",
    tagline: "Building intelligent, scalable, and AI-powered digital experiences.",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1eKjvlhyJzHHzFbvNxsUpJayUOySzDYon"
  },
  about: {
    summary: "Computer Science & Engineering student at Bennett University with a CGPA of 8.52. Experienced in full-stack web development, AI integration (RAG, LLMs), and scalable architecture. Recognized for top performance and strong problem-solving skills, translating complex requirements into modern, efficient digital solutions.",
    image: "/about_me.jpg"
  },
  contact: {
    email: "kalash.devworks@gmail.com",
    linkedin: "https://linkedin.com/in/kalash-kt20",
    github: "https://github.com/kalash-harchandani",
    codolio: "https://codolio.com/profile/Kalash Harchandani",
    phone: "+91-7976725317"
  },
  skills: [
    {
      category: "Languages",
      icon: Terminal,
      items: ["C++", "JavaScript"]
    },
    {
      category: "Web Development",
      icon: Layout,
      items: ["React", "Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MongoDB", "MySQL", "Pinecone"]
    },
    {
      category: "AI & LLM",
      icon: Code,
      items: ["Gemini API", "ChatGPT API", "RAG-based Systems", "Vector Search"]
    },
    {
      category: "DevOps & Cloud",
      icon: Server,
      items: ["Docker", "AWS EC2", "Vercel"]
    },
    {
      category: "Tools & Core CS",
      icon: Wrench,
      items: ["Git", "GitHub", "VS Code", "Cursor", "OOP", "HLD"]
    }
  ],
  projects: [
    {
      title: "RepoInsight AI",
      description: "RAG-based Code Intelligence System mapping high-dimensional vectors to enable semantic code search and context-aware explanations using Gemini API.",
      techStack: ["React", "Node", "Express", "Pinecone", "Gemini", "AWS"],
      github: "https://github.com/Kalash-Harchandani/repoinsight-ai",
      live: "https://repoinsight-ai.vercel.app/",
      image: "/repoinsight.png"
    },
    {
      title: "Armour",
      description: "AI-Powered Domain Intelligence Platform providing security assessments via an automated OSINT data collection engine and Gemini-driven analysis.",
      techStack: ["MERN", "Gemini", "Docker", "AWS EC2", "Vercel"],
      github: "https://github.com/Kalash-Harchandani/Armour",
      live: "https://wearearmour.in/",
      image: "/armour.png"
    },
    {
      title: "Cal.com Clone",
      description: "Full-stack scheduling platform with conflict-free math-based slot generation, customized availability, and relational backend.",
      techStack: ["React", "Node", "MySQL", "Docker", "AWS"],
      github: "https://github.com/Kalash-Harchandani/calcom-scheduling-platform",
      live: "https://calcom-scheduling-platform.vercel.app/",
      image: "/calcom.png"
    }
  ],
  experience: [
    {
      title: "SDE Intern",
      company: "TechKareer",
      location: "Faridabad, India",
      date: "Recent",
      type: "work",
      bullets: [
        "Selected in the top 5% of applicants through a presentation-based evaluation process.",
        "Engaged with clients to understand requirements and support candidate sourcing from an existing network.",
        "Integrated Gemini and ChatGPT APIs to support AI-driven features.",
        "Gained exposure to React components while supporting frontend feature development."
      ]
    },
    {
      title: "B.Tech in Computer Science & Engineering",
      company: "Bennett University",
      location: "India",
      date: "Current",
      type: "education",
      bullets: [
        "CGPA: 8.52",
        "Focused on core concepts including OOP, High-Level Design, and algorithms."
      ]
    }
  ],
  certifications: [
    "Building Applications with Vector Databases: Pinecone (DeepLearning.AI)",
    "Prompt Engineering for Developers: OpenAI (DeepLearning.AI)",
    "Data Structures & Algorithms Cohort: CodeHelp by Love Babbar",
    "API Learning Path: Postman",
    "Introduction to Modern Database Systems: Saylor.org"
  ]
};
