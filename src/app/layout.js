import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: 'Havish',
  description: 'Student at Michigan State University (Incoming DS @ UMich (Winter 2026)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-icon.png" type="image/png" />
      </head>
      <body className="antialiased transition-colors duration-300">
        {children}
        <Analytics />
      </body>
    </html>
  );
}