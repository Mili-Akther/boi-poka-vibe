import { toast } from "react-toastify";

const getStoreReadList = () => {
  const storeListStr = localStorage.getItem("read-list"); // Fixed key case
  return storeListStr ? JSON.parse(storeListStr) : [];
};

const addToStoreReadList = (id) => {
  const storeList = getStoreReadList();
  const numericId = parseInt(id); // Ensure IDs are numbers

  if (storeList.includes(numericId)) {
    toast( "already in the read list");
  } else {
    storeList.push(numericId);
    localStorage.setItem("read-list", JSON.stringify(storeList));
    toast('this book added to your read list')
  }
};

// Wish list code
const getStoreWishList = () => {
  const storeWishListStr = localStorage.getItem("wish-list"); // Fixed key case
  return storeWishListStr ? JSON.parse(storeWishListStr) : [];
};

const addToStoreWishList = (id) => {
  const storeWishList = getStoreWishList();
  const numericId = parseInt(id); // Ensure IDs are numbers

  if (storeWishList.includes(numericId)) {
    toast("already in the wish list");
  } else {
    storeWishList.push(numericId);
    localStorage.setItem("wish-list", JSON.stringify(storeWishList));
  }
};

export {
  addToStoreReadList,
  addToStoreWishList,
  getStoreReadList,
  getStoreWishList,
};
