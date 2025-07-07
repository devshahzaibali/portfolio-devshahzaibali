import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HydrationSafe from "@/components/HydrationSafe";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import PersonSchema from "@/components/PersonSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: "Shahzaib Ali – Developer Portfolio",
  description: "Full-Stack Developer | Blog | Contact | Projects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
      </head>
      <body>
        <DefaultSeo {...SEO} />
        <PersonSchema />
        <GoogleAnalytics />
        <HydrationSafe>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </HydrationSafe>
      </body>
    </html>
  );
}
