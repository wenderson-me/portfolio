'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Timeline from './Timeline';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    period: '2024 - Hoje',
    title: 'Quality Assurance',
    company: 'Instituto Informática - Segurança Social',
    description: [
      'Realizo testes funcionais, de integração e de banco de dados.',
      'Analiso requisitos de negócios e os traduzo em casos de teste abrangentes.'
    ]
  },
  {
    id: '2',
    period: '2023 - 2024',
    title: 'Quality Assurance',
    company: 'SPMS - Ministério da Saúde',
    description: [
      'Analisei requisitos no Jira para criar e ampliar a cobertura de casos de teste.',
      'Executei testes de aceitação, exploratórios e de regressão.'
    ]
  },
  {
    id: '3',
    period: '2022 - 2023',
    title: 'Quality Assurance Engineer',
    company: 'Tray - E-commerce',
    description: [
      'Desenvolvi e mantive mais de 200 testes automatizados (Cypress, Capybara).',
      'Configurei e otimizei CI/CD no GitLab e implementei testes de performance com K6.'
    ]
  },
  {
    id: '4',
    period: '2019 - 2021',
    title: 'Quality Assurance',
    company: 'Auto Bem - Seguro de veículos',
    description: [
      'Elaborei mais de 500 casos de teste para aplicações web e mobile.',
      'Utilizei o Postman para testes de APIs REST, garantindo a integridade dos endpoints.'
    ]
  }
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
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
              {t('experience.title')}
            </h2>
          </motion.div>
          
          <Timeline items={experienceData} />
        </div>
      </div>
    </section>
  );
}
