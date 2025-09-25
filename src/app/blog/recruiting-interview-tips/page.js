'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SwirlBackground from '../../components/SwirlBackground';

const inter = Inter({ subsets: ['latin'] });

export default function RecruitingInterviewTipsPost() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

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

        <main className="px-8 py-8 max-w-4xl mx-auto relative z-10 animate-in slide-in-from-bottom-4 duration-500">
          <Link 
            href="/blog" 
            className={`inline-flex items-center space-x-2 text-sm mb-8 ${
              isDark ? 'text-gray-400 hover:text-[#fee6cd]' : 'text-[#18243E]/60 hover:text-[#18243E]'
            } transition-colors duration-200`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to blog</span>
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src={isDark ? "/logo.png" : "/logo-dark.png"}
                  alt="Havish Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className={`font-medium ${isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'}`}>
                  Havish Pallerla
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-[#18243E]/60'}`}>
                  September 18, 2025 • 7 min read
                </p>
              </div>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
              isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
            }`}>
              Essential Recruiting Interview Tips: A Developer&apos;s Perspective
            </h1>

            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
              Practical advice and insights from my experience interviewing at top tech companies, including preparation strategies and what really matters.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Career', 'Interviews', 'Tech'].map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs ${
                    isDark 
                      ? 'bg-gray-800 text-gray-300' 
                      : 'bg-[#18243E]/10 text-[#18243E]/70'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : 'prose-gray'
          }`}>
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Having gone through numerous interviews at companies ranging from startups to FAANG, I&apos;ve learned that successful interviewing isn&apos;t just about technical skills—it&apos;s about preparation, communication, and understanding what interviewers are really looking for. Here are the insights that made the difference in my interview journey.
              </p>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                1. Technical Preparation That Actually Works
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                <strong>Practice solving problems out loud.</strong> I can&apos;t stress this enough—your thought process is often more important than getting the perfect solution. During my interviews at Salesforce and other companies, what impressed interviewers was my ability to communicate my reasoning clearly.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Focus on these key areas:
              </p>

              <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                <li><strong>Data Structures & Algorithms:</strong> Master the fundamentals—arrays, linked lists, trees, graphs, and common algorithms. Use LeetCode, but don&apos;t just memorize solutions.</li>
                <li><strong>System Design:</strong> Even for junior roles, understand basic concepts like scalability, databases, and API design. Draw diagrams and explain trade-offs.</li>
                <li><strong>Your Tech Stack:</strong> Be ready to deep-dive into technologies you&apos;ve actually used. I was asked detailed questions about React hooks, Salesforce Apex, and database optimization.</li>
              </ul>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                2. The STAR Method for Behavioral Questions
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Behavioral questions trip up many technical candidates, but they&apos;re crucial. Use the STAR method (Situation, Task, Action, Result) and prepare 4-5 solid stories that showcase different qualities.
              </p>

              <div className={`p-6 rounded-lg border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-[#fee6cd]/20 border-[#18243E]/20'
              }`}>
                <p className={`font-semibold mb-3 ${isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'}`}>
                  Example from my experience:
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                  When asked about handling a challenging project, I talked about developing the Smart Email Triage System for Auto-Owners Insurance. I outlined the specific technical challenges (Situation), my responsibility to improve email routing efficiency (Task), the NLP approach I implemented (Action), and the measurable impact on response times (Result).
                </p>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                3. Research and Tailor Your Approach
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                <strong>Know the company and role inside out.</strong> Read recent news, understand their tech stack, and identify how your experience aligns with their challenges. For my Salesforce interview, I researched their Lightning platform extensively and connected it to my previous experience with web components.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Key research areas:
              </p>

              <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                <li>Company mission, recent product launches, and engineering blog posts</li>
                <li>Technologies they use (check job postings and engineering team profiles)</li>
                <li>Interviewer backgrounds on LinkedIn (respectfully)</li>
                <li>Common interview questions for that specific company (Glassdoor, Blind)</li>
              </ul>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                4. Ask Strategic Questions
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Your questions reveal how much you care about the role and company culture. Here are questions that have served me well:
              </p>

              <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                <li>&quot;What does success look like in this role after 6 months?&quot;</li>
                <li>&quot;How does the team handle technical debt and code quality?&quot;</li>
                <li>&quot;What&apos;s the biggest technical challenge the team is facing right now?&quot;</li>
                <li>&quot;How do you support professional development and learning?&quot;</li>
              </ul>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                5. The Follow-Up Game
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Always send a personalized thank-you email within 24 hours. Reference specific conversation points and reiterate your interest. I&apos;ve had recruiters tell me that thoughtful follow-ups helped tip the scales in my favor.
              </p>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Common Mistakes to Avoid
              </h2>

              <div className={`p-6 rounded-lg border ${
                isDark ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'
              }`}>
                <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-300' : 'text-red-800'}`}>
                  <li><strong>Jumping straight to code</strong> without clarifying requirements</li>
                  <li><strong>Not asking questions</strong> when stuck—interviewers want to help</li>
                  <li><strong>Talking too much or too little</strong>—practice finding the right balance</li>
                  <li><strong>Not having examples ready</strong> for common behavioral questions</li>
                  <li><strong>Appearing unprepared</strong> about the company or role</li>
                </ul>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Final Thoughts
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Remember that interviews are conversations, not interrogations. The best interviews I&apos;ve had felt like collaborative problem-solving sessions where both sides were evaluating fit. Stay curious, be authentic, and don&apos;t be afraid to show your passion for technology and learning.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Every rejection is a learning opportunity, and every interview makes you better at the next one. The skills you build—clear communication, structured thinking, and technical depth—will serve you throughout your career, not just during job searches.
              </p>

              <div className={`mt-12 p-6 rounded-lg border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-[#fee6cd]/20 border-[#18243E]/20'
              }`}>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-[#18243E]/60'}`}>
                  <strong>Have questions about interviewing or want to share your own experiences?</strong> Feel free to reach out—I&apos;m always happy to help fellow developers navigate their career journey.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}