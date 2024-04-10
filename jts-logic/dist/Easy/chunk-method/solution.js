"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunks1(array, size = 1) {
    if (!Array.isArray(array) || size < 1) {
        return [];
    }
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}
exports.default = chunks1;
//# sourceMappingURL=solution.js.map