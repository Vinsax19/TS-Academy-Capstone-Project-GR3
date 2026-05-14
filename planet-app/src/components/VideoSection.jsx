/**
 * IntroSection.jsx
 * Provides context on how planetary data is used.
 * Features a large video player that autoplays, loops, and is muted.
 */
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="py-24 px-8 bg-white text-black text-center relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
            How Planetary Data Helps Us Understand Space
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Planetary science goes beyond images. Comparing <span className="text-blue-600 font-bold">mass, diameter, gravity</span>, and <span className="text-blue-600 font-bold">density</span>, we gain insight into how planets form, behave, and interact within the solar system.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
