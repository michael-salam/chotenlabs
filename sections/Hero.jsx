import Link from "next/link";

const Hero = () => {
  return (
    <header className="w-11/12 mx-auto h-[80vh] flex items-center gap-8">
      <div className="flex-[2]">
        <h1 className="mb-8 max-w-[80%]">
          Premium website redesign for{" "}
          <span className="text-accent after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 after:w-full after:-z-10">
            service-{" "}
          </span>
          <span className="text-accent after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 after:w-full after:-z-10">
            based{" "}
          </span>
          <span className="text-accent after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 after:w-full after:-z-10">
            businesses
          </span>
        </h1>
        <Link
          href="/free-website-review"
          className="btn-accent px-8 py-3 mb-2 inline-block sm:text-lg"
        >
          Schedule a free website review
        </Link>
        <p className="text-sm">
          I'm ready now and want to{" "}
          <Link href="/apply-for-redesign" className="text-accent underline">
            apply for a redesign
          </Link>
        </p>
      </div>

      <div className="bg-accent h-full flex-1"></div>
    </header>
  );
};

export default Hero;
