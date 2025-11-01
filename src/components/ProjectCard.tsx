'use client';

import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: SanityImageSource;
  delay?: number;
};

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  liveUrl,
  image,
  delay = 0,
}: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/70 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-500"
    >
      {/* Gradient Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={urlFor(image).width(800).url()}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-between min-h-[270px] z-10">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-violet-500 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100/70 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200/20 dark:border-violet-700/40 transition"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition"
          >
            <FiGithub className="text-lg" /> Code
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition"
            >
              <FiExternalLink className="text-lg" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
