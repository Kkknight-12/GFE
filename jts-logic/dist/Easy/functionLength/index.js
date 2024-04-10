"use strict";
function functionLength(func) {
    return func.length;
}
function foo(a, b) { }
console.log(`Function length: ${functionLength(foo)}`);
console.log('--------------------');
function getParameterCount(a, b) {
    return getParameterCount.length;
}
console.log(`Function length when called with one argument: ${getParameterCount(1)}`);
console.log(`Function length when called with two argument: ${getParameterCount(1, 2)}`);
console.log('--------------------');
function getFunctionLengthWithDefaultParam(a, b = 0) {
    return getFunctionLengthWithDefaultParam.length;
}
console.log(`Function length when called with one argument: ${getFunctionLengthWithDefaultParam(1)}`);
console.log(`Function length when called with two argument: ${getFunctionLengthWithDefaultParam(1, 2)}`);
console.log('--------------------');
function example(a, b = 2, ...rest) {
    const restSum = rest.reduce((sum, num) => sum + num, 0);
    return a + b + restSum;
}
console.log(example.length);
//# sourceMappingURL=index.js.map