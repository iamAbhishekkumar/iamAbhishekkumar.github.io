import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.css";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
});

export const metadata: Metadata = {
  title: "Hi, I'm Abhishek Kumar",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={firaMono.className}>{children}</body>
    </html>
  );
}
