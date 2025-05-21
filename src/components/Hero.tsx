'use client';

import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
// Skills Bar Component
const SkillsBar = ({
  skills,
  className = ''
}: {
  skills: string[];
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className={`flex flex-wrap justify-center gap-3 ${className}`}
  >
    {skills.map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 rounded-full text-sm bg-white/80 text-pink-600 border border-pink-200 shadow-sm"
      >
        {skill}
      </span>
    ))}
  </motion.div>
);
const Hero = () => {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-50"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          style={{
            background: 'linear-gradient(45deg, rgba(255, 182, 193, 0.2), rgba(255, 255, 255, 0.1), rgba(221, 160, 221, 0.2))',
            backgroundSize: '300% 300%',
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        {/* Animated blobs */}
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            x: ['0%', '5%', '0%'],
            y: ['0%', '5%', '0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: ['0%', '-5%', '0%'],
            y: ['0%', '-5%', '0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Glass overlay */}
      <div className="relative z-0 backdrop-blur-sm">
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 -z-10"></div>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative inline-block mb-8">
                {/* Star decorations */}
                <div className="absolute -top-6 -left-8 text-yellow-400">
                  <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 leading-tight">
                  {resume.name.split(' ')[0]}
                </h1>
                <div className="absolute -bottom-6 -right-8 text-yellow-400 transform rotate-12">
                  <svg 
                    className="w-8 h-8 animate-pulse" 
                    style={{ animationDelay: '0.5s' }} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl md:text-3xl text-gray-800 mt-6 mb-2 font-medium">
                Hi, I'm {resume.name}
              </p>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
                {resume.title} specializing in {resume.currentFocus[0]}
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                {resume.mission}
              </p>
            </motion.div>

            {/* Skills Section */}
            <SkillsBar
              skills={resume.skills}
              className="mt-8 mb-16"
            />
          </div>
        </section>
      </div>
    </>
  );
};



export default Hero;
