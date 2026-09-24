import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forever Hub",
  description: "Everything you need to know about WoW Forever.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="px-8 pt-8">
          <ul className="flex gap-4">
            <li className="text-sky-400">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sky-400">
              <Link href="/races">Races</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
