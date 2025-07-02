'use client';

import React from 'react';
import { ThemeProvider as ThemeContextProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeContextProvider>
  );
}
