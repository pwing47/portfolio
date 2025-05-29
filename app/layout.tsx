import type { Metadata } from "next";
import { Kreon, Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from './AOSProvider';
import GoogleAnalytics from './GoogleAnalytics';

const kreon = Kreon({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philip Cowles | Web developer, digital marketer, and UX designer",
  description: "Certified Sitecore CMS developer, content author, and UX designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kreon.className} antialiased`}>
      <GoogleAnalytics />
      <body>
        <AOSProvider>
              {children}
            </AOSProvider>
      </body>
    </html>
  );
}
