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
  window.addEventListener("scroll", () => setScrollDistance(window.scrollY));

  return (
    <>
      <nav
        className={` ${
          scrollDistance > 100 &&
          "bg-accent/10 backdrop-blur border border-white/10"
        } flex items-center justify-between w-11/12 mx-auto sticky top-4 mt-4 p-4 lg:py-0 lg:pr-0 lg:pl-8 rounded-full z-50 transition-colors duration-500`}
      >
        <Link href="/">
          <Image src={logo} alt="ChotenLabs logo" height="20" width="auto" />
        </Link>

        <ul
          className={`${
            scrollDistance > 100
              ? "bg-transparent"
              : "bg-accent/10 backdrop-blur border border-white/10"
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
            <Link href="/free-website-review" className="btn-accent px-8 py-4">
              Get my free website review
            </Link>
          </li>
        </ul>

        {isMobileMenuVisible && (
          <ul
            onClick={() => setIsMobileMenuVisible(false)}
            className="absolute text-lg inset-0 top-20 h-fit rounded-2xl p-8 red-hat-font grid md:grid-cols-2 justify-items-start"
          >
            <div className="text-text-light">
              <li className="hover:text-text-light transition-colors">
                <a
                  onClick={() => setIsMobileMenuVisible(false)}
                  href="#why-redesign"
                >
                  Why redesign?
                </a>
              </li>
              <li className="hover:text-text-light transition-colors">
                <a
                  onClick={() => setIsMobileMenuVisible(false)}
                  href="#our-process"
                >
                  Our process
                </a>
              </li>
              <li className="hover:text-text-light transition-colors">
                <a
                  onClick={() => setIsMobileMenuVisible(false)}
                  href="#case-studies"
                >
                  Case studies
                </a>
              </li>
              <li className="hover:text-text-light transition-colors">
                <a
                  onClick={() => setIsMobileMenuVisible(false)}
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="hover:text-text-light transition-colors">
                <a onClick={() => setIsMobileMenuVisible(false)} href="#faqs">
                  FAQs
                </a>
              </li>
            </div>

            <div>
              <li className="mt-8 mb-2">
                <a
                  href="https://www.cognitoforms.com/ChotenLabs/ApplyForARedesign"
                  className="btn-accent px-4 py-2 inline-block"
                >
                  Get a free website audit
                </a>
              </li>
              <li>
                <Link
                  href="/free-website-review"
                  className="external-link items-center"
                >
                  <span>Apply for a redesign</span>
                  <Image src={arrow} height="12" width="auto" alt="Arrow" />
                </Link>
              </li>
            </div>
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
