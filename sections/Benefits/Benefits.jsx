import "./benefits.css";

const Benefits = () => {
  return (
    <section id="why-redesign" className="benefits">
      <p className="uppercase text-center max-w-[80%] mx-auto">
        Over 400M active websites on the internet
      </p>
      <h2>Don&apos;t be just another number</h2>

      <div className="grid place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        <div className="col-span-1 p-8 rounded-2xl border border-accent/5 bg-bg-dark/30 text-sm">
          <h3 className="text-lg tracking-normal mb-4">
            Leave a unique impression
          </h3>
          <p className="max-w-[40ch]">
            Transform your website experience to leave your visitors with a
            different and lasting impression.
          </p>
        </div>

        <div className="col-span-1 p-8 rounded-2xl border border-accent/5 bg-bg-dark/30 text-sm">
          <h3 className="text-lg tracking-normal mb-4">
            Multiply your conversions
          </h3>
          <p className="max-w-[40ch]">
            By tweaking your website&apos;s structure and messaging, you can see
            up to triple your current conversion rate.
          </p>
        </div>
        <div className="col-span-1 p-8 rounded-2xl border border-accent/5 bg-bg-dark/30 text-sm">
          <h3 className="text-lg tracking-normal mb-4">
            Increase visitors&apos; trust in you
          </h3>
          <p className="max-w-[40ch]">
            75% of users judge a business&apos;s credibility based on its
            website&apos;s design. Don&apos;t be at a disadvantage.
          </p>
        </div>
        <div className="col-span-1 p-8 rounded-2xl border border-accent/5 bg-bg-dark/30 text-sm">
          <h3 className="text-lg tracking-normal mb-4">Reach mobile users</h3>
          <p className="max-w-[40ch]">
            Almost 60% of all internet access is through mobile phones.
            It&apos;s time to capitalize on this number.
          </p>
        </div>
        <div className="col-span-1 p-8 rounded-2xl border border-accent/5 bg-bg-dark/30 text-sm">
          <h3 className="text-lg tracking-normal mb-4">
            Stand out from the competition
          </h3>
          <p className="max-w-[40ch]">
            Your website probably looks like every other one in your niche. A
            premium website sets you apart.
          </p>
        </div>
        <div className="col-span-1 p-8 rounded-2xl border border-accent/5 bg-bg-dark/30 text-sm">
          <h3 className="text-lg tracking-normal mb-4">Charge more</h3>
          <p className="max-w-[40ch]">
            A premium website can justify premium prices. Customers don&apos;t
            spend big on cheap-looking brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
