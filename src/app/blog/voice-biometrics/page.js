'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function VoiceBiometricsPage() {
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
          <div className="name">Voice Biometrics</div>
          <div className="subtitle">The Future of Authentication</div>
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
              <h1 className="role-title" style={{fontSize: '2rem', marginBottom: '0.5rem'}}>Voice Biometrics: The Future of Authentication</h1>
              <div className="role-desc" style={{marginTop: '0.5rem'}}>
                <span>Havish • published on July 30, 2025 • 10 min read</span>
              </div>
            </div>
          </div>

          <section className="timeline" style={{marginTop: '2rem'}}>
            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Voice biometric authentication is revolutionizing how we verify identity in digital systems. By analyzing unique vocal characteristics, this technology offers a seamless and secure authentication method.
            </div>

            <h2 className="role-title" style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>How It Works</h2>
            
            <div className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Voice biometrics analyzes over 100 physical and behavioral characteristics in a person's voice, including pitch, tone, cadence, and accent. These features create a unique voiceprint that's nearly impossible to replicate.
            </div>

            <h2 className="role-title" style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Security Considerations</h2>
            
            <ul className="role-desc" style={{lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
              <li><strong>Liveness Detection:</strong> Prevents replay attacks using recorded audio</li>
              <li><strong>Multi-Factor Authentication:</strong> Combine with other methods for enhanced security</li>
              <li><strong>Encryption:</strong> Store voiceprints using strong encryption standards</li>
              <li><strong>Privacy Compliance:</strong> Follow GDPR and biometric data regulations</li>
            </ul>

            <h2 className="role-title" style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Implementation</h2>
            
            <div className="role-desc" style={{lineHeight: '1.8'}}>
              Modern voice biometric systems can be integrated through APIs from providers like Pindrop, Nuance, or Amazon Connect. These solutions offer pre-built models that can be customized for your specific use case, whether it's call center authentication, mobile app security, or IoT device access control.
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
