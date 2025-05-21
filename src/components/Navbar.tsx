"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/play', label: 'Play' },
  { href: '/notes', label: 'Notes' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-start/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-foreground/90 hover:text-foreground transition-colors"
        >
          Yusuf
        </Link>
        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm ${
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/60 hover:text-foreground/80'
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
