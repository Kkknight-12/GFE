"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findIndex(array, predicate, fromIndex = 0) {
    const length = array.length;
    const startIndex = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);
    for (let i = startIndex; i < length; i++) {
        if (predicate(array[i])) {
            return i;
        }
    }
    return -1;
}
exports.default = findIndex;
const arr = [1, 2, 3, 4, 5];
console.log(findIndex(arr, (num) => num > 3));
console.log(findIndex(arr, (num) => num > 3, 4));
console.log(findIndex(arr, (num) => num > 10, 3));
//# sourceMappingURL=index.js.map