/*
 * Drop While
 * Implement a function dropWhile(array, predicate) that creates a slice of
 * array excluding elements dropped from the beginning. Elements are dropped
 * until predicate returns falsey.
 * Your function should not modify the original array.
 *
 * The predicate is invoked with three arguments: (value, index, array).
 * @param {Array} array - The array to query.
 * @param {Function} callback - The function invoked per iteration.
 * @returns {Array} Returns the slice of array.
 *
 *  */

export default function dropWhile<T>(
  array: Array<T>,
  callback: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  // return empty array if array is empty
  if (array.length === 0) {
    return [];
  }

  // start from the start of the array
  let index = 0;

  // while the callback returns true, decrement index
  while (index < array.length && callback(array[index], index, array)) {
    index++;
  }

  // return elements from index to end of array
  // slice don't change the original array
  // slice return a new array
  return array.slice(index);
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3));
// => [1, 2, 3]