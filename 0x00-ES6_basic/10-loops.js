export default function appendToEachArrayValue(array, appendString) {
  const copy = array;
  for (const idx of copy) {
    const value = idx;
    copy[copy.indexOf(idx)] = appendString + value;
  }

  return copy;
}
