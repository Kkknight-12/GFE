"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fromPairs(pairs) {
    const result = {};
    for (const pair of pairs) {
        result[pair[0]] = pair[1];
    }
    return result;
}
exports.default = fromPairs;
console.log(fromPairs([
    ["a", 1],
    ["b", 2],
]));
let dynamicKey = "name";
let person = {};
person[dynamicKey] = "John";
console.log(person);
//# sourceMappingURL=index.js.map