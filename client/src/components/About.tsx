'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C4E03AQG6kluH8Pe-Gw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629807000416?e=1756339200&v=beta&t=j0dMA1kKLL7ri1QQXMHgnTdNyVQJTKYJ5YxH-BPLbE0"
              alt="Foto de perfil de Wenderson Monteiro"
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 font-light"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.p1')}
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pt-4">
              {t('about.subtitle')}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.p2')}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.p3')}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.p4')}
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.education_title')}
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t('about.degree')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Estácio de Sá Goiás (2018 - 2021)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t('about.cert')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ISTQB® - International Software Testing Qualifications Board (2021)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
