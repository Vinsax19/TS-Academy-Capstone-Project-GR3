/**
 * VideoSection.jsx
 * Provides context on how planetary data is used.
 * Features a large video player that autoplays, loops, and is muted.
 */
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24! px-8! bg-white text-black text-center relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row-reverse lg:flex-col md:items-center md:justify-between gap-12 text-center md:text-left">
            <div className="md:w-2/3 lg:w-full">
              <h2 className="text-3xl md:text-2xl lg:text-4xl text-center font-bold text-blue-900 mb-2 tracking-tight font-sans md:font-display">
                How Planetary Data Helps Us Understand Space
              </h2>
              <p className="text-gray-600 mb-6 md:mb-0 text-sm md:text-xs lg:text-lg text-center leading-relaxed font-sans md:font-display">
                Planetary science goes beyond images. Comparing <span className="text-blue-600 font-bold">mass, diameter, gravity</span>, and <span className="text-blue-600 font-bold">density</span>, we gain insight into how planets form, behave, and interact within the solar system.
              </p>
            </div>

            <div className="md:w-1/3 lg:w-full md:h-96 lg:h-auto md:flex lg:block items-center justify-center">
              <div className="w-full md:h-64 lg:h-full relative group rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border-8 border-gray-100">
                {/* HTML5 Video as per requirement 4 */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                >
                  <source
                    src="https://www.pexels.com/download/video/36028182/"
                    type="video/mp4"
                  />
                </video>
                
                {/* Overlay Play Icon Decoration */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform group-hover:scale-110 transition-all duration-500">
                    <Play className="fill-current w-6 h-6 ml-1" />
                  </div>
                </div>

                {/* Scanning Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 95%, rgba(255,255,255,0.1) 100%)', backgroundSize: '100% 4px' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
