'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download, Mail, Github, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'about', href: 'about' },
    { key: 'experience', href: 'experience' },
    { key: 'portfolio', href: 'portfolio' },
    { key: 'contact', href: 'contact' }
  ];

  return (
    <>
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
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-semibold px-4 py-2 rounded-md hover:bg-purple-200 dark:hover:bg-purple-900 transition-all duration-300 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('nav.cv')}
              </a>

              {/* Theme and Language Switchers */}
              <div className="flex items-center border-l border-gray-300 dark:border-gray-600 pl-6 ml-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
                
                <div className="flex items-center ml-4 text-xs font-semibold">
                  <button
                    onClick={() => setLanguage('pt')}
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
                    onClick={() => setLanguage('en')}
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
                      {t(`nav.${item.key}`)}
                    </button>
                  ))}
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                      <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {theme === 'light' ? (
                          <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        ) : (
                          <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        )}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</span>
                      <div className="flex items-center text-sm font-semibold">
                        <button
                          onClick={() => setLanguage('pt')}
                          className={`px-2 py-1 rounded transition-colors ${
                            language === 'pt' 
                              ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                          }`}
                        >
                          PT
                        </button>
                        <button
                          onClick={() => setLanguage('en')}
                          className={`px-2 py-1 rounded transition-colors ${
                            language === 'en' 
                              ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                          }`}
                        >
                          EN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
