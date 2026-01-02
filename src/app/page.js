'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const ROLES = [
  {
    title: 'Software Engineering Internship',
    company: 'Humana',
    dates: 'May 2025 — Dec. 2025',
    desc: 'Optimized Resource-Based Interface Tool (Project ORBIT)',
  },
  {
    title: 'Software Research',
    company: 'NASA',
    dates: 'Jan. 2025 — May 2025',
    desc: 'Worked on VULCAN research and tooling for space systems.',
  },
  {
    title: 'Software Research',
    company: 'College of Engineering at UMich',
    dates: 'Sep. 2024 — March 2025',
    desc: 'The Future of Programming Lab (Project Hazel); advised by Dr. Cyrus Omar',
  },
];

const EDUCATION = [
  {
    school: 'University of Michigan',
    degree: 'Computer Science',
    dates: 'May 2027',
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  const social = [
    { href: 'https://linkedin.com/in/havishpallerla', alt: 'linkedin' },
    { href: 'https://discord.com/users/248496824506253322', alt: 'discord' },
    { href: 'mailto:pallerla@umich.edu', alt: 'email' },
    { href: 'https://twitter.com/havishpallerla', alt: 'x-twitter' },
  ];

  return (
    <>
      <div className={`site-root ${inter.className}`}>
        <header className="hero">
          <nav className="flex items-center justify-end px-8 py-6 relative z-20">
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
            <div className="name">Havish Pallerla</div>
          </div>

          <div className="timeline-arc" aria-hidden>
            <svg viewBox="0 0 1600 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,120 C400,20 1200,20 1600,120" fill="none" stroke="var(--line)" strokeWidth="1" />
            </svg>
          </div>
        </header>

        <main className="resume-container z-30">
          <section className="timeline">
            {EDUCATION.map((e, i) => (
              <div key={i} className="timeline-row">
                <div>
                  <div className="role-title">{e.school}</div>
                  <div className="role-desc">{e.degree}</div>
                </div>
                <div className="role-dates">{e.dates}</div>
              </div>
            ))}

            <div className="education-sep" aria-hidden />
          </section>

          <section className="timeline">
            {ROLES.map((r, idx) => (
              <div key={idx} className="timeline-row">
                <div className="role-left">
                  <div className="role-title">{r.title} <span className="role-company">{r.company}</span></div>
                  <div className="role-desc">{r.desc}</div>
                </div>
                <div className="role-dates">{r.dates}</div>
              </div>
            ))}
          </section>

          <div className="links-row">
            <div className="links-left flex items-center">
              {social.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer">
                  <Image className="social-icon" src={isDark ? `/icons/${s.alt}-dark.svg` : `/icons/${s.alt}.svg`} alt={s.alt} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}