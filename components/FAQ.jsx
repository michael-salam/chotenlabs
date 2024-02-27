"use client";

import { useState } from "react";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <div className="flex-[4]">
      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(0)}
          className={`${
            activeFaq === 0 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark text-left rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>What is a website redesign?</p>
          <p className="text-2xl">{activeFaq === 0 ? "-" : "+"}</p>
        </button>
        {activeFaq === 0 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            Redesigning a website involves careful analysis of the current state
            of your website, and exactly how it can be improved, taking into
            account your unique business goals. A redesign focuses on better
            user experience, performance, mobile responsiveness, search engine
            optimisation, and many more.
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(1)}
          className={`${
            activeFaq === 1 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark text-left rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>What is included in a ChotenLabs website redesign?</p>
          <p className="text-2xl">{activeFaq === 1 ? "-" : "+"}</p>
        </button>
        {activeFaq === 1 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
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
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(2)}
          className={`${
            activeFaq === 2 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark text-left rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>What is not included in a Choten Labs redesign?</p>
          <p className="text-2xl">{activeFaq === 2 ? "-" : "+"}</p>
        </button>
        {activeFaq === 2 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            ChotenLabs will not handle the following while and/or after
            redesigning your website:
            <ul className="list-disc list-inside">
              <li>E-commerce integration</li>
              <li>CMS integration</li>
              <li>Backend development</li>
              <li>Off-page seo</li>
              <li>Website maintenance</li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(3)}
          className={`${
            activeFaq === 3 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark text-left rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>How much does a Choten Labs redesign cost?</p>
          <p className="text-2xl">{activeFaq === 3 ? "-" : "+"}</p>
        </button>
        {activeFaq === 3 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            A standard website redesign from ChotenLabs starts at $1,995
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(4)}
          className={`${
            activeFaq === 4 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark text-left rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>How long will it take to redesign our website?</p>
          <p className="text-2xl">{activeFaq === 4 ? "-" : "+"}</p>
        </button>
        {activeFaq === 4 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            A standard redesign typically takes about 21 days to complete.
            However, once we know more details about your project, we will let
            you know if it will take longer to complete.
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(5)}
          className={`${
            activeFaq === 5 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark text-left rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>
            What technologies and/or platforms does Choten Labs use for
            redesigns?
          </p>
          <p className="text-2xl">{activeFaq === 5 ? "-" : "+"}</p>
        </button>
        {activeFaq === 5 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            ChotenLabs builds custom-coded websites with HTML, CSS and
            JavaScript. However, using a different platform will require an
            extra charge.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
