// import sections one by one
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar/Navbar";
import FloatingImages from "@/ui/FloatingImages";
import Benefits from "@/sections/Benefits/Benefits";
import Process from "@/sections/Process";
import CaseStudies from "@/sections/CaseStudies/CaseStudies";
import Pricing from "@/sections/Pricing/Pricing";
import FAQs from "@/sections/FAQs/FAQs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingImages />
      <Benefits />
      <Process />
      <CaseStudies />
      <Pricing />
      <FAQs />
    </>
  );
}
