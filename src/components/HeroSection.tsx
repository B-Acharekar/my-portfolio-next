'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4">
            Hey, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600">
              Bhushan Acharekar
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-5">
            A passionate software developer crafting elegant web and mobile experiences.
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            I specialize in <strong>React</strong>, <strong>Next.js</strong>, <strong>Spring Boot</strong>,
            <strong> Flask</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, and <strong>Flutter</strong>.
            My goal — build scalable, intuitive, and performance-driven applications.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {['React', 'Next.js', 'Spring Boot', 'Flask', 'MongoDB', 'PostgreSQL', 'MySQL', 'Flutter'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full border border-violet-500/30 text-violet-700 dark:text-violet-300 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-950/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 bg-violet-600 text-white font-medium rounded-xl shadow-md hover:bg-violet-700 transition"
            >
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
            >
              Browse Projects
            </Link>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            <Image
              src="/assets/profile.jpg"
              alt="Bhushan Acharekar"
              width={280}
              height={280}
              className="rounded-full border-4 border-violet-400 object-cover shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full border-2 border-violet-500/40 blur-[2px] group-hover:animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
