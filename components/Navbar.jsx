import Image from "next/image";
import Link from "next/link";
// fonts
import { Red_Hat_Display } from "next/font/google";
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
// images
import logo from "@/public/chotenlabs.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sticky top-0 bg-bg-light z-40 px-8 py-4 border-b border-black">
      <Link href="/">
        <Image src={logo} height="24" width="auto" alt="Choten Labs logo" />
      </Link>

      <ul className="flex items-center gap-4 text-sm text-text-mid">
        <li className="nav-link">
          <a href="#our-process">Our Process</a>
        </li>
        <li className="nav-link">
          <a href="#case-studies">Case Studies</a>
        </li>
        <li className="nav-link">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="nav-link">
          <a href="#faqs">FAQs</a>
        </li>
      </ul>

      <Link
        href="/"
        className={`${redHatDisplay.className} btn btn-dark sharp-shadow-sm text-sm px-4 py-2`}
      >
        Get a free website review
      </Link>
    </nav>
  );
};

export default Navbar;
