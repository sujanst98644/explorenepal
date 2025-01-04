import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import { Link } from "react-router-dom";

const Recommendation = () => {
  const popularDestinations = data.filter(
    (data) => data.popularity === "High"
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % popularDestinations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [popularDestinations.length]);

  const currentDestination = popularDestinations[currentIndex];
  const currentDestination1 = popularDestinations[(currentIndex+2) % popularDestinations.length];

  return (
    <div className="text-black text-xl bg-opacity-30 flex items-center justify-center space-y-10 p-10 flex-col ">
      
      <h1 className="text-4xl font-semibold text-gray-700">Top Destination:</h1>
      <div className="flex flex-row items-center justify-center space-x-10">
      <div
        className="shadow-xl rounded-md lg:w-[38%] lg:h-80 bg-slate-200 overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${currentDestination.image[0]})`,
        }}
      >
        <div className="p-4 backdrop-blur-[2px]">
          <h2 className="text-2xl text-gray-100">{currentDestination.name}</h2>
          <p className="text-gray-100 text-base mt-2">{currentDestination.description.split(" ").slice(0, 50).join(" ")}.....</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <Link to={currentDestination.detailPage}>Explore</Link>
          </button>
        </div>
      </div>
      <div
        className="shadow-xl rounded-md lg:w-[38%] lg:h-80 bg-slate-200 overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${currentDestination1.image[0]})`,
        }}
      >
        <div className="p-4 backdrop-blur-[2px]">
          <h2 className="text-2xl text-gray-100">{currentDestination1.name}</h2>
          <p className="text-gray-100 text-base mt-2">{currentDestination1.description.split(" ").slice(0, 50).join(" ")}.....</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <Link to={currentDestination1.detailPage}>Explore</Link>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Recommendation;
