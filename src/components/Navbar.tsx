"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/play', label: 'Play' },
  { href: '/notes', label: 'Notes' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className={`${
            scrolled ? 'text-gray-900' : 'text-foreground/90'
          } hover:text-foreground transition-colors font-medium`}
        >
          Yusuf
        </Link>
        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${
                pathname === item.href
                  ? scrolled ? 'text-blue-600' : 'text-foreground'
                  : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-foreground/60 hover:text-foreground/80'
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
