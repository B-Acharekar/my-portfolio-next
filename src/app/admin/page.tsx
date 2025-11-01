'use client'

import { useEffect, useState } from 'react'

export default function AdminPage({ searchParams }: { searchParams: { key?: string } }) {
  const valid = searchParams.key === process.env.NEXT_PUBLIC_ADMIN_KEY
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Detect system theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
    // Listen for system theme changes
    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener)
    return () =>
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener)
  }, [])

  if (!valid)
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          theme === 'dark' ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'
        }`}
      >
        <p className="text-xl font-semibold">404 | Not Found</p>
      </div>
    )

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#0d0d0d] text-white'
          : 'bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900'
      }`}
    >
      <div className="p-8 rounded-2xl shadow-lg border border-gray-300/20 backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Access</h1>
        <a
          href="/studio"
          className={`px-6 py-3 rounded-lg text-lg font-medium transition ${
            theme === 'dark'
              ? 'bg-violet-600 hover:bg-violet-500 text-white'
              : 'bg-violet-500 hover:bg-violet-600 text-white'
          }`}
        >
          Go to Sanity Studio
        </a>
      </div>
    </main>
  )
}
