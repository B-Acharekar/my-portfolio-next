'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Check for admin mode (from URL or environment)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');

    if (
      key === process.env.NEXT_PUBLIC_ADMIN_KEY ||
      process.env.NEXT_PUBLIC_ADMIN_MODE === 'true'
    ) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-violet-600">
          Bhushan.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-violet-600 transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Hidden Admin link */}
          {isAdmin && (
            <Link
              href="/admin"
              className="text-violet-600 hover:underline font-medium"
            >
              Admin
            </Link>
          )}

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1fPcdEyFPQnRquDLWIAjjLw-z92jgn4yO/view?usp=sharing"
            className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#0a0a0a] px-6 pb-4"
          >
            <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-violet-600 transition"
                >
                  {link.label}
                </Link>
              ))}

              {isAdmin && (
                <Link
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-violet-600 font-semibold hover:underline"
                >
                  Admin
                </Link>
              )}

              <a
                href="https://drive.google.com/file/d/1fPcdEyFPQnRquDLWIAjjLw-z92jgn4yO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 font-semibold hover:underline"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
