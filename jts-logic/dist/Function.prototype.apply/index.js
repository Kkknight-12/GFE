"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.john = exports.mary = exports.multiplyAge = void 0;
Function.prototype.myApply = function (context, args) {
    if (context == null) {
        context = globalThis;
    }
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
    const result = Array.isArray(args)
        ? context[uniqueKey](...args)
        : context[uniqueKey]();
    delete context[uniqueKey];
    return result;
};
function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
}
exports.multiplyAge = multiplyAge;
exports.mary = {
    age: 21,
};
exports.john = {
    age: 42,
};
console.log(multiplyAge.myApply(exports.mary));
console.log(multiplyAge.myApply(exports.john, [2]));
//# sourceMappingURL=index.js.map