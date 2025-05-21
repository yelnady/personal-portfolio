'use client';

import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import { SectionHeader } from '@/components/section-header';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 pt-24 pb-16">
        <SectionHeader
          title="About Me"
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
        <SectionHeader
          title="Work Timeline"
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
      </section>
    </div>
  );
}
