export interface Skill {
  name: string;
  category: "AI" | "MLOps" | "Infrastructure" | "Soft Skills";
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description?: string;
  tooltip?: string;
}

export const skills: Skill[] = [
  // AI Skills
  {
    name: "Machine Learning",
    category: "AI",
    proficiency: "Expert",
    description: "Deep learning, NLP, and computer vision",
    tooltip: "Experienced in building and deploying production ML models"
  },
  {
    name: "TensorFlow/PyTorch",
    category: "AI",
    proficiency: "Advanced",
    description: "Deep learning frameworks",
    tooltip: "Building and training neural networks for various applications"
  },
  {
    name: "NLP",
    category: "AI",
    proficiency: "Advanced",
    description: "Natural Language Processing",
    tooltip: "Text classification, sentiment analysis, and language generation"
  },

  // MLOps Skills
  {
    name: "MLflow",
    category: "MLOps",
    proficiency: "Advanced",
    description: "ML lifecycle management",
    tooltip: "Experiment tracking, model versioning, and deployment"
  },
  {
    name: "Docker",
    category: "MLOps",
    proficiency: "Advanced",
    description: "Containerization",
    tooltip: "Creating and managing containers for ML applications"
  },
  {
    name: "CI/CD for ML",
    category: "MLOps",
    proficiency: "Intermediate",
    description: "Automated ML pipelines",
    tooltip: "Building robust ML deployment pipelines"
  },

  // Infrastructure Skills
  {
    name: "AWS",
    category: "Infrastructure",
    proficiency: "Advanced",
    description: "Cloud infrastructure",
    tooltip: "EC2, S3, Lambda, SageMaker, and other AWS services"
  },
  {
    name: "Kubernetes",
    category: "Infrastructure",
    proficiency: "Intermediate",
    description: "Container orchestration",
    tooltip: "Managing containerized applications at scale"
  },
  {
    name: "Monitoring",
    category: "Infrastructure",
    proficiency: "Advanced",
    description: "System monitoring and logging",
    tooltip: "Prometheus, Grafana, ELK stack"
  },

  // Soft Skills
  {
    name: "Team Leadership",
    category: "Soft Skills",
    proficiency: "Expert",
    description: "Technical team management",
    tooltip: "Leading engineering teams and mentoring developers"
  },
  {
    name: "Communication",
    category: "Soft Skills",
    proficiency: "Expert",
    description: "Technical communication",
    tooltip: "Presenting complex topics to diverse audiences"
  },
  {
    name: "Project Management",
    category: "Soft Skills",
    proficiency: "Advanced",
    description: "Agile methodologies",
    tooltip: "Leading sprints and managing project lifecycles"
  }
];
