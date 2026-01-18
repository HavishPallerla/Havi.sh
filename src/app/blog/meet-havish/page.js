'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function MeetHavish() {
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
      </header>
      <main className="px-8 py-8 max-w-4xl mx-auto relative z-10 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className={`h-6 w-6 ${isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h1 className={`text-4xl md:text-5xl font-bold ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Meet Havish: The Guy Who&apos;s Always Smiling
              </h1>
              <svg className={`h-6 w-6 ${isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className={`flex flex-wrap justify-center gap-4 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>September 22, 2025</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                }`}>Personal</span>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
                }`}>Community</span>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  isDark ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>Life</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : 'prose-gray'
          }`}>
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Hey there! 👋 I figured it was about time I introduced myself properly. While my other blog posts dive deep into technical topics and career insights, I wanted to share a bit about who I am outside of the code editor. So grab a coffee (or your beverage of choice), and let me tell you about the person behind the projects!
              </p>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                The Smile That Never Quits
              </h2>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                If you&apos;ve ever met me in person, there&apos;s probably one thing you noticed right away: I&apos;m almost always smiling. Friends and family joke that it&apos;s nearly impossible to catch me without a grin on my face. Whether I&apos;m debugging a particularly stubborn piece of code, brainstorming a new project idea, or just walking down the street, you&apos;ll likely see me with that signature smile.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                It&apos;s not just for show either. I genuinely find joy in the little things. There&apos;s something about approaching life with optimism and enthusiasm that makes every day feel like an adventure. Even when challenges come up (and trust me, they do), I&apos;ve found that a positive attitude and a smile can turn obstacles into opportunities.
              </p>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Life Outside the Screen
              </h2>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                While I love writing code and building applications, some of my best moments happen away from the keyboard. Here&apos;s what keeps me energized and inspired:
              </p>

              <h3 className={`text-xl font-semibold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                🏀 Basketball: My First Love
              </h3>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Basketball has been a huge part of my life for as long as I can remember. There&apos;s something magical about the rhythm of the game: the strategy, the teamwork, the split-second decisions, and yes, even the friendly trash talk. Whether it&apos;s a pickup game at the local court or watching my favorite teams battle it out, basketball always gets my adrenaline pumping.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                The sport has taught me so much about collaboration, perseverance, and staying cool under pressure. Skills that, interestingly enough, translate perfectly to software development and working in tech teams!
              </p>

              <h3 className={`text-xl font-semibold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                🃏 Poker and Card Games: The Art of Decision Making
              </h3>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                I&apos;m a huge fan of poker and card games in general. There&apos;s something fascinating about the blend of strategy, psychology, and calculated risk-taking. Whether it&apos;s Texas Hold&apos;em with friends or exploring new card games, I love the mental challenge and the social aspect.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Poker has taught me patience, how to read people and situations, and when to take calculated risks. These lessons have been invaluable in my career, from making technical architecture decisions to navigating team dynamics and knowing when to push for innovative solutions.
              </p>

              <h3 className={`text-xl font-semibold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                🏃‍♂️ Running: My Thinking Time
              </h3>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Running has become one of my favorite ways to clear my head and stay energized. There&apos;s something incredibly therapeutic about hitting the pavement early in the morning or after a long day of coding. It&apos;s my time to think through complex problems, reflect on ideas, or sometimes just enjoy the rhythm of my footsteps.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Some of my best breakthrough moments have happened during runs. When I&apos;m stuck on a particularly challenging coding problem or trying to figure out the architecture for a new project, a good run often provides the mental clarity I need. Plus, it keeps me physically healthy, which is crucial when spending long hours at the computer!
              </p>

              <h3 className={`text-xl font-semibold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                👥 Hanging with Friends: The Energy Booster
              </h3>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                I&apos;m definitely a people person. Some of my favorite memories are just hanging out with friends, whether we&apos;re trying a new restaurant, exploring the city, having deep conversations about life, or just laughing until our stomachs hurt over something completely ridiculous.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                These moments remind me why human connections matter so much. In a world where we can get caught up in screens and notifications, there&apos;s nothing quite like genuine face-to-face time with people you care about.
              </p>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Always Here to Connect
              </h2>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                One thing I want everyone to know: I absolutely love meeting new people and having genuine conversations. Whether you&apos;re a fellow developer looking to chat about tech, someone exploring a career change, a student who could use some guidance, or just someone who wants to say hello, I&apos;m always up for a good conversation.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                Don&apos;t hesitate to reach out! I believe in paying it forward and helping others however I can. Maybe you&apos;re stuck on a coding problem, considering a career in tech, or just want to grab coffee and talk about life. I&apos;d genuinely love to help and get to know you better.
              </p>

              <div className={`p-6 rounded-lg border ${
                isDark ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                  Ways I Love to Help:
                </h3>
                <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                  <li><strong>Career advice:</strong> Navigating tech careers, interview prep, portfolio reviews</li>
                  <li><strong>Technical mentoring:</strong> Code reviews, architecture discussions, learning roadmaps</li>
                  <li><strong>Project collaboration:</strong> Brainstorming ideas, problem-solving, pair programming</li>
                  <li><strong>Life chats:</strong> Sometimes you just need someone to listen and encourage</li>
                  <li><strong>Networking:</strong> Connecting people with similar interests or complementary skills</li>
                </ul>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                The Intersection of Passion and Purpose
              </h2>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                What I love most about my life is how all these different interests and values connect. The strategic thinking from poker helps me approach complex coding problems. The teamwork and communication from basketball translate directly to collaborative development work. The joy I get from hanging with friends reminds me why building user-friendly applications matters so much.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                And that perpetual smile? It&apos;s not just personality; it&apos;s perspective. I genuinely believe that every challenge is a chance to learn something new, every project is an opportunity to make someone&apos;s life better, and every conversation is a chance to brighten someone&apos;s day.
              </p>

              <h2 className={`text-2xl md:text-3xl font-bold mt-12 mb-6 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Let&apos;s Connect!
              </h2>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                So there you have it – a glimpse into who I am when I&apos;m not writing code or debugging applications. I&apos;m just a guy who loves life, enjoys good company, and believes in the power of genuine human connection.
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#18243E]/80'}`}>
                If any of this resonates with you, or if you&apos;re just curious to chat, please don&apos;t be shy! Reach out on LinkedIn, send me an email, or if you&apos;re ever in the area, let&apos;s grab coffee or shoot some hoops. I promise you&apos;ll be greeted with a big smile and genuine interest in getting to know you.
              </p>

              <p className={`text-lg font-semibold text-center mt-8 ${isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'}`}>
                Looking forward to meeting you! 😊🏀🃏
              </p>

              <div className={`mt-12 p-6 rounded-lg border text-center ${
                isDark ? 'bg-green-900/20 border-green-800' : 'bg-green-50 border-green-200'
              }`}>
                <p className={`font-medium ${isDark ? 'text-green-300' : 'text-green-800'}`}>
                  Ready to connect? Find me on{' '}
                  <a href="https://www.linkedin.com/in/havishpallerla/" className="underline hover:no-underline">LinkedIn</a>,{' '}
                  <a href="https://discord.com/users/havishpallerla" className="underline hover:no-underline">Discord</a>, or{' '}
                  <a href="mailto:hey@havi.sh" className="underline hover:no-underline">shoot me an email</a>!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}