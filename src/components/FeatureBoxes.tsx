import { resume, Experience } from '@/data/resume';
import { motion } from 'framer-motion';
import { socials, Social } from '@/data/socials';

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

// Define the SVG icons and their brand colors
const socialIconMap: Record<string, { icon: JSX.Element; bgColor: string; name: string }> = {
  github: {
    name: "GitHub",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    bgColor: "bg-gray-800 hover:bg-gray-700",
  },
  linkedin: {
    name: "LinkedIn",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    bgColor: "bg-blue-700 hover:bg-blue-600",
  },
  mail: {
    name: "Email",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
      </svg>
    ),
    bgColor: "bg-red-500 hover:bg-red-400",
  },
  youtube: {
    name: "Youtube",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M12.04,4.84c-2.6,0-4.7,2.11-4.7,4.71V14c0,2.6,2.11,4.71,4.7,4.71s4.7-2.11,4.7-4.71V9.55 C16.74,6.95,14.63,4.84,12.04,4.84z M10.03,14.43V9.12l4.01,2.66L10.03,14.43z M21.64,8.2c-0.23-0.84-0.91-1.52-1.75-1.75 C18.26,6.09,12,6.09,12,6.09s-6.26,0-7.89,0.36C3.27,6.68,2.59,7.36,2.36,8.2C2,9.84,2,12.25,2,12.25s0,2.41,0.36,4.05 c0.23,0.84,0.91,1.52,1.75,1.75C5.74,18.41,12,18.41,12,18.41s6.26,0,7.89-0.36c0.84-0.23,1.52-0.91,1.75-1.75 C22,14.66,22,12.25,22,12.25S22,9.84,21.64,8.2z" />
      </svg>
    ),
    bgColor: "bg-red-600 hover:bg-red-500",
  },
  whatsapp: {
    name: "WhatsApp",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.712-1.011zM11.893 9.631c-.128-.072-.282-.117-.453-.125-.229-.014-.366-.027-.529-.027-.222 0-.483.08-.739.265-.282.205-.465.447-.663.711-.221.282-.375.488-.508.683-.188.282-.342.517-.466.683s-.234.305-.366.387c-.246.15-.492.234-.739.234-.304 0-.609-.08-.897-.254-1.003-.609-1.669-1.249-2.196-2.204-.434-.795-.61-1.53-.625-2.196.014-.678.178-1.249.434-1.733.221-.398.529-.732.902-1.011.304-.221.592-.342.881-.413.282-.072.453-.08.609-.08.205 0 .483.043.663.221.188.188.282.398.311.592.027.188.027.366.014.529-.027.188-.072.282-.128.354s-.094.117-.165.15c-.072.043-.117.057-.165.057-.08 0-.15-.014-.205-.027-.117-.057-.234-.141-.387-.282-.188-.17-.304-.27-.354-.304-.057-.057-.117-.088-.188-.128-.117-.072-.221-.072-.311-.043-.107.027-.205.08-.282.15-.08.072-.141.15-.188.246-.043.08-.08.188-.094.282-.014.117-.014.205.014.305.027.08.069.165.141.265.08.117.165.205.265.305.117.117.234.205.354.282.117.072.246.117.387.141.17.027.311.027.453-.014.15-.043.311-.128.492-.265.188-.15.304-.246.387-.311l.421-.546c.08-.094.141-.165.188-.221.043-.072.08-.128.117-.188.08-.117.128-.246.128-.375s-.027-.265-.08-.375c-.057-.117-.15-.188-.282-.234l-.104-.028z"/>
      </svg>
    ),
    bgColor: "bg-green-500 hover:bg-green-400",
  },
  bookly: {
    name: "Bookly",
    icon: ( 
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7v-5z"/>
      </svg>
    ),
    bgColor: "bg-yellow-500 hover:bg-yellow-400",
  },
  default: {
    name: "Link",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
      </svg>
    ),
    bgColor: "bg-gray-500 hover:bg-gray-400",
  }
};

// Navigation functions
const handleNavigation = (section: string) => {
  // For sections that exist on the same page
  const sectionId = `#${section}`;
  const element = document.querySelector(sectionId);
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // If section doesn't exist, you could navigate to a different page
    // For example: window.location.href = `/portfolio/${section}`;
    window.location.href = `/${section}`;
    console.log(`Navigate to ${section} section`);
  }
};

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
        duration: 0.6,
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
          {/* Experience Card - Purple - Clickable */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-purple-400 p-8 text-right text-white h-full flex flex-col cursor-pointer transition-all duration-300"
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation('experience')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('experience');
              }
            }}
            aria-label="View Experience section"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="flex-1 flex flex-col items-end relative z-10">
              <div className="mb-6">
                <p className="text-sm font-medium">MY PORTFOLIO</p>
                <h3 className="text-4xl font-bold">Experience</h3>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">Click to explore →</span>
                </div>
              </div>
              <div className="mt-6 w-full bg-white rounded-lg p-4 text-left text-gray-800 overflow-y-auto max-h-64 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

          {/* Projects Card - Teal - Clickable */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-teal-300 p-8 text-right text-white h-full flex flex-col cursor-pointer transition-all duration-300"
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation('projects')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('projects');
              }
            }}
            aria-label="View Projects section"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="flex-1 flex flex-col items-end relative z-10">
              <div className="mb-6">
                <p className="text-sm font-medium">MY PORTFOLIO</p>
                <h3 className="text-4xl font-bold">Projects</h3>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">Click to explore →</span>
                </div>
              </div>
              <div className="mt-6 w-full bg-white rounded-lg p-4 text-left text-gray-800 overflow-y-auto max-h-64 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="w-full bg-blue-700 h-4 mb-6 rounded-t-lg"></div>
                <div className="flex justify-between items-center mb-4">
                  <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                  <div className="flex gap-2">
                    <div className="px-4 py-1 rounded bg-gray-100 text-xs text-gray-600">Filter</div>
                    <div className="px-4 py-1 rounded bg-blue-500 text-xs text-white flex items-center">
                      View All <span className="ml-1">▼</span>
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

          {/* Notes Card - Peach - Clickable */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-orange-200 p-8 text-right text-gray-800 h-full flex flex-col cursor-pointer transition-all duration-300"
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation('about')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('about');
              }
            }}
            aria-label="View About/Notes section"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="flex-1 flex flex-col items-end relative z-10">
              <div className="mb-6">
                <p className="text-sm font-medium">MY PORTFOLIO</p>
                <h3 className="text-4xl font-bold">Notes</h3>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm bg-white bg-opacity-30 px-3 py-1 rounded-full text-gray-700">Click to explore →</span>
                </div>
              </div>
              <div className="mt-6 w-full bg-white rounded-lg p-4 text-left overflow-y-auto max-h-64 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

          {/* Contact Me Card - Light Blue - Already has clickable elements */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-3xl bg-blue-200 p-8 text-right text-gray-800 h-full flex flex-col cursor-pointer transition-all duration-300"
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation('contact')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('contact');
              }
            }}
            aria-label="View Contact section"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="flex-1 flex flex-col items-end relative z-10">
              <div className="mb-6">
                <p className="text-sm font-medium">MY PORTFOLIO</p>
                <h3 className="text-4xl font-bold">Contact Me</h3>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm bg-white bg-opacity-30 px-3 py-1 rounded-full text-gray-700">Click to explore →</span>
                </div>
              </div>
              
              <div className="mt-6 w-full bg-white rounded-lg p-4">
                <div className="text-center mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">{resume.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{resume.title}</p>
                  <p className="text-xs text-gray-500 mb-4">{resume.location}</p>
                  
                  <div className="flex justify-center items-center gap-3 mt-4 flex-wrap">
                    {socials.map((social: Social) => {
                      const iconDetails = socialIconMap[social.icon.toLowerCase()] || socialIconMap.default;
                      const isMailLink = social.url.startsWith('mailto:');
                      const isWhatsAppLink = social.url.startsWith('https://wa.me/');
                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target={!isMailLink && !isWhatsAppLink ? "_blank" : "_self"}
                          rel={!isMailLink && !isWhatsAppLink ? "noopener noreferrer" : ""}
                          aria-label={`Contact ${resume.name} via ${iconDetails.name}`}
                          title={iconDetails.name}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-110 ${iconDetails.bgColor}`}
                          onClick={(e) => e.stopPropagation()} // Prevent parent click handler
                        >
                          {iconDetails.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
                
                {socials.find(s => s.icon.toLowerCase() === 'bookly') && (
                  <div className="mt-6">
                    <a 
                      href={socials.find(s => s.icon.toLowerCase() === 'bookly')?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-500 text-white text-sm font-medium py-3 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors cursor-pointer"
                      onClick={(e) => e.stopPropagation()} // Prevent parent click handler
                    >
                      Book Consultation
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default FeatureBoxes;