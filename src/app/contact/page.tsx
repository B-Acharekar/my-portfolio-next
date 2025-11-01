'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from 'react-icons/fa6';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section className="px-6 md:px-16 py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE — TEXT & SOCIALS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">Connect</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Whether it’s for internships, freelance collaborations, or exciting
            project ideas — I’m just a message away. Let’s build something
            meaningful together.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-5 text-2xl">
            {[
              {
                href: 'mailto:bhushanacharekar1725@gmail.com',
                Icon: FaEnvelope,
                label: 'Email',
              },
              {
                href: 'https://linkedin.com/in/bhushan-acharekar-6a0440225',
                Icon: FaLinkedin,
                label: 'LinkedIn',
              },
              {
                href: 'https://t.me/BhushanAcharekar',
                Icon: FaTelegram,
                label: 'Telegram',
              },
              {
                href: 'https://www.instagram.com/itz_bhuzy.17',
                Icon: FaInstagram,
                label: 'Instagram',
              },
              {
                href: 'https://github.com/B-Acharekar',
                Icon: FaGithub,
                label: 'GitHub',
              },
              {
                href: 'https://x.com/Acharek7Bhushan',
                Icon: FaXTwitter,
                label: 'X / Twitter',
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-violet-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl shadow-lg rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-semibold mb-6 text-violet-600 text-center">
            Send Me a Message
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
