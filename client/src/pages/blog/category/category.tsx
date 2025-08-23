import React, { useState, useEffect } from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import { blogCategories, blogPosts, BlogPost, BlogCategory } from '@/data/blog/posts';
import { ChevronLeft } from 'lucide-react';

export default function CategoryPage() {
  const [, params] = useRoute('/blog/category/:slug');
  const [, setLocation] = useLocation();
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [category, setCategory] = useState<BlogCategory | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language') as 'pt' | 'en';
    if (savedLang) {
      setLanguage(savedLang);
    }

    if (params?.slug) {
      const foundCategory = blogCategories.find((cat: BlogCategory) => cat.id === params.slug);
      if (foundCategory) {
        setCategory(foundCategory);
        const categoryPosts = blogPosts.filter(post =>
          post.category.id === foundCategory.id &&
          post.language === language
        );
        setPosts(categoryPosts);
      } else {
        setLocation('/blog');
      }
    }
  }, [params, language, setLocation]);

  if (!category) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/blog">
            <a className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
              <ChevronLeft className="h-5 w-5 mr-1" />
              {language === 'pt' ? 'Voltar para o blog' : 'Back to blog'}
            </a>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {language === 'pt' ? category.name : category.name}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {category.name}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.coverImage} alt={post.title} />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link href={`/blog/post/${post.slug}`}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{post.excerpt}</p>
                      </a>
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
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === 'pt' ? 'Nenhum post encontrado nesta categoria.' : 'No posts found in this category.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}