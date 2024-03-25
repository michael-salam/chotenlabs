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
        height="180"
        width="auto"
        className="opacity-30 rounded-lg absolute -left-32 top-32"
      />
      <Image
        src={after2}
        alt="MDBBA website redesign mockup"
        height="180"
        width="auto"
        className="opacity-30 absolute left-8 top-[70vh]"
      />
      <Image
        src={after3}
        alt="Real Life Business Solutions website redesign mockup"
        height="180"
        width="auto"
        className="opacity-30 absolute -right-10 top-32"
      />
      <Image
        src={after4}
        alt="Revolve Detroit website redesign mockup"
        height="180"
        width="auto"
        className="opacity-30 absolute right-4 top-[70vh]"
      />
    </>
  );
};

export default FloatingImages;
