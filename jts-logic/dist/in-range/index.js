"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inRange(value, start = 0, end = 0) {
    if (end === 0) {
        end = start;
        start = 0;
    }
    if (start > end) {
        ;
        [start, end] = [end, start];
    }
    console.log({ value, start, end });
    return value >= start && value < end;
}
exports.default = inRange;
console.log(inRange(3, 2, 4));
console.log(inRange(-3, -2, -6));
//# sourceMappingURL=index.js.map