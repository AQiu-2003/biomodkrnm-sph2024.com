"use client";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import { websiteMetaData } from "@/data/websiteMetaData";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space_grotesk.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header setMobileMenuOpen={setMobileMenuOpen} />
            <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
            <main className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
