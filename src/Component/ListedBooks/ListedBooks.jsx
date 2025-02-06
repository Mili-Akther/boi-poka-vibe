import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreReadList } from "../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
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

    console.log("📚 All Books:", allBooks);
    console.log("📌 Stored Read List:", storeReadList);

    const readBookList = allBooks.filter((book) =>
      storeReadList.includes(Number(book.bookId))
    );
    console.log("✅ Matched Books:", readBookList);
    setReadList(readBookList);
  }, [allBooks]);
  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>

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
              Your Read List 📖 {readList.length}
            </h4>
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
            <p>Books you have already read will appear here.</p>
          </div>
        ) : (
          <div>
            <h4 className="text-xl font-semibold">Your Wish List 🌟</h4>
            <p>Books you want to read will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
