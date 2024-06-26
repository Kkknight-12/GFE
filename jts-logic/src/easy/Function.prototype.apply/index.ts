/*
 * Function.prototype.apply
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/apply
 * Implement your own Function.prototype.apply without calling the native
 * apply method. To avoid overwriting the actual Function.prototype.apply,
 * implement the function as Function.prototype.myApply.
 *  */

/*
 * TypeScript doesn't know about the myApply method you've added to
 * Array.prototype. TypeScript uses interfaces to type check JavaScript's
 * built-in objects like Array. When you add a method to Array.prototype,
 * TypeScript's Array interface doesn't automatically update to include this
 * new method.
 *
 * To resolve this issue, you can extend the Array interface in TypeScript
 * to include your myApply method.
 *
 * // global.d.ts
  declare global {
    interface Array<T> {
      myApply(context: any, args: any[]): any;
    }
  }
 * TypeScript's global augmentations can only be directly nested in external
 * modules or ambient module declarations. This means that you cannot
 * declare global augmentations at the top level of a script file, which
 * seems to be the case in your app.ts file.
 *
 * To fix this, you can move the global augmentation into a separate .d.ts
 * file. TypeScript automatically includes all .d.ts files in your project,
 * so you don't need to explicitly import them.
 *
 * Create a new file named global.d.ts in your project root.
 *  */

// context is the object on which the function is called
// this is the function on which the myApply method is called
// args is an array of arguments that are passed to the function

/*
 * myApply is a method of Function.prototype, which means
 * it's available to all functions. When you call myApply
 * on a function like multiplyAge.myApply(mary), this
 * inside myApply refers to multiplyAge, because
 * multiplyAge is the object on which myApply is being called.
 *  */

Function.prototype.myApply = function (context: any, args: any[]) {
  // if context is null or undefined, set it to the global object
  if (context == null) {
    context = globalThis
  }
  // console.log("context ", context);
  // context  { age: 21 }

  // create a unique key for the context object
  const uniqueKey = Symbol()

  //
  // assign the function to the context object using the unique key
  context[uniqueKey] = this
  // console.log("context ", context);
  // context  { age: 21, [Symbol()]: [Function: multiplyAge] }

  //
  // execute the function using the unique key
  const result = Array.isArray(args)
    ? context[uniqueKey](...args)
    : context[uniqueKey]()

  // delete the function from the context object
  delete context[uniqueKey]

  // return the result
  return result
}

// --------------------------------------------------------------------------

export function multiplyAge(this: any, multiplier = 1) {
  return this.age * multiplier
}

export const mary = {
  age: 21,
}

export const john = {
  age: 42,
}

console.log(multiplyAge.myApply(mary)) // 21
console.log(multiplyAge.myApply(john, [2])) // 84

// --------------------------------------------------------------------------

/*
 * when multiplyAge.myApply(mary) statement is executed. This is where the
 * myApply method is called on the multiplyAge function with mary as the
 * context. This causes the myApply method to run.
 *
 * Inside myApply, the multiplyAge function is called with mary as the
 * context (so this inside multiplyAge refers to mary), and the result is
 * returned.
 *
 * this: In the context of the myApply method, this refers to the function on
 * which myApply is being called. In your case, when you call
 * multiplyAge.myApply(mary/john), this inside myApply refers to multiplyAge.
 *  */