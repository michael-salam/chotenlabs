// import sections one by one
import Hero from "@/sections/Hero/Hero";
import Navbar from "@/sections/Navbar/Navbar";
import Benefits from "@/sections/Benefits/Benefits";
import Process from "@/sections/Process";
import CaseStudies from "@/sections/CaseStudies/CaseStudies";
import Pricing from "@/sections/Pricing/Pricing";
import FAQs from "@/sections/FAQs/FAQs";
import NextSteps from "@/sections/NextSteps";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <CaseStudies />
      <Pricing />
      <FAQs />
      <NextSteps />
    </>
  );
}
