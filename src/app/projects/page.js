"use client";

import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const projects = [
  {
    title: 'SideQuest App',
    description: 'A full-stack travel platform with personalized itineraries and Google Maps integration.',
    right: 'Living Document',
    href: '#'
  },
  {
    title: "Arcode",
    description: 'A gamified coding platform combining arcade-style challenges with progress tracking.',
    right: 'Living Document',
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
  return (
    <div className={`site-root ${inter.className}`}>
      <header className="hero">
        <div className="site-title">
          <div className="name">Projects</div>
          <div className="subtitle">A list of selected projects and writeups.</div>
        </div>

        <div className="top-nav" aria-label="primary">
          <nav className="top-nav-inner">
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>

        <div className="timeline-arc" aria-hidden>
          <svg viewBox="0 0 1600 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C400,20 1200,20 1600,120" fill="none" stroke="var(--line)" strokeWidth="1" />
          </svg>
        </div>
      </header>

      <main className="resume-container repo-container">
        <section>
          <div style={{height:8}} />

          {projects.map((p, i) => (
            <a key={i} href={p.href} className="repo-item">
              <div>
                <div className="repo-item-title">{p.title}</div>
                <div className="repo-item-desc">{p.description}</div>
              </div>
              <div className="repo-item-date">{p.right}</div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
