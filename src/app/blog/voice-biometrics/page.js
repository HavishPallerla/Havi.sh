'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function VoiceBiometricsPost() {
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
                  published on 2025-05-07 • 10 min read
                </div>
              </div>
            </div>
          </div>

          
          <h1 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${
            isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
          }`}>
            Voice Biometrics: The Future of Authentication
          </h1>

          
          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : ''
          }`}>
            <div className={`text-lg leading-relaxed space-y-6 ${
              isDark ? 'text-gray-300' : 'text-[#18243E]/80'
            }`}>
              <p>
                Voice biometrics represents a paradigm shift in authentication technology. Unlike traditional methods that rely on something you know (passwords) or something you have (tokens), voice biometrics authenticates users based on their unique vocal characteristics—something you inherently are.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Understanding Voice Biometrics
              </h2>

              <p>
                Voice biometric systems analyze multiple vocal characteristics to create a unique voiceprint:
              </p>

              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Fundamental Frequency:</strong> The rate at which vocal cords vibrate</li>
                <li><strong>Formant Frequencies:</strong> Resonant frequencies shaped by vocal tract anatomy</li>
                <li><strong>Vocal Rhythm:</strong> Speaking pace and pause patterns</li>
                <li><strong>Spectral Features:</strong> Frequency domain characteristics unique to each speaker</li>
                <li><strong>Prosody:</strong> Stress, intonation, and rhythm patterns</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Implementation Architecture
              </h2>

              <p>
                A robust voice biometric system consists of several key components working in harmony:
              </p>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  VoiceBiometricService.java
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`@Service
public class VoiceBiometricService {
    
    private final AudioPreprocessor audioPreprocessor;
    private final FeatureExtractor featureExtractor;
    private final ModelInferenceService modelService;
    
    public EnrollmentResult enrollUser(String userId, byte[] audioData) {
        // Preprocess audio to remove noise and normalize
        ProcessedAudio cleanAudio = audioPreprocessor.process(audioData);
        
        // Extract vocal features
        VocalFeatures features = featureExtractor.extract(cleanAudio);
        
        // Create and store user voiceprint
        Voiceprint voiceprint = modelService.createVoiceprint(features);
        
        return voiceprintRepository.save(userId, voiceprint);
    }
    
    public AuthenticationResult authenticate(String userId, byte[] audioData) {
        ProcessedAudio cleanAudio = audioPreprocessor.process(audioData);
        VocalFeatures features = featureExtractor.extract(cleanAudio);
        
        Voiceprint storedVoiceprint = voiceprintRepository.findByUserId(userId);
        
        double similarity = modelService.calculateSimilarity(
            features, storedVoiceprint
        );
        
        return new AuthenticationResult(
            similarity > AUTHENTICATION_THRESHOLD,
            similarity,
            calculateConfidenceScore(similarity)
        );
    }
}`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Security Considerations
              </h2>

              <p>
                Implementing voice biometrics securely requires addressing several critical security concerns:
              </p>

              <div className={`p-6 my-6 rounded-lg border-l-4 ${
                isDark ? 'bg-yellow-900/20 border-yellow-600' : 'bg-yellow-50 border-yellow-400'
              }`}>
                <h3 className={`font-bold mb-2 ${
                  isDark ? 'text-yellow-400' : 'text-yellow-800'
                }`}>
                  Anti-Spoofing Measures
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-yellow-200' : 'text-yellow-700'
                }`}>
                  Implement liveness detection to prevent replay attacks and synthetic voice generation. Use challenge-response mechanisms and analyze micro-acoustic features that are difficult to replicate.
                </p>
              </div>

              <div className={`rounded-lg p-6 my-6 ${
                isDark ? 'bg-gray-800' : 'bg-[#18243E]/10'
              }`}>
                <div className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-400' : 'text-[#18243E]/60'
                }`}>
                  Anti-Spoofing Implementation
                </div>
                <pre className={`text-sm overflow-x-auto ${
                  isDark ? 'text-gray-300' : 'text-[#18243E]/80'
                }`}>
{`@Component
public class AntiSpoofingValidator {
    
    public ValidationResult validateLiveness(byte[] audioData) {
        // Analyze spectral inconsistencies
        SpectralAnalysis spectral = analyzeSpectralFeatures(audioData);
        
        // Check for compression artifacts
        CompressionAnalysis compression = detectCompressionArtifacts(audioData);
        
        // Analyze voice naturalness
        NaturalnessScore naturalness = assessVoiceNaturalness(audioData);
        
        double spoofingProbability = calculateSpoofingProbability(
            spectral, compression, naturalness
        );
        
        return new ValidationResult(
            spoofingProbability < SPOOFING_THRESHOLD,
            spoofingProbability
        );
    }
    
    private String generateRandomChallenge() {
        // Generate random phrase for challenge-response
        return challengePhraseGenerator.generatePhrase();
    }
}`}
                </pre>
              </div>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Machine Learning Models
              </h2>

              <p>
                Modern voice biometric systems leverage deep learning for improved accuracy:
              </p>

              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Speaker Embedding Networks:</strong> Extract compact speaker representations</li>
                <li><strong>Siamese Networks:</strong> Learn similarity metrics between voice samples</li>
                <li><strong>Transformer Architectures:</strong> Capture long-range dependencies in speech</li>
                <li><strong>Continuous Learning:</strong> Adapt to voice changes over time</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Privacy and Compliance
              </h2>

              <p>
                Voice biometric systems must address stringent privacy requirements:
              </p>

              <ol className="space-y-3 list-decimal list-inside">
                <li><strong>Data Minimization:</strong> Store only necessary biometric templates, not raw audio</li>
                <li><strong>Encryption:</strong> Protect voiceprints with strong encryption at rest and in transit</li>
                <li><strong>Consent Management:</strong> Implement clear opt-in/opt-out mechanisms</li>
                <li><strong>Data Retention:</strong> Define and enforce appropriate retention policies</li>
                <li><strong>Audit Trails:</strong> Maintain comprehensive logs for compliance</li>
              </ol>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${
                isDark ? 'text-[#fee6cd]' : 'text-[#18243E]'
              }`}>
                Real-World Applications
              </h2>

              <p>
                Voice biometrics is already transforming authentication across industries:
              </p>

              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Banking:</strong> Phone-based customer authentication and fraud prevention</li>
                <li><strong>Healthcare:</strong> Secure access to patient records and medical devices</li>
                <li><strong>Government:</strong> Identity verification for citizen services</li>
                <li><strong>Corporate:</strong> Secure building access and system authentication</li>
                <li><strong>Call Centers:</strong> Automatic caller verification and personalization</li>
              </ul>

              <p>
                As voice biometric technology continues to mature, we can expect to see broader adoption and integration with emerging technologies like edge computing and federated learning, making authentication more secure, convenient, and privacy-preserving than ever before.
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
