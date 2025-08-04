import React from 'react';
import { motion } from 'framer-motion';

const MockupBundle = () => {
  return (
    <section className="py-0 bg-gradient-to-br from-gray-50/60 via-white to-purple-50/30 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-100/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Standalone Mockup Bundle Image */}
        <motion.div
          className="relative hover:scale-105 transition-transform duration-700"
        >
          <img
            src="/images/bundeldark.webp"
            alt="MMplatinum Trading Journal - Professionelles Trading Journal Bundle für Desktop, Tablet und Smartphone"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover mx-auto"
            style={{ aspectRatio: '16/10' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MockupBundle; 