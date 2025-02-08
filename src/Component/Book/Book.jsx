/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Book = ({ book }) => {

  // eslint-disable-next-line react/prop-types
  const {bookId, image, bookName, author, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-base-300 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4 ">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-100 text-green-500 rounded-3xl"
              >
                {tags}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
           
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed border-gray-300"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>

            <div className="rating ">
              {rating}
              <input type="radio" name="rating-2" className="mask mask-star " />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
