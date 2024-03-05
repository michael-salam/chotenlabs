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
import beforeScreenshot from "@/public/images/brandboosthub-before-sm.jpg";
import afterScreenshot from "@/public/images/brandboosthub-after-sm.jpg";
import quoteIcon from "@/public/images/quote.svg";
import stat from "@/public/images/stat.svg";
import emailIcon from "@/public/images/email.svg";
// data
import { whyRedesign, process } from "@/data";
import AvailableSpots from "@/components/AvailableSpots";
import FreeReviewForm from "@/components/FreeReviewForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="text-center py-12 md:py-16 px-[10%]">
        <div className="flex justify-center">
          <a href="#pricing">
            <AvailableSpots />
          </a>
        </div>

        <h1 className={`${redHatDisplay.className} mx-auto mb-4`}>
          Professional Website Redesign{" "}
          <span className="relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 lg:after:h-6 after:w-full after:-z-10 after:bg-accent/40">
            for{" "}
          </span>
          <span className="relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 lg:after:h-6 after:w-full after:-z-10 after:bg-accent/40">
            Businesses
          </span>
        </h1>
        <p className="mx-auto text-sm sm:text-base">
          Want to get more out of your website and unlock its true potential?
          You&apos;re in the right place. Enter a valid web address to request a{" "}
          <span className="font-bold text-text-dark">free</span> website audit
          now!
        </p>
        <FreeReviewForm />
        <span className="mt-2 inline-block text-sm">
          Ready now?{" "}
          <Link href="/" className="text-accent underline font-semibold">
            Apply for a redesign
          </Link>
        </span>

        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8 mt-12">
          <div className="text-left">
            <span
              className={`${redHatDisplay.className} italic text-black font-bold text-sm`}
            >
              GET YOUR WEBSITE FROM THIS...
            </span>
            <Image
              src={beforeScreenshot}
              height="auto"
              width="600"
              alt="Screenshot of website before redesign"
              className="rounded-md border border-black sharp-shadow-lg"
            />
          </div>

          <div className="text-left">
            <span
              className={`${redHatDisplay.className} italic text-black font-bold text-sm`}
            >
              TO THIS!
            </span>
            <Image
              src={afterScreenshot}
              height="auto"
              width="600"
              alt="Screenshot of website after redesign"
              className="rounded-md border border-black sharp-shadow-lg"
            />
          </div>
        </div>
      </header>

      <section className="py-16 px-4 border-y border-black bg-bg-mid">
        <div className="flex flex-col text-center lg:text-left justify-center items-center lg:flex-row lg:items-start lg:gap-16 w-4/5 mx-auto">
          <Image
            src={stat}
            height="200"
            width="200"
            alt="Screenshot of website design"
          />

          <div className="sm:w-4/5 md:w-2/3 lg:w-1/2">
            <h2 className={`${redHatDisplay.className} mb-8`}>
              Don&apos;t be just another number
            </h2>
            <p className="mb-4">
              Of the{" "}
              <span className="font-bold text-text-dark">
                2 billion websites on the internet
              </span>
              , there are about{" "}
              <span className="font-bold text-text-dark">
                400 million active websites
              </span>
              . Yes, you read that right.
            </p>
            <p>You need to stand out, and we can help you do just that.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-b border-black">
        <h2 className="text-center mb-2">Do I need a redesign?</h2>
        <p className="text-center mx-auto text-text-dark max-w-[40ch]">
          There is a wide range of reasons why your business website probably
          needs to be redesigned, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-16 w-4/5 mx-auto">
          {whyRedesign.map((item) => (
            <div key={item.id}>
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                height="48"
                width="auto"
                className="mb-4 col-span-1"
              />
              <h4 className="mb-4">{item.title}</h4>
              <p className="text-sm leading-[180%] max-w-[40ch]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="our-process" className="py-16 bg-bg-mid">
        <h2 className="text-center mb-2">Our Process</h2>
        <p className="text-center mx-auto text-text-dark mb-16 px-8">
          If you reckon that you do need a redesign, we can solve all those
          problems for you and more in{" "}
          <span className="font-bold">4 simple steps</span>
        </p>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8 w-[90%] px-4 sm:w-[75%] mx-auto">
          {process.map((step) => (
            <div
              key={step.id}
              className="flex flex-col col-span-1 sm:flex-row items-start gap-4"
            >
              <Image
                src={step.icon.src}
                alt={step.icon.alt}
                height="auto"
                width="64"
                className="w-12 md:w-16"
              />
              <div>
                <h4 className="mb-4">{step.title}</h4>
                <p className="text-sm leading-[180%] max-w-[40ch]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-bg-dark text-text-light p-8 pb-16">
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

      <section
        id="case-studies"
        className="bg-bg-mid border-y border-black w-full py-16"
      >
        <h2 className="text-center mb-2">Case Studies</h2>
        <p className="text-text-dark text-center mx-auto mb-16 px-8">
          Check out how we approach redesigns, step by step
        </p>
        <div className="flex md:flex-row flex-col items-start gap-8 max-w-[90%] mx-auto">
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
              E-commerce&apos;s business goals and budget.
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
              online sales. ABC E-commerce&apos;s enhanced online presence
              positioned them as a more competitive player in the e-commerce
              market, driving customer satisfaction and loyalty.
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
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 w-[90%] sm:w-4/5 mx-auto">
          <div className="border border-black p-8 rounded-md sharp-shadow-sm sm:w-4/5 md:w-full mx-auto">
            <p className="text-sm leading-[180%] max-w-[40ch]">
              Choten Labs transformed our online presence! The redesign was
              seamless, and their attention to detail surpassed our
              expectations. The new website not only looks fantastic but also
              improved user engagement. Highly recommend their expertise!
            </p>
            <p className="text-text-dark font-bold italic mt-4">
              John Doe - XYZ Corp
            </p>
          </div>
          <div className="border border-black p-8 rounded-md sharp-shadow-sm sm:w-4/5 md:w-full mx-auto">
            <p className="text-sm leading-[180%] max-w-[40ch]">
              Incredible results! Choten Labs breathed new life into our
              outdated website. Their team&apos;s creativity and strategic
              approach made the redesign process smooth. Our site now reflects
              our brand perfectly, and we&apos;re already seeing increased
              traffic. Thank you, Choten Labs!
            </p>
            <p className="text-text-dark font-bold italic mt-4">
              Sam Keith - ABC Services
            </p>
          </div>
          <div className="border border-black p-8 rounded-md sharp-shadow-sm sm:w-4/5 md:w-full mx-auto">
            <p className="text-sm leading-[180%] max-w-[40ch]">
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
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center items-stretch w-[90%] sm:w-4/5 mx-auto">
          <div className="flex-[2]">
            <AvailableSpots />
            <h2 className="font-normal mb-4">
              <span className="text-accent">
                Business Class Website Redesigns,
              </span>{" "}
              <br />
              Starting at <span className="line-through opacity-40">
                $995
              </span>{" "}
              $199
            </h2>
            <p>Use our redesign pricing calculator to get an estimate.</p>
            <div className="text-sm mt-8 mb-4">
              <p className="font-bold text-text-dark">Guaranteed:</p>
              <p className="my-2 max-w-[40ch]">
                If you decide to also develop your website with us, we guarantee
              </p>
              <ul className="list-disc list-inside">
                <li>A responsive (mobile-friendly) website</li>
                <li>On-page SEO</li>
                <li>Custom website (no templates)</li>
                <li>Google Analytics setup</li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="font-bold text-text-dark">Note:</p>
              <p className="max-w-[40ch]">
                A custom quote will be required if your website has 15+ pages or
                chatbot, database, e-commerce, or CMS integrations.
              </p>
            </div>
          </div>
          <PriceCalcuator />
        </div>
      </section>

      <section className="py-16 bg-bg-dark text-text-light w-full m-0">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center w-4/5 mx-auto gap-16">
          <div className="flex-[3]">
            <h2 className="text-text-light mb-4">
              Don&apos;t let poor website design hold your business back
            </h2>
            <p className="opacity-80 mb-4">
              A great website has the potential to create a lasting impression
              on your visitors and potential customers, sell your products and
              services effectively, and ultimately increase your business
              revenue.
            </p>
            <p className="opacity-80 mb-8">A mediocre website, not so much.</p>
            <Link
              href="/"
              className="border border-black btn bg-bg-light text-bg-dark px-8 py-2 sharp-shadow-light inline-block"
            >
              Apply for a redesign
            </Link>
          </div>
          <Image
            src={afterScreenshot}
            width="320"
            height="auto"
            alt="Website design"
            className="sharp-shadow-light border border-bg-dark rounded-md flex-[2] w-full"
          />
        </div>
      </section>

      <section id="faqs" className="my-16">
        <div className="flex flex-col md:flex-row w-4/5 mx-auto gap-8 lg:gap-16">
          <h2 className="flex-1">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      <section className="py-16 px-8 bg-black text-text-light/80 text-center">
        <h2 className="text-text-light max-w-[70%] mx-auto mb-4">
          By now you should have a good idea whether we&apos;re a good fit or
          not.
        </h2>
        <p className="mb-8 mx-auto">
          If so, what are you waiting for? Click the button below to apply for a
          website redesign immediately!
        </p>
        <Link
          href="/"
          className="mb-4 btn bg-bg-light text-bg-dark px-8 py-2 sharp-shadow-light border border-black inline-block"
        >
          Apply for a redesign
        </Link>
        <p className="text-sm mx-auto">
          Still need more clarity?{" "}
          <a href="#" className="underline">
            Get a free website review
          </a>
          .
        </p>
      </section>

      <footer className="p-4 flex sm:flex-row flex-col justify-between items-center">
        <span>&copy; ChotenLabs 2024</span>
        <a
          href="mailto:chotencreativelabs@gmail.com"
          className="underline flex items-center gap-2"
        >
          <Image src={emailIcon} height="24" width="24" alt="Envelope" />
          <span>chotencreativelabs@gmail.com</span>
        </a>
      </footer>
    </>
  );
}
