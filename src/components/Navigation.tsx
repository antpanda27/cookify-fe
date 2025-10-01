import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="w-full mx-auto px-20 max-lg:px-5 py-10 max-lg:py-5 border-b border-gray-300 flex items-center justify-center">
      <div className="w-full max-w-[1440px] items-center justify-between grid grid-cols-3 lg:flex lg:justify-between">
        {/* Mobile Menu */}
        <div className="flex items-center justify-start lg:hidden">
          <button aria-label="Toggle Menu" className="p-2 cursor-pointer">
            <FaBars size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="text-2xl logo navLinks lg:justify-start text-center">
          <Link href="/">
            Cookify<span className="text-orange-600">.</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12 max-lg:hidden">
          <Link
            href="/"
            className="navLinks"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="navLinks"
          >
            Recipes
          </Link>
          <Link
            href="#"
            className="navLinks"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="navLinks"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="navLinks"
          >
            About Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 justify-end">
          <Link href="#" className="navLinks">
            <FaFacebook size={20} />
          </Link>
          <Link href="#" className="navLinks">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="navLinks">
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
