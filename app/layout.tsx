import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Rosenville Web Portfolio",
  description:
    "Christian Rosenville's web portfolio showcasing his work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="app">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
