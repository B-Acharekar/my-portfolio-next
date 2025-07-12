'use client';

import { urlFor } from '@/sanity/lib/image';
import { motion } from 'framer-motion';

type Project = {
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
    image: any;
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
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={urlFor(image).width(800).url()}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-bold text-violet-600">{title}</h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((item, idx) => (
                        <span
                            key={idx}
                            className="bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-100 px-3 py-1 text-xs rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex gap-4">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-violet-600 hover:underline"
                    >
                        GitHub →
                    </a>
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-green-600 hover:underline"
                        >
                            Live Demo →
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
