import strategy from "@/public/images/strategy.svg";
import design from "@/public/images/design.svg";
import hosting from "@/public/images/hosting.svg";
import management from "@/public/images/management.svg";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services">
      <p className="uppercase text-center max-w-[80%] mx-auto">Services</p>
      <h2>What we offer</h2>

      <div className="grid place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto text-center">
        <div className="bg-accent/5 border border-accent/10 p-8 rounded-2xl col-span-1 flex flex-col items-center text-sm">
          <Image src={strategy} height="64" width="auto" alt="Jigsaw puzzle" />
          <h3 className="text-lg tracking-normal mb-4">Strategy</h3>
          <p className="max-w-[30ch]">
            We create a plan to make the most of your website
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/10 p-8 rounded-2xl col-span-1 flex flex-col items-center text-sm">
          <Image src={design} height="64" width="auto" alt="Jigsaw puzzle" />
          <h3 className="text-lg tracking-normal mb-4">Design</h3>
          <p className="max-w-[30ch]">We design and develop custom websites</p>
        </div>

        <div className="bg-accent/5 border border-accent/10 p-8 rounded-2xl col-span-1 flex flex-col items-center text-sm">
          <Image src={hosting} height="64" width="auto" alt="Jigsaw puzzle" />
          <h3 className="text-lg tracking-normal mb-4">Hosting</h3>
          <p className="max-w-[30ch]">
            We give your website a place to live on the internet
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/10 p-8 rounded-2xl col-span-1 flex flex-col items-center text-sm">
          <Image
            src={management}
            height="64"
            width="auto"
            alt="Jigsaw puzzle"
          />
          <h3 className="text-lg tracking-normal mb-4">Management</h3>
          <p className="max-w-[30ch]">
            We manage every aspect of your website so you don&apos;t have to
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
