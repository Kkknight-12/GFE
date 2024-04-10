/*
 * From Pairs
 * Implement a function fromPairs(pairs) that transforms a list of key-value
 * pairs into an object.
 *
 * Arguments
 * - pairs (Array): An array of two-element arrays.
 *  */

export default function fromPairs(pairs: any[][]): object {
  const result: any = {};
  for (const pair of pairs) {
    // we are dynamically setting the key of the object
    result[pair[0]] = pair[1];
  }
  return result;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
); // => { 'a': 1, 'b': 2 }

// dynamic key assignment
let dynamicKey: string = "name";
let person: { [key: string]: string } = {};

person[dynamicKey] = "John";
console.log(person); // => { name: 'John' }