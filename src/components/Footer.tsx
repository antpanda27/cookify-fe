import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Lobster } from 'next/font/google';

const lobster = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-lobster' });

const Footer = () => {
  return (
    <footer className="bg-background ">
      <div className="max-w-[1440px] mx-20 mb-12 mt-15">
        {/* Main footer content - Logo and menus in one line */}
        <div className="flex items-center justify-between mb-12">
          <div className={`${lobster.variable}`}>
            <div className='logo'>Cookify<span className='text-orange-600'>.</span></div>
            <p className="text-foreground/70 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          
          <nav className="flex items-center space-x-12">
            <a href="#recipes" className="navLinks">
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
        <div className="grid grid-cols-3 text-center justify-between pt-8">
          <div className='col-start-2'>
            <p className="text-foreground/60 ">
              © 2020 Flowbase. Powered by <span>Webflow</span>
            </p>
          </div>
          
          <div className="flex items-center space-x-6 justify-self-end col-start-3">
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
