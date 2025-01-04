import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import data from "../data/data.json";
import { useParams } from "react-router-dom";

const Destinationdetails = () => {
  const { id } = useParams();
  const destination = data.filter(
    (destination) => destination.id === Number(id)
  )[0];

  const { activities, image, name, region, description, rating } = destination;

  const hardcodedReviews = [
    {
      user: "sujan",
      review: "Amazing place! Highly recommend for family trips.",
      rating: 5,
    },
    {
      user: "sabina",
      review: "Great experience, but the weather was a bit too hot.",
      rating: 4,
    },
    {
      user: "santosh",
      review: "Loved the local food and friendly people.",
      rating: 5,
    },
  ];

  const [reviews, setReviews] = useState(hardcodedReviews);
  const [newReview, setNewReview] = useState({
    user: "",
    review: "",
    rating: 0,
  });
  const [showAllReviews, setShowAllReviews] = useState(false);

  const close = () => {
    window.history.back();
  };

  const handleInputChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(-3);

  return (
    <div className="text-black text-xl fixed inset-0 bg-opacity-30 backdrop-blur-[1px] flex items-center justify-center px-10">
      <div className="shadow-xl rounded-md lg:w-[50%] lg:h-[92%] h-[100%] w-full bg-slate-200 overflow-hidden overflow-y-scroll no-scrollbar">
        <div className="flex justify-end">
          <button
            onClick={close}
            className="fixed rounded-full p-3 text-2xl bg-white hover:bg-slate-200 shadow-xl text-black"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="lg:h-[65%] h-[60%]">
          <img src={image[0]} alt={name} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col items-center justify-start self-center h-full w-full">
          <div className="p-5 flex flex-col space-y-2 bg-white w-full">
            <p className="lg:text-2xl text-xl font-bold text-nowrap">{name}</p>
            <p className="text-sm text-gray-600">{region}</p>
            <p className="text-md mt-2">{description}</p>
            <h3 className="text-lg font-semibold">Gallery</h3>
            <div className="flex flex-row space-x-2 mt-4">
            {image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={name}
                className="h-40 w-40 object-cover hover:size-[70%]"
              />
            ))} 
            </div>
            <p className="text-md mt-2">Rating: {rating} ★</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Popular Activities</h3>
              <ul className="flex flex-row pl-5 space-x-4">
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">User Reviews</h3>

              {reviews.length > 0 ? (
                displayedReviews.map((review, index) => (
                  <div key={index} className="border-b py-2">
                    <p className="font-semibold">{review.user}</p>
                    <p>{review.review}</p>
                    <p className="text-yellow-500">
                      {"★".repeat(review.rating)}
                    </p>
                  </div>
                ))
              ) : (
                <p>No reviews yet. Be the first to add one!</p>
              )}

              {reviews.length > 3 && (
                <button
                  onClick={() => setShowAllReviews((prev) => !prev)}
                  className="text-blue-500 underline mt-2"
                >
                  {showAllReviews ? "View Less" : "View More"}
                </button>
              )}

              <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="user"
                  value={newReview.user}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="p-2 border rounded w-full"
                />
                <textarea
                  name="review"
                  value={newReview.review}
                  onChange={handleInputChange}
                  placeholder="Write your review"
                  className="p-2 border rounded w-full"
                ></textarea>
                <input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  className="p-2 border rounded w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinationdetails;
