import React from "react";
import Recommendation from "./recomendation";
import Search from "./Search";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100">
        <section
          className="flex flex-col bg-gray-100 items-center justify-center h-screen w-full bg-cover bg-center text-gray-200 text-center px-5"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Himalayanrange.jpg)`,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Explore Nepal
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Discover the beauty and culture of Nepal, a land of stunning
            landscapes, rich heritage, and warm hospitality.
          </p>
          <Search />
        </section>
      </div>
      <Recommendation /> 
    </div>
  );
};

export default Home;
