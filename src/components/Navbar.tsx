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
  const [mobileMenuOpen, setMobileMenuOpen] =useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isHomePage = pathname === '/';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out`}
    >
      {/*
        - `relative` is for positioning the absolute logo on desktop.
        - `md:justify-center` will center the nav pill on desktop.
        - On mobile, flex items will align to the start by default.
          The logo (if present) will be on the left.
          The mobile menu button uses `ml-auto` to go to the right.
      */}
      <div className="container mx-auto px-4 h-20 flex items-center relative md:justify-center">

        <nav
          className={`hidden md:flex transition-all duration-300 ease-in-out rounded-full p-1.5 ${
            scrolled
              ? 'bg-white/70 shadow-lg backdrop-blur-lg border border-gray-200/50'
              : 'bg-gray-100/60 shadow-md backdrop-blur-md border border-transparent'
          }`}
        >
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative block px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 ${
                      isActive
                        ? 'bg-white text-gray-700 shadow-sm'
                        : `text-gray-500 hover:text-gray-700 ${scrolled ? 'hover:bg-white/50' : 'hover:bg-gray-200/50'}`
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        {/* `md:hidden` makes it only visible on mobile. */}
        {/* `ml-auto` pushes it to the far right on mobile, regardless of logo presence. */}
        <div className="md:hidden ml-auto"> {/* Ensures it's on the right on mobile */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className={`p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 transition-colors duration-300
              ${scrolled || mobileMenuOpen ? 'text-gray-700 hover:text-gray-900' : 'text-gray-500 hover:text-gray-700'}
              ${mobileMenuOpen && (scrolled ? 'bg-white/70' : 'bg-gray-100/60') }
            `}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 w-full transition-all duration-300 ease-in-out shadow-lg
            ${scrolled
              ? 'bg-white/90 backdrop-blur-lg border-t border-gray-200/50'
              : 'bg-gray-100/90 backdrop-blur-md border-t border-gray-200/30'
            }
          `}
          style={{
            maxHeight: mobileMenuOpen ? '100vh' : '0',
            overflow: 'hidden',
            transitionProperty: 'max-height, background-color, backdrop-filter, border-color',
            transitionTimingFunction: 'ease-in-out',
            transitionDuration: '300ms'
          }}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 ${
                        isActive
                          ? 'bg-teal-500 text-white shadow-sm'
                          : `text-gray-600 hover:bg-gray-200/70 hover:text-gray-800 ${scrolled ? 'hover:bg-white/60' : 'hover:bg-gray-200/70'}`
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}