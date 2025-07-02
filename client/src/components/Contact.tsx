'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'wendrson22@gmail.com',
      href: 'mailto:wendrson22@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/wenderson-me',
      href: 'https://github.com/wenderson-me'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lisboa, Portugal',
      href: null
    }
  ];

  const skills = {
    hardSkills: 'Testes Automatizados, Manuais, Planeamento, Regressão, Unitários, Aceitação, Desempenho, Integração, Banco de Dados.',
    tools: [
      'Playwright', 'Cypress', 'Selenium', 'Postman', 'Jira', 'Git', 'Azure DevOps'
    ]
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('contact.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contato</h3>
              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-600">
                      <IconComponent className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.label}</p>
                        <p className="text-gray-900 dark:text-white">{item.value}</p>
                      </div>
                    </div>
                  );
                  
                  return item.href ? (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Competências</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hard Skills</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {skills.hardSkills}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ferramentas</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
