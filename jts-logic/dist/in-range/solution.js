"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inRangeSol1(value, startParam, endParam) {
    const [start, end] = endParam !== undefined ? [startParam, endParam] : [0, startParam];
    return Math.min(start, end) <= value && value < Math.max(start, end);
}
exports.default = inRangeSol1;
function inRangeSol2(value, start, end = 0) {
    return Math.min(start, end) <= value && value < Math.max(start, end);
}
exports.default = inRangeSol2;
//# sourceMappingURL=solution.js.map