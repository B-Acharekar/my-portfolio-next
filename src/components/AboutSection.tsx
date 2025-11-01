'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white transition-colors duration-300 flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
        
        {/* Left Side — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600">
            About Me
          </h2>
          <p className="mt-3 text-lg text-violet-600 dark:text-violet-400 font-medium">
            Unlock your true potential.
          </p>

          <div className="mt-8 text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
            <p>
              I’m <strong>Bhushan Acharekar</strong> — a software developer passionate about
              building fast, scalable, and beautifully crafted digital experiences that
              make an impact.
            </p>

            <p>
              Starting with <strong>C</strong> and <strong>Java</strong>, my path evolved into
              full-stack development using <strong>React</strong>, <strong>Next.js</strong>,
              <strong> Flask</strong>, and <strong>Spring Boot</strong>. I love combining backend logic with clean UI using
              <strong> Tailwind CSS</strong> and modern design principles.
            </p>

            <p>
              I’m currently developing <strong>Smart Health Ops</strong> — a cloud-native
              health platform that brings doctors and clinics closer to efficient, real-time
              care management.
            </p>

            <p>
              Outside of code, I’m into <strong>anime</strong>, <strong>Formula 1</strong>, and
              constantly optimizing my workflow for peak focus and creativity.
            </p>

            <blockquote className="border-l-4 border-violet-500 pl-4 italic text-gray-600 dark:text-gray-400">
              “Clean logic, thoughtful design, and consistency — that’s how I build.”
            </blockquote>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tech I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React',
                'Next.js',
                'Spring Boot',
                'Flask',
                'MongoDB',
                'PostgreSQL',
                'Tailwind CSS',
                'Python',
                'Java',
                'Flutter',
                'Git',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full border border-violet-500/30 text-violet-700 dark:text-violet-300 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-950/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-gray-800 dark:text-gray-200">
            <strong>Now:</strong> I’m open to internships, freelance projects, and
            collaborations that combine innovation, impact, and design.
          </p>
        </motion.div>

        {/* Right Side — Subtle Visual (Optional future add: photo or 3D model) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 hidden md:flex justify-center items-center"
        >
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-500 opacity-90 blur-[40px]" />
        </motion.div>
      </div>
    </section>
  );
}
