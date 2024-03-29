/*
 * https://www.greatfrontend.com/questions/javascript/chunk
 *
 * Implement a function chunk(array, [size=1]) that splits
 * the input array into groups of length size and returns
 * them within a new array. If array can't be split evenly,
 * the final chunk will be the remaining elements. The function
 * should not modify the original input array.
 *  */

// const chunk = (array: Array<any>, size: number = 1) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// };
//
// console.log(chunk([1, 2, 3, 4, 5]));
// console.log(chunk([1, 2, 3, 4, 5], 2));

/*
 * The expression i += size is a shorthand for i = i + size.
 * This is an assignment operator that adds the value of size
 *  to the current value of i and then assigns the result
 * back to i.
 *
 * for (let i = 0; i < array.length; i += size)
 *
 * This means that in each iteration of the loop, i is
 * incremented by size. This is useful when you want to skip
 * some indices in each iteration. For example, if size is 2,
 * i will take on the values 0, 2, 4, etc., effectively
 * skipping every other index. This is used in your chunk function
 * to create chunks of the specified size from the input array.
 *  */