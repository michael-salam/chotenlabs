import after1 from "@/public/images/after-1.jpg";
import after2 from "@/public/images/after-2.png";
import after3 from "@/public/images/after-3.png";
import after4 from "@/public/images/after-4.png";
import Image from "next/image";

const FloatingImages = () => {
  return (
    <>
      {/* Floating images */}
      <Image
        src={after1}
        alt="BrandBoostHub website redesign mockup"
        height="200"
        width="auto"
        className="opacity-30 rounded-lg absolute -left-32 top-32 hover:opacity-80 hover:-left-28 transition-all"
      />
      <Image
        src={after2}
        alt="MDBBA website redesign mockup"
        height="200"
        width="auto"
        className="opacity-30 absolute left-8 top-[70vh] hover:opacity-80 hover:left-10 transition-all"
      />
      <Image
        src={after3}
        alt="Real Life Business Solutions website redesign mockup"
        height="200"
        width="auto"
        className="opacity-30 absolute -right-10 top-32 hover:opacity-80 hover:-right-8 transition-all"
      />
      <Image
        src={after4}
        alt="Revolve Detroit website redesign mockup"
        height="200"
        width="auto"
        className="opacity-30 absolute right-4 top-[70vh] hover:opacity-80 hover:right-6 transition-all"
      />
    </>
  );
};

export default FloatingImages;
