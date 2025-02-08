import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreReadList } from "../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [sort, setSort] = useState("");
  const [activeTab, setActiveTab] = useState("read");
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    if (!allBooks.length) {
      console.log("⚠ No books loaded yet!");
      return;
    }
    const storeReadList = getStoreReadList();
    if (!storeReadList.length) {
      console.log("⚠ No books in Read List!");
      return;
    }

    console.log(" All Books:", allBooks);
    console.log(" Stored Read List:", storeReadList);

    const readBookList = allBooks.filter((book) =>
      storeReadList.includes(Number(book.bookId))
    );
    console.log("Matched Books:", readBookList);
    setReadList(readBookList);
  }, [allBooks]);
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Number of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList)
    }
      if (sortType === "Rating") {
        const sortedReadList = [...readList].sort(
          (a, b) => a.rating - b.rating
        );
        setReadList(sortedReadList);
      }
  };
  return (
    <div>
      <h3 className="text-3xl my-8 flex justify-center items-center ">
        Listed Books
      </h3>
      <div className="dropdown">
        <div className="flex justify-center items-center">
          <div tabIndex={0} role="button" className="btn m-1 bg-gray-600 text-white ">
            {sort ? `Sort by :${sort}` : "Sort By"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSort("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("Number of pages")}>
              <a>Number of pages</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Tabs */}
      <div className="tabs tabs-lifted">
        <button
          className={`tab ${activeTab === "read" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("read")}
        >
          Read List
        </button>
        <button
          className={`tab ${activeTab === "wish" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("wish")}
        >
          Wish List
        </button>
      </div>

      {/* Content */}
      <div className="p-4 bg-base-200 rounded-xl mt-4">
        {activeTab === "read" ? (
          <div>
            <h4 className="text-xl font-semibold">
              Your Read List : {readList.length}
            </h4>
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
            <p>Books you have already read will appear here.</p>
          </div>
        ) : (
          <div>
            <h4 className="text-xl font-semibold">Your Wish List :</h4>
            <p>Books you want to read will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
