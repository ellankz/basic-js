module.exports = function countCats(hiddenCatsArray) {
  const allCats = hiddenCatsArray.reduce((resArray, innerCatsArray) => {
    const innerCats = innerCatsArray.filter((item) => {
      return item === '^^';
    });
    return [...resArray, ...innerCats];
  }, []);
  return allCats.length;
};
