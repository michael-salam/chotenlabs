"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import loadingSpinner from "@/public/images/loading-spinner.svg";

const PriceCalcuator = () => {
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
    <div className="bg-bg-dark p-4 sm:p-8 rounded-md text-text-light flex-1 sharp-shadow-lg">
      <div className="mb-8">
        <span className="font-bold">Number of pages</span>
        <div className="flex gap-4 items-center mt-2">
          <button
            onClick={() => setPageNumberRange("1-5")}
            className={`${
              pageNumberRange === "1-5"
                ? "sharp-shadow-light border-bg-dark opacity-100 font-black"
                : "border-bg-light opacity-80"
            } btn btn-light border text-sm sm:text-base`}
          >
            1-5
          </button>
          <button
            onClick={() => setPageNumberRange("6-10")}
            className={`${
              pageNumberRange === "6-10"
                ? "sharp-shadow-light border-bg-dark opacity-100 font-black"
                : "border-bg-light opacity-80"
            } btn btn-light border text-sm sm:text-base`}
          >
            6-10
          </button>
          <button
            onClick={() => setPageNumberRange("10-15")}
            className={`${
              pageNumberRange === "10-15"
                ? "sharp-shadow-light border-bg-dark opacity-100 font-black"
                : "border-bg-light opacity-80"
            } btn btn-light border text-sm sm:text-base`}
          >
            10-15
          </button>
        </div>
      </div>
      <div className="mb-8">
        <span className="font-bold">Style of design</span>
        <div className="flex gap-4 items-center mt-2">
          <button
            onClick={() => setStyleOfDesign("standard")}
            className={`${
              styleOfDesign === "standard"
                ? "sharp-shadow-light border-bg-dark opacity-100 font-black"
                : "border-bg-light opacity-80"
            } btn btn-light border text-sm sm:text-base`}
          >
            Standard
          </button>
          <button
            onClick={() => setStyleOfDesign("high-end")}
            className={`${
              styleOfDesign === "high-end"
                ? "sharp-shadow-light border-bg-dark opacity-100 font-black"
                : "border-bg-light opacity-80"
            } btn btn-light border text-sm sm:text-base`}
          >
            High-end
          </button>
        </div>
      </div>
      <div className="mb-12">
        <span className="font-bold">Include development</span>
        <div className="flex gap-4 items-center mt-2">
          <button
            onClick={() => setIncludeDevelopment("no")}
            className={`${
              includeDevelopment === "no"
                ? "sharp-shadow-light border-bg-dark opacity-100 font-black"
                : "border-bg-light opacity-80"
            } btn btn-light border text-sm sm:text-base`}
          >
            No
          </button>
          <button
            onClick={() => setIncludeDevelopment("yes")}
            className={`${
              includeDevelopment === "yes"
                ? "sharp-shadow-light border-bg-dark opacity-100 font-black"
                : "border-bg-light opacity-80"
            } btn btn-light border text-sm sm:text-base`}
          >
            Yes
          </button>
        </div>
      </div>
      <p>Starts at:</p>
      <div className="mb-4 flex items-center gap-4 text-4xl">
        <p className="opacity-40 line-through">${totalCost}</p>
        <p className="opacity-80 font-bold">${totalCost * 0.2}</p>
        <Image
          src={loadingSpinner}
          height="32"
          width="32"
          alt="Loading spinner"
          className={`${isLoading ? "animate-spin block" : "hidden"} ml-auto`}
        />
      </div>
      <a
        href="https://www.cognitoforms.com/ChotenLabs/ApplyForARedesign"
        className="btn bg-bg-light sharp-shadow-light border border-bg-dark text-bg-dark px-4 py-3 sharp-shadow block text-center"
      >
        Get started with your redesign
      </a>
    </div>
  );
};

export default PriceCalcuator;
