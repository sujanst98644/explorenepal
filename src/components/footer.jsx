import React from "react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" text-w py-8 flex flex-col items-center px-10 bg-gray-100">
        <hr className="h-0.5 w-1/2 bg-black" />
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Nepal</h2>
          <p className="mb-4">Discover the beauty and culture of Nepal</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <Link to="/" className="hover:text-gray-400">
              <FaFacebook />
            </Link>
            <Link to="/" className="hover:text-gray-400">
              <FaXTwitter />
            </Link>
            <Link to="/" className="hover:text-gray-400">
              <FaInstagram />
            </Link>
          </div>
          <p className="mt-4">
            &copy; 2025 Explore Nepal. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
