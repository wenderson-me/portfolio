'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { ExperienceItem } from '../types';

interface TimelineProps {
  items: ExperienceItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative mb-16 last:mb-0"
        >
          {/* Timeline dot */}
          <div className="absolute -left-10 top-2 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          
          {/* Date on the left */}
          <div className="absolute -left-32 top-1 text-sm font-semibold text-purple-600 dark:text-purple-400 text-right w-24">
            {item.period}
          </div>
          
          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">
              {item.company}
            </p>
            <ul className="space-y-2">
              {item.description.map((desc, descIndex) => (
                <li
                  key={descIndex}
                  className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                >
                  <span className="w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
