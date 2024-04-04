import Image from "next/image";
import "./benefits.css";

import brandImage from "@/public/images/brand-image.svg";
import userExperience from "@/public/images/user-exp.svg";
import scalability from "@/public/images/scalability.svg";
import performance from "@/public/images/performance.svg";
import trust from "@/public/images/trust.svg";
import dollar from "@/public/images/dollar.svg";

const Benefits = () => {
  return (
    <section id="benefits">
      <p className="uppercase text-center max-w-[80%] mx-auto">Benefits</p>
      <h2>What you get</h2>

      <div className="benefits grid place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        <div className="col-span-1 p-8 rounded-2xl border border-accent/10 bg-accent/5 text-sm">
          <Image
            src={brandImage}
            height="64"
            width="auto"
            alt="Frame"
            className="mb-2"
          />
          <h3 className="text-lg tracking-normal mb-4">Unique brand image</h3>
          <p className="max-w-[40ch]">
            With the endless competition, we know you value your individuality.
            A custom-designed website means{" "}
            <span className="text-text-light">
              no other one is the same as yours.
            </span>
          </p>
        </div>

        <div className="col-span-1 p-8 rounded-2xl border border-accent/10 bg-accent/5 text-sm">
          <Image
            src={userExperience}
            height="64"
            width="auto"
            alt="Target"
            className="mb-2"
          />
          <h3 className="text-lg tracking-normal mb-4">
            Tailored user experience
          </h3>
          <p className="max-w-[40ch]">
            Let your visitors know you care. You can create an experience that{" "}
            <span className="text-text-light">speaks directly to them.</span>
          </p>
        </div>

        <div className="col-span-1 p-8 rounded-2xl border border-accent/10 bg-accent/5 text-sm">
          <Image
            src={scalability}
            height="64"
            width="auto"
            alt="Scaling"
            className="mb-2"
          />
          <h3 className="text-lg tracking-normal mb-4">
            Scalability and flexibility
          </h3>
          <p className="max-w-[40ch]">
            Your business doesn&apos;t stay the same forever. Your website
            won&apos;t either.{" "}
            <span className="text-text-light">
              A custom website makes it easy to grow as you do.
            </span>
          </p>
        </div>

        <div className="col-span-1 p-8 rounded-2xl border border-accent/10 bg-accent/5 text-sm">
          <Image
            src={performance}
            height="64"
            width="auto"
            alt="Speedometer"
            className="mb-2"
          />
          <h3 className="text-lg tracking-normal mb-4">
            Optimised performance
          </h3>
          <p className="max-w-[40ch]">
            Custom websites almost guarantee lightning-fast performance, so{" "}
            <span className="text-text-light">
              your visitors never have to wait
            </span>
          </p>
        </div>

        <div className="col-span-1 p-8 rounded-2xl border border-accent/10 bg-accent/5 text-sm">
          <Image
            src={trust}
            height="64"
            width="auto"
            alt="Shield"
            className="mb-2"
          />
          <h3 className="text-lg tracking-normal mb-4">
            Higher credibility and trust
          </h3>
          <p className="max-w-[40ch]">
            <span className="text-text-light">
              75% of people assess a business&apos;s credibility based on its
              website&apos;s design
            </span>
            . No worries, you get the best designs.
          </p>
        </div>

        <div className="col-span-1 p-8 rounded-2xl border border-accent/10 bg-accent/5 text-sm">
          <Image
            src={dollar}
            height="64"
            width="auto"
            alt="Dollar sign"
            className="mb-2"
          />
          <h3 className="text-lg tracking-normal mb-4">Charge more</h3>
          <p className="max-w-[40ch]">
            A premium website can{" "}
            <span className="text-text-light">justify premium prices</span>.
            Customers don&apos;t spend big on cheap-looking brands.
          </p>
        </div>
      </div>

      <div className="bg-pattern bg-accent text-text-dark py-16 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/5 mx-auto items-center">
          <h2 className="col-span-1 text-left mb-0 text-text-dark leading-none">
            We focus on your website, so you can{" "}
            <span className="after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 after:h-2 lg:after:h-4 after:w-full">
              focus{" "}
            </span>
            <span className="after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 after:h-2 lg:after:h-4 after:w-full">
              on{" "}
            </span>
            <span className="after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 after:h-2 lg:after:h-4 after:w-full">
              your{" "}
            </span>
            <span className="after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 after:h-2 lg:after:h-4 after:w-full">
              business
            </span>
          </h2>
          <div className="text-text-dark/80 col-span-1">
            <p className="mb-4">
              <span className="text-text-dark font-medium">
                Fully managed hosting
              </span>{" "}
              means you don't have to lay a finger on your website.
            </p>
            <p>
              Anything you need done is handled by seasoned web professionals,
              giving you more time to work on your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
