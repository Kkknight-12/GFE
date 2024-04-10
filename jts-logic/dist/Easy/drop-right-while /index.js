"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dropRightWhile(array, callback) {
    if (array.length === 0) {
        return [];
    }
    let index = array.length - 1;
    while (index >= 0 && callback(array[index], index, array)) {
        index--;
    }
    return array.slice(0, index + 1);
}
exports.default = dropRightWhile;
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3));
//# sourceMappingURL=index.js.map