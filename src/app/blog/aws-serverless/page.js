'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function AWSServerlessPage() {
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
          <div className="name">AWS Serverless Architecture</div>
          <div className="subtitle">From Concept to Production</div>
        </div>

        <div className="timeline-arc" aria-hidden>
          <svg viewBox="0 0 1600 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C400,20 1200,20 1600,120" fill="none" stroke="var(--line)" strokeWidth="1" />
          </svg>
        </div>
      </header>

      <main className="resume-container z-30">
        <article className="max-w-3xl mx-auto">
          <div className="timeline-row" style={{borderBottom: 'none', paddingBottom: '1rem'}}>
            <div>
              <h1 className="role-title" style={{fontSize: '2rem', marginBottom: '0.5rem'}}>AWS Serverless Architecture: From Concept to Production</h1>
              <div className="role-desc" style={{marginTop: '0.5rem'}}>
                <span>Havish • published on July 18, 2025 • 15 min read</span>
              </div>
            </div>
          </div>

          <section className="timeline" style={{marginTop: '2rem'}}>
            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Serverless architecture represents a fundamental shift in how we build and deploy applications. By abstracting away server management, developers can focus on writing business logic while AWS handles the underlying infrastructure.
            </div>

            <h2 className="role-title" style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Core Serverless Components</h2>
            
            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1rem'}}>
              A robust serverless architecture leverages multiple AWS services working in harmony:
            </div>

            <ul className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
              <li><strong>AWS Lambda:</strong> Event-driven compute service for executing code</li>
              <li><strong>API Gateway:</strong> Managed service for creating RESTful and WebSocket APIs</li>
              <li><strong>DynamoDB:</strong> Fully managed NoSQL database with single-digit latency</li>
              <li><strong>S3:</strong> Object storage for static assets and data persistence</li>
            </ul>

            <h2 className="role-title" style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Best Practices</h2>
            
            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              When building serverless applications, follow these key principles: optimize cold starts, implement proper error handling, use environment variables for configuration, and monitor performance with CloudWatch.
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
