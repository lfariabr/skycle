import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skycle - Electric Skate-Bike Hybrid",
  description: "Explore innovative electric skate-bike hybrid prototypes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased font-sans bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
