import React, { useState, useEffect } from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import { blogPosts, BlogPost, blogCategories } from '@/data/blog/posts';
import { ChevronLeft } from 'lucide-react';
import { marked } from 'marked';

export default function PostPage() {
  const [, params] = useRoute('/blog/post/:slug');
  const [, setLocation] = useLocation();
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [post, setPost] = useState<BlogPost | null>(null);
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language') as 'pt' | 'en';
    if (savedLang) {
      setLanguage(savedLang);
    }

    if (params?.slug) {
      const foundPost = blogPosts.find(p => p.slug === params.slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        setLocation('/blog');
      }
    }
  }, [params, setLocation]);

  useEffect(() => {
    async function renderMarkdown() {
      if (post?.content) {
        const rendered = await markdownToHtml(post.content);
        setHtml(rendered);
      }
    }
    renderMarkdown();
  }, [post]);

  if (!post) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog">
            <a className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
              <ChevronLeft className="h-5 w-5 mr-1" />
              {language === 'pt' ? 'Voltar para o blog' : 'Back to blog'}
            </a>
          </Link>
        </div>

        <div className="mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg">
        <div className="mb-6">
          <Link href={`/blog/category/${slugify(post.category.id)}`}>
            <a className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
              {post.category.name}
            </a>
          </Link>
        </div>

          <div className="flex items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
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

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Gera um slug a partir do nome da categoria
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove caracteres não alfanuméricos exceto espaços e hífens
    .replace(/\s+/g, '-') // espaços viram hífens
    .replace(/-+/g, '-'); // colapsa hífens consecutivos
}

// Converter markdown em HTML
async function markdownToHtml(markdown: string): Promise<string> {
  return await marked.parse(markdown);
}