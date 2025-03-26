import "./globals.css";

export const metadata = {
  title: 'Havish Pallerla',
  description: 'Student at Michigan State University',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/my-logo.png" type="image/png" />
      </head>
      <body className="antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}