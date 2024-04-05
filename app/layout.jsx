import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";

import { Inter, Red_Hat_Display } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

export const metadata = {
  title: "Choten Labs",
  description:
    "We create top-tier business websites on a monthly plan and manage it all so you don't have to.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${redHatDisplay.variable}`}>
      <body>{children}</body>
      <GoogleTagManager gtmId="G-VPDH4G3GWE" />
    </html>
  );
}
