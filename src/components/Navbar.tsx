"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/notes', label: 'Notes' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Slightly increased scroll threshold
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state based on scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-center"> 
        {/* Centering the nav pill */}
        <nav 
          className={`transition-all duration-300 ease-in-out rounded-full p-1.5 ${
            scrolled
              ? 'bg-white/70 shadow-lg backdrop-blur-lg border border-gray-200/50' 
              // Slightly more defined background for the pill on scroll
              : 'bg-gray-100/60 shadow-md backdrop-blur-md border border-transparent' 
              // Softer initial state
          }`}
        >
          <ul className="flex items-center space-x-1"> {/* Reduced space-x for tighter packing */}
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative block px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 ${
                      isActive
                        ? 'bg-white text-gray-700 shadow-sm' // Active item pill style
                        : `text-gray-500 hover:text-gray-700 ${scrolled ? 'hover:bg-white/50' : 'hover:bg-gray-200/50'}`
                    }`}
                  >
                    {item.label}
                    {/* Optional: Add a subtle visual cue like a slash if it's not the last active-like item */}
                    {item.label === 'Work' && !isActive && ( // Example for 'Work'
                        <span className={`absolute -right-1.5 top-1/2 -translate-y-1/2 text-gray-300 ${scrolled ? 'opacity-70' : 'opacity-50'}`}>
                            /
                        </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}