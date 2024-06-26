import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { incognito, gitlabmono } from "@/components/fonts/fonts";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});


export const metadata: Metadata = {
  title: "Ajay Mandal",
  description: "My Portfolio Website",
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-light.png",
        href: "/logo-light.png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} bg-zinc-900 text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
