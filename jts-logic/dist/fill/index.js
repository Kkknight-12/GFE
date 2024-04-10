"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fill(array, value, start = 0, end = array.length) {
    const length = array.length;
    start = start < 0 ? (-start > length ? 0 : length + start) : start;
    end = end < 0 ? length + end : end > length ? length + 1 : end;
    for (let i = start; i < end; i++) {
        array[i] = value;
    }
    return array;
}
exports.default = fill;
console.log(fill([1, 2, 3], 'a'));
console.log(fill([4, 6, 8, 10], '*', 1, 3));
console.log(fill([4, 6, 8, 10], '*', 1, 9));
console.log(fill([4, 6, 8, 10, 12], '*', -3, -1));
console.log(fill([4, 6, 8, 10, 12], '*', -6, -1));
//# sourceMappingURL=index.js.map