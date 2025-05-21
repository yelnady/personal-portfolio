import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  href: string;
  gradientClass: string;
  icon?: React.ReactNode;
  tags?: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export const ProjectCard = ({
  id,
  title,
  description,
  href,
  gradientClass,
  icon,
  tags = [],
  image,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="group relative overflow-hidden rounded-2xl h-full min-h-[280px] flex flex-col"
    >
      <div className={`relative h-full flex flex-col ${gradientClass} p-6 text-white`}>
        {/* Project image preview on hover */}
        {image && (
          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
          </div>
        )}
        
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-shadow group-hover:text-white transition-colors">
              {title}
            </h3>
            {icon && (
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                {icon}
              </div>
            )}
          </div>
          
          <p className="text-white/90 mb-6 flex-1 group-hover:text-white/95 transition-colors">
            {description}
          </p>
          
          <div className="mt-auto">
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <Link 
                href={href}
                className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <div className="flex space-x-2">
                {github && (
                  <a 
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    aria-label={`View ${title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                
                {demo && (
                  <a 
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    aria-label={`View ${title} demo`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
