import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const font = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-jakarta',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "Tanmay's Portfolio",
  description: "A simple Framer motion portfolio",
  metadataBase: new URL('https://zapper9982.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zapper9982.github.io',
    title: "Tanmay's Portfolio",
    description: 'Computer Science Undergrad at IIITDM Jabalpur. Full Stack Developer & Tech Explorer.',
    siteName: "Tanmay's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={font.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
