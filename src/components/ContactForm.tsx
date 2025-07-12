'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Reset the form after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // ✅ Add this!
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return submitted ? (
    <motion.p
      className="text-green-600 text-center mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      ✅ Message sent! I’ll get back to you shortly.
    </motion.p>
  ) : (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <FaUser className="absolute left-4 top-3.5 text-gray-400" />
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-3.5 text-gray-400" />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="relative">
        <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="w-full md:w-auto px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
