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
      <div className="red-hat-font flex items-center justify-center gap-8 mb-8 w-fit mx-auto relative before:absolute before:h-1 before:w-full before:bg-accent before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-10">
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
        <h3 className="tracking-normal text-3xl mb-4">Full website review</h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          We analyze every aspect of your current site to identify strengths,
          weaknesses, and opportunities for improvement to come up with a
          strategy.
        </p>
        <Link href="/free-website-review" className="external-link mx-auto">
          <span>Get a free website review</span>
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
        <h3 className="tracking-normal text-3xl mb-4">UI/UX redesign</h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          Once we know exactly what needs to be improved, we go ahead to
          redesign the user interface and experience of your website.
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
        <h3 className="tracking-normal text-3xl mb-4">
          Web development (optional)
        </h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          Once we design a new user interface for your website, you can choose
          to go ahead with development yourself, or work with us to bring it to
          life.
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
        <h3 className="tracking-normal text-3xl mb-4">Post-launch support</h3>
        <p className="max-w-[40ch] mx-auto mb-4">
          After delivering a fully functional website, we provide training as
          well as free 30 days post-launch support to your business.
        </p>
      </div>
    </>
  );
};

export default InteractiveProcess;
