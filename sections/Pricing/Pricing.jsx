"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import check from "@/public/images/check.svg";
import checkDark from "@/public/images/check-dark.svg";

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
      <h2 className="mb-16">Explore plans</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 md:w-4/5 mx-auto gap-8">
        <div className="pricing-card">
          <h3 className="p-2 border border-accent/10 mb-8 rounded-full tracking-normal uppercase text-text-mid text-sm">
            Subscription
          </h3>
          <p className="red-hat-font mb-8">
            <span className="gradient-text-bright font-black text-6xl">
              349
            </span>
            <span className="text-accent text-lg font-bold">/month</span>
          </p>
          <p className="px-4 text-left mb-8 text-sm">
            Work with a designer to create your own one of a kind, unique
            website. Get priority support for all your needs.
          </p>
          <Link
            href="/schedule-a-review"
            className="btn-accent block rounded-2xl p-3 text-white red-hat-font"
          >
            Get started →
          </Link>
        </div>

        <div className="pricing-card h-fit">
          <h3 className="p-2 border border-accent/10 mb-8 rounded-full tracking-normal uppercase text-text-mid text-sm">
            One-time payment
          </h3>
          <p className="red-hat-font mb-8">
            <span className="gradient-text-bright font-black text-6xl">
              ???
            </span>
          </p>
          <p className="px-4 text-left mb-8 text-sm">
            Don&apos;t fancy a subscription, or have specific needs? Book a call
            to get a custom quote.
          </p>
          <Link
            href="/schedule-a-review"
            className="btn-accent block rounded-2xl p-3 text-white red-hat-font"
          >
            Book a free discovery call →
          </Link>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl mb-4">What&apos;s included?</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Maximum 10 pages</li>
            <li className=" max-w-[40ch]">
              Fully managed website: Includes website creation, setup,
              maintenance, unlimited edits, and security.
            </li>
            <li>Hosting fees</li>
            <li>Domain name registration/transfer</li>
            <li>24-month minimum contract</li>
            <li>Dedicated client portal</li>
            <li>On-page SEO</li>
            <li>Google analytics</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl mb-4">What&apos;s NOT included?</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Off page SEO</li>
            <li className=" max-w-[40ch]">Social media management</li>
            <li>Marketing and advertising</li>
            <li>Complex software development</li>
            <li>IT Support</li>
            <li>Content creation and copywriting</li>
            <li>Graphic design/branding</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
