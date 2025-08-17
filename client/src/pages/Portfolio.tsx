'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download, Mail, Github, MapPin } from 'lucide-react';
import Resume from '../components/Resume';
import { personalInfo, aboutContent, experiences, education, certification, skills, portfolioProjects, contactContent } from '../data/portfolio';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const savedLang = localStorage.getItem('portfolio-language') as 'pt' | 'en';
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('portfolio-theme', !isDark ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'about', href: 'about', label: language === 'pt' ? 'Sobre' : 'About' },
    { key: 'experience', href: 'experience', label: language === 'pt' ? 'Experiência' : 'Experience' },
    { key: 'portfolio', href: 'portfolio', label: language === 'pt' ? 'Portfólio' : 'Portfolio' },
    { key: 'contact', href: 'contact', label: language === 'pt' ? 'Contato' : 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Resume Modal */}
      <dialog id="resume-modal" className="modal bg-black/30 backdrop-blur-sm z-50 rounded-lg overflow-visible">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-5xl w-full max-h-[80vh] overflow-auto m-4 border border-purple-200 dark:border-purple-800">
          <div className="p-4 flex justify-between items-center border-b border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
            <h2 className="text-xl font-bold text-purple-800 dark:text-purple-300">
              {language === 'pt' ? 'Currículo' : 'Resume'}
            </h2>
            <button 
              onClick={() => document.getElementById('resume-modal')?.close()}
              className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800/50 transition-colors"
            >
              <X className="w-5 h-5 text-purple-700 dark:text-purple-300" />
            </button>
          </div>
          <div className="p-4">
            <Resume language={language} />
          </div>
        </div>
      </dialog>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              WM<span className="text-purple-600 dark:text-purple-400">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
                <button
                  onClick={() => document.getElementById('resume-modal')?.showModal()}
                  className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md flex items-center transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </button>

              <div className="flex items-center border-l border-gray-300 dark:border-gray-600 pl-6 ml-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>

                <div className="flex items-center ml-4 text-xs font-semibold">
                  <button
                    onClick={() => {
                      setLanguage('pt');
                      localStorage.setItem('portfolio-language', 'pt');
                    }}
                    className={`transition-opacity ${
                      language === 'pt'
                        ? 'text-purple-600 dark:text-purple-400 opacity-100'
                        : 'text-gray-500 dark:text-gray-400 opacity-50 hover:opacity-100'
                    }`}
                  >
                    PT
                  </button>
                  <span className="mx-1 text-gray-400">/</span>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      localStorage.setItem('portfolio-language', 'en');
                    }}
                    className={`transition-opacity ${
                      language === 'en'
                        ? 'text-purple-600 dark:text-purple-400 opacity-100'
                        : 'text-gray-500 dark:text-gray-400 opacity-50 hover:opacity-100'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 z-50 md:hidden shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>

                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                      <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {isDark ? (
                          <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        ) : (
                          <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-4"
            >
              {personalInfo.name.toUpperCase()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 mb-8"
            >
              {personalInfo.title[language]}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => scrollToSection('portfolio')}
              className="bg-purple-600 dark:bg-purple-500 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              {language === 'pt' ? 'Explorar Projetos' : 'Explore Projects'}
            </motion.button>
          </div>
        </section>

        {/* About Section */}
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
                  src={personalInfo.profileImage}
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
                  {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pt-4">
                  {aboutContent[language].subtitle}
                </h3>

                {aboutContent[language].paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {language === 'pt' ? 'Formação e Certificações' : 'Education and Certifications'}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {education.degree[language]}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {education.institution} ({education.period})
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {certification.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {certification.issuer} ({certification.year})
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
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
                  {language === 'pt' ? 'Percurso Profissional' : 'Professional Journey'}
                </h2>
              </motion.div>

              <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600">
                {experiences.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative mb-16 last:mb-0"
                  >
                    <div className="absolute -left-10 top-2 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                    <div className="absolute -left-32 top-1 text-sm font-semibold text-purple-600 dark:text-purple-400 text-right w-24">
                      {item.period[language]}
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">
                        {item.company}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {item.description[language].map((desc: string, descIndex: number) => (
                          <li
                            key={descIndex}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <span className="w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">
                          {language === 'pt' ? 'Ferramentas utilizadas:' : 'Tools used:'}
                        </span>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {item.tools}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'pt' ? 'Portfólio' : 'Portfolio'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {language === 'pt'
                  ? 'Uma coleção de trabalhos que refletem a minha paixão pela qualidade e pela criatividade.'
                  : 'A collection of works that reflect my passion for quality and creativity.'
                }
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-[4/3]"
                >
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-center items-center p-6 text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title[language]}</h3>
                    <p className="text-sm font-light mb-4">{project.description[language]}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-600 text-white text-xs font-bold py-2 px-4 rounded-full hover:bg-purple-500 transition-all"
                    >
                      {language === 'pt' ? 'Ver Projeto' : 'View Project'}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                <h2 className="text-2xl text-purple-600 dark:text-purple-400 font-bold mb-4">
                  {contactContent[language].subtitle}
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                  {contactContent[language].title}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12">
                  {contactContent[language].description}
                </p>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="bg-purple-600 dark:bg-purple-500 text-white font-bold py-4 px-10 rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  {contactContent[language].button}
                </a>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    {language === 'pt' ? 'Contato' : 'Contact'}
                  </h3>
                  <div className="space-y-4">
                    <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</p>
                        <p className="text-gray-900 dark:text-white">{personalInfo.contact.email}</p>
                      </div>
                    </a>

                    <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Github className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">GitHub</p>
                        <p className="text-gray-900 dark:text-white">github.com/wenderson-me</p>
                      </div>
                    </a>

                    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {language === 'pt' ? 'Localização' : 'Location'}
                        </p>
                        <p className="text-gray-900 dark:text-white">{personalInfo.contact.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    {language === 'pt' ? 'Competências' : 'Skills'}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hard Skills</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skills.hardSkills[language]}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        {language === 'pt' ? 'Ferramentas' : 'Tools'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full"
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
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm font-light">
            &copy; 2024 {personalInfo.name}. {language === 'pt' ? 'Design e desenvolvimento com' : 'Design and development with'}{' '}
            <span className="text-purple-600 dark:text-purple-400">&hearts;</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
