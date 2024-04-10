"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
Function.prototype.myApplyBind = function (thisArg, argArray = []) {
    console.log("this ", this);
    console.log("thisArg ", thisArg);
    return this.bind(thisArg)(...argArray);
};
Function.prototype.myApplyCall = function (thisArg, argArray = []) {
    return this.call(thisArg, ...argArray);
};
Function.prototype.myApplySymbol = function (thisArg, argArray = []) {
    const symbol = Symbol();
    const wrapperObj = Object(thisArg);
    Object.defineProperty(wrapperObj, symbol, {
        value: this,
        enumerable: false,
    });
    return wrapperObj[symbol](...argArray);
};
console.log("bind ", index_1.multiplyAge.myApplyBind(index_1.mary));
console.log("bind ", index_1.multiplyAge.myApplyBind(index_1.john, [2]));
console.log("call ", index_1.multiplyAge.myApplyCall(index_1.mary));
console.log("call ", index_1.multiplyAge.myApplyCall(index_1.john, [2]));
console.log("symbol ", index_1.multiplyAge.myApplySymbol(index_1.mary));
console.log("symbol ", index_1.multiplyAge.myApplySymbol(index_1.john, [2]));
//# sourceMappingURL=solution.js.map