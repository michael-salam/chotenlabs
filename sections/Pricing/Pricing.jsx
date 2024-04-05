import Image from "next/image";

import check from "@/public/images/check.svg";

import "./pricing.css";

const Pricing = () => {
  return (
    <section id="pricing">
      <p className="uppercase text-center">Pricing</p>
      <h2 className="mb-16">$179/mo, 24-month minimum duration</h2>

      <div className="grid grid-cols-12 gap-4 w-full sm:w-3/5 sm:mx-auto lg:mx-4 lg:w-full">
        <div className="col-span-12 lg:col-span-3 self-center p-2 text-center light-bg-gradient rounded-[1.25rem] text-sm">
          <p className="p-2 text-text-dark red-hat-font uppercase border border-bg-dark rounded-2xl">
            Monthly plan
          </p>
          <p className="gradient-text-dark red-hat-font my-8">
            <span className="text-8xl font-black">179</span>
            <span className="font-bold text-lg">/month</span>
          </p>
          <p className="px-4 text-left text-base mb-8 text-text-dark">
            Work with a designer to create your own one of a kind, unique
            website. Get priority support for all your needs.
          </p>
          <a
            href="https://calendly.com/chotencreativelabs/free-discovery-call"
            target="_blank"
            className="bg-bg-dark/80 rounded-2xl red-hat-font text-text-light font-semibold p-4 block text-lg"
          >
            Get started →
          </a>
        </div>

        <div className="grid p-8 col-span-12 lg:col-span-9 lg:grid-cols-2 gap-8 bg-accent/5 border border-accent/10 rounded-2xl">
          <div className="col-span-1">
            <h3 className="text-2xl mb-4 tracking-normal">
              What&apos;s included?
            </h3>
            <ul className="text-sm">
              <li className="max-w-[40ch] list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>
                  A fully managed website (Includes website creation, setup,
                  maintenance, unlimited edits, and security).
                </span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Maximum 20 pages</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>A mobile-friendly website</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Website hosting</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Domain name registration/transfer</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>24-month minimum contract</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Dedicated client portal</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>On-page SEO</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Google analytics setup</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Quarterly performance reports</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-2xl mb-4 tracking-normal">
              What&apos;s NOT included?
            </h3>
            <ul className="text-sm">
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Off page SEO</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Social media management</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Marketing and advertising</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Complex software development</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>IT Support</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Content creation and copywriting</span>
              </li>
              <li className="list-item">
                <Image src={check} alt="Checkmark" width="24" height="auto" />
                <span>Graphic design/branding</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-accent/5 border border-accent/10 rounded-3xl">
        <div className="col-span-1 p-2 text-center dark-bg-gradient rounded-3xl text-sm">
          <p className="p-2 text-text-light red-hat-font uppercase border border-accent/10 rounded-full">
            One-time payment
          </p>
          <p className="gradient-text-bright red-hat-font my-8">
            <span className="text-7xl font-semibold">???</span>
          </p>
          <p className="px-4 text-left text-base mb-8 text-text-light">
            Don&apos;t fancy a subscription, or have specific needs? Book a call
            to get a custom quote.
          </p>
          <a
            href="https://calendly.com/chotencreativelabs/free-discovery-call"
            target="_blank"
            className="btn-accent p-3 block text-lg"
          >
            Get started →
          </a>
        </div>

        <div className="col-span-1 py-8 px-4">
          <h3 className="text-2xl mb-4 tracking-normal">
            What&apos;s included?
          </h3>
          <ul className="text-sm">
            <li>Maximum 20 pages</li>
            <li>A mobile-friendly website</li>
            <li>Dedicated client portal</li>
            <li>On-page SEO</li>
            <li>Google analytics setup</li>
            <li>Option for monthly maintenance ($30/month)</li>
          </ul>
        </div>

        <div className="col-span-1 py-8 px-4">
          <h3 className="text-2xl mb-4 tracking-normal">
            What&apos;s NOT included?
          </h3>
          <ul className="text-sm">
            <li>Quarterly performance reports</li>
            <li>Domain name registration/transfer</li>
            <li>Website hosting</li>
            <li>Off page SEO</li>
            <li>Social media management</li>
            <li>Marketing and advertising</li>
            <li>Complex software development</li>
            <li>IT Support</li>
            <li>Content creation and copywriting</li>
            <li>Graphic design/branding</li>
          </ul>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 md:w-4/5 mx-auto gap-8">
        <div className="pricing-card">
          <h3 className="p-2 border border-accent/10 mb-8 rounded-full tracking-normal uppercase text-text-mid text-sm">
            Subscription
          </h3>
          <p className="red-hat-font mb-8">
            <span className="gradient-text-bright font-black text-6xl">
              349
            </span>
            <span className="text-accent text-lg font-bold">/month</span>
          </p>
          <p className="px-4 text-left mb-8 text-sm">
            Work with a designer to create your own one of a kind, unique
            website. Get priority support for all your needs.
          </p>
          <a
            href="https://calendly.com/chotencreativelabs/free-discovery-call"
            target="_blank"
            className="btn-accent block rounded-2xl p-3 text-white red-hat-font"
          >
            Get started →
          </a>
        </div>

        <div className="pricing-card h-fit">
          <h3 className="p-2 border border-accent/10 mb-8 rounded-full tracking-normal uppercase text-text-mid text-sm">
            One-time payment
          </h3>
          <p className="red-hat-font mb-8">
            <span className="gradient-text-bright font-black text-6xl">
              ???
            </span>
          </p>
          <p className="px-4 text-left mb-8 text-sm">
            Don&apos;t fancy a subscription, or have specific needs? Book a call
            to get a custom quote.
          </p>
          <a
            href="https://calendly.com/chotencreativelabs/free-discovery-call"
            target="_blank"
            className="btn-accent block rounded-2xl p-3 text-white red-hat-font"
          >
            Book a free discovery call →
          </a>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl mb-4 tracking-normal">What&apos;s included?</h3>
          <ul className="list-disc list-inside text-sm">
            <li className=" max-w-[40ch]">
              A fully managed website: Includes website creation, setup,
              maintenance, unlimited edits, and security.
            </li>
            <li>Maximum 20 pages</li>
            <li>A mobile-friendly website</li>
            <li>Website hosting</li>
            <li>Domain name registration/transfer</li>
            <li>24-month minimum contract</li>
            <li>Dedicated client portal</li>
            <li>On-page SEO</li>
            <li>Google analytics setup</li>
            <li>Quarterly performance reports</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl mb-4 tracking-normal">What&apos;s NOT included?</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Off page SEO</li>
            <li className=" max-w-[40ch]">Social media management</li>
            <li>Marketing and advertising</li>
            <li>Complex software development</li>
            <li>IT Support</li>
            <li>Content creation and copywriting</li>
            <li>Graphic design/branding</li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default Pricing;
