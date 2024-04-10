"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clamp(value, lower, upper) {
    if (value < lower) {
        return lower;
    }
    else if (value > upper) {
        return upper;
    }
    else {
        return value;
    }
}
exports.default = clamp;
console.log(clamp(3, 0, 5));
console.log(clamp(-10, -3, 5));
console.log(clamp(10, -5, 5));
//# sourceMappingURL=index.js.map