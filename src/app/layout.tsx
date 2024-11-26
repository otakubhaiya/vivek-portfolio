import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import "./globals.scss";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
