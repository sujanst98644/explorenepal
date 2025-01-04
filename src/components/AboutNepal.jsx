import React from "react";

const AboutNepal = () => {
  return (
    <div className="p-6 px-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About Nepal
      </h1>
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={`${process.env.PUBLIC_URL}/Images/kathmandu-durbar-square.jpg`}
            alt="Kathmandu Durbar Square"
            className=" w-full md:w-1/2 rounded-lg shadow"
          />
          <div>
            <h2 className="text-6xl font-bold font-playfair text-gray-700 mb-4 relative right-28">
              <i>Heritage</i>
            </h2>
            <p className="text-gray-600 text-justify">
              Nepal is rich in cultural heritage, with numerous UNESCO World
              Heritage Sites that reflect its deep historical and spiritual
              significance. The Kathmandu Valley alone is home to seven such
              sites, including the iconic Pashupatinath Temple, a major
              pilgrimage destination for Hindus; the Swayambhunath Stupa, also
              known as the Monkey Temple, which offers stunning views of the
              valley; and the ancient city of Bhaktapur, renowned for its
              well-preserved medieval architecture. Other notable sites include
              the Boudhanath Stupa, a center of Tibetan Buddhism; the Kathmandu
              Durbar Square, with its royal palaces and temples; the Patan
              Durbar Square, known for its intricate Newar architecture; and the
              historical city of Lumbini, the birthplace of Lord Buddha. These
              landmarks represent a harmonious blend of religion, art, and
              architecture, offering a glimpse into Nepal's rich cultural and
              spiritual heritage.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div>
            <h2 className="text-6xl font-bold font-playfair text-gray-700 mb-4 relative left-32 text-end">
              <i>Nature</i>
            </h2>
            <p className="text-gray-600 text-justify">
              Nepal is renowned for its breathtaking natural landscapes, which
              include the towering peaks of the Himalayas, verdant forests, and
              tranquil lakes. The country is home to some of the most
              spectacular trekking routes in the world, including the famous
              Annapurna Circuit and the Everest Base Camp trek. Nepal's diverse
              geography ranges from the towering snow-capped mountains to lush
              subtropical forests teeming with wildlife, providing an ideal
              setting for nature lovers and adventure seekers alike. Among its
              many treasures, Nepal proudly houses Mount Everest, the highest
              peak on Earth, attracting climbers and adventurers from around the
              globe who come to challenge its formidable heights. The serene
              lakes of Pokhara, such as Phewa Lake, offer peaceful retreats
              amidst the natural beauty. With its rich biodiversity and pristine
              landscapes, Nepal is a paradise for trekkers, mountaineers, and
              anyone seeking a connection to nature in its purest form.
            </p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/Images/mount-everest.jpg`}
            alt="Mount Everest"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
        </div>
      </section>
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={`${process.env.PUBLIC_URL}/Images/trekking-nepal.jpg`}
            alt="Trekking in Nepal"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <div>
            <h2 className="text-6xl font-bold font-playfair text-gray-700 mb-4 relative right-28">
              <i>Exploration</i>
            </h2>
            <p className="text-gray-600 text-justify">
              Nepal offers an abundance of thrilling opportunities for
              exploration and adventure, catering to every type of adventurer.
              The country's world-renowned trekking routes, including those in
              the Annapurna and Everest regions, offer awe-inspiring views of
              the Himalayas and a chance to experience the rich culture of the
              mountain communities. For those seeking an adrenaline rush,
              white-water rafting in Nepal’s fast-flowing rivers, such as the
              Trishuli and Bhote Koshi, provides an exhilarating experience.
              Paragliding in Pokhara, with its panoramic views of the mountains
              and lakes, is another popular activity for thrill-seekers.
              Wildlife enthusiasts can embark on exciting safaris in Chitwan
              National Park, where they can spot rare species like Bengal
              tigers, one-horned rhinoceroses, and elephants in their natural
              habitat. From mountaineering and trekking to rafting and safaris,
              Nepal offers something for everyone, making it a true haven for
              outdoor adventure and exploration.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Popular Travel Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow hover:size-[102%]">
            <img
              src={`${process.env.PUBLIC_URL}/Images/trekking-nepal.jpg`}
              alt="Trekking"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">Trekking</h3>
            <p className="text-gray-600 text-sm mt-2">
              Explore the majestic Himalayas through popular trekking routes
              like Annapurna Circuit and Everest Base Camp.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow hover:size-[102%]">
            <img
              src={`${process.env.PUBLIC_URL}/Images/cultural.jpg`}
              alt="Cultural Exploration"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">Cultural Exploration</h3>
            <p className="text-gray-600 text-sm mt-2">
              Discover Nepal’s rich culture, ancient temples, and vibrant
              festivals in Kathmandu Valley.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow hover:size-[102%]">
            <img
              src={`${process.env.PUBLIC_URL}/Images/mountaineering.jpg`}
              alt="Mountaineering"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">Mountaineering</h3>
            <p className="text-gray-600 text-sm mt-2">
              Challenge yourself by climbing the world’s tallest peaks,
              including Mount Everest and Lhotse.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutNepal;
