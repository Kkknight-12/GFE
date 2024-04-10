"use strict";
const a = [5, 4, 3, 2, 1];
const fli = (arr, callback, fromIndex = arr.length - 1) => {
    const start = fromIndex < 0
        ? -fromIndex > arr.length
            ? 0
            : arr.length + fromIndex
        : fromIndex;
    for (let i = start; i >= 0; i--) {
        if (callback(arr[i])) {
            return i;
        }
    }
    return -1;
};
console.log(fli(a, (num) => num > 3));
console.log(fli(a, (num) => num > 1, 3));
console.log(fli(a, (num) => num < 1, 3));
console.log(fli(a, (num) => num > 2, -3));
console.log(fli(a, (num) => num % 2 === 0, -3));
console.log(fli(a, (num) => num > 0, 10));
console.log(fli(a, (num) => num > 2, -10));
//# sourceMappingURL=practice.js.map