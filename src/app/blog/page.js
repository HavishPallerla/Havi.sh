"use client";

import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const blogPosts = [
    {
      title: "Meet Havish: The Guy Who's Always Smiling",
      description: "Getting to know me behind the code: my love for basketball, poker, running, hanging with friends, and why you'll always catch me with a smile. Plus, how you can reach out if you want to chat!",
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

export default function BlogPage() {
  return (
    <div className={`site-root ${inter.className}`}>
      <header className="hero">
        <div className="site-title">
          <div className="name">Havish Pallerla</div>
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

      <main className="resume-container">
        <section>
          <h1 className="role-title">Blog</h1>
          <p className="role-desc">A collection of posts; click any item to read more.</p>

          <div style={{height:16}} />

          {blogPosts.map((post, i) => (
            <div key={i} className="timeline-row" style={{marginBottom:12}}>
              <div>
                <div className="role-title">{post.title}</div>
                <div className="role-desc">{post.description}</div>
              </div>
              <div className="role-dates">{post.date}</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
