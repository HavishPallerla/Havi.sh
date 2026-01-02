import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: 'Havish',
  description: 'Studying Computer Science at UMich. Stuff I build goes here.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.png" type="image/png" />
      </head>
      <body className="antialiased transition-colors duration-300">
        {children}
        <Analytics />
      </body>
    </html>
  );
}