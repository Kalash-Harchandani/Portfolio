export const editorialData = {
  identity: {
    fullName: "Kalash Harchandani",
    title: "AI ENGINEER & FULL-STACK DEVELOPER",
    heroHeadingLine1: "SOFTWARE",
    heroHeadingLine2: "ENGINEER",
    profileCardBio: "I turn ideas into intelligent, usable products. AI Engineer, freelance developer, and someone who loves building from scratch.",
    heroIntro: "Specializing in enterprise Agentic AI pipelines with LangChain, LangGraph, and AWS Bedrock, alongside commercial full-stack web platforms with custom Admin IMS & store timing engines.",
    location: "India",
    email: "kalash.devworks@gmail.com",
    portraitImage: "/profile_boat.jpg",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1eKjvlhyJzHHzFbvNxsUpJayUOySzDYon",
  },
  socialLinks: {
    github: "https://github.com/kalash-harchandani",
    linkedin: "https://linkedin.com/in/kalash-kt20",
    codolio: "https://codolio.com/profile/Kalash_Harchandani",
    phone: "+91-7976725317",
  },
  heroStats: [
    { value: "+2", label: "Years of Experience" },
    { value: "+12", label: "Projects Completed" },
    { value: "+2", label: "Startups Served" },
  ],
  featureCards: {
    orange: {
      title: "AGENTIC AI & MULTI-AGENT WORKFLOWS",
      iconType: "bot",
      link: "#technical-projects",
      targetSection: "technical-projects",
      bg: "#ff5500",
    },
    lime: {
      title: "E-COMMERCE & STARTUP PLATFORMS",
      iconType: "store",
      link: "#startup-projects",
      targetSection: "startup-projects",
      bg: "#c6ff00",
      textColor: "#000000",
    },
  },
  projects: [
    {
      name: "Chal Na Yaar",
      category: "startup",
      categoryLabel: "Startup Project",
      subtitle: "Retail E-Commerce Platform & Custom Admin IMS Backend",
      thumbnail: "/chalnayaar.png",
      destination: "https://chalnayaar.com/",
      alt: "Chal Na Yaar Travel & E-Commerce Platform",
    },
    {
      name: "The Better Desserts",
      category: "startup",
      categoryLabel: "Startup Project",
      subtitle: "Artisan Dessert Brand Storefront & Real-Time Ordering Flow",
      thumbnail: "/betterdesserts.png",
      destination: "https://the-better-desserts.vercel.app/",
      alt: "The Better Desserts Storefront",
    },
    {
      name: "RepoInsight AI",
      category: "technical",
      categoryLabel: "Technical Project",
      subtitle: "Semantic Code Intelligence & Vector Search via Gemini + Pinecone",
      thumbnail: "/repoinsight.png",
      destination: "https://repoinsight-ai.vercel.app/",
      alt: "RepoInsight AI Vector Search Engine",
    },
    {
      name: "Armour",
      category: "technical",
      categoryLabel: "Technical Project",
      subtitle: "Domain Security & Automated OSINT Risk Scoring Engine",
      thumbnail: "/armour.png",
      destination: "https://wearearmour.in/",
      alt: "Armour OSINT Threat Intelligence",
    },
  ],
  workExperience: [
    {
      company: "HERE Technologies",
      role: "AI Developer Intern",
      description: "Architecting enterprise Agentic AI solutions and multi-agent workflows using LangChain, LangGraph, and Deep Agents. Integrating Model Context Protocol (MCP) and Amazon Bedrock across AWS cloud pipelines (EC2, S3, SQS, OpenSearch).",
      startDate: "June 2026",
      endDate: "Present",
      companyUrl: "https://www.here.com/",
    },
    {
      company: "Freelance Software & AI Engineer",
      role: "Founding Systems Engineer",
      description: "Shipped production platforms with custom Admin Backends, dynamic Store Timings, and real-time inventory management systems for high-growth startups including Chal Na Yaar and The Better Desserts.",
      startDate: "2023",
      endDate: "Present",
      companyUrl: "#startup-projects",
    },
    {
      company: "TechKareer",
      role: "SDE Intern",
      description: "Selected in top 5% of applicants. Integrated Gemini and ChatGPT APIs for AI-powered feature workflows and built responsive, accessible frontend interfaces.",
      startDate: "2024",
      endDate: "2024",
      companyUrl: "#startup-projects",
    },
  ],
  toolStacks: [
    {
      stackName: "AI & Machine Learning",
      id: "ai",
      tools: [
        {
          name: "Python",
          category: "Core Language & AI",
          iconType: "python",
          link: "https://python.org",
        },
        {
          name: "LangGraph",
          category: "Multi-Agent Orchestration",
          iconType: "langgraph",
          link: "https://langchain.com",
        },
        {
          name: "Amazon Bedrock",
          category: "Enterprise Cloud LLMs",
          iconType: "aws",
          link: "https://aws.amazon.com/bedrock/",
        },
        {
          name: "LangChain",
          category: "Agentic Chains & Tools",
          iconType: "langchain",
          link: "https://langchain.com",
        },
        {
          name: "Deep Agents & MCP",
          category: "Model Context Protocol",
          iconType: "bot",
          link: "https://modelcontextprotocol.io",
        },
      ]
    },
    {
      stackName: "Development & Full-Stack",
      id: "dev",
      tools: [
        {
          name: "React",
          category: "Frontend Architecture",
          iconType: "react",
          link: "https://react.dev",
        },
        {
          name: "Node.js & Express",
          category: "Backend APIs & Custom IMS",
          iconType: "node",
          link: "https://nodejs.org",
        },
        {
          name: "JavaScript / ES6+",
          category: "Core Web Language",
          iconType: "javascript",
          link: "https://developer.mozilla.org",
        },
        {
          name: "Tailwind CSS",
          category: "Design System & UI",
          iconType: "tailwind",
          link: "https://tailwindcss.com",
        },
      ]
    },
    {
      stackName: "Cloud & Deployment",
      id: "cloud",
      tools: [
        {
          name: "AWS (EC2, S3, SQS)",
          category: "Cloud Pipelines & Hosting",
          iconType: "aws",
          link: "https://aws.amazon.com",
        },
        {
          name: "Docker",
          category: "Containerization & Scaling",
          iconType: "docker",
          link: "https://docker.com",
        },
        {
          name: "OpenSearch",
          category: "Vector & Semantic DB",
          iconType: "opensearch",
          link: "https://opensearch.org",
        },
        {
          name: "Pinecone",
          category: "Managed Vector Database",
          iconType: "pinecone",
          link: "https://pinecone.io",
        },
        {
          name: "Vercel",
          category: "Edge Deployment & CI/CD",
          iconType: "vercel",
          link: "https://vercel.com",
        },
      ]
    }
  ],
  contact: {
    headingLine1: "LET'S WORK",
    headingLine2: "TOGETHER",
    currency: "USD",
    budgetOptions: [
      "Select a budget",
      "< $300",
      "$300 - $600",
      "$600 - $1,000",
      "$1,000+",
    ],
    footerText: "Kalash Harchandani",
  },
};
