export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: number;
  honors?: string[];
  location: string;
  rank?: string;
  thesis?: string;
  activities?: string[];
  relevantCourses?: string[];
}

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  position: string;
  highlights: string[];
  technologies: string[];
}

export interface Resume {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  bio: string;
  currentFocus: string[];
  personalValues: string[];
  education: Education[];
  experience: Experience[];
  mission?: string;
  skills: string[];
  technologies?: string[];
  mlOps?: string[];
  sideHustle?: string[];
}

export const resume: Resume = {
  name: "Yusuf Elnady",
  title: "Data Scientist",
  summary: "I'm passionate about crafting experiences that are engaging, accessible, and user-centric.",
  location: "Virginia, USA",
  email: "yofa.elnady@gmail.com",
  bio: `Data Scientist with expertise in AI/ML, web development, and healthcare technology. Passionate about creating impactful solutions and sharing knowledge through teaching and mentoring.

I specialize in building intelligent systems that solve real-world problems. My experience spans from developing AI-powered applications to conducting research in healthcare technology. I believe in the power of technology to make a positive impact on society.

When I'm not coding, I enjoy teaching and mentoring others, contributing to open-source projects, and staying up-to-date with the latest developments in AI and software engineering.`,
  currentFocus: [
    "Building AI-powered applications at Fuse",
    "Research in healthcare technology",
    "Teaching and mentoring in software development",
    "Contributing to open-source projects"
  ],
  personalValues: [
    "Ethical AI Development",
    "Knowledge Sharing",
    "Continuous Learning",
    "Mentorship",
    "Open Source Contribution"
  ],
  mission: "To leverage technology in creating positive societal impact while fostering a culture of learning and mentorship in the tech community.",
  education: [
    {
      school: "Virginia Tech",
      degree: "Master's",
      field: "Computer Science",
      startDate: "2022",
      endDate: "2024",
      gpa: 4.0,
      rank: "Top 5%",
      honors: ["Graduate Research Assistant", "Outstanding Graduate Student Award"],
      location: "Blacksburg, VA",
      thesis: "Deep Learning Approaches in Medical Image Analysis",
      activities: [
        "AI Research Lab",
        "Graduate Student Council",
        "CS Graduate Mentor"
      ],
      relevantCourses: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Advanced Algorithms"
      ]
    },
    {
      school: "Radford University",
      degree: "Bachelor's",
      field: "Computer Science",
      startDate: "2018",
      endDate: "2022",
      gpa: 3.95,
      rank: "Summa Cum Laude",
      honors: [
        "Dean's List (All Semesters)",
        "Outstanding CS Student Award"
      ],
      location: "Radford, VA",
      activities: [
        "ACM Student Chapter President",
        "Undergraduate Research Assistant",
        "Peer Tutor"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development"
      ]
    }
  ],
  experience: [
    {
      company: "Fuse Oncology",
      title: "Data Scientist",
      position: "Lead Data Scientist",
      startDate: "2022-03",
      endDate: "Present",
      location: "Remote, USA",
      highlights: [
        "Managed cross-functional product pod (5 engineers, 2 designers) to deliver LLM-driven features co-designed with clinicians",
        "Engaged 25+ stakeholders to translate pain points into LLM product specs, accelerating roadmap by 30%",
        "Integrated generative-editing LLM that reduced note-writing time by 65% with 92% clinician satisfaction",
        "Built HIPAA-compliant PHI anonymizer processing 2M+ tokens/day with 99.3% entity recall",
        "Developed appointment-volume predictor reducing overstaffing costs by 12% (MAPE 6.4%)",
        "Led fine-tuning and evaluation of domain-specific LLMs improving factual accuracy by 8 percentage points",
        "Automated workflows in radiation oncology using tree-structured LLMs",
        "Engineered anonymization pipeline for VARIAN and MOSAIQ databases",
        "Built clinical NLP pipeline predicting diagnosis types and service levels from unstructured consult notes"
      ],
      technologies: [
        "Python",
        "Transformers",
        "FastAPI",
        "LLMs",
        "Docker",
        "AWS",
        "LangChain",
        "Tree-Structured Models"
      ]
    },
    {
      company: "Virginia Tech",
      title: "Graduate Researcher & Teaching Assistant",
      position: "Graduate Assistant",
      startDate: "2020-08",
      endDate: "2022-04",
      location: "Blacksburg, VA",
      highlights: [
        "Researched transformer-based data synthesizer improving security model F1 from 76% → 81.1%",
        "Published peer-reviewed paper on credit-seeking behavior in learning environments",
        "Taught and supported 650+ students across lectures and labs with 4.8/5 average evaluations"
      ],
      technologies: ["Python", "PyTorch", "Transformers", "Pandas", "Academic Research"]
    },
    {
      company: "AI Camp",
      title: "Data Scientist Intern",
      position: "Intern",
      startDate: "2021-06",
      endDate: "2021-08",
      location: "Remote",
      highlights: [
        "Built ASR captioning system using Wav2Vec2.0, reducing turnaround time by 90%",
        "Deployed production models with Flask & Docker serving 10K+ weekly requests",
        "Mentored 50 students in deep learning bootcamp; 100% completed capstones"
      ],
      technologies: ["Python", "Wav2Vec2.0", "Flask", "Docker", "Deep Learning", "Mentorship"]
    }
  ],

  skills: ["Python", "AI/ML", "Fine‑Tuning & Distillation", "Infrastructure", "MLOps", "Generative AI & LLMs", "Agentic AI",
    "LangChain", "Prompt Engineering", "NLP", "PyTorch/TensorFlow", "scikit‑learn", "n8n",
    "Git & Code Review", "Docker & Kubernetes", "Azure/AWS/GCP", "SQL & NoSQL", "REST/FastAPI", "Automation Workflows","Traditional Machine Learning",
    "Communication", "Statistical Analysis", "AI Web Apps", "Web Scraping", "Deep Neural Networks", "Transformers", "Diffusion Models",
    "Data Visualization", "Problem-solving", "Self-learning", "Stakeholder Engagement", ]
  ,

  technologies: ["Python", "SQL", "Node.js", "JavaScript (Next.js)", "PyTorch", "TensorFlow", "LangChain/LangGraph", "Transformers", "FAISS"
  ],
  mlOps: ["Git", "Docker", "MLflow", "Azure ML", "Weights & Biases (W&B)", "FastAPI", "AWS SageMaker", "Embedding Management"]

, sideHustle: ["Flutter", "Mobile Apps", "Framer", ""]
};
