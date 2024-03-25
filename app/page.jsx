// import sections one by one
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar/Navbar";
import FloatingImages from "@/ui/FloatingImages";
import Benefits from "@/sections/Benefits/Benefits";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingImages />
      <Benefits />
    </>
  );
}
