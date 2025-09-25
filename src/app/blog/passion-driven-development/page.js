'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SwirlBackground from '../../components/SwirlBackground';

const inter = Inter({ subsets: ['latin'] });

export default function PassionDrivenDevelopmentPost() {
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
                  September 22, 2025 • 8 min read
                </p>
              </div>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
              isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
            }`}>
              Building Apps That Fuel Your Passions: A Developer&apos;s Learning Journey
            </h1>

            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
              How creating SideQuest for travel and Arcode for learning transformed my approach to software development, and why building solutions for your own interests is the key to continuous growth.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Learning', 'Development', 'Passion', 'Growth'].map((tag) => (
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
                There&apos;s something magical that happens when you build software to solve your own problems. It&apos;s not just about the end product—it&apos;s about the learning journey, the passion that drives you to iterate until it&apos;s perfect, and the deep understanding you gain along the way. Let me share how building apps for my own interests has shaped my growth as a developer and why I believe this approach is the secret to continuous learning.
              </p>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                When Problems Become Passion Projects
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Every great app starts with a frustration. For me, it was trying to plan the perfect trip with friends and getting overwhelmed by scattered information, conflicting recommendations, and the complexity of coordinating everyone&apos;s preferences. That frustration became <strong>SideQuest</strong>—a full-stack travel platform that now serves 100+ users with personalized itinerary recommendations, Google Maps integration, and sub-200ms response times.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                But here&apos;s what I learned: <em>building SideQuest taught me more about software engineering than any tutorial ever could</em>. When you&apos;re solving your own problem, every design decision matters. You can&apos;t fake understanding when you&apos;ll be using the app yourself every day.
              </p>

              <div className={`p-6 rounded-lg border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-[#fee6cd]/20 border-[#18243E]/20'
              }`}>
                <p className={`font-semibold mb-3 ${isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'}`}>
                  What building SideQuest taught me:
                </p>
                <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                  <li><strong>Full-stack architecture:</strong> Understanding how frontend React communicates with backend APIs</li>
                  <li><strong>Database optimization:</strong> Making queries fast when you have real users waiting</li>
                  <li><strong>User experience design:</strong> What actually matters when someone is planning their dream vacation</li>
                  <li><strong>AWS deployment:</strong> Moving from localhost to production with confidence</li>
                  <li><strong>Performance monitoring:</strong> Why sub-200ms response times became non-negotiable</li>
                </ul>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Learning Through Play: The Arcode Story
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                After SideQuest, I realized something profound: <strong>I learn best when I&apos;m having fun</strong>. Traditional coding tutorials felt disconnected from real-world application, and I wanted something more engaging. That&apos;s when I started building <strong>Arcode</strong>—a gamified learning platform where coding meets the arcade.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Arcode isn&apos;t just another learning platform. It&apos;s designed to make programming education engaging through interactive challenges, progress tracking, and skill-based advancement. But more importantly, building it became my playground for experimenting with new technologies and learning concepts I&apos;d only read about in documentation.
              </p>

              <h3 className={`text-xl font-semibold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                The Learning-by-Building Cycle
              </h3>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Here&apos;s what I discovered: when you build apps for your own interests, you create a powerful feedback loop. You use the app, find pain points, iterate on solutions, and in the process, you naturally learn new technologies because you need them to solve real problems.
              </p>

              <div className={`my-6 p-4 rounded-lg ${
                isDark ? 'bg-gray-800/30' : 'bg-gray-50'
              }`}>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-green-400' : 'text-green-700'
                }`}>
                  <code>
{`// Example: How Arcode pushed me to learn new React patterns
const useGameProgress = (userId, challengeId) => {
  const [progress, setProgress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom hook I built to manage game state
  // Led me to learn about React Context, useReducer, 
  // and advanced state management patterns
  
  useEffect(() => {
    // This challenge made me dive deep into
    // performance optimization and caching strategies
    const loadProgress = async () => {
      const cached = await getCachedProgress(userId, challengeId);
      if (cached && !isStale(cached)) {
        setProgress(cached);
      } else {
        const fresh = await fetchProgress(userId, challengeId);
        setCachedProgress(userId, challengeId, fresh);
        setProgress(fresh);
      }
      setIsLoading(false);
    };
    
    loadProgress();
  }, [userId, challengeId]);
  
  return { progress, isLoading };
};`}
                  </code>
                </pre>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                My Current Learning Goals and Why They Matter
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Building passion projects has shown me where I want to grow next. Right now, I&apos;m focused on diving deeper into <strong>C++</strong> because I want to understand how high-performance systems really work. It&apos;s one thing to use a React framework; it&apos;s another to understand the underlying memory management and optimization that makes everything possible.
              </p>

              <div className={`p-6 rounded-lg border ${
                isDark ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'
              }`}>
                <p className={`font-semibold mb-3 ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                  My current learning roadmap:
                </p>
                <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
                  <li><strong>C++ mastery:</strong> Understanding memory management, pointers, and system-level programming</li>
                  <li><strong>Advanced algorithms:</strong> Building a stronger foundation in computational complexity</li>
                  <li><strong>Quality assurance expertise:</strong> Diving deeper into testing frameworks and automation</li>
                  <li><strong>System architecture:</strong> Learning to design scalable, maintainable systems from the ground up</li>
                  <li><strong>Performance optimization:</strong> Making applications not just work, but work beautifully</li>
                </ul>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                The QA Passion: Why I Love Testing Software
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                One area where my passion really shines is <strong>quality assurance and testing</strong>. There&apos;s something deeply satisfying about building robust systems that work reliably under pressure. When I developed the Smart Email Triage System for Auto-Owners Insurance, it wasn&apos;t just about getting the NLP classification working—it was about ensuring it could handle thousands of emails without fail, classify them accurately, and integrate seamlessly with existing systems.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                I love the detective work of QA: finding edge cases, stress-testing systems, and building comprehensive test suites that give you confidence in your code. It&apos;s not just about preventing bugs—it&apos;s about understanding your system so deeply that you can predict how it will behave in scenarios you haven&apos;t even encountered yet.
              </p>

              <h3 className={`text-xl font-semibold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Building Test-Driven Passion Projects
              </h3>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                When I work on personal projects now, I approach them with a QA mindset from day one. For SideQuest, I built comprehensive test suites that validate everything from API response times to user journey completion rates. For Arcode, I created automated testing that ensures the gamification mechanics work correctly across different user skill levels.
              </p>

              <div className={`my-6 p-4 rounded-lg ${
                isDark ? 'bg-gray-800/30' : 'bg-gray-50'
              }`}>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-purple-400' : 'text-purple-700'
                }`}>
                  <code>
{`// Example: Testing approach for SideQuest travel recommendations
describe('Travel Recommendation Engine', () => {
  test('should return personalized recommendations within 200ms', async () => {
    const startTime = Date.now();
    const recommendations = await getRecommendations({
      userId: 'test-user',
      preferences: ['adventure', 'budget-friendly'],
      destination: 'tokyo'
    });
    const responseTime = Date.now() - startTime;
    
    expect(recommendations).toHaveLength(5);
    expect(responseTime).toBeLessThan(200);
    expect(recommendations[0].score).toBeGreaterThan(0.8);
  });
  
  test('should handle edge cases gracefully', async () => {
    // Test with unusual inputs that real users might provide
    const edgeCases = [
      { destination: '', preferences: [] },
      { destination: 'nonexistent-place', preferences: ['invalid-pref'] },
      { destination: 'tokyo', preferences: Array(100).fill('adventure') }
    ];
    
    for (const testCase of edgeCases) {
      const result = await getRecommendations(testCase);
      expect(result).toBeDefined();
      expect(result.error).toBeDefined();
    }
  });
});`}
                  </code>
                </pre>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Why You Should Build Your Own Solutions
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                If you&apos;re reading this and feeling inspired to start your own passion project, here&apos;s my advice: <strong>start with a problem you actually have</strong>. Don&apos;t build another todo app because everyone else is doing it. Build something that you&apos;ll use, iterate on, and care about improving.
              </p>

              <h3 className={`text-xl font-semibold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                The Passion-Driven Learning Framework
              </h3>

              <ol className={`list-decimal pl-6 space-y-3 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                <li><strong>Identify a real problem in your life</strong> - Something that genuinely frustrates you or could be improved</li>
                <li><strong>Start simple, but plan for complexity</strong> - Begin with an MVP but architect for growth</li>
                <li><strong>Use it yourself religiously</strong> - Be your own first and most critical user</li>
                <li><strong>Let the problems guide your learning</strong> - When you hit a wall, that&apos;s where the growth happens</li>
                <li><strong>Test everything obsessively</strong> - Build quality in from the beginning</li>
                <li><strong>Share your journey</strong> - Document what you learn; it helps others and solidifies your knowledge</li>
              </ol>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                The Compound Effect of Passionate Building
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Here&apos;s what I&apos;ve realized: every app I&apos;ve built for myself has made me a better developer in unexpected ways. SideQuest taught me full-stack development and user experience design. Arcode pushed me into gamification psychology and advanced React patterns. The VoiceBiometric Auth system I built for Salesforce deepened my understanding of security and enterprise integration.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Each project builds on the last, creating a compound effect of learning that wouldn&apos;t be possible if I were just following tutorials or building assigned projects. When you solve your own problems, you develop intuition, taste, and technical depth that can&apos;t be taught—only experienced.
              </p>

              <div className={`p-6 rounded-lg border ${
                isDark ? 'bg-green-900/20 border-green-800' : 'bg-green-50 border-green-200'
              }`}>
                <p className={`font-semibold mb-3 ${isDark ? 'text-green-300' : 'text-green-800'}`}>
                  The results speak for themselves:
                </p>
                <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-green-200' : 'text-green-700'}`}>
                  <li>SideQuest now serves <strong>100+ users</strong> with personalized travel recommendations</li>
                  <li>My AI Coding Assistant helps <strong>500+ developers</strong> write better code</li>
                  <li>The Smart Email Triage System processes thousands of emails with <strong>high accuracy</strong></li>
                  <li>Each project taught me technologies I now use professionally</li>
                  <li>The testing and QA skills transfer directly to enterprise environments</li>
                </ul>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Your Turn: What Will You Build?
              </h2>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                I&apos;m sharing my story not to impress, but to inspire. Every successful developer I know has a similar collection of passion projects—apps they built to solve their own problems, learn new technologies, or just because they found something interesting.
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                What problem in your life could you solve with code? What technology have you been curious about but haven&apos;t had a reason to learn? What would you build if you knew you couldn&apos;t fail?
              </p>

              <p className={`${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Don&apos;t wait for permission. Don&apos;t wait for the perfect idea. Start building, start learning, and let your curiosity guide you. The best developers are the ones who never stop being students, and the best way to stay a student is to keep solving problems you care about.
              </p>

              <div className={`mt-12 p-6 rounded-lg border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-[#fee6cd]/20 border-[#18243E]/20'
              }`}>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-[#18243E]/60'}`}>
                  <strong>What are you building next?</strong> I&apos;d love to hear about your passion projects and learning journey. The developer community grows stronger when we share our stories and inspire each other to keep building, keep learning, and keep solving the problems that matter to us.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}