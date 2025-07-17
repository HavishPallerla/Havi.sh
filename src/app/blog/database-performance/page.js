'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SwirlBackground from '../../components/SwirlBackground';

const inter = Inter({ subsets: ['latin'] });

export default function DatabasePerformancePost() {
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
                  published on 2025-01-28 • 12 min read
                </div>
              </div>
            </div>
          </div>

          
          <h1 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${
            isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
          }`}>
            Optimizing Database Performance in Spring Boot Applications
          </h1>

          
          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : ''
          }`}>
            <div className={`text-lg leading-relaxed space-y-6 ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/80'
            }`}>
              <p>
                Database performance is often the bottleneck in enterprise Spring Boot applications. As your application scales, inefficient database queries can bring your system to a crawl. This comprehensive guide covers advanced strategies for optimizing database performance in Spring Boot applications.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Common Performance Bottlenecks
              </h2>

              <p>
                Before diving into solutions, let's identify the most common database performance issues:
              </p>

              <ul className="space-y-2 list-disc list-inside">
                <li><strong>N+1 Query Problems:</strong> Loading related entities in separate queries</li>
                <li><strong>Missing Indexes:</strong> Queries scanning entire tables instead of using indexes</li>
                <li><strong>Inefficient JPA Queries:</strong> Complex queries that could be optimized</li>
                <li><strong>Poor Connection Pool Configuration:</strong> Inadequate connection management</li>
                <li><strong>Lack of Caching:</strong> Repeated queries for the same data</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Optimizing JPA Queries
              </h2>

              <p>
                The first step is to optimize your JPA queries. Here's how to solve the N+1 problem:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  UserRepository.java
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Bad: Causes N+1 problem
    @Query("SELECT u FROM User u WHERE u.active = true")
    List<User> findActiveUsers();
    
    // Good: Use JOIN FETCH to load related entities
    @Query("SELECT u FROM User u JOIN FETCH u.orders WHERE u.active = true")
    List<User> findActiveUsersWithOrders();
    
    // Even better: Use @EntityGraph for flexibility
    @EntityGraph(attributePaths = {"orders", "profile"})
    @Query("SELECT u FROM User u WHERE u.active = true")
    List<User> findActiveUsersOptimized();
}`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Implementing Caching Strategies
              </h2>

              <p>
                Caching can dramatically improve performance. Spring Boot provides excellent caching support:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  UserService.java
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`@Service
@Transactional(readOnly = true)
public class UserService {

    @Cacheable("users")
    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }

    @CacheEvict(value = "users", key = "#user.id")
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Caching(evict = {
        @CacheEvict(value = "users", key = "#id"),
        @CacheEvict(value = "userStats", allEntries = true)
    })
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Connection Pool Optimization
              </h2>

              <p>
                Proper connection pool configuration is crucial for high-performance applications:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  application.yml
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      idle-timeout: 300000
      max-lifetime: 1200000
      connection-timeout: 30000
      leak-detection-threshold: 60000
  jpa:
    hibernate:
      ddl-auto: validate
    properties:
      hibernate:
        jdbc:
          batch_size: 20
        order_inserts: true
        order_updates: true
        generate_statistics: false`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Monitoring and Profiling
              </h2>

              <p>
                To optimize effectively, you need to measure performance. Here are essential monitoring strategies:
              </p>

              <ol className="space-y-3 list-decimal list-inside">
                <li><strong>Enable SQL Logging:</strong> Use <code className={`px-2 py-1 rounded text-sm ${
                  isDark ? 'bg-gray-800 text-[#fee6cd]' : 'bg-[#18243E]/10 text-[#18243E]'
                }`}>spring.jpa.show-sql=true</code> in development</li>
                <li><strong>Use Spring Boot Actuator:</strong> Monitor database metrics with <code className={`px-2 py-1 rounded text-sm ${
                  isDark ? 'bg-gray-800 text-[#fee6cd]' : 'bg-[#18243E]/10 text-[#18243E]'
                }`}>/actuator/metrics</code></li>
                <li><strong>Implement Custom Metrics:</strong> Track query execution times and cache hit rates</li>
                <li><strong>Database Profiling:</strong> Use database-specific tools to analyze slow queries</li>
                <li><strong>APM Tools:</strong> Consider tools like New Relic or AppDynamics for production monitoring</li>
              </ol>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Advanced Optimization Techniques
              </h2>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  Batch Processing Example
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`@Transactional
public void processBatch(List<Order> orders) {
    int batchSize = 20;
    
    for (int i = 0; i < orders.size(); i++) {
        orderRepository.save(orders.get(i));
        
        if (i % batchSize == 0 && i > 0) {
            // Flush and clear the persistence context
            entityManager.flush();
            entityManager.clear();
        }
    }
}`}
                </pre>
              </div>

              <p>
                By implementing these optimization strategies systematically, you can achieve significant performance improvements in your Spring Boot applications. Remember to always measure before and after optimization to validate the impact of your changes.
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
