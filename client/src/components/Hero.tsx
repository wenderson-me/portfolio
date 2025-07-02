'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-4"
        >
          WENDERSON MONTEIRO
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 mb-8"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => scrollToSection('portfolio')}
          className="bg-purple-600 dark:bg-purple-500 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          {t('hero.button')}
        </motion.button>
      </div>
    </section>
  );
}
