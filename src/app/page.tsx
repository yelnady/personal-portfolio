'use client';

import { resume } from '@/data/resume';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  github?: string;
  category?: string;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/yelnady/portfolio",
    image: "/images/portfolio.png"
  },
  // Add more projects here
];

// Improved Floating Stars Component with better performance
const FloatingStars = () => {
  const [stars, setStars] = useState<Array<{id: number; x: number; y: number; size: number; delay: number}>>([]);

  useEffect(() => {
    // Generate fewer stars for better performance
    const newStars = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // Smaller stars
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white/60"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Container component for consistent layout
const Container = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => (
  <div className={`container mx-auto px-4 md:px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </div>
);

// Section component for consistent spacing
const Section = ({ 
  id, 
  children, 
  className = "" 
}: { 
  id?: string; 
  children: React.ReactNode; 
  className?: string 
}) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

// Refined Hero Section
const Hero = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950">
      <FloatingStars />
      <Container className="z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
              <span className="block">Hi.</span>
              <span className="block">I'm {resume.name.split(' ')[0]}.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto"
          >
            {resume.bio}
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-8">
            <Link 
              href="#work" 
              className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-medium rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
            >
              View My Work
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

// Refined About Section
const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <Section id="about" className="bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">
              {resume.bio}
            </p>
            
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">What I'm currently working on:</h3>
              <ul className="space-y-3">
                {resume.currentFocus.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/10 text-slate-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

// Refined Projects Section with improved card design
const Projects = () => {
  const featuredProjects = projects.slice(0, 4);
  
  // More subtle and professional gradient backgrounds
  const tileColors = [
    'bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-400',
    'bg-gradient-to-br from-violet-50 to-purple-50 border-l-4 border-violet-400',
    'bg-gradient-to-br from-cyan-50 to-blue-50 border-l-4 border-cyan-400',
    'bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-400'
  ];

  return (
    <Section id="work" className="bg-gradient-to-b from-white to-slate-50">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            Selected Work
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A collection of my recent projects and case studies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${tileColors[index % tileColors.length]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-auto">
                  <div className="flex items-center gap-2 mb-3">
                    {project.category && (
                      <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-slate-800/10 text-slate-700">
                        {project.category}
                      </span>
                    )}
                    {project.status === 'in-progress' && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">
                        In Progress
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3">{project.description}</p>
                </div>
                
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-200">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 rounded-full bg-white/80 text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/80 text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project image preview on hover */}
              {project.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/90 flex items-center justify-center">
                  <div className="relative w-full h-full p-4">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-8"
                      priority={index < 2}
                      quality={70}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors group"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
};

// Contact Section - New addition
const Contact = () => (
  <Section className="bg-gradient-to-b from-slate-50 to-slate-100">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
          Let's Connect
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`mailto:${resume.email}`} 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
          
          {resume.linkedin && (
            <a 
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    </Container>
  </Section>
);

// Skills component - New addition 
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: resume.skills.filter(skill => 
        ["React", "Next.js", "CSS", "HTML", "JavaScript", "TypeScript"].includes(skill)
      )
    },
    {
      title: "Backend",
      skills: resume.skills.filter(skill => 
        ["Node.js", "Express", "Django", "Python", "SQL", "MongoDB"].includes(skill)
      )
    },
    {
      title: "Tools & Others",
      skills: resume.skills.filter(skill => 
        !["React", "Next.js", "CSS", "HTML", "JavaScript", "TypeScript", 
          "Node.js", "Express", "Django", "Python", "SQL", "MongoDB"].includes(skill)
      )
    }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            Skills &amp; Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4 text-slate-800 pb-2 border-b border-slate-200">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

// Footer component - New addition
const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
            {resume.name}
          </h3>
          <p className="text-slate-400 mt-1">{resume.title}</p>
        </div>
        
        <div className="flex space-x-6">
          {resume.github && (
            <a 
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          
          {resume.linkedin && (
            <a 
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          
          {resume.twitter && (
            <a 
              href={resume.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {resume.name}. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);

// Main Component
// Experience Card Component
const ExperienceCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
    <div className="space-y-4">
      {resume.experience.slice(0, 2).map((exp, index) => (
        <div key={index} className="border-l-2 border-green-500 pl-4">
          <h4 className="font-semibold text-gray-900">{exp.title}</h4>
          <p className="text-gray-600">{exp.company} • {exp.startDate} - {exp.endDate}</p>
          <p className="text-sm text-gray-500 mt-1">{exp.highlights[0]}</p>
        </div>
      ))}
      <button className="text-green-600 hover:text-green-800 text-sm font-medium mt-2">
        View all experience →
      </button>
    </div>
  </div>
);

// Notes Card Component
const NotesCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Notes</h3>
    <div className="space-y-4">
      <div className="border-l-2 border-blue-500 pl-4">
        <h4 className="font-semibold text-gray-900">Understanding React Server Components</h4>
        <p className="text-sm text-gray-500 mt-1">A deep dive into the new React architecture</p>
      </div>
      <div className="border-l-2 border-blue-500 pl-4">
        <h4 className="font-semibold text-gray-900">Tailwind CSS Best Practices</h4>
        <p className="text-sm text-gray-500 mt-1">How to write maintainable Tailwind code</p>
      </div>
      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
        Read all notes →
      </button>
    </div>
  </div>
);

// Projects Card Component
const ProjectsCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Projects</h3>
    {projects.slice(0, 3).map((project) => (
      <div key={project.title} className="border-l-2 border-purple-500 pl-4">
        <h4 className="font-semibold text-gray-900">{project.title}</h4>
        <p className="text-sm text-gray-500 mt-1">{project.description.substring(0, 60)}...</p>
      </div>
    ))}
    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium mt-2">
      View all projects →
    </button>
  </div>
);

// Connect Card Component
const ConnectCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Connect</h3>
    <p className="text-gray-600 mb-4">Let's build something amazing together!</p>
    <div className="flex space-x-4">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
         className="text-gray-500 hover:text-gray-900 transition-colors">
        <span className="sr-only">GitHub</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
         className="text-gray-500 hover:text-gray-900 transition-colors">
        <span className="sr-only">LinkedIn</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-gray-900 transition-colors">
        <span className="sr-only">Email</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>
    </div>
  </div>
);

// Feature Boxes Component
const FeatureBoxes = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <Section id="features" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <Container>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Experience Card */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-0.5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-full bg-slate-800/50 rounded-2xl p-6 transition-all duration-300 group-hover:bg-slate-800/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 mb-4 transition-colors group-hover:bg-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
              <p className="text-slate-300 mb-4">Discover my professional journey and expertise in the tech industry.</p>
              <a 
                href="#experience" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:translate-x-1 duration-300"
              >
                View Experience
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Projects Card */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-0.5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-full bg-slate-800/50 rounded-2xl p-6 transition-all duration-300 group-hover:bg-slate-800/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 mb-4 transition-colors group-hover:bg-purple-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Projects</h3>
              <p className="text-slate-300 mb-4">Explore my latest work and personal projects I've built.</p>
              <a 
                href="#projects" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors group-hover:translate-x-1 duration-300"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact & Consultation Card */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-0.5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-full bg-slate-800/50 rounded-2xl p-6 transition-all duration-300 group-hover:bg-slate-800/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4 transition-colors group-hover:bg-emerald-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-slate-300 mb-4">Ready to discuss your project? Let's talk about how I can help.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#contact" 
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  Contact Me
                </a>
                <a 
                  href="#consultation" 
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-emerald-400/30 rounded-lg text-sm font-medium text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>

          {/* Notes Card */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-0.5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-full bg-slate-800/50 rounded-2xl p-6 transition-all duration-300 group-hover:bg-slate-800/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 mb-4 transition-colors group-hover:bg-amber-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Notes & Articles</h3>
              <p className="text-slate-300 mb-4">Read my latest thoughts on development, design, and technology.</p>
              <div className="space-y-3">
                <a href="#" className="block text-amber-400 hover:text-amber-300 transition-colors group/note">
                  <div className="flex items-center justify-between">
                    <span className="group-hover/note:underline">React 18 New Features</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover/note:opacity-100 transform -translate-x-1 group-hover/note:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                <a href="#" className="block text-amber-400 hover:text-amber-300 transition-colors group/note">
                  <div className="flex items-center justify-between">
                    <span className="group-hover/note:underline">UI/UX Design Principles</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover/note:opacity-100 transform -translate-x-1 group-hover/note:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950 text-white">
      {/* Hero Section with Gradient Animation */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 animate-gradient"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-blue-300 mb-6">
              Hi, I'm {resume.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              {resume.title} specializing in {resume.currentFocus[0]}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              {resume.mission}
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {resume.skills.map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full text-sm bg-white/5 text-emerald-300 border border-emerald-300/20"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <FeatureBoxes />

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-blue-300"
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resume.experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-50 transition-transform group-hover:scale-150"></div>
                <span className="text-sm font-medium text-emerald-300">{exp.company}</span>
                <h2 className="mt-2 text-2xl font-bold text-white">{exp.position}</h2>
                <p className="text-gray-400 mt-2">{exp.startDate} - {exp.endDate}</p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="mr-2 mt-1 text-emerald-400">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm bg-white/5 text-emerald-300 border border-emerald-300/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}