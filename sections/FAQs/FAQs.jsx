"use client";

import { useState } from "react";

import "./faqs.css";

import gmailIcon from "@/public/images/gmail.svg";
import instagramIcon from "@/public/images/instagram.svg";
import Image from "next/image";

const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <section id="faqs">
      <p className="uppercase text-center">FAQs</p>
      <h2>Answering your questions</h2>

      <div className="w-11/12 mx-auto grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(0)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>What is a website redesign?</span>
              <span>{activeFaq === 0 ? "-" : "+"}</span>
            </button>
            <p
              className={`${activeFaq === 0 ? "active" : "hidden"} faq-details`}
            >
              Redesigning a website involves careful analysis of the current
              state of your website, and exactly how it can be improved, taking
              into account your unique business goals. A redesign focuses on
              better user experience, performance, mobile responsiveness, search
              engine optimisation, and many more.
            </p>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(1)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>What is included in a ChotenLabs website redesign?</span>
              <span>{activeFaq === 1 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 1 ? "active" : "hidden"} faq-details`}
            >
              <p>
                When you redesign your website with us, you get these and more:
              </p>
              <ul className="list-disc list-inside">
                <li>Unique UI design</li>
                <li>Custom website development</li>
                <li>Mobile responsiveness</li>
                <li>Performance optimisation</li>
                <li>On-page Search Engine Optimisation (SEO)</li>
                <li>Google analytics setup</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(2)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>What is not included in a Choten Labs redesign?</span>
              <span>{activeFaq === 2 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 2 ? "active" : "hidden"} faq-details`}
            >
              <p>
                ChotenLabs will not handle the following while and/or after
                redesigning your website:
              </p>
              <ul className="list-disc list-inside">
                <li>E-commerce integration</li>
                <li>CMS integration</li>
                <li>Chatbot integration</li>
                <li>Backend development</li>
                <li>Off-page seo</li>
                <li>Website maintenance</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(3)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>How much does a Choten Labs redesign cost?</span>
              <span>{activeFaq === 3 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 3 ? "active" : "hidden"} faq-details`}
            >
              <p>
                A standard website redesign from ChotenLabs starts at $1,995
              </p>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(4)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>How long will it take to redesign our website?</span>
              <span>{activeFaq === 4 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 4 ? "active" : "hidden"} faq-details`}
            >
              <p>
                A standard redesign typically takes about 21 days to complete.
                However, once we know more details about your project, we will
                let you know if it will take longer to complete.
              </p>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(5)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>
                What technologies and/or platforms does Choten Labs use for
                redesigns?
              </span>
              <span>{activeFaq === 5 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 5 ? "active" : "hidden"} faq-details`}
            >
              <p>
                ChotenLabs builds custom-coded websites with HTML, CSS and
                JavaScript. However, using a different platform will require an
                extra charge.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="text-2xl mb-4">Want to ask another question?</h3>

          <div>
            <a
              href="mailto:hello@chotenlabs.com"
              target="_blank"
              className="mb-4 hover:opacity-80 transition-opacity bg-accent/10 flex items-center gap-4 font-medium w-full text-text-light w-fit pr-8 rounded-full"
            >
              <Image
                src={gmailIcon}
                alt="Gmail"
                width="48"
                height="auto"
                className="btn-accent p-2"
              />
              <span>Send an email</span>
            </a>

            <a
              href="https://instagram.com/chotenlabs"
              target="_blank"
              className="hover:opacity-80 transition-opacity bg-accent/10 flex items-center gap-4 font-medium w-full text-text-light w-fit pr-8 rounded-full"
            >
              <Image
                src={instagramIcon}
                alt="Gmail"
                width="48"
                height="auto"
                className="btn-accent p-2"
              />
              <span>Send a DM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
