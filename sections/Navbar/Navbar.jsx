"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./navbar.css";

// import images
import logo from "@/public/images/chotenlabs.svg";
import arrow from "@/public/images/arrow.svg";

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = (event) => {
      const { scrollY } = window;
      setScrollDistance(scrollY);
    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll, options);
  }, []);

  return (
    <>
      <nav
        className={` ${
          scrollDistance > 100 &&
          "bg-accent/10 backdrop-blur border border-accent/10"
        } flex items-center justify-between w-11/12 mx-auto sticky top-4 mt-4 p-4 lg:py-0 lg:pr-0 lg:pl-8 rounded-full z-50 transition-colors duration-500`}
      >
        <Link href="/">
          <Image src={logo} alt="ChotenLabs logo" height="20" width="auto" />
        </Link>

        <ul
          className={`${
            scrollDistance > 100
              ? "bg-transparent"
              : "bg-accent/10 backdrop-blur border border-accent/10"
          } hidden lg:flex items-center gap-4 rounded-full pl-8 py-4 pr-[2px]`}
        >
          <li className="navlink">
            <a href="#why-redesign">Why redesign?</a>
          </li>
          <li className="navlink">
            <a href="#our-process">Our process</a>
          </li>
          <li className="navlink">
            <a href="#case-studies">Case studies</a>
          </li>
          <li className="navlink">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="navlink">
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <Link href="/free-website-review" className="btn-accent p-4">
              Schedule a free website review
            </Link>
          </li>
        </ul>

        {isMobileMenuVisible && (
          <ul
            onClick={() => setIsMobileMenuVisible(false)}
            className="absolute inset-0 top-20 h-fit rounded-2xl p-8 red-hat-font text-text-mid sm:text-2xl md:text-3xl"
          >
            <li>
              <a
                onClick={() => setIsMobileMenuVisible(false)}
                className="hover:text-text-light hover:italic transition-colors w-full p-4 border-b inline-block"
                href="#why-redesign"
              >
                Why redesign?
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMobileMenuVisible(false)}
                className="hover:text-text-light hover:italic transition-colors w-full p-4 border-b inline-block"
                href="#our-process"
              >
                Our process
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMobileMenuVisible(false)}
                className="hover:text-text-light hover:italic transition-colors w-full p-4 border-b inline-block"
                href="#case-studies"
              >
                Case studies
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMobileMenuVisible(false)}
                className="hover:text-text-light hover:italic transition-colors w-full p-4 border-b inline-block"
                href="#pricing"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMobileMenuVisible(false)}
                className="hover:text-text-light hover:italic transition-colors w-full p-4 border-b inline-block"
                href="#faqs"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="https://www.cognitoforms.com/ChotenLabs/ApplyForARedesign"
                className="p-4 rounded-none inline-block bg-gradient-to-b from-gradient-light-stops-0 to-gradient-light-stops-1 text-text-dark font-semibold hover:opacity-80 transition-opacity w-full"
              >
                Schedule a website review (it's free!)
              </a>
            </li>
          </ul>
        )}

        <button
          onClick={() => setIsMobileMenuVisible((prev) => !prev)}
          className="lg:hidden w-8 h-[25px] flex flex-col justify-between"
        >
          <span
            className={`${
              isMobileMenuVisible && "rotate-45"
            } h-1 w-full bg-white rounded-full transition-all origin-top-left`}
          />
          <span
            className={`${
              isMobileMenuVisible && "opacity-0"
            } h-1 w-full bg-white rounded-full transition-all`}
          />
          <span
            className={`${
              isMobileMenuVisible && "-rotate-45"
            } h-1 w-full bg-white rounded-full transition-all origin-bottom-left`}
          />
        </button>
      </nav>

      {isMobileMenuVisible && (
        <div
          onClick={() => setIsMobileMenuVisible(false)}
          className="fixed inset-0 bg-bg-dark z-20"
        />
      )}
    </>
  );
};

export default Navbar;
