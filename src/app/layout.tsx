import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ana — Creative Project Manager & UX Researcher",
  description:
    "I help businesses and teams turn complex ideas into clear, well-executed projects. Creative Project Manager, UX Researcher, and strategic partner.",
  keywords: ["project manager", "ux researcher", "creative director", "figma", "miro", "product management"],
  openGraph: {
    title: "Ana — Creative Project Manager & UX Researcher",
    description: "Where strategy meets craft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
