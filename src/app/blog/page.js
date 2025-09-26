'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SwirlBackground from '../components/SwirlBackground';

const inter = Inter({ subsets: ['latin'] });

export default function Blog() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const blogPosts = [
    {
      title: "Meet Havish: The Guy Who's Always Smiling",
      description: "Getting to know the person behind the code: my love for basketball, poker, hanging with friends, and why you'll always catch me with a smile. Plus, how you can reach out if you want to chat!",
      date: "September 22, 2025",
      readTime: "5 min read",
      link: "/blog/meet-havish",
      tags: ["Personal", "Community", "Life"],
      pinned: true
    },
    {
      title: "Building Apps That Fuel Your Passions: A Developer's Learning Journey",
      description: "How creating SideQuest for travel and Arcode for learning transformed my approach to software development, and why building solutions for your own interests is the key to continuous growth.",
      date: "September 22, 2025",
      readTime: "8 min read",
      link: "/blog/passion-driven-development",
      tags: ["Learning", "Development", "Passion", "Growth"]
    },
    {
      title: "Essential Recruiting Interview Tips: A Developer's Perspective",
      description: "Practical advice and insights from my experience interviewing at top tech companies, including preparation strategies and what really matters.",
      date: "September 18, 2025",
      readTime: "7 min read",
      link: "/blog/recruiting-interview-tips",
      tags: ["Career", "Interviews", "Tech"]
    },
    {
      title: "Modern Automotive Software Testing: UI Automation and Quality Assurance",
      description: "Exploring advanced testing methodologies for automotive software interfaces, including automation frameworks, integration testing, and quality validation strategies for mission-critical systems.",
      date: "September 15, 2025",
      readTime: "9 min read",
      link: "/blog/automotive-ui-testing",
      tags: ["Automotive", "Testing", "Automation", "QA"]
    },
    {
      title: "How to get FontAwesome Pro to work with Vercel deployment",
      description: "A quick and concise solution to anyone attempting to use FontAwesome Pro icons with Vercel.",
      date: "September 10, 2025",
      readTime: "5 min read",
      link: "/blog/fontawesome-vercel",
      tags: ["Vercel", "FontAwesome", "Deployment"]
    },
    {
      title: "Building Scalable React Applications with TypeScript",
      description: "Learn best practices for structuring large React applications using TypeScript, including component patterns and state management.",
      date: "August 28, 2025",
      readTime: "8 min read",
      link: "/blog/react-typescript",
      tags: ["React", "TypeScript", "Architecture"]
    },
    {
      title: "Optimizing Database Performance in Spring Boot Applications",
      description: "Explore advanced techniques for improving database query performance and implementing efficient caching strategies in Spring Boot.",
      date: "August 15, 2025",
      readTime: "12 min read",
      link: "/blog/database-performance",
      tags: ["Spring Boot", "Database", "Performance"]
    },
    {
      title: "Voice Biometrics: The Future of Authentication",
      description: "Deep dive into voice biometric technology, security considerations, and implementation strategies for modern applications.",
      date: "July 30, 2025",
      readTime: "10 min read",
      link: "/blog/voice-biometrics",
      tags: ["Biometrics", "Security", "Authentication"]
    },
    {
      title: "AWS Serverless Architecture: From Concept to Production",
      description: "Complete guide to building and deploying serverless applications on AWS, including best practices and cost optimization.",
      date: "July 18, 2025",
      readTime: "15 min read",
      link: "/blog/aws-serverless",
      tags: ["AWS", "Serverless", "Cloud"]
    }
  ];

  return (
    <>
      <SwirlBackground />
      
      <div
        className={`min-h-screen transition-colors duration-300 relative ${
          isDark ? 'bg-[#18243E]/50' : 'bg-[#fee6cd]/50'
        } ${inter.className}`}
      >
        <nav className="flex items-center justify-between px-8 py-6 relative z-10">
          <Link href="/" className="transition-opacity duration-200 hover:opacity-70">
            <Image
              src={isDark ? "/logo.png" : "/logo-dark.png"}
              alt="Havish Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link
              href="/projects"
              className={`text-sm ${
                isDark ? 'text-gray-300 hover:text-[#fee6cd]' : 'text-[#18243E]/70 hover:text-[#18243E]'
              } transition-colors duration-200`}
            >
              projects
            </Link>
            <Link
              href="/blog"
              className={`text-sm ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              } transition-colors duration-200`}
            >
              blog
            </Link>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-[#18243E]/10 hover:bg-[#18243E]/20'
            } transition-colors duration-200`}
          >
            {isDark ? (
              <svg className={`h-4 w-4 text-[#fee6cd]`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className={`h-4 w-4 text-[#18243E]`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        <main className="px-8 py-16 max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
            }`}>
              Blog
            </h1>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/80'
            }`}>
              A collection of blog posts I&apos;ve written. Sorted chronologically.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className={`block p-8 rounded-xl border transition-all duration-200 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800/20 border-gray-700 hover:border-gray-600' 
                    : 'bg-white/20 border-[#18243E]/20 hover:border-[#18243E]/40'
                }`}
              >
                <Link href={post.link} className="block">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-4">
                        <span className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                        }`}>
                          {post.date}
                        </span>
                        <span className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                        }`}>
                          {post.readTime}
                        </span>
                      </div>
                      <svg className={`w-5 h-5 ${
                        isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z" />
                      </svg>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {post.pinned && (
                        <svg className={`h-5 w-5 ${isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      )}
                      <h2 className={`text-2xl font-bold ${
                        isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
                      }`}>
                        {post.title}
                      </h2>
                    </div>
                    
                    <p className={`text-base mb-4 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                    }`}>
                      {post.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDark 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-[#18243E]/10 text-[#18243E]/70'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className={`text-center mt-16 p-8 rounded-xl border ${
            isDark 
              ? 'bg-gray-800/20 border-gray-700' 
              : 'bg-white/20 border-[#18243E]/20'
          }`}>
            <p className={`text-base ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/80'
            }`}>
              More posts coming soon! Follow me on{' '}
              <a 
                href="https://www.linkedin.com/in/havishpallerla/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`font-medium ${
                  isDark ? 'text-[#fee6cd] hover:text-gray-300' : 'text-[#18243E] hover:text-[#18243E]/70'
                } transition-colors duration-200`}
              >
                LinkedIn
              </a>
              {' '}for updates.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
