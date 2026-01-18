'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function FontAwesomeVercelPage() {
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
          <div className="name">FontAwesome Pro with Vercel</div>
          <div className="subtitle">Quick Integration Guide</div>
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
              <h1 className="role-title" style={{fontSize: '2rem', marginBottom: '0.5rem'}}>How to get FontAwesome Pro to work with Vercel deployment</h1>
              <div className="role-desc" style={{marginTop: '0.5rem'}}>
                <span>Havish • published on September 10, 2025 • 5 min read</span>
              </div>
            </div>
          </div>

          <section className="timeline" style={{marginTop: '2rem'}}>
            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Whilst making this website, I opted to use FontAwesome's icons as they have such an expansive library available.
            </div>

            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              On top of that, I decided to use their Pro library, however once deploying, the build would fail with Vercel due to a lack of permissions to install the required packages.
            </div>

            <h2 className="role-title" style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Solution</h2>
            
            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1rem'}}>
              The simplest way to resolve this is to create a <code style={{background: 'var(--subtle)', padding: '0.2rem 0.4rem', borderRadius: '0.25rem'}}>.npmrc</code> file at the root of your Next.js application, like so:
            </div>

            <div style={{background: 'var(--subtle)', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1.5rem', overflow: 'auto'}}>
              <div className="role-desc" style={{fontFamily: 'monospace', fontSize: '0.9rem'}}>
                <div>.npmrc</div>
                <br/>
                <div>@fortawesome:registry=https://npm.fontawesome.com/</div>
                <div>//npm.fontawesome.com/:_authToken=YOUR_FONTAWESOME_TOKEN_HERE</div>
              </div>
            </div>

            <div className="role-desc" style={{lineHeight: '1.8'}}>
              You can find your token in your FontAwesome account settings. Add this file to your repository and Vercel will be able to authenticate and install the Pro packages during deployment.
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
