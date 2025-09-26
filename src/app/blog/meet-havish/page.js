'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MeetHavish() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setIsDark(theme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`border-b transition-colors duration-300 ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src={isDark ? "/logo-dark.png" : "/logo.png"}
              alt="Havish Pallerla"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Havish Pallerla</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/blog" className={`hover:text-[#fee6cd] transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              ← Back to Blog
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article>
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
            }`}>
              Meet Havish: The Guy Who&apos;s Always Smiling
            </h1>
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
                  <a href="#" className="underline hover:no-underline">LinkedIn</a>,{' '}
                  <a href="#" className="underline hover:no-underline">Discord</a>, or{' '}
                  <a href="#" className="underline hover:no-underline">shoot me an email</a>!
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}