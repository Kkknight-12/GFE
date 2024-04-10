"use strict";
const findIndexP = (arr, callback, fromIndex = 0) => {
    let start = fromIndex < 0
        ? -fromIndex > arr.length
            ? 0
            : arr.length + fromIndex
        : fromIndex;
    for (let i = start; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
    return -1;
};
const arr1111 = [1, 2, 3, 4, 5];
console.log(findIndexP(arr1111, (num) => num > 10, 3));
console.log(findIndexP(arr1111, (num) => num > 2, -3));
console.log(findIndexP(arr1111, (num) => num % 2 === 0, -3));
console.log(findIndexP(arr1111, (num) => num > 2, -10));
console.log(findIndexP(arr1111, (num) => num > 2, 10));
//# sourceMappingURL=Practice.js.map