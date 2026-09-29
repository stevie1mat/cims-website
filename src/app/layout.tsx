import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahanaim Bible College, COG Mumbai – Mahanaim Bible College",
  description: "Mahanaim Bible College - Church Of God (Full Gospel) In India, Central West Region, Mumbai. Preparing Laborers for His Harvest.",
  keywords: "Mahanaim Bible College, MBC Mumbai, Church of God, Bible College, Theology, Mumbai",
  openGraph: {
    title: "Mahanaim Bible College, COG Mumbai",
    description: "Preparing Laborers for His Harvest - Church Of God (Full Gospel) In India",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
        {children}
      </body>
    </html>
  );
}
