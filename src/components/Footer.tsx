'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left text-sm text-gray-700 dark:text-gray-300">
          © {year} <span className="font-semibold">Bhushan Acharekar</span> — All rights reserved.
        </div>

        {/* Center: Built with */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ using Next.js, Tailwind & Sanity
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-lg text-gray-600 dark:text-gray-300">
          <a
            href="mailto:bhushanacharekar1725@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-400 rounded-full"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/B-Acharekar"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-400 rounded-full"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bhushan-acharekar-6a0440225"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-400 rounded-full"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
