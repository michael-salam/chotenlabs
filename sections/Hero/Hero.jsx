import "./hero.css";

const Hero = () => {
  return (
    <header className="pt-8 pb-1 min-h-[60vh] flex flex-col md:flex-row gap-8 overflow-hidden">
      <div className="flex-1 p-8 md:p-16">
        <h1 className="mb-4 mx-auto md:mx-0 text-center md:text-left max-w-[90%]">
          Premium web design{" "}
          <span className="text-accent after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 after:w-full after:-z-10">
            made{" "}
          </span>
          <span className="text-accent after:bg-[#5B2B9C]/50 relative after:absolute after:left-0 after:bottom-1 sm:after:bottom-3 lg:after:bottom-4 after:h-4 after:w-full after:-z-10">
            affordable
          </span>
        </h1>
        <p className="mb-8 max-w-[40ch] mx-auto md:mx-0 text-center md:text-left">
          We create top-tier business websites on a monthly plan and manage it
          all so you don't have to.
        </p>
        <div className="flex w-full mx-auto justify-center md:justify-start text-center md:text-left flex-col sm:flex-row md:flex-col lg:flex-row gap-2">
          <a
            href="#pricing"
            className="btn-accent px-4 sm:px-8 py-2 sm:py-3 mb-1 inline-block text-lg"
          >
            See pricing
          </a>

          <a
            href="https://calendly.com/chotencreativelabs/free-discovery-call"
            target="_blank"
            className="bg-accent/10 text-white red-hat-font hover:bg-accent/15 transition-colors rounded-2xl border border-accent/20 px-4 sm:px-8 py-2 sm:py-3 mb-1 inline-block text-lg"
          >
            Book a free discovery call
          </a>
        </div>
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
