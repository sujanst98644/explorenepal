import React from "react";

const AboutNepal = () => {
  return (
    <div className="bg-gray-50 py-10 mt-16">
      <h1 className="lg:text-6xl text-3xl font-extrabold text-center text-gray-800 mb-8">
        About Nepal
      </h1>
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6 px-6">
          <img
            src={`${process.env.PUBLIC_URL}/Images/kathmandu-durbar-square.jpg`}
            alt="Kathmandu Durbar Square"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="lg:text-5xl text-2xl font-playfair font-bold text-gray-700 mb-4 lg:relative right-28">
              <i>Heritage</i>
            </h2>
            <p className="text-gray-600 text-justify">
              Nepal is rich in cultural heritage, with numerous UNESCO World
              Heritage Sites that reflect its deep historical and spiritual
              significance. These landmarks represent a harmonious blend of
              religion, art, and architecture, offering a glimpse into Nepal's
              rich cultural and spiritual heritage.
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-700 p-4" />
      <section className="mb-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 px-6">
          <div className="md:w-1/2">
            <h2 className="lg:text-5xl text-2xl font-playfair font-bold text-gray-700 mb-4 lg:text-end lg:relative left-28">
              <i>Nature</i>
            </h2>
            <p className="text-gray-600 text-justify">
              Nepal is renowned for its breathtaking natural landscapes,
              including the towering peaks of the Himalayas and lush forests.
              Its serene lakes and pristine ecosystems make it a paradise for
              trekkers and nature lovers.
            </p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/Images/mount-everest.jpg`}
            alt="Mount Everest"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>
      
      <hr className="border-gray-700 p-4" />
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6 px-6">
          <img
            src={`${process.env.PUBLIC_URL}/Images/trekking-nepal.jpg`}
            alt="Trekking in Nepal"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="lg:text-5xl text-2xl font-playfair font-bold text-gray-700 mb-4 lg:relative right-28">
              <i>Exploration</i>
            </h2>
            <p className="text-gray-600 text-justify">
              Nepal offers thrilling opportunities for exploration, from
              trekking and mountaineering to wildlife safaris. Adventurers and
              nature enthusiasts find Nepal a haven for unforgettable
              experiences.
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-700 p-4" />
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Popular Travel Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[
            {
              img: "trekking-nepal.jpg",
              title: "Trekking",
              desc: "Explore the majestic Himalayas through popular trekking routes.",
            },
            {
              img: "cultural.jpg",
              title: "Cultural Exploration",
              desc: "Discover Nepal’s rich culture, temples, and festivals.",
            },
            {
              img: "mountaineering.jpg",
              title: "Mountaineering",
              desc: "Challenge yourself with climbs to the world’s tallest peaks.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition hover:scale-105"
            >
              <img
                src={`${process.env.PUBLIC_URL}/Images/${item.img}`}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-bold mt-4">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutNepal;
