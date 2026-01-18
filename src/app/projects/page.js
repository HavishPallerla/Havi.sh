"use client";

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const projects = [
  {
    title: 'SideQuest App',
    description: 'A full-stack travel platform with personalized itineraries and Google Maps integration.',
    right: 'Jan 2025',
    href: '#'
  },
  {
    title: "Arcode",
    description: 'A gamified coding platform combining arcade-style challenges with progress tracking.',
    right: 'Dec 2024',
    href: '#'
  },
  {
    title: 'Smart Email Triage System',
    description: 'Intelligent NLP-powered email classification and routing for customer support.',
    right: 'Nov 2024',
    href: '#'
  },
  {
    title: "VoiceBiometric Auth",
    description: 'Voice biometric fraud detection integrated into Salesforce and Pindrop APIs.',
    right: 'Oct 2024',
    href: '#'
  }
];

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme ? savedTheme === 'dark' : false;
    setIsDark(prefersDark);
    const root = document.documentElement;
    if (prefersDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  const toggleTheme = (newState) => {
    setIsDark(newState);
    const root = document.documentElement;
    if (newState) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
          </div>
          <button
            onClick={() => toggleTheme(!isDark)}
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
          <div className="name">Projects</div>
          <div className="subtitle">A list of selected projects I am passionate about.</div>
        </div>

        <div className="timeline-arc" aria-hidden>
          <svg viewBox="0 0 1600 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C400,20 1200,20 1600,120" fill="none" stroke="var(--line)" strokeWidth="1" />
          </svg>
        </div>
      </header>

      <main className="resume-container z-30">
        <section className="timeline">
          {projects.map((p, i) => (
            <a key={i} href={p.href} className="timeline-row">
              <div>
                <div className="role-title">{p.title}</div>
                <div className="role-desc">{p.description}</div>
              </div>
              <div className="role-dates">{p.right}</div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
