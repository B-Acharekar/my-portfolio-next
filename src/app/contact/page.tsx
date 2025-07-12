'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from 'react-icons/fa6'; // If FaXTwitter isn't available, fallback to FaTwitter
import ContactForm from '@/components/ContactForm'; 

export default function ContactSection() {
  return (
    <section className="min-h-[80vh] px-6 md:px-16 py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-violet-600">Contact Me</h2>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm open to internships, freelance work, or collaboration. Let’s build something meaningful together. Feel free to connect with me!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-6 text-2xl mb-10 text-gray-600 dark:text-gray-300">
          <a
            href="mailto:bhushanacharekar1725@gmail.com"
            aria-label="Email"
            className="hover:text-violet-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/bhushan-acharekar-6a0440225"
            aria-label="LinkedIn"
            className="hover:text-violet-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://t.me/BhushanAcharekar"
            aria-label="Telegram"
            className="hover:text-violet-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <FaTelegram/>
          </a>

          <a
            href="https://www.instagram.com/itz_bhuzy.17"
            aria-label="Instagram"
            className="hover:text-violet-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/B-Acharekar"
            aria-label="GitHub"
            className="hover:text-violet-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/Acharek7Bhushan"
            aria-label="X / Twitter"
            className="hover:text-violet-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
          >
            <FaXTwitter />
            
          </a>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </motion.div>
    </section>
  );
}
