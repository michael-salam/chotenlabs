import Image from "next/image";
import Link from "next/link";

import "./case-studies.css";

import after1 from "@/public/images/after-1.jpg";
import after2 from "@/public/images/after-2.jpg";
import after3 from "@/public/images/after-3.jpg";
import after4 from "@/public/images/after-4.jpg";
import arrow from "@/public/images/arrow.svg";

const CaseStudies = () => {
  return (
    <section id="case-studies">
      <p className="uppercase text-center">Case studies</p>
      <h2 className="text-center mb-16">Concepts and real-life projects</h2>

      <ul className="flex gap-8 overflow-x-scroll pb-4">
        <li className="case-container min-w-[25%]">
          <Image
            src={after1}
            alt="BrandBoostHub website redesign mockup"
            height="500"
            width="auto"
            className="img w-full mb-8 opacity-50 rounded-lg transition-opacity"
          />
          <p className="mb-2 leading-tight">
            Real Life Business Solutions website redesign concept
          </p>
          <Link href="/case-studies/reallifebizsol" className="external-link">
            <span>View case study</span>
            <Image src={arrow} height="14" width="auto" alt="Arrow" />
          </Link>
        </li>

        <li className="case-container min-w-[25%]">
          <Image
            src={after2}
            alt="BrandBoostHub website redesign mockup"
            height="500"
            width="auto"
            className="img w-full mb-8 opacity-50 rounded-lg transition-opacity"
          />
          <p className="mb-2 leading-tight">
            Real Life Business Solutions website redesign concept
          </p>
          <Link href="/case-studies/reallifebizsol" className="external-link">
            <span>View case study</span>
            <Image src={arrow} height="14" width="auto" alt="Arrow" />
          </Link>
        </li>
        <li className="case-container min-w-[25%]">
          <Image
            src={after3}
            alt="BrandBoostHub website redesign mockup"
            height="500"
            width="auto"
            className="img w-full mb-8 opacity-50 rounded-lg transition-opacity"
          />
          <p className="mb-2 leading-tight">
            Real Life Business Solutions website redesign concept
          </p>
          <Link href="/case-studies/reallifebizsol" className="external-link">
            <span>View case study</span>
            <Image src={arrow} height="14" width="auto" alt="Arrow" />
          </Link>
        </li>
        <li className="case-container min-w-[25%]">
          <Image
            src={after4}
            alt="BrandBoostHub website redesign mockup"
            height="500"
            width="auto"
            className="img w-full mb-8 opacity-50 rounded-lg transition-opacity"
          />
          <p className="mb-2 leading-tight">
            Real Life Business Solutions website redesign concept
          </p>
          <Link href="/case-studies/reallifebizsol" className="external-link">
            <span>View case study</span>
            <Image src={arrow} height="14" width="auto" alt="Arrow" />
          </Link>
        </li>
        <li className="case-container min-w-[25%]">
          <Image
            src={after3}
            alt="BrandBoostHub website redesign mockup"
            height="500"
            width="auto"
            className="img w-full mb-8 opacity-50 rounded-lg transition-opacity"
          />
          <p className="mb-2 leading-tight">
            Real Life Business Solutions website redesign concept
          </p>
          <Link href="/case-studies/reallifebizsol" className="external-link">
            <span>View case study</span>
            <Image src={arrow} height="14" width="auto" alt="Arrow" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CaseStudies;
