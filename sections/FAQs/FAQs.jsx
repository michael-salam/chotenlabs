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
        <div className="col-span-5 md:col-span-3">
          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(0)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>How does the subscription model work?</span>
              <span>{activeFaq === 0 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 0 ? "active" : "hidden"} faq-details`}
            >
              <p className="mb-2">
                Unlike a one-time payment, the subscription model involves
                paying a fixed monthly fee for a minimum agreed duration (24
                months for ChotenLabs), after which you get full ownership of
                the website.
              </p>
              <p>
                You are also given the option to redesign your website after the
                agreed duration.
              </p>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(1)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>How is a subscription better than a one-time payment?</span>
              <span>{activeFaq === 1 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 1 ? "active" : "hidden"} faq-details`}
            >
              <p className="mb-4">
                There are several reasons why subscription web design is better
                than the conventional one-time payment, including:
              </p>
              <ul className="list-disc list-inside">
                <li>Lower upfront costs</li>
                <li>Continuous support and updates</li>
                <li>Scalability</li>
                <li>Predictable expenses</li>
                <li>Long-term relationship</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(2)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>What if I don&apos;t want to pay a subscription?</span>
              <span>{activeFaq === 2 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 2 ? "active" : "hidden"} faq-details`}
            >
              <p>
                You don&apos;t have to sign up for a subscription if you
                don&apos;t want to. If you fancy a one-time payment, we can do
                that also.
              </p>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(3)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>Can I cancel my subscription?</span>
              <span>{activeFaq === 3 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 3 ? "active" : "hidden"} faq-details`}
            >
              <p className="mb-2">
                Yes, you can cancel your subscription at any time.
              </p>
              <p>
                However, you must note that you are only given full ownership of
                the website when the minimum contract duration is complete (24
                months).
              </p>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(4)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>
                What happens if I want to make changes or updates to my website?
              </span>
              <span>{activeFaq === 4 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 4 ? "active" : "hidden"} faq-details`}
            >
              <p className="mb-2">
                Once you decide to work with us, you get a dedicated client
                portal on Notion.
              </p>
              <p>
                From this portal, you can make requests, give and recive
                feedback on the website.
              </p>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(5)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>
                Do you offer SEO services as part of the subscription?
              </span>
              <span>{activeFaq === 5 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 5 ? "active" : "hidden"} faq-details`}
            >
              <p className="mb-2">
                All websites are built with on-page SEO in mind.
              </p>
              <p>
                However, a full SEO service requires an additional $35/month.
              </p>
            </div>
          </div>

          <div className="mb-8 w-full">
            <button
              onClick={() => setActiveFaq(6)}
              className="faq-btn red-hat-font mb-4"
            >
              <span>
                What technologies and/or platforms does ChotenLabs use for web
                design?
              </span>
              <span>{activeFaq === 6 ? "-" : "+"}</span>
            </button>
            <div
              className={`${activeFaq === 6 ? "active" : "hidden"} faq-details`}
            >
              <p>
                ChotenLabs builds custom-coded websites with HTML, CSS and
                JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:col-span-2">
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
