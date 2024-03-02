// Make Counter

/*
 * Implement a function makeCounter that accepts an
 * optional integer value and returns a function. When
 * the returned function is called initially, it returns
 * the initial value if provided, otherwise 0. The
 * returned function can be called repeatedly to return 1
 * more than the return value of the previous invocation.
 *  */

const makeCounter = (initialValue: number = 0) => {
  let counter = initialValue
  return () => counter++ //  Postfix increment operator
}

const counter = makeCounter()
console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 2

const counter2 = makeCounter()
console.log('new counter ', counter2()) // 0

const temp = {
  counter: 0,

  inc: function () {
    this.counter++
  },

  display: function () {
    console.log('counter ', this.counter)
  },
}

temp.display()
temp.inc()
temp.display()
temp.display()