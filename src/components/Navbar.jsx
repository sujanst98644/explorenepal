import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 flex flex-row justify-between items-center text-nowrap px-10">
      <Link
        to="/"
        className="lg:text-sm font-semibold hover:text-[105%] text-nowrap"
      >
        Explore Nepal
      </Link>
      <ul className="flex-row space-x-16 justify-end font-light hidden lg:flex">
        <li className="text-black hover:text-gray-300">
          <Link to="/" className="group focus:text-gray-300">
            Home
            <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
          </Link>
        </li>
        <li className="text-black hover:text-gray-300 active:text-gray-300">
          <Link to="/about" className="group focus:text-gray-300">
            About Nepal
            <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-300 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
          </Link>
        </li>
        <li className="text-black hover:text-gray-300 active:text-gray-300">
          <Link to="/destinations" className="group focus:text-gray-300">
            Destinations
            <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
          </Link>
        </li>
        <li className="text-black hover:text-gray-300 active:text-gray-300">
          <Link to="/contact" className="group focus:text-gray-300">
            Contact
            <div
              className={`relative left-0 transition-all h-[1px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
            ></div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
