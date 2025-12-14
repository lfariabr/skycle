import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
