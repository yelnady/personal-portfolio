'use client';

import { resume, Experience, Education } from '@/data/resume';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import FeatureBoxes from '@/components/FeatureBoxes'
import Link from 'next/link';
import Hero from '@/components/Hero';
import { socials } from '@/data/socials';
import { SectionHeading } from '@/components/SectionHeading';

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

// SectionHeading component

// Projects Section with improved card design
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
    
// Skills component
const Skills = () => {
  const skillCategories = [
    {
      title: "Technologies & Libraries",
      skills: resume.technologies
    },
    {
      title: "MLOps",
      skills: resume.mlOps
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
          <SectionHeading  className="md:text-5xl mb-4">
            Skills &amp; Technologies
          </SectionHeading>

        

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
                  {category.skills?.map(skill => (
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
        I'm always happy to connect with others in the field for knowledge sharing, speaking engagements, or light advisory conversations. Feel free to reach out — I’d love to hear from you.</p>

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
          {socials.linkedin && (
            <a
              href={socials.linkedin.url}
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
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}