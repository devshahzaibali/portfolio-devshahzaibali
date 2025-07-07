import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Shahzaib Ali – Developer Portfolio",
  description: "Full-Stack Developer | Blog | Contact | Projects",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "typescript"],
  authors: [{ name: "Shahzaib Ali" }],
  creator: "Shahzaib Ali",
  publisher: "Shahzaib Ali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shahzaib-ali.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shahzaib Ali – Developer Portfolio",
    description: "Full-Stack Developer | Blog | Contact | Projects",
    url: "https://shahzaib-ali.vercel.app",
    siteName: "Shahzaib Ali Portfolio",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Shahzaib Ali",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzaib Ali – Developer Portfolio",
    description: "Full-Stack Developer | Blog | Contact | Projects",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
} 