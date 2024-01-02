export const functionLength = (func) => func.length

function foo() {}
function bar(a) {}
function baz(a, b) {}

console.log(functionLength(foo)) // 0
console.log(functionLength(bar)) // 1
console.log(functionLength(baz)) // 2

// NOTE
// The length property excludes the rest parameter and
// only includes parameters before the first one with a default value.

function foo(a, b = 2) {}
console.log(foo.length) // 1

function bar(a = 1, b = 2) {}
console.log(bar.length) // 0

function baz(...args) {}
console.log(baz.length) // 0

function example(a, b = 2, ...rest) {
  return a + b
}

console.log(example.length) // Outputs: 1
