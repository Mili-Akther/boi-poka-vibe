import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-gray-500 min-h-[50vh] rounded-2xl px-10 mt-10">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-12 w-lg">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-gray-200 text-black rounded-lg">
            View The List
          </button>
        </div>
        <img
          src={bannerImg}
          className="w-80 lg:w-96 rounded-lg"
          alt="Book Cover"
        />
      </div>
    </div>
  );
};

export default Banner;
