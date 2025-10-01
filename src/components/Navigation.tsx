import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="w-full mx-auto px-20 py-10 border-b border-gray-300 flex items-center justify-center">
      <div className="flex w-full max-w-[1440px] items-center justify-between">
        {/* Logo */}
        <div className="text-2xl">
          <div className="logo">
            Cookify<span className="text-orange-600">.</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12">
          <Link
            href="/"
            className="navLinks transform transition hover:-translate-y-1"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="navLinks transform transition hover:-translate-y-1"
          >
            Recipes
          </Link>
          <Link
            href="#"
            className="navLinks transform transition hover:-translate-y-1"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="navLinks transform transition hover:-translate-y-1"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="navLinks transform transition hover:-translate-y-1"
          >
            About Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="transform transition hover:-translate-y-1">
            <FaFacebook size={20} />
          </Link>
          <Link href="#" className="transform transition hover:-translate-y-1">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="transform transition hover:-translate-y-1">
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
