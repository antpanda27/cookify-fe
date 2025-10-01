import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

const Footer = () => {
  return (
    <footer className="bg-background w-full mx-auto px-20 max-lg:px-5 py-10">
      <div className="max-w-[1440px] mx-auto mb-12 mt-15">
        <div className="flex items-center justify-between max-lg:justify-center mb-12">
          <div className={`${lobster.variable} max-lg:text-center`}>
            <div className="logo">
              Cookify<span className="text-orange-600">.</span>
            </div>
            <p className="text-foreground/70 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <nav className="flex items-center space-x-12 max-lg:hidden">
            <a href="/recipes" className="navLinks">
              Recipes
            </a>
            <a href="#blog" className="navLinks">
              Blog
            </a>
            <a href="#contact" className="navLinks">
              Contact
            </a>
            <a href="#about" className="navLinks">
              About us
            </a>
          </nav>
        </div>

        {/* Bottom section - Copyright and socials */}
        <div className="grid grid-cols-3 max-lg:grid-cols-1 text-center justify-between pt-8">
          <div className="lg:col-start-2">
            <p className="text-foreground/60 ">
              © 2020 Flowbase. Powered by <span>Webflow</span>
            </p>
          </div>

          <div className="flex items-center space-x-6 justify-self-end col-start-3 max-lg:hidden">
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
      </div>
    </footer>
  );
};

export default Footer;
