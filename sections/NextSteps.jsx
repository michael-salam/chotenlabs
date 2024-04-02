import Link from "next/link";

import arrow from "@/public/images/arrow.svg";
import Image from "next/image";

const NextSteps = () => {
  return (
    <section className="pb-0">
      <p className="uppercase text-center">Next steps</p>
      <h2>So, you&apos;ve made it to the end</h2>

      <div className="w-11/12 lg:w-8/12 mx-auto text-base md:text-lg text-center col-span-1 dark-bg-gradient p-8 rounded-2xl">
        <p className="mb-4 max-w-[40ch] mx-auto">
          We won&apos;t ask you to pay us to redesign your website just yet. For
          a start, you can request a free website review.
        </p>
        <Link
          href="/schedule-a-review"
          className="btn-accent inline-block px-4 py-2"
        >
          Schedule a free website review
        </Link>
      </div>

      <p className="py-16 text-center">ChotenLabs &copy;2024</p>
    </section>
  );
};

export default NextSteps;
