import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Syed Zain-ul-Arfien | Frontend Engineer",
  description: "Portfolio of Syed Zain-ul-Arfien, a Frontend Engineer specializing in high-performance, scalable web applications.",
  keywords: ["Frontend Engineer", "React", "Next.js", "Web Developer", "Syed Zain-ul-Arfien"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
