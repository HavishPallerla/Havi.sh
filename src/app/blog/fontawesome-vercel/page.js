'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function FontAwesomeVercelPost() {
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
                <div className={`text-sm font-medium ${
                  isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
                }`}>
                  havish
                </div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  published on 2025-03-15 • 5 min read
                </div>
              </div>
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${
            isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
          }`}>
            How to get FontAwesome Pro to work with Vercel deployment
          </h1>

          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : ''
          }`}>
            <div className={`text-lg leading-relaxed space-y-6 ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/80'
            }`}>
              <p>
                Whilst making this website, I opted to use <a href="https://fontawesome.com" className={`${
                  isDark ? 'text-[#fee6cd] hover:text-gray-300' : 'text-[#18243E] hover:text-[#18243E]/70'
                } transition-colors duration-200 underline`}>FontAwesome</a>&apos;s icons as they have such an expansive library available.
              </p>

              <p>
                On top of that, I decided to use their Pro library, however once deploying, the build would fail with <a href="https://vercel.com" className={`${
                  isDark ? 'text-[#fee6cd] hover:text-gray-300' : 'text-[#18243E] hover:text-[#18243E]/70'
                } transition-colors duration-200 underline`}>Vercel</a> due to a lack of permissions to install the required packages.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Solution
              </h2>

              <p>
                The simplest way to resolve this is to create a <code className={`px-2 py-1 rounded text-sm ${
                  isDark ? 'bg-gray-800 text-[#fee6cd]' : 'bg-[#18243E]/10 text-[#18243E]'
                }`}>.npmrc</code> file at the root of your Next.js application, like so:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  .npmrc
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_FONTAWESOME_TOKEN_HERE`}
                </pre>
              </div>

              <ul className="space-y-2">
                <li>
                  You can find your token <a href="https://fontawesome.com/account" className={`${
                    isDark ? 'text-[#fee6cd] hover:text-gray-300' : 'text-[#18243E] hover:text-[#18243E]/70'
                  } transition-colors duration-200 underline`}>here</a>.
                </li>
              </ul>

              <p>
                Once you&apos;ve added this file to your project root, Vercel will be able to authenticate with FontAwesome&apos;s npm registry during the build process and successfully install your Pro packages.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Additional Tips
              </h2>

              <p>
                Make sure to add your <code className={`px-2 py-1 rounded text-sm ${
                  isDark ? 'bg-gray-800 text-[#fee6cd]' : 'bg-[#18243E]/10 text-[#18243E]'
                }`}>.npmrc</code> file to your <code className={`px-2 py-1 rounded text-sm ${
                  isDark ? 'bg-gray-800 text-[#fee6cd]' : 'bg-[#18243E]/10 text-[#18243E]'
                }`}>.gitignore</code> if you&apos;re committing your auth token directly, or better yet, use environment variables in production for enhanced security.
              </p>

              <p>
                This solution works for any private npm registry, not just FontAwesome Pro. The key is providing the proper authentication credentials in your <code className={`px-2 py-1 rounded text-sm ${
                  isDark ? 'bg-gray-800 text-[#fee6cd]' : 'bg-[#18243E]/10 text-[#18243E]'
                }`}>.npmrc</code> file.
              </p>
            </div>
          </div>

          <div className={`mt-16 pt-8 border-t ${
            isDark ? 'border-gray-700' : 'border-[#18243E]/20'
          }`}>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog" 
                className={`inline-flex items-center space-x-2 ${
                  isDark ? 'text-gray-400 hover:text-[#fee6cd]' : 'text-[#18243E]/60 hover:text-[#18243E]'
                } transition-colors duration-200`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span>Back to all posts</span>
              </Link>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/havishpallerla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${
                    isDark ? 'text-gray-400 hover:text-[#fee6cd]' : 'text-[#18243E]/60 hover:text-[#18243E]'
                  } transition-colors duration-200`}
                >
                  <Image
                    src={isDark ? "/icons/github-dark.svg" : "/icons/github.svg"}
                    alt="github"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
