import { Bot, Database, Layout, Server, Terminal, Wrench } from 'lucide-react';

export const portfolioData = {
  hero: {
    name: "Kalash Harchandani",
    role: "AI Developer Intern @ HERE Technologies",
    tagline: "Engineering intelligent Agentic AI workflows, Deep Agents, and scalable cloud architectures on AWS.",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1eKjvlhyJzHHzFbvNxsUpJayUOySzDYon"
  },
  about: {
    summary: "AI Developer Intern at HERE Technologies—a Netherlands-based multinational leader specialized in mapping technologies, location data, and automotive services. Passionate about building autonomous Agentic AI systems, multi-agent orchestration (LangGraph, LangChain, Deep Agents), MCP (Model Context Protocol), Amazon Bedrock, and resilient AWS cloud architectures (EC2, S3, SQS, OpenSearch). Computer Science & Engineering student at Bennett University focused on high-performance, enterprise-grade digital intelligence.",
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
      category: "Languages",
      icon: Terminal,
      items: ["Python", "JavaScript", "C++"]
    },
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
      category: "Databases & Search",
      icon: Database,
      items: ["OpenSearch", "Pinecone", "MongoDB", "MySQL"]
    },
    {
      category: "Web Development",
      icon: Layout,
      items: ["React", "Node.js", "Express.js", "REST APIs"]
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
      title: "AI Developer Intern",
      company: "HERE Technologies",
      location: "Netherlands / India",
      date: "Present",
      type: "work",
      bullets: [
        "Contributing to HERE Technologies, a Dutch multinational mapping and location data platform powering automotive services and global enterprises.",
        "Architecting Agentic AI solutions and multi-agent workflows utilizing LangChain, LangGraph, and Deep Agents.",
        "Integrating Model Context Protocol (MCP) and Amazon Bedrock for scalable, enterprise-grade AI orchestration.",
        "Designing cloud-native infrastructure on AWS leveraging EC2, S3, SQS, and OpenSearch for high-performance retrieval and data processing."
      ]
    },
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
