import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Choten Labs",
  description: "Website redesign for service-based businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
      <GoogleTagManager gtmId="G-VPDH4G3GWE" />
    </html>
  );
}
