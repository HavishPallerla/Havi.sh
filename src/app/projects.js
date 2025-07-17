'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SwirlBackground from './components/SwirlBackground';

const inter = Inter({ subsets: ['latin'] });

export default function Projects() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const projects = [
    {
      title: "discord.bio",
      description: "The simple way to extend your Discord profile.",
      icon: "💬",
      link: "#",
      external: true
    },
    {
      title: "ven.earth",
      description: "The website you&apos;re currently on! Made with Next.js and utilises serverless functions.",
      icon: "🌍",
      link: "#",
      external: true
    },
    {
      title: "Lookup",
      description: "Easily get data about a Discord account from an ID.",
      icon: "🔍",
      link: "#",
      external: true
    },
    {
      title: "Huecord",
      description: "A Discord bot to manage Philips Hue appliances within Discord.",
      icon: "💡",
      link: "#",
      external: true
    },
    {
      title: "Spotify Dashboard",
      description: "A minimalistic dashboard for Spotify, allowing you to view your top songs and artists and play music from the application.",
      icon: "🎵",
      link: "#",
      external: false
    },
    {
      title: "Light Dashboard",
      description: "A Philips Hue dashboard made with React, allowing control of light appliances directly from the browser.",
      icon: "💡",
      link: "#",
      external: false
    }
  ];

  // Additional detailed projects from your description
  const detailedProjects = [
    {
      title: "VoiceBiometric Auth",
      technologies: "Salesforce, Lightning Web Components, Apex, JavaScript, Pindrop APIs",
      description: [
        "Engineered voice biometric system with Pindrop API and Salesforce, reducing verification time by 85%",
        "Developed fraud detection pipeline using voice analysis to identify deepfakes with 90%+ accuracy",
        "Created Salesforce integration with custom LWCs and real-time APIs, saving $25M+ annually"
      ]
    },
    {
      title: "Side Quest",
      technologies: "React, TypeScript, Node.js, AWS",
      description: [
        "Built full-stack travel platform with personalized itinerary recommendations for 100+ users",
        "Integrated Google Maps API and real-time data processing, increasing user engagement by 40%",
        "Deployed on AWS with automated testing and CI/CD, achieving sub-200ms response times"
      ]
    },
    {
      title: "JSON Derulo TaskManager",
      technologies: "Java, Spring Boot, Kubernetes, PostgreSQL",
      description: [
        "Developed task management system with Java Spring Boot backend serving 50+ users",
        "Built automated notification system with email/SMS integration, improving task completion rates by 12%",
        "Implemented role-based access control and JWT authentication, supporting 5+ user permission levels"
      ]
    }
  ];

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
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              } transition-colors duration-200`}
            >
              projects
            </Link>
            <Link
              href="/blog"
              className={`text-sm ${
                isDark ? 'text-gray-300 hover:text-[#fee6cd]' : 'text-[#18243E]/70 hover:text-[#18243E]'
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

        <main className="px-8 py-16 max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
            }`}>
              Projects
            </h1>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/80'
            }`}>
              A list of all the projects I&apos;ve worked on or I&apos;m currently working on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target={project.external ? "_blank" : "_self"}
                rel={project.external ? "noopener noreferrer" : ""}
                className={`block p-6 rounded-xl border transition-all duration-200 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-gray-600' 
                    : 'bg-white/30 border-[#18243E]/20 hover:border-[#18243E]/40'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{project.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className={`font-semibold ${
                        isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
                      }`}>
                        {project.title}
                      </h3>
                      {project.external && (
                        <svg className={`w-4 h-4 ${
                          isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z" />
                        </svg>
                      )}
                    </div>
                    <p className={`text-sm mt-1 ${
                      isDark ? 'text-gray-400' : 'text-[#18243E]/70'
                    }`}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="space-y-12">
            <h2 className={`text-3xl font-bold ${
              isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
            }`}>
              Featured Projects
            </h2>
            
            {detailedProjects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-800/20 border-gray-700' 
                    : 'bg-white/20 border-[#18243E]/20'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 italic ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/70'
                }`}>
                  {project.technologies}
                </p>
                <ul className="space-y-2">
                  {project.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`flex items-start space-x-2 ${
                        isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                      }`}
                    >
                      <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${
                        isDark ? 'bg-[#fee6cd]' : 'bg-[#18243E]'
                      }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}