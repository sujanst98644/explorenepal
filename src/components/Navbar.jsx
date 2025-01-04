import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md w-full fixed top-0 transition-transform duration-500 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Explore Nepal
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none"
        >
          <BiMenu size={32}/>
        </button>

        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link
              to="/"
              className="group text-gray-800 hover:text-indigo-600 transition-all"
            >
              Home
              <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="group text-gray-800 hover:text-indigo-600 transition-all"
            >
              About Nepal
              <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
            </Link>
          </li>
          <li>
            <Link
              to="/destinations"
              className="group text-gray-800 hover:text-indigo-600 transition-all"
            >
              Destinations
              <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="group text-gray-800 hover:text-indigo-600 transition-all"
            >
              Contact
              <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`lg:hidden bg-gray-50 shadow-lg transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-indigo-600 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-indigo-600 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              About Nepal
            </Link>
          </li>
          <li>
            <Link
              to="/destinations"
              className="text-gray-800 hover:text-indigo-600 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-indigo-600 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
