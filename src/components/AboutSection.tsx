'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section className="min-h-screen px-6 md:px-16 py-14 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-violet-600"
                >
                    About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-lg leading-7"
                >
                    <p>
                        Hey, I’m <strong>Bhushan Acharekar</strong> — a developer who enjoys turning ideas into fast, functional, and user-friendly web and mobile apps.
                    </p>

                    <p>
                        My journey started with the basics of <strong>C</strong> and <strong>Java</strong>, then expanded into modern stacks like <strong>React</strong>, <strong>Next.js</strong>, <strong>Spring Boot</strong>, and <strong>Flask</strong>. Along the way, I’ve picked up real experience with databases like <strong>PostgreSQL</strong> and <strong>MongoDB</strong>, and even dipped into mobile UI with <strong>Flutter</strong>.
                    </p>

                    <p>
                        I’m currently building <em>Smart Health Ops</em> — a cloud-native platform designed for clinics and doctors. It’s where I get to blend logic, design, and real-time functionality into something that matters.
                    </p>

                    <p>
                        I thrive when I’m building something meaningful — whether that’s a SaaS tool, a custom dashboard, or just a slick UI that feels right. I’m self-taught, docs-driven, and always learning by doing.
                    </p>

                    <p>
                        Outside of code, I’m into <strong>anime</strong>, <strong>Formula 1</strong>, and exploring productivity setups that make dev life smoother.
                    </p>

                    <p>
                        <strong>Tech I work with:</strong> React, Next.js, Flask, Spring Boot, PostgreSQL, MongoDB, Tailwind CSS, Java, Python, Git
                    </p>

                    <p>
                        <strong>Now:</strong> I’m building my portfolio and looking for internships, freelance projects, or collaborators who love shipping great work.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
