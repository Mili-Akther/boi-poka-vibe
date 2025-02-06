import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addToStoreWishList } from "../utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  // console.log(typeof bookId, typeof id, typeof data[0].bookId,);
  const book = data.find((book) => book.bookId === id);
  // console.log(book);
  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  const handleMarkAsRead = (id) => {
    addToStoreReadList(id);
  };
  const handleAddToWishList = (id) => {
    addToStoreWishList(id);
  };
  return (
    <div className="hero-content flex-col lg:flex-row">
      <img src={image} className="max-w-sm rounded-lg shadow-2xl w-full " />
      <div className="p-20">
        <h1 className="text-5xl font-bold ">{bookName}</h1>
        <p className="">By: {author}</p>
        <div className="border-t-2 border-gray-300 mt-4"></div>
        <div className="text-gray-900 font-medium mt-3">{category}</div>
        <div className="border-t-2 border-gray-300 mt-4"></div>

        <p className="py-6">Review: {review}</p>
        <div className="flex justify-items-start items-start gap-4 mb-4">
          Tags
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-xs bg-green-100 text-green-500 rounded-3xl"
            >
              {tags}
            </button>
          ))}
        </div>
        <div className="border-t-2 border-gray-300 mt-4"></div>

        <div className="space-y-2">
          <p className="text-gray-500">
            Number of Pages:{" "}
            <span className="font-bold text-black">{totalPages}</span>
          </p>
          <p className="text-gray-500">
            Publisher: <span className="font-bold text-black">{publisher}</span>
          </p>
          <p className="text-gray-500">
            Year of Publishing:{" "}
            <span className="font-bold text-black">{yearOfPublishing}</span>
          </p>
          <p className="text-gray-500">
            Rating: <span className="font-bold text-black">{rating}</span>
          </p>
        </div>

        <button
          onClick={() => handleMarkAsRead(bookId)}
          className="btn btn-outline mr-4 btn-accent mt-8"
        >
          Mark As Read
        </button>
        <button
          onClick={() => handleAddToWishList(bookId)}
          className="btn  btn-accent mt-8 font-black text-white"
        >
          Add To WishList
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
