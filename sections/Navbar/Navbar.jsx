import Image from "next/image";
import Link from "next/link";

import "./navbar.css";

// import images
import logo from "@/public/images/chotenlabs.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-4 z-20 bg-bg-dark/95">
      <div className="flex items-center justify-between w-10/12 mx-auto">
        <Link href="/">
          <Image src={logo} alt="ChotenLabs logo" height="24" width="auto" />
        </Link>

        <ul className="flex items-center gap-4 bg-[#221D28] rounded-full pl-8 py-4">
          <li className="navlink">
            <a href="#our-process">Our process</a>
          </li>
          <li className="navlink">
            <a href="#case-studies">Case studies</a>
          </li>
          <li className="navlink">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="navlink">
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <Link href="/free-website-review" className="btn-accent px-8 py-4">
              Get my free website review
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
