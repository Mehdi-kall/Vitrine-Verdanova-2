// components/ReviewSpace.jsx
import React from "react";

const ReviewSpace = ({ name, image, review, rating }) => {
  return (
    <div className="flex items-start space-x-4 bg-white rounded-xl shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
      />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600 mt-1">{review}</p>
        <div className="flex mt-2 space-x-1">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < rating ? "⭐" : "☆"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSpace;
