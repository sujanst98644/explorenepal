import React, {useState} from "react";
import data from "../data/data.json";
import DestinationCard from "./DestinationCard";

const Filter = () => {
  const [regionFilter, setRegionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortOption, setSortOption] = useState("rating");

  const filteredDestinations = data
    .filter(
      (destination) =>
        (!regionFilter || destination.region === regionFilter) &&
        (!typeFilter || destination.type === typeFilter)
    )
    .sort((a, b) => {
      if (sortOption === "rating") return b.rating - a.rating;
      if (sortOption === "popularity")
        return b.popularity.localeCompare(a.popularity);
      return 0;
    });
  return (
    <div className="container mx-auto p-4 lg:px-10 bg-gray-100 mt-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Explore Destinations in Nepal
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          <option value="">All Regions</option>
          <option value="Khumbu Region">Khumbu Region</option>
          <option value="Kathmandu Valley">Kathmandu Valley</option>
          <option value="Annapurna Region">Annapurna Region</option>
          <option value="Terai">Terai</option>
          <option value="Gandaki Province">Gandaki Province</option>
          <option value="Karnali Region">Karnali Region</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          <option value="">All Types</option>
          <option value="Trekking">Trekking</option>
          <option value="Cultural">Cultural</option>
          <option value="Adventure">Adventure</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          <option value="rating">Sort by Rating</option>
          <option value="popularity">Sort by Popularity</option>
        </select>
      </div>
      <DestinationCard filteredDestinations={filteredDestinations} />
    </div>
  );
};

export default Filter;
