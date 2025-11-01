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
      className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

        {/* Left: Brand Info */}
        <div className="text-center md:text-left text-sm text-gray-700 dark:text-gray-400">
          © {year} <span className="font-semibold text-gray-900 dark:text-gray-100">Bhushan Acharekar</span>
        </div>

        {/* Center: Build Info */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-500">
          Built with Next.js, Tailwind CSS & Sanity
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-lg text-gray-600 dark:text-gray-300">
          <a
            href="mailto:bhushanacharekar1725@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/B-Acharekar"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bhushan-acharekar-6a0440225"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
