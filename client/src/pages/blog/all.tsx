import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { blogPosts } from '@/data/blog/posts';

export default function AllPostsPage() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language') as 'pt' | 'en';
    if (savedLang) setLanguage(savedLang);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8 text-center">
          {language === 'pt' ? 'Todos os posts' : 'All posts'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/post/${post.slug}`}>
              <a className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                <img className="h-48 w-full object-cover" src={post.coverImage} alt={post.title} />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                    <p className="text-base text-gray-500 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <img className="h-10 w-10 rounded-full" src={post.author.avatar} alt={post.author.name} />
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
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog">
            <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              {language === 'pt' ? 'Voltar para o blog' : 'Back to blog'}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
