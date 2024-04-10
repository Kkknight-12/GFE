"use strict";
Function.prototype.myCall = function (context, ...args) {
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
const mary = {
    age: 21,
};
const john = {
    age: 42,
};
console.log(multiplyAge.myCall(mary));
console.log(multiplyAge.myCall(john, 2));
//# sourceMappingURL=index.js.map