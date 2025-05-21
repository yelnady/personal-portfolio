import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yusuf - Software Engineer & AI Specialist',
  description: 'Software engineer specializing in AI/ML and web development. Creating impactful solutions through technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${spaceGrotesk.className} ${inter.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
