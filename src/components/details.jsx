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
    }, 4000);

    return () => clearInterval(interval);
  }, [popularDestinations.length]);

  const currentDestination = popularDestinations[currentIndex];

  return (
    <div className="text-black text-xl relative top-[-100px] inset-0 bg-opacity-30 flex items-center justify-center">
      <div
        className="shadow-xl rounded-md lg:w-[50%] lg:h-80 bg-slate-200 overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${currentDestination.image})`,
        }}
      >
        <div className="p-4 backdrop-blur-[2px]">
          <h1 className="text-2xl font-bold text-white">Recommended Destination:</h1>
          <h2 className="text-2xl font-semibold text-gray-100">{currentDestination.name}</h2>
          <p className="text-gray-100 text-base mt-2">{currentDestination.description.split(" ").slice(0, 50).join(" ")}.....</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <Link to={currentDestination.detailPage}>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
