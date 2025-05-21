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
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
  
}

export const resume: Resume = {
  name: "Yusuf",
  title: "Data Scientist",
  summary: "I'm passionate about crafting experiences that are engaging, accessible, and user-centric.",
  location: "Virginia, USA",
  email: "yofa.elnady@gmail.com", // Replace with your email
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
      company: "Fuse",
      title: "Software Engineer",
      position: "Senior Software Engineer",
      startDate: "2023",
      endDate: "Present",
      location: "Remote",
      highlights: [
        "Developed and maintained AI-powered applications",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Implemented modern web technologies and best practices"
      ],
      technologies: ["Python", "React", "TypeScript", "AI/ML"]
    },
    {
      company: "Virginia Tech",
      title: "Graduate Research Assistant",
      position: "Research Assistant",
      startDate: "2022",
      endDate: "2023",
      location: "Blacksburg, VA",
      highlights: [
        "Conducted research in healthcare technology",
        "Published papers in leading conferences",
        "Mentored undergraduate students"
      ],
      technologies: ["Python", "TensorFlow", "Healthcare Tech"]
    }
  ],

  skills: ["Python", "React", "TypeScript", "AI/ML"]
};
