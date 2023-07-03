const hasValuesFromArray = (set, array) => {
  let isIn = true;
  array.forEach((element) => {
    if (set.has(element) === false) {
      isIn = false;
    }
  });
  return isIn;
};
export default hasValuesFromArray;
