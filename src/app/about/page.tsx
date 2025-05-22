'use client';

import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import SectionHeading from '@/components/SectionHeading';
import { YouTubeVideos } from '@/components/YouTubeVideos';
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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 pt-24 pb-16">
        <SectionHeading
          children="About Me"
          description="Learn more about my background, experience, and what drives me."
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-invert">
              {resume.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/5 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-foreground/70">{resume.location}</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Current Focus</h3>
              <ul className="list-disc list-inside text-foreground/70 space-y-2">
                {resume.currentFocus.map((focus, index) => (
                  <li key={index}>{focus}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          children="Work Timeline"
          description="My professional journey and key milestones."
          className="mb-12"
        />
        
        <div className="space-y-12">
          {resume.experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative pl-8 border-l border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1.5 ring-4 ring-background" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-foreground/60">{exp.position}</p>
                <p className="text-sm text-foreground/60">
                  {exp.startDate} - {exp.endDate || 'Present'}
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <ProfessionalJourney />
        <YouTubeVideos />
      </section>
    </div>
  );
}
