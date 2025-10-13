import React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

// Optimize ClashDisplay font loading
const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://soteriou.dev'),
  title: {
    default: "Alexandros Soteriou - Full-Stack Developer & Designer",
    template: "%s | Alexandros Soteriou"
  },
  description: "Full-Stack Developer & Designer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, scalable digital experiences.",
  keywords: [
    "Full-Stack Developer",
    "Frontend Developer", 
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "UI/UX Designer",
    "Alexandros Soteriou",
    "Portfolio"
  ],
  authors: [{ name: "Alexandros Soteriou", url: "https://soteriou.dev" }],
  creator: "Alexandros Soteriou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soteriou.dev",
    title: "Alexandros Soteriou - Full-Stack Developer & Designer",
    description: "Full-Stack Developer & Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Alexandros Soteriou Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alexandros Soteriou - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandros Soteriou - Full-Stack Developer & Designer",
    description: "Full-Stack Developer & Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@soterioudev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/star.svg",
    shortcut: "/star.svg",
    apple: "/star.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clashDisplay.variable}>
      <body className={clashDisplay.className}>
        <ThemeProvider>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
