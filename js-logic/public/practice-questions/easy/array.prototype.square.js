// Implement a custom Array function, Array.prototype.square() which creates a new array with the results of squaring every element within the array the .square() method is called on.

// example 1
// Array.prototype.square = function () {
//   const length = this.length
//   const results = new Array(length)

//   for (let i = 0; i < length; i++) {
//     results[i] = this[i] * this[i]
//   }

//   return results
// }

// example 2
Array.prototype.square = function () {
  console.log(this)
  return this.map((n) => n * n)
}

export default Array.prototype.square
// console.log([-4].square()) // []
