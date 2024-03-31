import Link from "next/link";

const Hero = () => {
  return (
    <header className="w-11/12 mx-auto text-center h-[80vh] flex flex-col items-center justify-center">
      <p className="mb-4 max-w-[80%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl red-hat-font text-text-light tracking-tighter leading-none">
        Set your business{" "}
        <span className="text-accent relative after:absolute after:h-2 md:after:h-4 after:w-full after:bg-[#5B2B9C]/50 after:-z-10 after:bottom-2 md:after:bottom-4 after:left-0">
          apart
        </span>
      </p>
      <h1 className="mb-8 sm:text-2xl max-w-[80%]">
        Premium website redesign for service-based businesses
      </h1>
      <Link
        href="/free-website-review"
        className="btn-accent px-8 py-4 mb-2 inline-block sm:text-lg md:text-xl"
      >
        Get my free website review
      </Link>
      <p className="text-sm">
        I'm ready now and want to{" "}
        <Link href="/apply-for-redesign" className="text-accent underline">
          apply for a redesign
        </Link>
      </p>
    </header>
  );
};

export default Hero;
