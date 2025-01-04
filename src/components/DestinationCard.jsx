import React from 'react'
import { Link } from 'react-router-dom';

const DestinationCard = ({filteredDestinations}) => {;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={destination.image[0]}
                      alt={destination.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                      <p className="text-gray-700 mb-4">{destination.description.split(" ").slice(0,10).join(" ")}...</p>
                      <p className="text-sm text-gray-500">
                        Region: {destination.region}
                      </p>
                      <p className="text-sm text-gray-500">Type: {destination.type}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-yellow-500 font-semibold">
                          Rating: {destination.rating}
                        </span>
                        <Link
                          to={destination.detailPage}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    )
}
export default DestinationCard;