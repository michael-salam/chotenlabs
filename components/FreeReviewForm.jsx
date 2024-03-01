"use client";

import { useState } from "react";

const FreeReviewForm = () => {
  const [websiteAddress, setWebsiteAddress] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isShowingPopupForm, setIsShowingPopupForm] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsShowingPopupForm(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col sm:flex-row gap-2 border border-black bg-bg-light rounded-md p-1 md:p-2 w-full sm:w-fit mx-auto mt-4 sharp-shadow-sm"
      >
        <input
          type="text"
          placeholder="Your website address"
          aria-label="Your website address"
          className="py-1 md:py-2 px-2 md:px-4 outline-none rounded-md text-text-dark placeholder:text-text-mid"
          onChange={(e) => setWebsiteAddress(e.target.value)}
          required
          pattern="(?:https?:\/\/)?(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
        />
        <button className="btn btn-dark px-4 md:px-8 py-1 md:py-2">
          Get a free website review
        </button>
      </form>

      {isShowingPopupForm && (
        <PopupForm
          websiteAddress={websiteAddress}
          setWebsiteAddress={setWebsiteAddress}
          setEmailAddress={setEmailAddress}
          setIsShowingPopupForm={setIsShowingPopupForm}
        />
      )}
    </>
  );
};

const PopupForm = ({
  websiteAddress,
  setWebsiteAddress,
  setEmailAddress,
  setIsShowingPopupForm,
}) => {
  return (
    <form className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-16 max-h-[95vh] max-w-[95vw] overflow-y-scroll rounded-md bg-bg-mid z-50 border border-black shadow-lg">
      <p className="font-black text-accent uppercase mb-4">Almost there!</p>
      <p className="max-w-[40ch] text-2xl sm:text-3xl mb-8">
        Enter your email to receive a free website review for{" "}
        <span className="text-accent font-semibold underline">
          {websiteAddress}
        </span>
      </p>
      <div className="mb-4">
        <label
          className="block text-left mb-2 mt-4 font-semibold text-text-dark"
          htmlFor="website"
        >
          Website URL
        </label>
        <input
          className="block w-full rounded-md px-4 py-2 mb-4 border border-black"
          type="website"
          name="website"
          id="website"
          required
          defaultValue={websiteAddress}
          pattern="(?:https?:\/\/)?(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
          onChange={(e) => setWebsiteAddress(e.target.value)}
        />
      </div>
      <div>
        <label
          className="block text-left mb-2 mt-4 font-semibold text-text-dark"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="block w-full rounded-md px-4 py-2 mb-4 border border-black"
          type="email"
          name="email"
          id="email"
          required
          placeholder="example: abc@xyz.com"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <button className="btn btn-dark px-4 py-3 mb-4 sharp-shadow-sm block w-full">
        Request review
      </button>
      <button
        onClick={() => setIsShowingPopupForm(false)}
        role="button"
        className="inline-block text-text-dark"
      >
        Cancel
      </button>
    </form>
  );
};

export default FreeReviewForm;
