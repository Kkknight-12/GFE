"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function differenceS1(array, values) {
    const result = [];
    const valuesSet = new Set(values);
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
            result.push(value);
        }
    }
    return result;
}
exports.default = differenceS1;
//# sourceMappingURL=solution.js.map