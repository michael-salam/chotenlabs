"use client";

import Image from "next/image";
import { useState } from "react";
import { sendEmail } from "@/app/lib/actions";

import success from "@/public/images/success.svg";
import error from "@/public/images/error.svg";
import loadingSpinner from "@/public/images/loading-spinner-black.svg";

const FreeReviewForm = () => {
  const [firstName, setFirstName] = useState("");
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
          firstName={firstName}
          setFirstName={setFirstName}
          websiteAddress={websiteAddress}
          setWebsiteAddress={setWebsiteAddress}
          emailAddress={emailAddress}
          setEmailAddress={setEmailAddress}
          setIsShowingPopupForm={setIsShowingPopupForm}
        />
      )}
    </>
  );
};

const PopupForm = ({
  firstName,
  setFirstName,
  websiteAddress,
  setWebsiteAddress,
  emailAddress,
  setEmailAddress,
  setIsShowingPopupForm,
}) => {
  // const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
  //   error: null,
  //   success: false,
  // });

  // useEffect(() => {
  //   if (sendEmailState.success) {
  //     alert("Email sent!");
  //     setFirstName("");
  //     setWebsiteAddress("");
  //     setEmailAddress("");
  //     setIsShowingPopupForm(false);
  //   }
  //   if (sendEmailState.error) {
  //     alert("Error sending email!");
  //   }
  // }, [sendEmailState]);

  const [isLoading, setIsLoading] = useState(false);
  const [emailActionResponse, setEmailActionResponse] = useState(null);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailActionResponse(
      await sendEmail({
        firstName,
        emailAddress,
        websiteAddress,
      })
    );
    setIsLoading(false);
    console.log(emailActionResponse);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-16 px-4 sm:px-8 md:px-16 w-[90vw] sm:w-[80vw] md:w-[60vw] max-h-[95vh] max-w-[95vw] overflow-y-scroll rounded-md bg-bg-mid z-50 border border-black shadow-lg"
    >
      {emailActionResponse ? (
        <div className="grid place-items-center">
          {emailActionResponse.success ? (
            <>
              <Image
                src={success}
                width="128"
                height="128"
                alt="Circle check"
              />
              <p className="mt-4 font-black text-black text-2xl max-w-[20ch]">
                {emailActionResponse.message}
              </p>
              <button
                onClick={() => setIsShowingPopupForm(false)}
                className="mt-8 underline font-semibold"
                role="button"
              >
                Back to website
              </button>
            </>
          ) : (
            <>
              <Image src={error} width="128" height="128" alt="Circle error" />
              <p className="mt-4 font-black text-black text-2xl max-w-[20ch]">
                {emailActionResponse.message}
              </p>
              <button
                onClick={() => setEmailActionResponse(null)}
                className="mt-8 underline font-semibold"
                role="button"
              >
                Try again
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <p className="font-black text-accent uppercase mb-4">Almost there!</p>
          <p className="max-w-[40ch] text-2xl mb-8">
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
              First name
            </label>
            <input
              className="block w-full rounded-md px-4 py-2 mb-4 border border-black"
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="example: John"
              aria-label="example: John"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
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
              aria-label="example: abc@xyz.com"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div>
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
          <button
            disabled={isLoading}
            className="btn btn-dark px-4 py-3 mb-4 sharp-shadow-sm block w-full"
          >
            {isLoading ? (
              <Image
                src={loadingSpinner}
                height="32"
                width="32"
                alt="Loading spinner"
                className="animate-spin inline-block"
              />
            ) : (
              <span>Request review</span>
            )}
          </button>
          <button
            onClick={() => setIsShowingPopupForm(false)}
            role="button"
            className="inline-block text-text-dark"
          >
            Cancel
          </button>
        </>
      )}
    </form>
  );
};

export default FreeReviewForm;
