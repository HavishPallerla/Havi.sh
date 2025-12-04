'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SwirlBackground from './components/SwirlBackground';

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
            Projects
          </Link>
          <Link
            href="/blog"
            className={`text-sm ${
              isDark ? 'text-gray-300 hover:text-[#fee6cd]' : 'text-[#18243E]/70 hover:text-[#18243E]'
            } transition-colors duration-200`}
          >
            Blog
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
        <main className="px-8 py-16 max-w-2xl relative z-10">
        <h1 className={`text-8xl md:text-9xl font-bold mb-8 leading-none ${
          isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
        }`}>
          Havish
        </h1>

        <p className={`text-lg mb-8 leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-[#18243E]/80'
        }`}>
          Studying Computer Science at UMich. Stuff I build goes here.
        </p>

        <div className="flex space-x-4 mb-12">
          {[
            // { href: 'https://github.com/havishpallerla', alt: 'github' },
            { href: 'https://linkedin.com/in/havishpallerla', alt: 'linkedin' },
            { href: 'https://discord.com/users/248496824506253322', alt: 'discord' },
            { href: 'mailto:hey@havi.sh', alt: 'email' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark ? 'text-gray-400 hover:text-[#fee6cd]' : 'text-[#18243E]/60 hover:text-[#18243E]'
              } transition-colors duration-200`}
            >
              <Image
                src={isDark ? `/icons/${social.alt}-dark.svg` : `/icons/${social.alt}.svg`}
                alt={social.alt}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}