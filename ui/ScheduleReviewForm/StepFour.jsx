import Link from "next/link";

const StepFour = () => {
  return (
    <div className="dark-bg-gradient p-8 rounded-2xl">
      <p className="font-semibold text-text-light text-xl">Almost there!</p>
      <p className="text-lg mb-4">
        We've received your details. All you need to do now is pick a time for
        the review.
      </p>
      <div className="flex items-center justify-between">
        <a
          href="https://calendly.com"
          target="_blank"
          className="btn-accent px-8 py-4 text-lg inline-block mb-2"
        >
          Book call via Calendly
        </a>
        <p className="text-sm max-w-[40ch]">
          All done? Click{" "}
          <Link href="/" className="text-accent underline">
            here
          </Link>{" "}
          to go back to home
        </p>
      </div>
    </div>
  );
};

export default StepFour;
