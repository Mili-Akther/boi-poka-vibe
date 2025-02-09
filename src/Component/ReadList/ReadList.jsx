import React from "react";
import { Link } from "react-router-dom";

const ReadList = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    publisher,
    totalPages,
    category,
    rating,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex bg-white shadow-md rounded-xl p-6 w-full items-center  border border-gray-400 mb-4">
      {/* Left Side - Book Image */}
      <div className="w-32 h-40 flex-shrink-2 rounded-md shadow-2xl">
        <img
          src={image}
          alt={bookName}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col flex-grow px-6 gap-2">
        {/* Title & Author */}
        <h2 className="text-lg font-semibold">{bookName}</h2>
        <p className="text-sm text-gray-500">By: {author}</p>

        {/* Tags & Year */}
        <div className="flex items-center gap-4 mt-2 text-sm">
          <span className="font-bold">Tags</span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-xs"
            >
              #{tag}
            </span>
          ))}
          <span className="flex items-center gap-1 text-gray-600">
            📍 Year of Publishing:{" "}
            <span className="font-medium text-black">{yearOfPublishing}</span>
          </span>
        </div>

        {/* Publisher & Page Count */}
        <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
          <span className="flex items-center gap-1">
            🏢 Publisher:{" "}
            <span className="font-medium text-black">{publisher}</span>
          </span>
          <span className="flex items-center gap-1">
            📄 Page:{" "}
            <span className="font-medium text-black">{totalPages}</span>
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-3"></div>

        {/* Bottom Row - Category, Rating & Button */}
        <div className="flex items-center gap-6">
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md">
            {category}
          </span>
          <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-md">
            ⭐ {rating}
          </span>
          <Link
            to={`/books/${bookId}`}
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
