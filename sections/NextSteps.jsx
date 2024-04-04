import Link from "next/link";

import arrow from "@/public/images/arrow.svg";
import Image from "next/image";

const NextSteps = () => {
  return (
    <section className="pb-0 text-center px-4">
      <p className="uppercase">Next steps</p>
      <h2 className="mb-4">So, you&apos;ve made it to the end</h2>

      <p className="mb-4 max-w-[40ch] mx-auto text-lg">
        We won&apos;t ask you to subscribe for a website just yet. For a start,
        you can request a free discovery call.
      </p>
      <Link
        href="/schedule-a-review"
        className="btn-accent inline-block px-4 sm:px-8 py-4"
      >
        Schedule a free discovery call →
      </Link>

      <p className="py-16 text-center">ChotenLabs &copy;2024</p>
    </section>
  );
};

export default NextSteps;
