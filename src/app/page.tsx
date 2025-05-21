'use client';

import { resume } from '@/data/resume';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Imported Project interface from @/data/projects

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

 
// Refined Projects Section with improved card design
const Projects = () => {
  // Filter featured projects or take first 4
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4) || projects.slice(0, 4);
  
  // More subtle and professional gradient backgrounds
  const tileColors = [
    'bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-400',
    'bg-gradient-to-br from-violet-50 to-purple-50 border-l-4 border-violet-400',
    'bg-gradient-to-br from-cyan-50 to-blue-50 border-l-4 border-cyan-400',
    'bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-400'
  ];
  
  // Map status to display text and styles
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'in-progress':
        return { text: 'In Progress', className: 'bg-amber-100 text-amber-700' };
      case 'planned':
        return { text: 'Planned', className: 'bg-blue-100 text-blue-700' };
      case 'completed':
      default:
        return { text: 'Completed', className: 'bg-green-100 text-green-700' };
    }
  };

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
            Featured Work
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
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.category?.map((cat, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/10 text-slate-700">
                        {cat}
                      </span>
                    ))}
                    {project.status && (
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusBadge(project.status).className}`}>
                        {getStatusBadge(project.status).text}
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
                    {(project.link || project.demo) && (
                      <a 
                        href={project.link || project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                        aria-label={`Visit ${project.title} ${project.link ? 'website' : 'demo'}`}
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
        duration: 3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <Section id="features" className="pt-0 pb-20 md:pt-0 md:pb-32 bg-white -mt-20 relative z-10">
      <Container>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Experience Card */}
          {/* Experience Card - Blue */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-white h-full flex flex-col"
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { 
                type: 'spring',
                stiffness: 300,
                damping: 15
              }
            }}
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Experience</h3>
              <p className="text-blue-100 mb-6">Discover my professional journey and expertise in the tech industry.</p>
            </div>
            <a 
              href="#experience" 
              className="inline-flex items-center text-white font-medium group-hover:translate-x-1 duration-300 text-sm"
            >
              View Experience
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Projects Card - Purple */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-purple-500 p-8 text-white h-full flex flex-col"
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { 
                type: 'spring',
                stiffness: 300,
                damping: 15
              }
            }}
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Latest Projects</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Featured Work</h3>
              
              <div className="space-y-5 mb-6">
                {projects.slice(0, 2).map((project, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-white mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-white">{project.title}</h4>
                        <p className="text-sm text-purple-100 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between text-sm text-purple-100 mb-2">
                <span>View all projects</span>
                <span>{projects.length}+</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1.5 mb-4">
                <div className="bg-white h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center w-full py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-all duration-300 text-sm group"
              >
                Explore All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Card - Pink */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 p-8 text-white h-full flex flex-col"
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { 
                type: 'spring',
                stiffness: 300,
                damping: 15
              }
            }}
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect With Me</h3>
              <p className="text-pink-100 mb-6">Let's collaborate or just say hi! I'm always open to new opportunities.</p>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/yourusername' },
                  { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: 'https://linkedin.com/in/yourusername' },
                  { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: 'https://twitter.com/yourusername' },
                  { name: 'Email', icon: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z', url: 'mailto:your.email@example.com' },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <svg 
                      className="w-5 h-5 text-white" 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
              
              <a 
                href="#contact" 
                className="block w-full text-center px-4 py-3 rounded-lg text-sm font-medium bg-white/20 hover:bg-white/30 transition-colors"
              >
                Send Me a Message
              </a>
            </div>
          </motion.div>

          {/* Notes Card - Teal */}
          <motion.div 
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 p-8 text-white h-full flex flex-col"
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { 
                type: 'spring',
                stiffness: 300,
                damping: 15
              }
            }}
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Notes & Articles</h3>
              <p className="text-teal-100 mb-6">Read my latest thoughts on development, design, and technology.</p>
            </div>
            <div className="space-y-3">
              <a href="#" className="block group/note">
                <div className="flex items-center justify-between py-2 border-b border-teal-400/30">
                  <span className="text-teal-50 group-hover/note:text-white">React 18 New Features</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover/note:opacity-100 transform -translate-x-1 group-hover/note:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              <a href="#" className="block group/note">
                <div className="flex items-center justify-between py-2 border-b border-teal-400/30">
                  <span className="text-teal-50 group-hover/note:text-white">UI/UX Design Principles</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover/note:opacity-100 transform -translate-x-1 group-hover/note:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block mb-8">
              {/* Star decorations */}
              <div className="absolute -top-6 -left-8 text-yellow-400">
                <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 leading-tight">
                {resume.name.split(' ').map((name, i) => (
                  <span key={i} className="block">{name}</span>
                ))}
              </h1>
              <div className="absolute -bottom-6 -right-8 text-yellow-400 transform rotate-12">
                <svg className="w-8 h-8 animate-pulse" style={{animationDelay: '0.5s'}} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 mt-6 mb-2">
              Hi, I'm {resume.name.split(' ')[0]}
            </p>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium">
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
                className="px-4 py-2 rounded-full text-sm bg-white/80 text-pink-600 border border-pink-200 shadow-sm"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
              Professional Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My work experience and career progression in the tech industry
            </p>
          </motion.div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {resume.experience.map((exp, index) => {
              // Different colors for each card
              const colors = [
                'from-blue-500 to-blue-600',
                'from-purple-500 to-purple-600',
                'from-rose-500 to-rose-600',
                'from-emerald-500 to-emerald-600'
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <motion.div
                  key={exp.company}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClass} p-0.5`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-[15px] p-8 h-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium mb-3 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800">
                          {exp.startDate} - {exp.endDate}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{exp.position}</h3>
                        <p className="text-lg text-slate-600">{exp.company}</p>
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="mb-6 space-y-3">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-blue-500 mr-3"></span>
                            <span className="text-slate-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="pt-4 border-t border-slate-100">
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}