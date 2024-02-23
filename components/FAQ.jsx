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
          } border border-black font-bold text-text-dark rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>What does a website redesign entail?</p>
          <p className="text-2xl">{activeFaq === 0 ? "-" : "+"}</p>
        </button>
        {activeFaq === 0 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            Redesigning a website involves careful analysis of the current state
            of the website, and exactly how it can be improved. A redesign
            focuses on better user experience, performance, mobile
            responsiveness, search engine optimisation, and many more.
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(1)}
          className={`${
            activeFaq === 1 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>What is not included in a Choten Labs redesign?</p>
          <p className="text-2xl">{activeFaq === 1 ? "-" : "+"}</p>
        </button>
        {activeFaq === 1 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            Redesigning a website involves careful analysis of the current state
            of the website, and exactly how it can be improved. A redesign
            focuses on better user experience, performance, mobile
            responsiveness, search engine optimisation, and many more.
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(2)}
          className={`${
            activeFaq === 2 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>How much does a Choten Labs redesign cost?</p>
          <p className="text-2xl">{activeFaq === 2 ? "-" : "+"}</p>
        </button>
        {activeFaq === 2 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            Redesigning a website involves careful analysis of the current state
            of the website, and exactly how it can be improved. A redesign
            focuses on better user experience, performance, mobile
            responsiveness, search engine optimisation, and many more.
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(3)}
          className={`${
            activeFaq === 3 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>How long will it take to redesign our website?</p>
          <p className="text-2xl">{activeFaq === 3 ? "-" : "+"}</p>
        </button>
        {activeFaq === 3 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            Redesigning a website involves careful analysis of the current state
            of the website, and exactly how it can be improved. A redesign
            focuses on better user experience, performance, mobile
            responsiveness, search engine optimisation, and many more.
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveFaq(4)}
          className={`${
            activeFaq === 4 && "sharp-shadow-sm"
          } border border-black font-bold text-text-dark rounded-md px-4 py-2 w-full flex justify-between items-center mb-4`}
        >
          <p>
            What technologies and/or platforms does Choten Labs use for
            redesigns?
          </p>
          <p className="text-2xl">{activeFaq === 4 ? "-" : "+"}</p>
        </button>
        {activeFaq === 4 && (
          <div className="text-sm max-w-[60ch] leading-[180%]">
            Redesigning a website involves careful analysis of the current state
            of the website, and exactly how it can be improved. A redesign
            focuses on better user experience, performance, mobile
            responsiveness, search engine optimisation, and many more.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
