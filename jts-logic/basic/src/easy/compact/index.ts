/*
 * Implement a function compact(array) that creates an array
 * with all falsey values removed. The values false, null, 0,
 * '', undefined, and NaN are falsey (you should know this by heart!).
 *  */

const compact = (array: Array<any>): Array<any> => {
  if (!Array.isArray(array)) {
    return [];
  }

  const result = [];

  for (const item of array) {
    if (item) {
      result.push(item);
    }
  }

  return result;
};

console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact([null, 1, {}, 2, [], 3])); // [1, {}, 2, [], 3]
console.log(compact(["hello", 123, [], {}, function () {}])); //  ["hello", 123, [], {}, function () {}]

// empty array and empty object are truthy