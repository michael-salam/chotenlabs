"use client";

import { useState } from "react";

import Image from "next/image";
// images
import before from "@/public/images/brandboosthub-before-lg.jpg";
import after from "@/public/images/brandboosthub-after-lg.jpg";

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState("before");
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="h-[80vh] overflow-y-scroll sharp-shadow-sm rounded-md border border-black">
        {activeTab === "before" ? (
          <Image
            src={before}
            alt="Jentex landing page"
            width="320"
            height="auto"
          />
        ) : (
          <Image
            src={after}
            alt="Jentex landing page"
            width="320"
            height="auto"
          />
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setActiveTab("before")}
          className={`${
            activeTab === "before" && "font-black text-text-dark"
          } italic`}
        >
          BEFORE
        </button>
        <button
          onClick={() => setActiveTab("after")}
          className={`${
            activeTab === "after" && "font-black text-text-dark"
          } italic`}
        >
          AFTER
        </button>
      </div>
    </div>
  );
};

export default BeforeAfter;
