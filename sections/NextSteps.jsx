import Link from "next/link";

import arrow from "@/public/images/arrow.svg";
import Image from "next/image";

const NextSteps = () => {
  return (
    <section className="pb-0">
      <p className="uppercase text-center">Next steps</p>
      <h2>So, you&apos;ve made it to the end</h2>

      <div className="grid grid-cols-2 gap-8 w-8/12 mx-auto">
        <div className="col-span-1 dark-bg-gradient p-8 rounded-2xl">
          <p className="mb-4">
            We won&apos;t ask you to pay us to redesign your website just yet.
            For a start, you can request a free website review.
          </p>
          <Link
            href="/free-website-review"
            className="btn-accent inline-block px-4 py-2"
          >
            Get my free website review
          </Link>
        </div>

        <div className="col-span-1 dark-bg-gradient p-8 rounded-2xl">
          <p className="mb-4">
            Ready to work with us immediately to transform your website though?
            Awesome! You can apply for a redesign below.
          </p>
          <Link href="/free-website-review" className="external-link">
            <span>Apply for a redesign</span>
            <Image src={arrow} height="12" width="auto" alt="Arrow" />
          </Link>
        </div>
      </div>

      <p className="py-16 text-center">ChotenLabs &copy;2024</p>
    </section>
  );
};

export default NextSteps;
