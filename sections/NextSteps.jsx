const NextSteps = () => {
  return (
    <section className="pb-0 text-center px-4 next-steps">
      <p className="uppercase">Next steps</p>
      <h2 className="mb-4">So, you&apos;ve made it to the end</h2>

      <p className="mb-4 max-w-[40ch] mx-auto text-lg">
        We won&apos;t ask you to give us your money just yet. For a start, you
        can request a free discovery call.
      </p>
      <a
        href="https://calendly.com/chotencreativelabs/free-discovery-call"
        target="_blank"
        className="btn-accent inline-block px-4 sm:px-8 py-4"
      >
        Book a free discovery call →
      </a>

      <p className="py-16 text-center">ChotenLabs &copy;2024</p>
    </section>
  );
};

export default NextSteps;
