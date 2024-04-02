import Link from "next/link";
import "./hero.css";

const Hero = () => {
  return (
    <header className="pt-8 pb-1 min-h-[80vh] flex flex-col md:flex-row gap-8 overflow-hidden">
      <div className="flex-1 p-8 md:p-16">
        <h1 className="mb-4 max-w-[80%]">
          Premium website redesign{" "}
          <span className="text-accent after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 after:w-full after:-z-10">
            for{" "}
          </span>
          <span className="text-accent after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 after:w-full after:-z-10">
            businesses
          </span>
        </h1>
        <p className="mb-8">
          Redesign your website to get the benefits of a custom website
        </p>
        <Link
          href="/schedule-a-review"
          className="btn-accent px-4 sm:px-8 py-2 sm:py-3 mb-1 inline-block text-sm sm:text-lg"
        >
          Schedule a free website review
        </Link>
      </div>

      <div className="flex-1 grid grid-cols-5 grid-rows-2 gap-4 -mr-16 min-h-[50vh]">
        <div className="card card-1 col-span-3 row-span-1 rounded-2xl" />
        <div className="card card-2 col-span-2 row-span-1 rounded-2xl" />
        <div className="card card-3 col-span-2 row-span-1 rounded-2xl" />
        <div className="card card-4 col-span-3 row-span-1 rounded-2xl" />
      </div>
    </header>
  );
};

export default Hero;
