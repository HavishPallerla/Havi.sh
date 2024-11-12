import "./globals.css";

export const metadata = {
  title: "Havish",
  description: "Havish's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Havish</title>
        <link rel="icon" href="/my-logo.png" type="image/png" />
        <meta name="description" content="Havish's Personal Website" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}