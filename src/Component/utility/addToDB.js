
const getStoreReadList = () => {
  // read list
  const storeListStr = localStorage.getItem("read-List");
  if (storeListStr) {
    const storeList = JSON.parse(storeListStr);
    return storeList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storeList = getStoreReadList();
  if (storeList.includes(id)) {
    // all ready exist , do not add
    console.log(id, "already in the read list");
  } else {
    storeList.push(id);
    const storeListStr = JSON.stringify(storeList);
    localStorage.setItem("read-list", storeListStr);
  }
};

export { addToStoreReadList };