'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {

    return (
        <section className="min-h-screen bg-white dark:bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

                {/* Left Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl text-center md:text-left"
                >
                    <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Hey, I’m{" "}
                        <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
                            Bhushan Acharekar
                        </span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                        A passionate software developer crafting web and mobile applications.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        I work with technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>Spring Boot (Java)</strong>,
                        <strong> Flask (Python)</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, and <strong>Flutter</strong>
                        to build efficient, scalable, and user-friendly solutions.
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                        {['React', 'Next.js', 'Spring Boot', 'Flask', 'MongoDB', 'PostgreSQL','MySQL', 'Flutter'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-violet-100 dark:bg-violet-800/20 text-violet-700 dark:text-violet-300 rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-violet-600 text-white rounded-xl shadow hover:bg-violet-700 transition"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="/projects"
                            className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            Browse Projects
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 md:mt-0 relative"
                >
                    <Image
                        src="/assets/profile.jpg"
                        alt="Bhushan Acharekar"
                        width={256}
                        height={256}
                        className="rounded-full border-4 border-violet-300 object-cover shadow-xl"
                    />
                    <div className="absolute -inset-2 rounded-full border border-violet-400 animate-pulse opacity-30" />
                </motion.div>
            </div>
        </section>
    );
}
