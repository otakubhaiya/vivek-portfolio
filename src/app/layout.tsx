import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "i use arch btw",
  description: "i use arch btw",
  icons: "public/file.svg",
  openGraph: {
    title: "i use arch btw",
    description: "i use arch btw",
    images: ["public/next.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
