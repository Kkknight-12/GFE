"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dropWhile(array, callback) {
    if (array.length === 0) {
        return [];
    }
    let index = 0;
    while (index < array.length && callback(array[index], index, array)) {
        index++;
    }
    return array.slice(index);
}
exports.default = dropWhile;
console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3));
//# sourceMappingURL=index.js.map