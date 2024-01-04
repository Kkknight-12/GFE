/*
 * Implement a function fill(array, value, [start=0], [end=array.length])
 * that fills an array with values from start up to, but not including, end.
 * Note: This method mutates array.
 *
 * Example:
 *
 *  */

export default function fill<T>(
  array: Array<T>,
  value: any,
  start: number = 0,
  end: number = array.length
): Array<T> {
  const length = array.length;

  /*
   * start < 0 ?: This checks if start is negative. If it is, the code after
   * the ? is executed. If not, the code after the : is executed.
   *
   * (-start > length ? 0 : length + start): This is the code that gets
   * executed if start is negative. It's another ternary operation:
   *
   *    -start > length ? 0: If the absolute value of start is greater than
   *     length, start is set to 0.
   *
   *     : length + start: If the absolute value of start is not greater than
   *     length, start is set to length + start. Since start is negative, this
   *     effectively subtracts the absolute value of start from length.
   *
   * : start: If start is not negative, it remains the same.
   *
   * This is typically used in array operations where negative indices are
   * interpreted as counting from the end of the array. For example, in an
   * array of length 5, an index of -1 refers to the last element, -2 refers to
   * the second last element, and so on.
   *  */
  // if end is negative, end from the end of the array
  start = start < 0 ? (-start > length ? 0 : length + start) : start;
  end = end < 0 ? length + end : end > length ? length + 1 : end;

  //
  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}

console.log(fill([1, 2, 3], "a")); // ['a', 'a', 'a']
console.log(fill([4, 6, 8, 10], "*", 1, 3)); // [4, '*', '*', 10]
console.log(fill([4, 6, 8, 10, 12], "*", -3, -1)); // [4, 6, '*', '*', 12]
console.log(fill([4, 6, 8, 10, 12], "*", -6, -1)); // [ '*', '*', '*', '*', 12 ]