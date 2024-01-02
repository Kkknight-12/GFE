/*
 * Implement a function findIndex(array, predicate, [fromIndex=0]) that takes
 * an array of values, a function predicate, and an optional fromIndex number
 * argument, and returns the index of the first element in the array that
 * satisfies the provided testing function predicate.
 *
 * If no values satisfy the testing function, -1 is returned.
 *
 * Arguments
 * - array (Array): The array to inspect.
 * - predicate (Function): The function invoked per iteration.
 * - [fromIndex=0] (number): The index to search from.
 *  */

export default function findIndex(
  array: any[],
  predicate: Function,
  fromIndex: number = 0
): number {
  const length = array.length;

  // when fromIndex is negative, it means we start from the end of the array,
  // so we need to convert it to a positive index
  // e.g. if length = 5, fromIndex = -2, then startIndex = 5 + (-2) = 3
  // if length = 5, fromIndex = -6, then startIndex = 5 + (-6) = -1
  // but -1 is not a valid index, so we need to convert it to 0,
  // so we use Math.max(length + fromIndex, 0)
  const startIndex =
    fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);

  // Loop through the array starting at fromIndex.
  for (let i = startIndex; i < length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }

  // No element in the array satisfies the predicate.
  // Return -1.
  return -1;
}

const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
// starting the search at index 0.
console.log(findIndex(arr, (num: number) => num > 3)); // => 3

// Search for the first value in the array that is greater than 3,
// starting the search at index 4.
console.log(findIndex(arr, (num: number) => num > 3, 4)); // => 4

// No such element exists.
console.log(findIndex(arr, (num: number) => num > 10, 3)); // => -1