/*
 * function takes two arrays of numbers as arguments, array1 and array2. It
 * returns a new array that includes all the elements from array1 that are
 * not present in array2.
 *
 * The function uses the filter method of array1 to create a new array. The
 * filter method takes a callback function that is executed for each element
 * in array1. This callback function checks if the current element x is not
 * included in array2 using the includes method. If x is not in array2, it
 * returns true and x is included in the new array. If x is in array2, it
 * returns false and x is not included in the new array.
 *
 * In summary, the difference function returns an array of elements that are
 * in array1 but not in array2.
 *  */

const difference = (array1: number[], array2: number[]) => {
  return array1.filter((x) => !array2.includes(x));
};

console.log(difference([1, 2, 3], [2, 3])); // => [1])
console.log(difference([1, 2, 3], [1, 2, 4])); // [3]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => [])