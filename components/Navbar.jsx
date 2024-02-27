"use client";

import Image from "next/image";
import Link from "next/link";
// fonts
import { Red_Hat_Display } from "next/font/google";
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
// images
import logo from "@/public/images/chotenlabs.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  return (
    <nav className="flex items-center justify-between sticky top-0 bg-bg-light z-40 px-8 py-4 border-b border-black">
      <Link href="/">
        <Image src={logo} height="24" width="auto" alt="Choten Labs logo" />
      </Link>

      <ul className="hidden md:flex items-center gap-4 text-sm text-text-mid">
        <li className="nav-link">
          <a href="#our-process">Our Process</a>
        </li>
        <li className="nav-link">
          <a href="#case-studies">Case Studies</a>
        </li>
        <li className="nav-link">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="nav-link">
          <a href="#faqs">FAQs</a>
        </li>
      </ul>

      {isMobileMenuVisible && (
        <ul className="absolute inset-0 h-screen grid place-content-center bg-bg-dark text-center gap-4 text-2xl text-text-light/80">
          <li className="hover:italic hover:text-text-light transition-colors">
            <a
              onClick={() => setIsMobileMenuVisible(false)}
              href="#our-process"
            >
              Our Process
            </a>
          </li>
          <li className="hover:italic hover:text-text-light transition-colors">
            <a
              onClick={() => setIsMobileMenuVisible(false)}
              href="#case-studies"
            >
              Case Studies
            </a>
          </li>
          <li className="hover:italic hover:text-text-light transition-colors">
            <a onClick={() => setIsMobileMenuVisible(false)} href="#pricing">
              Pricing
            </a>
          </li>
          <li className="hover:italic hover:text-text-light transition-colors">
            <a onClick={() => setIsMobileMenuVisible(false)} href="#faqs">
              FAQs
            </a>
          </li>
        </ul>
      )}

      <Link
        href="/"
        className={`${redHatDisplay.className} hidden md:block btn btn-dark sharp-shadow-sm text-sm px-4 py-2`}
      >
        Apply for a redesign
      </Link>

      <button
        onClick={() => setIsMobileMenuVisible((prev) => !prev)}
        className="md:hidden w-8 h-5 flex flex-col justify-between -skew-x-12"
      >
        <span
          className={`${
            isMobileMenuVisible ? "bg-white" : "bg-black"
          } h-1 w-full`}
        />
        <span
          className={`${
            isMobileMenuVisible ? "bg-white" : "bg-black"
          } h-1 w-full`}
        />
        <span
          className={`${
            isMobileMenuVisible ? "bg-white" : "bg-black"
          } h-1 w-full`}
        />
      </button>
    </nav>
  );
};

export default Navbar;
