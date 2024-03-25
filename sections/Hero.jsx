import Link from "next/link";

const Hero = () => {
  return (
    <header className="w-10/12 mx-auto text-center h-[80vh] flex flex-col items-center justify-center">
      <h1 className="mb-4">
        Set your business{" "}
        <span className="text-accent relative after:absolute after:h-4 after:w-full after:bg-[#5B2B9C]/50 after:-z-10 after:bottom-4 after:left-0">
          apart
        </span>
      </h1>
      <p className="mb-8 text-2xl">
        Premium website redesign for service-based businesses
      </p>
      <Link
        href="/free-website-review"
        className="btn-accent px-8 py-4 mb-2 inline-block text-xl"
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
