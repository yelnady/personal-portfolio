import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Space_Grotesk } from 'next/font/google'
import { MouseEffect } from "@/components/MouseEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yusuf - Data Scientist & AI Specialist',
  description: 'Data Scientist specializing in AI/ML and web development. Creating impactful solutions through technology.',
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
        <MouseEffect />
        <Navbar />
        <div className="relative flex-1">
          <main className="relative z-10">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}