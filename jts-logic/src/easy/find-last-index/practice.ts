const a = [5, 4, 3, 2, 1]

const fli = (
  arr: any[],
  callback: Function,
  fromIndex: number = arr.length - 1,
) => {
  const start =
    fromIndex < 0
      ? -fromIndex > arr.length
        ? 0
        : arr.length + fromIndex
      : fromIndex

  for (let i = start; i >= 0; i--) {
    if (callback(arr[i])) {
      return i
    }
  }
  return -1
}

// Search for the last value in the array that is greater than 3 and return the index.
console.log(fli(a, (num: number) => num > 3)) // => 1

// Start searching from index 3 (inclusive).
console.log(fli(a, (num: number) => num > 1, 3)) // => 3

// Start searching from index 3 (inclusive).
console.log(fli(a, (num: number) => num < 1, 3)) // => -1

// Start searching from index 2.
console.log(fli(a, (num: number) => num > 2, -3)) // => 2

console.log(fli(a, (num: number) => num % 2 === 0, -3)) // => 1

// Start from the last index if fromIndex >= array.length.
console.log(fli(a, (num: number) => num > 0, 10)) // => 4

// Negative and out of bounds, start searching from the first item in the array.
console.log(fli(a, (num: number) => num > 2, -10)) // => 0