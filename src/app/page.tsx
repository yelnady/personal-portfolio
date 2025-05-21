'use client';

import { resume, Experience, Education } from '@/data/resume';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import FeatureBoxes from '@/components/FeatureBoxes'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';

// Container component for consistent layout
const Container = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string
}) => (
  <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
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



// Reusable Section Heading Component
const SectionHeading = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 ${className}`}>
    {children}
  </h2>
);



// Professional Journey Component
const ProfessionalJourney = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading className="md:text-5xl mb-4">
            Professional Journey
          </SectionHeading>
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
  );
};

// Refined Projects Section with improved card design
const Projects = () => {
  // Filter featured projects or take first 4
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4) || projects.slice(0, 4);

  // Vibrant gradient backgrounds for project cards
  const cardStyles = [
    'bg-gradient-to-br from-blue-500 to-indigo-600 border-l-4 border-blue-300',
    'bg-gradient-to-br from-purple-500 to-pink-500 border-l-4 border-purple-300',
    'bg-gradient-to-br from-cyan-400 to-blue-500 border-l-4 border-cyan-300',
    'bg-gradient-to-br from-emerald-400 to-teal-500 border-l-4 border-emerald-300'
  ];


  return (
    <Section id="work">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading className="md:text-5xl mb-4">
            Featured Work
          </SectionHeading>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A collection of my recent projects and case studies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              title={project.title}
              description={project.description}
              href={project.link || project.demo || '#'}
              gradientClass={cardStyles[index % cardStyles.length]}
              tags={project.technologies}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>

        <motion.div
          className="relative mt-16 text-center group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5"
            >
              <span className="relative z-10">Explore All Projects</span>
              <svg
                className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
// SkillsBar Component
const SkillsBar = ({
  skills,
  className = ''
}: {
  skills: string[];
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`${className}`}
  >
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full text-sm bg-white/80 text-pink-600 border border-pink-200 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

// Skills component
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
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <SectionHeading>
            Skills &amp; Technologies
          </SectionHeading>

          {/* Skills Bar */}
          <div className="mb-12">
            <h3 className="text-center text-lg font-medium text-gray-600 mb-4">
              My Technical Stack
            </h3>
            <SkillsBar skills={resume.skills} />
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold mb-4 text-slate-800 pb-2 border-b border-slate-200">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm border border-slate-200 hover:bg-slate-50 transition-colors"
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

// Contact Section - New addition
const Contact = () => (
  <Section className="relative">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <SectionHeading className="mb-6">
          Get In Touch
        </SectionHeading>
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




export default function Home() {
  return (
    <main className="relative min-h-screen text-gray-800 overflow-hidden">
      <Hero />
      <div className="relative z-0 backdrop-blur-sm">
        <FeatureBoxes />
        <ProfessionalJourney />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}