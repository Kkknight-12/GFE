/*
 * Find the last Index
 * Implement a function findLastIndex(array, predicate,
 * [fromIndex=array.length-1]) that takes an array of values, a function
 * predicate, and an optional fromIndex number argument, and returns the
 * index of the last element in the array that satisfies the provided testing
 * function predicate. The elements of the array are iterated from right to left.
 *
 * If no values satisfy the testing function, -1 is returned.
 *
 * Arguments
 * - array (Array): The array to inspect.
 * - predicate (Function): The function invoked per iteration.
 * - [fromIndex=array.length-1] (number): The index to search from.
 *  */

export default function findLastIndex(
  array: any[],
  predicate: Function,
  fromIndex: number = array.length - 1
): number {
  const length = array == null ? 0 : array.length;

  // when fromIndex is negative, it means we start from the end of the array,
  // but if fromIndex is greater than or equal to the length of the array,
  // it means we start from the beginning of the array,
  //
  // when fromIndex is positive, it means we start from the beginning of the array,
  // but if fromIndex is greater than or equal to the length of the array,
  // it means we start from the end of the array,
  let startIndex =
    fromIndex < 0
      ? Math.max(length + fromIndex, 0)
      : Math.min(fromIndex, length - 1);

  // Loop through the array starting at fromIndex.
  for (let i = startIndex; i >= 0; i--) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;

  // we can also use while loop
  // let index = startIndex;
  // while (index >= 0) {
  //   if (predicate(array[index], index, array)) {
  //     return index;
  //   }
  //   index--;
  // }
}

const arr = [5, 4, 3, 2, 1];

// Search for the last value in the array that is greater than 3 and return the index.
console.log(findLastIndex(arr, (num: number) => num > 3)); // => 1

// Start searching from index 3 (inclusive).
console.log(findLastIndex(arr, (num: number) => num > 1, 3)); // => 3

// Start searching from index 3 (inclusive).
console.log(findLastIndex(arr, (num: number) => num < 1, 3)); // => -1