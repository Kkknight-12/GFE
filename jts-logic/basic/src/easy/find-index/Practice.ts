const findIndexP = (
  arr: any[],
  callback: Function,
  fromIndex: number = 0,
): number => {
  let start =
    fromIndex < 0
      ? -fromIndex > arr.length
        ? 0
        : arr.length + fromIndex
      : fromIndex

  for (let i = start; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i
    }
  }
  return -1
}

const arr1111 = [1, 2, 3, 4, 5]

console.log(findIndexP(arr1111, (num: number) => num > 10, 3))

// Start searching from index 2 (inclusive).
console.log(findIndexP(arr1111, (num: number) => num > 2, -3)) // => 2

console.log(findIndexP(arr1111, (num: number) => num % 2 === 0, -3)) // => 3

// Start from 0 if fromIndex < -(array.length)
console.log(findIndexP(arr1111, (num: number) => num > 2, -10)) // => 2

// Search rightwards from index that's already out of bounds,
// which will always result in -1.
console.log(findIndexP(arr1111, (num: number) => num > 2, 10)) // => -1