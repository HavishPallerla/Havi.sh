import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Havish Pallerla</title>
        <meta name="description" content="Havish Pallerla's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
        {/* Logo */}
        <Link href="/">
          <img src="/my-logo.png" alt="Logo" className="w-12 h-12 mb-4" />
        </Link>

        {/* Name and Description */}
        <h1 className="text-6xl font-bold">Havish Pallerla</h1>
        <p className="mt-2 text-xl text-gray-400">Student at Michigan State University</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/havishpallerla" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/havishpallerla" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://discord.com/users/248496824506253322" target="_blank" rel="noopener noreferrer">
            <img src="/icons/discord.svg" alt="Discord" className="w-6 h-6" />
          </a>
          <a href="mailto:hey@havi.sh">
            <img src="/icons/email.svg" alt="Email" className="w-6 h-6" />
          </a>
        </div>
      </main>
    </>
  );
}