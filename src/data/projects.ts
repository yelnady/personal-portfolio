export interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string[];
  github?: string;
  demo?: string;
  image?: string;
  category: string[];
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Medical Image Analysis",
    description: "Deep learning system for analyzing medical images and assisting in diagnosis",
    technologies: ["Python", "TensorFlow", "Docker", "AWS", "FastAPI"],
    impact: [
      "Reduced analysis time by 60%",
      "Improved diagnostic accuracy by 25%",
      "Deployed in 3 major hospitals"
    ],
    github: "https://github.com/username/medical-vision",
    demo: "https://medical-vision-demo.com",
    category: ["Healthcare", "AI", "MLOps"],
    featured: true,
    status: "completed",
    startDate: "2023-06",
    endDate: "2024-01",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "LLM-Powered Research Assistant",
    description: "An intelligent assistant for academic research using state-of-the-art language models",
    technologies: ["Python", "LangChain", "OpenAI", "Next.js", "TypeScript"],
    impact: [
      "Reduced research time by 40%",
      "Processed over 1M research papers",
      "Used by 500+ researchers"
    ],
    github: "https://github.com/username/research-assistant",
    demo: "https://research-assistant-demo.com",
    category: ["AI", "NLP", "Web"],
    featured: true,
    status: "in-progress",
    startDate: "2024-01",
    image: "https://images.unsplash.com/photo-1517694712201-5f8f2afd3acd?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "MLOps Pipeline Framework",
    description: "A comprehensive framework for automating ML model training, testing, and deployment",
    technologies: ["Python", "MLflow", "Kubernetes", "GitHub Actions", "AWS"],
    impact: [
      "Reduced deployment time by 75%",
      "Automated testing of 100+ models",
      "Used across 5 teams"
    ],
    github: "https://github.com/username/mlops-framework",
    category: ["MLOps", "Infrastructure", "AI"],
    status: "completed",
    startDate: "2023-09",
    endDate: "2024-03",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];
