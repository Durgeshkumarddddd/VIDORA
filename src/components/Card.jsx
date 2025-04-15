import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/400x300/?cake"
        alt="Card Image"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Delicious Cake</h2>
        <p className="text-gray-600 text-sm mb-4">
          A mouthwatering cake baked fresh with love and the finest ingredients.
        </p>
        <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition-colors duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Card;
