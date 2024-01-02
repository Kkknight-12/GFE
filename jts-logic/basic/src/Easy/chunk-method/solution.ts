export default function chunks1<T>(array: Array<T>, size = 1): Array<Array<T>> {
  if (!Array.isArray(array) || size < 1) {
    return [];
  }

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);

    // array = array.slice();
    // array.splice(i, size, ...chunk);
  }

  return result;
}

/*
 * Note:
 * Regarding the edge case of modifying the array while
 * iterating over it, Lodash will operate on a shallow
 * copy of the array to avoid modifying the original
 * array while iterating over it.
 *
 * If you would like to modify the array while iterating
 * through it:
 *
 * for (let i = 0; i < array.length; i += size) {
 *    const chunk = array.slice(i, i + size);
 *    result.push(chunk);
 *
 *    Make a shallow copy of the current chunk and use
 *    it as the next starting point
 *    for the next iteration of the loop.
 *    array = array.slice();
 *    array.splice(i, size, ...chunk);
 * }
 *  */