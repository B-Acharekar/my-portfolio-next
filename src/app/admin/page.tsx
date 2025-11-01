'use client'

import { motion } from 'framer-motion'

export default function AdminPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-300/20 dark:border-gray-700/30 rounded-2xl p-10 shadow-lg text-center max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-600 bg-clip-text text-transparent">
          Admin Access
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mb-8">
          Manage your content securely using the Sanity Studio dashboard.
        </p>

        <a
          href="/studio"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          Go to Sanity Studio
        </a>
      </motion.div>
    </section>
  )
}
