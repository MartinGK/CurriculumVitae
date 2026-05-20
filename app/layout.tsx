import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Martin Ezequiel Gainza Koulaksezian · Senior Product Engineer",
  description:
    "Senior Product Engineer building AI-powered products, scalable frontend systems, and polished end-to-end user experiences.",
  metadataBase: new URL("https://martin-gk.com"),
  openGraph: {
    title: "Martin Gainza · Senior Product Engineer",
    description:
      "Product-oriented software engineer specialized in AI-powered products, scalable frontend systems, UX-sensitive execution, and fast product delivery.",
    url: "https://martin-gk.com",
    siteName: "Martin Gainza Portfolio",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink font-sans text-silver antialiased`}>
        {children}
      </body>
    </html>
  );
}
