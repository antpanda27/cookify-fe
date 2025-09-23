import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="w-full max-w-[1440px] mx-auto px-20 py-10 border-b border-gray-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl">
          <div className='logo'>Cookify<span className='text-orange-600'>.</span></div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12">
          <a href="#" className="navLinks">
            Home
          </a>
          <a href="#" className="navLinks">
            Recipes
          </a>
          <a href="#" className="navLinks">
            Blog
          </a>
          <a href="#" className="navLinks">
            Contact
          </a>
          <a href="#" className="navLinks">
            About Us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="#">
            <FaFacebook size={20} />
          </a>
          <a href="#">
            <FaTwitter size={20} />
          </a>
          <a href="#">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;