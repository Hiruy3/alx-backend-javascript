const getStudentIdsSum = (arr) => {
  const ids = arr.map((item) => item.id);
  return ids.reduce((acc, curr) => acc + curr, 0);
};
export default getStudentIdsSum;
