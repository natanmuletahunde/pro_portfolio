import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Natan Muleta - Software Engineer",
  description: "Software Engineering student at ASTU with 4+ years of experience in full-stack development, AI/ML, and software testing.",
  keywords: ["Software Engineer", "Web Developer", "AI/ML", "Portfolio", "Natan Muleta", "ASTU"],
  authors: [{ name: "Natan Muleta" }],
  openGraph: {
    title: "Natan Muleta - Software Engineer",
    description: "Software Engineering student with expertise in full-stack development, AI/ML, and software testing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
