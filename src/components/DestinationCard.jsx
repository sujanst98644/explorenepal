import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ filteredDestinations }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredDestinations.map((destination, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
        >
          {/* Image Section */}
          <img
            src={destination.image[0]}
            alt={destination.name}
            className="w-full h-40 md:h-48 object-cover"
          />

          {/* Content Section */}
          <div className="p-4 flex flex-row ">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {destination.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 lg:block hidden">
                {destination.description.split(" ").slice(0, 15).join(" ")}...
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">Region:</span> {destination.region}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Type:</span> {destination.type}
              </p>
            </div>

            {/* Footer Section */}
            <div className="flex items-center mt-4 flex-col space-y-4 relative bottom-3">
              <span className="text-yellow-500 font-semibold text-sm md:text-base">
                ⭐ {destination.rating}
              </span>
              <Link
                to={destination.detailPage}
                className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors duration-300"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationCard;
