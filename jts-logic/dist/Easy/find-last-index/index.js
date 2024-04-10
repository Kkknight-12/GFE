"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    const length = array == null ? 0 : array.length;
    let startIndex = fromIndex < 0
        ? Math.max(length + fromIndex, 0)
        : Math.min(fromIndex, length - 1);
    for (let i = startIndex; i >= 0; i--) {
        if (predicate(array[i])) {
            return i;
        }
    }
    return -1;
}
exports.default = findLastIndex;
const arr = [5, 4, 3, 2, 1];
console.log(findLastIndex(arr, (num) => num > 3));
console.log(findLastIndex(arr, (num) => num > 1, 3));
console.log(findLastIndex(arr, (num) => num < 1, 3));
//# sourceMappingURL=index.js.map