export const makeCounter = (initialValue = 0) => {
  let count = initialValue
  return function () {
    return count++ //  Postfix increment operator
  }
}

// Usage
const counter = makeCounter(5)
console.log(counter()) // Outputs: 5
console.log(counter()) // Outputs: 6
console.log(counter()) // Outputs: 7

// In the provided code, the makeCounter function returns a closure, which is a function that has access to its own lexical environment. This means that the returned function has access to the variables defined in the makeCounter function, even after the makeCounter function has finished executing.

// In this case, the makeCounter function takes an initialValue parameter and initializes a count variable with that value. It then returns an anonymous function that increments and returns the count variable each time it is called.

// When you call makeCounter(5), it creates a new closure with its own lexical environment. The count variable in this closure is initialized with the value 5. Each time you call the returned function, it increments the count variable and returns the updated value.

// The reason the count starts from the last value it was when called, rather than from the value it was when the function was declared, is because the closure retains its own copy of the count variable. This allows the returned function to have its own independent state and remember the previous value of count each time it is called.

// ------------------------------------------------------------

// Solution 1: Decrement then postfix increment
// The makeCounter function accepts an optional parameter initialValue, which is set to 0 by default.
// Inside the makeCounter function, we declare a variable count and initialize it with initialValue - 1. We have to declare using let since we need to increment it.
// We return an anonymous function (a closure) that captures the count variable from the outer scope.
// Whenever the returned function is called, we increment count then return it.
// It's necessary to initialize count with one less than initialValue because in the returned function we increment before returning. Doing this will allow the first call of the returned function to return the initialValue.

export const makeCounter1 = (initialValue = 0) => {
  let count = initialValue - 1

  return () => {
    count += 1
    return count
  }
}
// Solution 2: Postfix increment
// In the earlier solution, it is a little awkward to decrement initialValue by 1 only to increment it later. Thankfully we can use the postfix increment operator to increment a variable after the value has been returned.

export const makeCounter2 = (initialValue = 0) => {
  let count = initialValue

  return () => {
    return count++
  }
}
// Solution 3: One-liner
// We can make the solution even shorter by not initializing a count variable and incrementing the defaultValue instead. Mutating a function's parameters is usually not recommended due to causing of side effects. However in this case initialValue is a primitive and incrementing it will not cause any side effects.

export const makeCounter3 = (value = 0) => {
  return () => value++
}
