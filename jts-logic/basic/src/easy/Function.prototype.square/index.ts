/*
 * Implement a custom Array function,
 * Array.prototype.square() which creates a new array
 * with the results of squaring every element within the
 * array the .square() method is called on.
 *
 * Notes
 * The original array should not be modified.
 * Assume that the array only contains numbers.
 * Assume that the array will not be sparse, e.g. [1, 2, , 4].
 *  */

Array.prototype.square = function <T extends number>() {
  const arr = this
  // console.log('this => ', this)

  // map will return a new array
  return arr.map((i: T) => i * i)
}

// we are calling the square method on the array
// so the this keyword will refer to left side of the dot
// which is the array
console.log([1, 2, 3, 4].square()) // [1, 4, 9, 16]

console.log([-2].square()) // [4])

console.log(['a', 'b'].square()) // [NaN, NaN]