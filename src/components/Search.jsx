import { FaSearch } from "react-icons/fa";
import React from "react";


const Search = ()=>{

    return (
        <div
        className="lg:h-40 h-30 lg:w-1/2  text-green-700 font-sora font-semibold lg:text-6xl text-3xl flex flex-col items-center justify-center "
      >
        <div className=" rounded-xl flex justify-center items-center text-white text-2xl w-2/3 lg:h-14 bg-transparent shadow-md border ">
            <FaSearch className="mx-2" />
            <input
                placeholder="Find Your Destination"
              className="font-light rounded-xl focus:outline-none bg-transparent backdrop:blur-sm w-full h-full text-2xl"
            />
        </div>
      </div>
    );
}

export default Search;