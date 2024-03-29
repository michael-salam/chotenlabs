import after1 from "@/public/images/after-1.jpg";
import after2 from "@/public/images/after-2.jpg";
import after3 from "@/public/images/after-3.jpg";
import after4 from "@/public/images/after-4.jpg";
import Image from "next/image";

const FloatingImages = () => {
  return (
    <>
      {/* Floating images */}
      <a
        href="#case-studies"
        className="opacity-30 absolute rounded-lg overflow-hidden -left-16 top-16 hover:opacity-80 hover:-left-8 transition-all"
      >
        <Image
          src={after1}
          alt="BrandBoostHub website redesign mockup"
          height="200"
          width="auto"
        />
      </a>

      <a
        href="#case-studies"
        className="opacity-30 absolute rounded-lg overflow-hidden -left-28 top-[70vh] hover:opacity-80 hover:-left-16 transition-all"
      >
        <Image
          src={after2}
          alt="MDBBA website redesign mockup"
          height="200"
          width="auto"
        />
      </a>

      <a
        href="#case-studies"
        className="opacity-30 absolute rounded-lg overflow-hidden -right-32 top-32 hover:opacity-80 hover:-right-16 transition-all"
      >
        <Image
          src={after3}
          alt="Real Life Business Solutions website redesign mockup"
          height="200"
          width="auto"
        />
      </a>

      <a
        href="#case-studies"
        className="opacity-30 absolute rounded-lg overflow-hidden -right-28 top-[70vh] hover:opacity-80 hover:-right-16 transition-all"
      >
        <Image
          src={after4}
          alt="Revolve Detroit website redesign mockup"
          height="200"
          width="auto"
        />
      </a>
    </>
  );
};

export default FloatingImages;
