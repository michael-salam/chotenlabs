"use client";

import { useState } from "react";

import "./interactive-process.css";
import Link from "next/link";
import Image from "next/image";

import arrow from "@/public/images/arrow.svg";

const InteractiveProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <>
      <div className="red-hat-font flex items-center justify-center gap-8 mb-8 w-fit mx-auto relative before:absolute before:h-[2px] sm:before:h-1 before:w-full before:bg-accent before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-10">
        <div
          onMouseOver={() => setActiveStep(1)}
          className={`${activeStep === 1 && "active"} step-icon`}
        >
          I
        </div>
        <div
          onMouseOver={() => setActiveStep(2)}
          className={`${activeStep === 2 && "active"} step-icon`}
        >
          II
        </div>
        <div
          onMouseOver={() => setActiveStep(3)}
          className={`${activeStep === 3 && "active"} step-icon`}
        >
          III
        </div>
        <div
          onMouseOver={() => setActiveStep(4)}
          className={`${activeStep === 4 && "active"} step-icon`}
        >
          IV
        </div>
      </div>

      <div
        className={`${
          activeStep === 1 ? "active-step" : "hidden"
        } text-center step-details`}
      >
        <p className="red-hat-font gradient-text uppercase text-6xl sm:text-7xl -mb-8 font-black">
          Step I
        </p>
        <h3 className="tracking-normal text-3xl mb-4">Discovery</h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          We hop on a call with you to analyse how a website fits into your
          business, so we can come up with the best strategy and pick the right
          plan for you.
        </p>
        <Link href="/schedule-a-review" className="external-link mx-auto">
          <span>Book a free website review</span>
          <Image src={arrow} height="14" width="auto" alt="Arrow" />
        </Link>
      </div>
      <div
        className={`${
          activeStep === 2 ? "active-step" : "hidden"
        } text-center step-details`}
      >
        <p className="red-hat-font gradient-text uppercase text-6xl sm:text-7xl -mb-8 font-black">
          Step II
        </p>
        <h3 className="tracking-normal text-3xl mb-4">Design</h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          Once we have a good idea about your web strategy, we create two custom
          design mockups for you to pick from.
        </p>
      </div>
      <div
        className={`${
          activeStep === 3 ? "active-step" : "hidden"
        } text-center step-details`}
      >
        <p className="red-hat-font gradient-text uppercase text-6xl sm:text-7xl -mb-8 font-black">
          Step III
        </p>
        <h3 className="tracking-normal text-3xl mb-4">Development</h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          When we&apos;re done with the designs, we send them to you for
          approval, and development starts immediately.
        </p>
      </div>
      <div
        className={`${
          activeStep === 4 ? "active-step" : "hidden"
        } text-center step-details`}
      >
        <p className="red-hat-font gradient-text uppercase text-6xl sm:text-7xl -mb-8 font-black">
          Step IV
        </p>
        <h3 className="tracking-normal text-3xl mb-4">Launch</h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          Finally, we launch your new website, but that's not where it ends.
          Your website is fully managed by us for the entire duration of your
          plan.
        </p>
      </div>
    </>
  );
};

export default InteractiveProcess;
