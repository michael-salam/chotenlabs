import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";

import { Inter, Red_Hat_Display } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Choten Labs",
  description: "Website redesign for businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>{children}</body>
      <GoogleTagManager gtmId="G-VPDH4G3GWE" />
    </html>
  );
}
