import Image from "next/image";
import Link from "next/link";
// fonts
import { Red_Hat_Display } from "next/font/google";
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
// components
import Navbar from "@/components/Navbar";
import BeforeAfter from "@/components/BeforeAfter";
import PriceCalcuator from "@/components/PriceCalcuator";
import FAQ from "@/components/FAQ";
// images
import beforeScreenshot from "@/public/before.png";
import afterScreenshot from "@/public/after.png";
import quoteIcon from "@/public/quote.svg";
import sparks from "@/public/sparks.svg";
// data
import { whyRedesign, process } from "@/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="text-center py-16">
        <h1 className={`${redHatDisplay.className} w-[79%] mx-auto mb-4`}>
          Professional Website Redesign{" "}
          <span className="text-accent">for Businesses</span>
        </h1>
        <p className="mx-auto">
          Want to get more out of your website and unlock its true potential?
          You&apos;re in the right place. Request a{" "}
          <span className="font-bold text-text-dark">free</span> website audit
          to get started now!
        </p>
        <form className="flex gap-2 border border-black rounded-md p-2 w-fit mx-auto mt-4 sharp-shadow-sm">
          <input
            type="text"
            placeholder="Your website address"
            aria-label="Your website address"
            className="py-2 px-4 outline-none text-text-dark placeholder:text-text-mid"
          />
          <button className="btn btn-dark px-8 py-2">
            Get a free website review
          </button>
        </form>
        <span className="mt-2 inline-block">
          Ready now?{" "}
          <Link href="/" className="text-accent underline font-semibold">
            Schedule a call
          </Link>{" "}
          or{" "}
          <a href="#pricing" className="text-accent underline font-semibold">
            Use our price calculator
          </a>
        </span>

        <div className="flex gap-8 w-4/5 mx-auto mt-12">
          <div className="text-left">
            <span
              className={`${redHatDisplay.className} italic text-black font-bold`}
            >
              GET YOUR WEBSITE FROM LOOKING LIKE THIS...
            </span>
            <Image
              src={beforeScreenshot}
              height="auto"
              width="500"
              alt="Screenshot of website before redesign"
              className="rounded-md border border-black sharp-shadow-lg"
            />
          </div>

          <div className="text-left">
            <span
              className={`${redHatDisplay.className} italic text-black font-bold`}
            >
              TO THIS!
            </span>
            <Image
              src={afterScreenshot}
              height="auto"
              width="500"
              alt="Screenshot of website after redesign"
              className="rounded-md border border-black sharp-shadow-lg"
            />
          </div>
        </div>
      </header>

      <section className="my-32">
        <div className="flex gap-16 w-4/5 mx-auto">
          <Image
            src={afterScreenshot}
            height="auto"
            width="380"
            alt="Screenshot of website design"
            className="rounded-md border border-black sharp-shadow-lg"
          />

          <div>
            <h2 className={`${redHatDisplay.className} mb-8`}>
              Your Website Holds More Potential than you Realise
            </h2>
            <p className="mb-4">
              Your existing website is a mess. Well, maybe not a MESS, but there
              is a reason you are here. As important as a website is, it is
              useless if it does not communicate your brand effectively.
            </p>
            <p>It&apos;s about time you changed that.</p>
          </div>
        </div>
      </section>

      <section className="my-32">
        <h2 className="text-center mb-2">Why do I even need a redesign?</h2>
        <p className="text-center mx-auto text-text-dark max-w-[40ch]">
          There is a wide range of reasons why your business website probably
          needs to be redesigned.
        </p>
        <div className="dynamic-grid dynamic-grid-sm mt-16 w-4/5 mx-auto">
          {whyRedesign.map((item) => (
            <div key={item.id}>
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                height="48"
                width="auto"
                className="mb-4"
              />
              <h4 className="mb-4">{item.title}</h4>
              <p className="text-sm leading-[180%]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-bg-dark text-text-light py-8 pb-16">
        <div className="flex justify-center mb-4">
          <Image
            src={quoteIcon}
            alt="Quotation marks"
            height="96"
            width="auto"
          />
        </div>
        <h3 className="text-text-light">Delivery was super fast</h3>
        <p className="opacity-80 mx-auto my-4">
          “It was wonderful service from start to finish. I love the face that
          it came so quickly without waiting very long at all.”
        </p>
        <span className="mt-4 text-xl font-bold">Leonard Hampton</span>
      </section>

      <section id="our-process" className="my-16">
        <h2 className="text-center mb-2">Our Process</h2>
        <p className="text-center mx-auto text-text-dark mb-16">
          Getting you from frustrated business owner to having a high-performing
          website in <span className="font-bold">4 simple steps</span>.
        </p>
        <div className="dynamic-grid dynamic-grid-lg w-4/5 mx-auto">
          {process.map((step) => (
            <div key={step.id} className="flex items-start gap-4">
              <Image
                src={step.icon.src}
                alt={step.icon.alt}
                height="auto"
                width="72"
              />
              <div>
                <h4 className="mb-4">{step.title}</h4>
                <p className="text-sm leading-[180%]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="case-studies"
        className="bg-bg-mid border-y border-black w-full py-16 my-16"
      >
        <h2 className="text-center mb-2">Case Studies</h2>
        <p className="text-text-dark text-center mx-auto mb-16">
          From ideation to delivery, our case studies take you through our
          process with real projects.
        </p>
        <div className="flex items-start gap-8 max-w-[90%] mx-auto">
          <div className="flex-1">
            <h4 className="mb-8">App Flowy Website Redesign</h4>
            <p className="text-sm leading-[180%] mb-4">
              <span className="font-bold text-text-dark">Challenge</span>: App
              Flowy, a growing online retail brand, faced challenges with their
              existing website that hindered their ability to compete in the
              highly competitive e-commerce landscape. Slow loading times, an
              outdated user interface, and a lack of mobile responsiveness were
              adversely affecting their conversion rates and customer retention.
            </p>
            <p className="text-sm leading-[180%]">
              <span className="font-bold text-text-dark">Our Solution</span>:
              Starting with a comprehensive website audit, we identified
              performance bottlenecks and usability issues. Our team developed a
              customized slide deck outlining a redesign strategy focused on
              improving speed, implementing a mobile-first approach, and
              enhancing the overall user experience. Through collaborative
              discussions, we agreed on project terms that aligned with ABC
              E-commerce's business goals and budget.
            </p>
          </div>
          <BeforeAfter />
          <div className="flex-1">
            <h4 className="text-accent mb-8">Results</h4>
            <p className="text-sm leading-[180%]">
              The redesigned website not only significantly improved loading
              times but also implemented a responsive design for seamless
              shopping experiences on various devices. Conversion rates saw a
              remarkable increase of 25%, contributing to a substantial boost in
              online sales. ABC E-commerce's enhanced online presence positioned
              them as a more competitive player in the e-commerce market,
              driving customer satisfaction and loyalty.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/" className="underline text-accent hover:font-semibold">
            More case studies
          </Link>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-center mb-2">More Reviews</h2>
        <p className="text-center mx-auto text-text-dark">
          Our clients absolutely love us!
        </p>
        <div className="dynamic-grid dynamic-grid-lg mt-16 w-4/5 mx-auto">
          <div className="border border-black p-8 rounded-md sharp-shadow-sm">
            <p className="text-sm leading-[180%]">
              Choten Labs transformed our online presence! The redesign was
              seamless, and their attention to detail surpassed our
              expectations. The new website not only looks fantastic but also
              improved user engagement. Highly recommend their expertise!
            </p>
            <p className="text-text-dark font-bold italic mt-4">
              John Doe - XYZ Corp
            </p>
          </div>
          <div className="border border-black p-8 rounded-md sharp-shadow-sm">
            <p className="text-sm leading-[180%]">
              Incredible results! Choten Labs breathed new life into our
              outdated website. Their team's creativity and strategic approach
              made the redesign process smooth. Our site now reflects our brand
              perfectly, and we're already seeing increased traffic. Thank you,
              Choten Labs!
            </p>
            <p className="text-text-dark font-bold italic mt-4">
              Sam Keith - ABC Services
            </p>
          </div>
          <div className="border border-black p-8 rounded-md sharp-shadow-sm">
            <p className="text-sm leading-[180%]">
              Choten Labs is a game-changer! Our e-commerce site desperately
              needed a facelift, and they delivered beyond our hopes. The modern
              design, improved functionality, and seamless navigation have
              significantly boosted our sales. Trust Choten Labs for a website
              that stands out.
            </p>
            <p className="text-text-dark font-bold italic mt-4">
              Daniella Wang - 123 E-Commerce
            </p>
          </div>
          <div className="place-self-center">
            <Link href="/" className="underline text-accent text-xl">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="border-t border-black w-full py-16 bg-bg-mid"
      >
        <div className="flex gap-8 items-center w-4/5 mx-auto">
          <div className="flex-[2]">
            <p className="relative w-fit text-text-light bg-red-500 border-red-800 border-2 mb-4 font-black rounded-md px-4 py-2">
              80% off for our next 5 clients -{" "}
              <span className="underline">5 spots left!</span>
              <Image
                src={sparks}
                alt="Sparks"
                height="48"
                width="auto"
                className="absolute -right-14 -top-10 rotate-45"
              />
            </p>

            <h2 className="font-normal mb-4">
              <span className="text-accent">
                Business Class Website Redesigns,
              </span>{" "}
              <br />
              Starting at <span className="line-through opacity-40">
                $1995
              </span>{" "}
              $399
            </h2>
            <p>Use our redesign pricing calculator to get an estimate.</p>
            <div className="text-sm mt-8 mb-4">
              <p className="font-bold text-text-dark">Guaranteed:</p>
              <ul className="list-disc list-inside">
                <li>Responsive (mobile-friendly) design</li>
                <li>On-page SEO</li>
                <li>Custom website (no templates)</li>
                <li>Google Analytics setup</li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="font-bold text-text-dark">Note:</p>
              <p className="max-w-[40ch]">
                A custom quote will be required if your website has 15+ pages, a
                database, e-commerce, or CMS integrations.
              </p>
            </div>
          </div>
          <PriceCalcuator />
        </div>
      </section>

      <section className="py-16 bg-bg-dark text-text-light w-full m-0">
        <div className="flex items-center w-4/5 mx-auto gap-16">
          <div className="flex-[3]">
            <h2 className="text-text-light mb-4">
              Don&apos;t leave the success of your business to chance
            </h2>
            <p className="opacity-80 mb-12">
              Lorem ipsum dolor sit amet consectetur. Elementum consequat
              volutpat ac erat augue ut curabitur. Pharetra aliquet convallis
              egestas egestas non. Enim consequat vitae tellus nunc tellus
              elementum sit tempor eleifend. Amet et accumsan nunc volutpat nec
              odio in.
            </p>
            <Link
              href="/"
              className="border border-black btn bg-bg-light text-bg-dark px-8 py-4 sharp-shadow-light"
            >
              Request free audit
            </Link>
          </div>
          <Image
            src={afterScreenshot}
            width="320"
            height="auto"
            alt="Website design"
            className="sharp-shadow-light border border-bg-dark rounded-md flex-[2]"
          />
        </div>
      </section>

      <section id="faqs" className="my-16">
        <div className="flex w-4/5 mx-auto gap-16">
          <h2 className="flex-1">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      <section className="py-16 bg-black text-text-light/80 text-center">
        <h2 className="text-text-light max-w-[70%] mx-auto mb-4">
          By now you should have a good idea whether we&apos;re a good fit or
          not.
        </h2>
        <p className="mb-8 mx-auto">
          If so, what are you waiting for? Click the button below to transform
          your website immediately!
        </p>
        <Link
          href="/"
          className="mb-4 btn bg-bg-light text-bg-dark px-8 py-4 sharp-shadow-light border border-black inline-block"
        >
          Transform my website
        </Link>
        <p className="text-sm mx-auto">
          Still need more clarity?{" "}
          <Link href="/" className="underline">
            Schedule a call with us now.
          </Link>
        </p>
      </section>
    </>
  );
}
