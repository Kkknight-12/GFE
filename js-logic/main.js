import { clamp } from "./public/practice-questions/easy/clamp.js"
import { makeCounter } from "./public/practice-questions/easy/counter.js"
import { numberOfArguments } from "./public/practice-questions/easy/numberOfArguments.js"
import { greeting } from "./public/practice-questions/easy/sleep.js"
import sqaure from "./public/practice-questions/easy/array.prototype.square.js"
import "./style.css"

console.log(clamp(3, 0, 5))
console.log(clamp(-10, -3, 5))
console.log(clamp(10, -5, 5))

// ------------------------------

// Usage
const counter = makeCounter(5)
console.log(counter()) // Outputs: 5
console.log(counter()) // Outputs: 6
console.log(counter()) // Outputs: 7

// ------------------------------

console.log(numberOfArguments()) // 0
console.log(numberOfArguments(1, 2, 3, 4, 5)) // 5
console.log(numberOfArguments("a", "b", "c")) // 3
console.log(numberOfArguments(undefined)) // 1

// ------------------------------

console.log(greeting())

// ------------------------------

// how can i export square function from array.prototype.square.js
// and import it here?

console.log([-4].square()) // []
