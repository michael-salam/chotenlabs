"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AvailableSpots from "@/ui/AvailableSpots/AvailableSpots";

import loadingSpinner from "@/public/images/loading-spinner.svg";

import "./pricing.css";

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumberRange, setPageNumberRange] = useState("1-5");
  const [styleOfDesign, setStyleOfDesign] = useState("standard");
  const [includeDevelopment, setIncludeDevelopment] = useState("no");
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (pageNumberRange === "1-5") {
        setTotalCost(995);
      }
      if (pageNumberRange === "6-10") {
        setTotalCost(1195);
      }
      if (pageNumberRange === "10-15") {
        setTotalCost(1395);
      }
      if (styleOfDesign === "high-end") {
        setTotalCost((prev) => prev + 300);
      }
      if (includeDevelopment === "yes") {
        setTotalCost((prev) => prev + 1000);
      }
    }, 1000);
  }, [pageNumberRange, styleOfDesign, includeDevelopment]);

  // useEffect to handle loading animation
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [pageNumberRange, styleOfDesign, includeDevelopment]);

  return (
    <section id="pricing">
      <p className="uppercase text-center">Pricing</p>
      <h2 className="text-center mb-4">Try our price calculator</h2>

      <AvailableSpots />

      <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto p-8 rounded-2xl dark-bg-gradient">
        <div className="col-span-1 col-1">
          <div className="mb-4">
            <p className="red-hat-font text-text-light font-bold mb-2">
              Number of pages
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPageNumberRange("1-5")}
                className={`${
                  pageNumberRange === "1-5"
                    ? "btn-accent"
                    : "option red-hat-font"
                }`}
              >
                1-5
              </button>
              <button
                onClick={() => setPageNumberRange("6-10")}
                className={`${
                  pageNumberRange === "6-10"
                    ? "btn-accent"
                    : "option red-hat-font"
                }`}
              >
                6-10
              </button>
              <button
                onClick={() => setPageNumberRange("10-15")}
                className={`${
                  pageNumberRange === "10-15"
                    ? "btn-accent"
                    : "option red-hat-font"
                }`}
              >
                10-15
              </button>
            </div>
          </div>

          <div className="mb-4">
            <p className="red-hat-font text-text-light font-bold mb-2">
              Style of design
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStyleOfDesign("standard")}
                className={`${
                  styleOfDesign === "standard"
                    ? "btn-accent"
                    : "option red-hat-font"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setStyleOfDesign("high-end")}
                className={`${
                  styleOfDesign === "high-end"
                    ? "btn-accent"
                    : "option red-hat-font"
                }`}
              >
                High-end
              </button>
            </div>
          </div>

          <div>
            <p className="red-hat-font text-text-light font-bold mb-2">
              Include development?
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIncludeDevelopment("no")}
                className={`${
                  includeDevelopment === "no"
                    ? "btn-accent"
                    : "option red-hat-font"
                }`}
              >
                No
              </button>
              <button
                onClick={() => setIncludeDevelopment("yes")}
                className={`${
                  includeDevelopment === "yes"
                    ? "btn-accent"
                    : "option red-hat-font"
                }`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <p className="red-hat-font text-2xl text-text-light mb-4">
            Starts at:
          </p>
          <div className="flex items-center mb-4 text-5xl font-bold">
            <span className="line-through text-accent/20">${totalCost}</span>
            <span className="gradient-text-bright"> ${totalCost * 0.2}</span>
            <Image
              src={loadingSpinner}
              height="32"
              width="32"
              alt="Loading spinner"
              className={`${
                isLoading ? "animate-spin block" : "hidden"
              } ml-auto`}
            />
          </div>
          <Link
            href="/apply-for-redesign"
            className="btn-accent inline-block px-8 py-4 text-center w-full text-xl"
          >
            Redesign my website
          </Link>
        </div>

        <div className="col-span-1 text-sm">
          <div className="mb-4">
            <p className="font-bold text-text-light mb-2">Guaranteed:</p>
            <p className="mb-2">
              If you decide to also develop your website with us, we guarantee
            </p>
            <ul className="list-disc list-inside">
              <li>A responsive (mobile-friendly) website</li>
              <li>On-page SEO</li>
              <li>Custom website (no templates)</li>
              <li>Google Analytics setup</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-text-light mb-2">Note:</p>
            <p>
              A custom quote will be required if your website has 15+ pages or
              chatbot, database, e-commerce, or CMS integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
