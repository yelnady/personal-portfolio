import { resume, Experience, Education, } from '@/data/resume';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

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
      <Section id="features" className="pt-0 pb-20 md:pt-0 md:pb-32 -mt-20 relative z-10 px-0 max-w-full">
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Experience Card - Purple */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-3xl bg-purple-400 p-8 text-right text-white h-full flex flex-col"
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              <div className="flex-1 flex flex-col items-end">
                <div className="mb-6">
                  <p className="text-sm font-medium">MY PORTFOLIO</p>
                  <h3 className="text-4xl font-bold">Experience</h3>
                </div>
                
                <div className="mt-6 w-full bg-white rounded-lg p-4 text-left text-gray-800 overflow-y-auto max-h-64 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Experience content from resume.ts */}
                  <div className="w-full bg-blue-700 h-4 mb-6 rounded-t-lg"></div>
                  <div className="space-y-6">
                    {resume.experience.map((exp: Experience, index: number) => (
                      <div key={index} className="bg-white border border-gray-200 rounded p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                            {exp.position}
                          </span>
                          <span className="text-xs text-gray-500">
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900">{exp.company}</h4>
                        <p className="text-xs text-gray-500 mb-2">{exp.location}</p>
                        
                        <div className="mt-2">
                          <h5 className="text-xs font-medium text-gray-700 mb-1">Highlights:</h5>
                          <ul className="text-xs list-disc pl-4 space-y-1">
                            {exp.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="text-gray-600">{highlight}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-2">
                          <div className="flex flex-wrap gap-1 mt-2">
                            {exp.technologies.map((tech, tIndex) => (
                              <span key={tIndex} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
  
            {/* Projects Card - Teal */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-3xl bg-teal-300 p-8 text-right text-white h-full flex flex-col"
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              <div className="flex-1 flex flex-col items-end">
                <div className="mb-6">
                  <p className="text-sm font-medium">MY PORTFOLIO</p>
                  <h3 className="text-4xl font-bold">Projects</h3>
                </div>
                
                <div className="mt-6 w-full bg-white rounded-lg p-4 text-left text-gray-800 overflow-y-auto max-h-64 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Projects interface mockup showing skills from resume */}
                  <div className="w-full bg-blue-700 h-4 mb-6 rounded-t-lg"></div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="flex gap-2">
                      <div className="px-4 py-1 rounded bg-gray-100 text-xs text-gray-600">Filter</div>
                      <div className="px-4 py-1 rounded bg-blue-500 text-xs text-white flex items-center">
                        View All
                        <span className="ml-1">▼</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded mb-3">Current Focus</div>
                    <div className="space-y-3">
                      {resume.currentFocus.map((focus, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded p-3 shadow-sm">
                          <h4 className="text-gray-800 text-sm font-medium mb-2">{focus}</h4>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {resume.skills.slice(0, 2).map((skill, idx) => (
                              <span key={idx} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
  
            {/* Notes Card - Peach */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-3xl bg-orange-200 p-8 text-right text-gray-800 h-full flex flex-col"
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              <div className="flex-1 flex flex-col items-end">
                <div className="mb-6">
                  <p className="text-sm font-medium">MY PORTFOLIO</p>
                  <h3 className="text-4xl font-bold">Notes</h3>
                </div>
                
                <div className="mt-6 w-full bg-white rounded-lg p-4 text-left overflow-y-auto max-h-64 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Notes interface showing personal values from resume */}
                  <div className="bg-gray-800 rounded-t-lg p-2 flex items-center">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-white text-xs">Personal Values</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-b-lg overflow-y-auto max-h-52 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <h4 className="font-medium text-gray-900 mb-3 text-sm">My Values & Mission</h4>
                    
                    <div className="space-y-3">
                      {resume.personalValues.map((value, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <p className="text-sm text-gray-700">{value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {resume.mission && (
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2 text-sm">Mission Statement</h5>
                        <p className="text-xs text-gray-600">{resume.mission}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
  
            {/* Contact Me Card - Light Blue */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-3xl bg-blue-200 p-8 text-right text-gray-800 h-full flex flex-col"
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              <div className="flex-1 flex flex-col items-end">
                <div className="mb-6">
                  <p className="text-sm font-medium">MY PORTFOLIO</p>
                  <h3 className="text-4xl font-bold">Contact Me</h3>
                </div>
                
                <div className="mt-6 w-full bg-white rounded-lg p-4">
                  <div className="text-center mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">{resume.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{resume.title}</p>
                    <p className="text-xs text-gray-500">{resume.email}</p>
                    <p className="text-xs text-gray-500 mb-4">{resume.location}</p>
                    
                    <div className="flex justify-center gap-4 mt-4">
                      {/* Social Media Icons */}
                      {resume.linkedin && (
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                      )}
                      {resume.github && (
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                      )}
                      {resume.twitter && (
                        <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                      )}
                      {resume.instagram && (
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="bg-blue-100 text-blue-600 text-sm font-medium py-2 px-4 rounded-lg text-center hover:bg-blue-200 transition-colors cursor-pointer">
                      Book Consultation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    );
  };
  export default FeatureBoxes;