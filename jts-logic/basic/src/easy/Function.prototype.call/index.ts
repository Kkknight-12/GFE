/*
 * The Function.prototype.call() method calls the
 * function with a given this value and arguments
 * provided individually.
 *
 * Source: Function.prototype.call() - JavaScript | MDN
 *
 * Implement your own Function.prototype.call without
 * calling the native call method. To avoid overwriting
 * the actual Function.prototype.call, implement the
 * function as Function.prototype.myCall.
 *  */

Function.prototype.myCall = function (context: any, ...args: any[]) {
  // if context is null or undefined, set it to the global object
  if (context == null) {
    context = globalThis
  }

  // create a unique key for the context object
  const uniqueKey = Symbol()

  // assign the function to the context object using the unique key
  context[uniqueKey] = this

  // execute the function using the unique key
  // const result = context[uniqueKey](...args)
  //  if you try to spread an undefined or null value
  //  with the spread operator (...), it will throw an error
  //  TypeError: Cannot convert undefined or null to object

  const result = Array.isArray(args)
    ? context[uniqueKey](...args)
    : context[uniqueKey]()

  // delete the function from the thisArg object
  delete context[uniqueKey]

  return result
}

function multiplyAge(this: any, multiplier = 1) {
  return this.age * multiplier
}

const mary = {
  age: 21,
}

const john = {
  age: 42,
}

console.log(multiplyAge.myCall(mary)) // 21
console.log(multiplyAge.myCall(john, 2)) // 84

/*
 *
 * what differ call from apply is we are using ...args[]
 * instead of args[]
 *
 * If you change it to args: any[], the function will
 * expect a single argument, which should be an array.
 * This means you would have to pass the arguments as an
 * array when calling the function.
 *
 *  */