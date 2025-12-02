import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Jordy McIntyre | Audio Craft Specialist",
  description: "Audio Engineering + AI Generation Systems + Content Operations. Portfolio showcasing multi-modal AI workflows, knowledge systems, and B2B SaaS content operations.",
  keywords: [
    "Audio Engineering",
    "AI Generation",
    "ElevenLabs",
    "Midjourney",
    "Music Production",
    "Content Operations",
    "Knowledge Systems",
    "B2B SaaS",
  ],
  authors: [{ name: "Jordy McIntyre" }],
  openGraph: {
    title: "Jordy McIntyre | Audio Craft Specialist",
    description: "Portfolio showcasing audio engineering, AI workflows, and content systems",
    siteName: "Jordy McIntyre Portfolio",
    locale: "en_AU",
    type: "website",
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
    <html lang="en-AU">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
