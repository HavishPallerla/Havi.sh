'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });

    const suffix = ['th','st','nd','rd'][(day % 10 > 3 ? 0 : day % 10)];
    return `${month} ${day}${suffix} ${year} • ${time}`;
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#18243E]' : 'bg-[#fee6cd]'
      } ${inter.className}`}
    >
      {/* Main Content pinned near the top */}
      <main className="flex flex-col px-8 py-16 max-w-3xl mx-auto">
        {/* Navigation Links */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-8">
            <Link href="/" className="transform hover:scale-110 transition-all duration-300">
              <div className="relative w-8 h-8">
                <Image
                  src={isDark ? "/logo.png" : "/logo-dark.png"}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="transition-opacity duration-300"
                />
              </div>
            </Link>
            <Link
              href="/projects"
              className={`transform hover:scale-110 transition-all duration-300 ${
                isDark ? 'text-gray-300 hover:text-[#fee6cd]' : 'text-[#18243E]/70 hover:text-[#18243E]'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className={`transform hover:scale-110 transition-all duration-300 ${
                isDark ? 'text-gray-300 hover:text-[#fee6cd]' : 'text-[#18243E]/70 hover:text-[#18243E]'
              }`}
            >
              Blog
            </Link>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg transform hover:scale-110 transition-all duration-300 ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-[#18243E]/10 hover:bg-[#18243E]/20'
            }`}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#fee6cd]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#18243E]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Name */}
        <h1
          className={`text-7xl font-bold mb-4 ${
            isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
          }`}
        >
          Havish Pallerla
        </h1>

        <div className="flex items-center space-x-2 mb-8">
          <span
            className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/70'
            }`}
          >
            Student at Michigan State University
          </span>
        </div>

        {/* Time */}
        <div
          className={`flex items-center space-x-2 mb-8 ${
            isDark ? 'text-[#fee6cd]/70' : 'text-[#18243E]/70'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${
              isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <time>{formatDate(currentTime)}</time>
        </div>

        {/* Social Links (use -dark.svg for dark theme, normal .svg otherwise) */}
        <div className="flex space-x-6">
          {[
            { href: 'https://github.com/havishpallerla', alt: 'github' },
            { href: 'https://linkedin.com/in/havishpallerla', alt: 'linkedin' },
            { href: 'https://discord.com/users/248496824506253322', alt: 'discord' },
            { href: 'mailto:hey@havi.sh', alt: 'email' },
          ].map((social, index) => {
            // If isDark is true, load e.g. "github-dark.svg", else "github.svg"
            const iconPath = isDark
              ? `/icons/${social.alt}-dark.svg`
              : `/icons/${social.alt}.svg`;

            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform hover:scale-110 transition-all duration-300 ${
                  isDark
                    ? 'text-[#fee6cd] hover:text-[#fee6cd]/70'
                    : 'text-[#18243E] hover:text-[#18243E]/70'
                }`}
              >
                <Image
                  src={iconPath}
                  alt={social.alt}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}