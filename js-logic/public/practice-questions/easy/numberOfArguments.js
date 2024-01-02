// https://www.greatfrontend.com/questions/javascript/number-of-arguments

export const numberOfArguments = (...args) => args.length
console.log(numberOfArguments()) // 0
console.log(numberOfArguments(1, 2, 3, 4, 5)) // 5
console.log(numberOfArguments("a", "b", "c")) // 3

// solutions

// Solution 1: Using arguments object
// The arguments object is an array-like object that is accessible
// inside functions and it contains values or arguments passed to that
// function. Hence we can use arguments.length to determine the number
// of arguments passed.

export const numberOfArguments1 = function () {
  return arguments.length
}

// Solution 2: Using rest parameters

// Edge Cases
// Calling a function with undefined. undefined is still counted as a
// parameter. Default function parameters will be initialized with
// default values if no value or undefined is passed.
