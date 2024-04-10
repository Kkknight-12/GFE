/*
 * Implement a function functionLength, to return the
 * number of parameters a function expects. Note that
 * this is a static value defined by the function, not
 * the number of arguments the function is called with
 * (which is determined by arguments.length)
 *  */

/*
 * In JavaScript and TypeScript, every function has a
 * length property. This property is a static value that
 * represents the number of parameters the function
 * expects to receive when it is called. This is defined
 * when the function is declared and does not change.
 *  */
function functionLength(func: Function): number {
  return func.length
}

/*
 * However, this length property does not reflect the
 * number of arguments that the function is actually
 * called with.
 * For example,
 * function exampleFunction(param1, param2, param3) {
 * // function body
 * }
 * console.log(exampleFunction.length); // Outputs: 3
 * you could call exampleFunction with two arguments,
 * one argument, or no arguments at all, and the length
 * property would still be 3.
 * */

// @ts-ignore
function foo(a: number, b: number) {}

// Displaying the length of the function
console.log(`Function length: ${functionLength(foo)}`) // Outputs: 2

console.log('--------------------')
// --------------------------------------------------------------------------

// @ts-ignore
function getParameterCount(a: number, b?: number): number {
  return getParameterCount.length
}

// when i pass one argument
// the length of the function is still 2
// because length is the number of parameters the
// function expects not the number of arguments the
// function is called with
// Displaying the length when the function is called with one argument
console.log(
  `Function length when called with one argument: ${getParameterCount(1)}`,
) // Outputs: 2
console.log(
  `Function length when called with two argument: ${getParameterCount(1, 2)}`,
) // Outputs: 2

console.log('--------------------')
// -----------------------------default values-----------------------------------

// length property does not include parameters with default values
// @ts-ignore
// function baz(a: number, b?: number): number {
//   return baz.length
// }
function getFunctionLengthWithDefaultParam(a: number, b: number = 0): number {
  return getFunctionLengthWithDefaultParam.length
}

console.log(
  `Function length when called with one argument: ${getFunctionLengthWithDefaultParam(
    1,
  )}`,
) // Outputs: 1
console.log(
  `Function length when called with two argument: ${getFunctionLengthWithDefaultParam(
    1,
    2,
  )}`,
) // Outputs: 1

console.log('--------------------')
// --------------------------------rest parameter--------------------------------

// The length property also excludes the rest parameter

function example(a: number, b: number = 2, ...rest: number[]) {
  const restSum = rest.reduce((sum, num) => sum + num, 0)
  return a + b + restSum
}

console.log(example.length) // Outputs: 1