import React from 'react';
import { motion } from 'framer-motion';

const MockupShowcase = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Large Image Placeholder */}
        <motion.div
          className="relative max-w-7xl mx-auto"
        >
          <img
            src="/images/darkbundle+.webp"
            alt="MMplatinum Trading Journal Dashboard - Professionelles Trading Journal für erfolgreiche Trader"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MockupShowcase; 