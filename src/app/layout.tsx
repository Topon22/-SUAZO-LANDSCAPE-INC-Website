import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUAZO LANDSCAPE INC | Professional Landscaping Services in Anaheim, CA",
  description:
    "SUAZO LANDSCAPE INC offers top-rated landscaping, lawn care, hardscape, tree services, irrigation, and garden design in Anaheim, CA and surrounding Orange County areas. 5-star rated with 11+ reviews.",
  keywords: [
    "landscaping Anaheim",
    "lawn care Anaheim CA",
    "landscape design Orange County",
    "hardscape patios Anaheim",
    "tree services Anaheim",
    "irrigation sprinkler systems CA",
    "garden design Anaheim",
    "SUAZO LANDSCAPE",
    "professional landscaping",
    "yard maintenance Anaheim",
    "landscape installation",
    "outdoor living spaces Anaheim",
  ],
  authors: [{ name: "SUAZO LANDSCAPE INC" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "SUAZO LANDSCAPE INC | Professional Landscaping Services in Anaheim, CA",
    description:
      "Top-rated landscaping and gardening services in Anaheim, CA. Lawn care, landscape design, hardscape, tree services, irrigation & more. 5.0 rated!",
    url: "https://suazolandscape.com",
    siteName: "SUAZO LANDSCAPE INC",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUAZO LANDSCAPE INC | Professional Landscaping in Anaheim",
    description:
      "Top-rated landscaping services in Anaheim, CA. Lawn care, hardscape, tree services & more. 5.0 rated!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
