"use client";

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const blogPosts = [
    {
      title: "AWS Serverless Architecture: From Concept to Production",
      description: 'Complete guide to building and deploying serverless applications on AWS, including best practices and cost optimization.',
      date: "July 18, 2025",
      readTime: "15 min read",
      link: "/blog/aws-serverless",
      tags: ["AWS", "Serverless", "Cloud"]
    },
    {
      title: "How to get FontAwesome Pro to work with Vercel deployment",
      description: 'A quick and concise solution to anyone attempting to use FontAwesome Pro icons with Vercel.',
      date: "September 10, 2025",
      readTime: "5 min read",
      link: "/blog/fontawesome-vercel",
      tags: ["Vercel", "FontAwesome", "Deployment"]
    },
    {
      title: "Building Scalable React Applications with TypeScript",
      description: 'Learn best practices for structuring large React applications using TypeScript, including component patterns and state management.',
      date: "August 28, 2025",
      readTime: "8 min read",
      link: "/blog/react-typescript",
      tags: ["React", "TypeScript", "Architecture"]
    },
    {
      title: "Voice Biometrics: The Future of Authentication",
      description: 'Deep dive into voice biometric technology, security considerations, and implementation strategies for modern applications.',
      date: "July 30, 2025",
      readTime: "10 min read",
      link: "/blog/voice-biometrics",
      tags: ["Biometrics", "Security", "Authentication"]
    }
];

export default function BlogPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  return (
    <div className={`site-root ${inter.className}`}>
      <header className="hero">
        <nav className="flex items-center justify-between px-8 py-6 relative z-20">
          <div className="flex gap-6 items-center">
            <Link href="/" className="hover:opacity-70 transition-opacity" aria-label="Home">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
            <Link href="/blog" className="text-sm hover:opacity-70 transition-opacity">
              Blog
            </Link>
            <Link href="/projects" className="text-sm hover:opacity-70 transition-opacity">
              Projects
            </Link>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-md bg-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/30"
            aria-label="Toggle color theme"
          >
            {isDark ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                style={{ color: 'white' }}
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                style={{ color: 'var(--foreground)' }}
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </nav>

        <div className="site-title">
          <div className="name">Blog</div>
          <div className="subtitle">A collection of posts; click any item to read more.</div>
        </div>
        <div className="timeline-arc" aria-hidden>
          <svg viewBox="0 0 1600 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C400,20 1200,20 1600,120" fill="none" stroke="var(--line)" strokeWidth="1" />
          </svg>
        </div>
      </header>

      <main className="resume-container z-30">
        <section className="timeline">
          {blogPosts.map((post, i) => (
            <Link key={i} href={post.link} className="timeline-row" style={{marginBottom:12}}>
              <div>
                <div className="role-title">{post.title}</div>
                <div className="role-desc">{post.description}</div>
              </div>
              <div className="role-dates">{post.date}</div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
