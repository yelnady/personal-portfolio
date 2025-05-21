import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  description?: string;
}

export const SectionHeading = ({ children, className = '' }: SectionHeadingProps) => {
  return (
    <h2 
      className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
