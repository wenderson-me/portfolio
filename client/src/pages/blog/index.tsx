import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { blogCategories, getRecentPosts, BlogPost, BlogCategory } from '@/data/blog/posts';

import { ChevronRight } from 'lucide-react';

export default function BlogIndex() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language') as 'pt' | 'en';
    if (savedLang) {
      setLanguage(savedLang);
    }

    setRecentPosts(getRecentPosts());
  }, [language]);

  // Não precisa mais da função getCategoryDescription, pois a descrição está em blogCategories

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {language === 'pt' ? 'Blog' : 'Blog'}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {language === 'pt'
              ? 'Compartilhando conhecimentos sobre QA, automação, fotografia e design.'
              : 'Sharing knowledge about QA, automation, photography, and design.'}
          </p>
        </div>

        {/* Categorias */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'pt' ? 'Categorias' : 'Categories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category) => (
              <Link key={category.id} href={`/blog/category/${category.id}`} className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {language === 'pt' ? category.name : category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400">
                    <span className="text-sm font-medium">
                      {language === 'pt' ? 'Ver artigos' : 'View articles'}
                    </span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Posts recentes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'pt' ? 'Posts recentes' : 'Recent posts'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.coverImage} alt={post.title} />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {language === 'pt' ? post.category.name : post.category.name}
                    </p>
                    <Link href={`/blog/post/${post.slug}`} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={post.author.avatar} alt={post.author.name} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                      <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="blog/all" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                {language === 'pt' ? 'Ver todos os posts' : 'See all posts'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
