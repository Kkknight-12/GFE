/*
 * dropRightWhile
 * Create a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey.
 *
 * The predicate is invoked with three arguments: (value, index, array).
 * @param {Array} array - The array to query.
 * @param {Function} callback - The function invoked per iteration.
 * @returns {Array} Returns the slice of array.
 *
 * @example
 * dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3); // => [1, 2, 3]
 *  */

export default function dropRightWhile<T>(
  array: Array<T>,
  callback: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  // return empty array if array is empty
  if (array.length === 0) {
    return [];
  }

  // start from the end of the array
  let index = array.length - 1;

  // while the callback returns true, decrement index
  while (index >= 0 && callback(array[index], index, array)) {
    index--;
  }

  // return elements from 0 to index
  return array.slice(0, index + 1);
}

console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3));
// => [1, 2, 3]