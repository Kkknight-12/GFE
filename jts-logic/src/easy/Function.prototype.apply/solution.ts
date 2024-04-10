import { john, mary, multiplyAge } from "./index";

Function.prototype.myApplyBind = function (thisArg, argArray = []) {
  console.log("this ", this);
  console.log("thisArg ", thisArg);

  // we are calling the function with this
  // because we are sending the object which will be referred
  // inside the function with this.age
  // and age will be undefined if we don't call the function with this
  // because this will refer to the global object
  return this.bind(thisArg)(...argArray);
};

Function.prototype.myApplyCall = function (thisArg, argArray = []) {
  return this.call(thisArg, ...argArray);
};

Function.prototype.myApplySymbol = function (thisArg, argArray = []) {
  const symbol = Symbol(); // create a unique key
  const wrapperObj = Object(thisArg); // convert primitive to object

  // add the function to the wrapper object
  Object.defineProperty(wrapperObj, symbol, {
    value: this,
    enumerable: false,
  });

  // execute the function using the unique key
  return wrapperObj[symbol](...argArray);
};

// --------------------------------------------------------------------------

console.log("bind ", multiplyAge.myApplyBind(mary)); // 21
console.log("bind ", multiplyAge.myApplyBind(john, [2])); // 84

//
console.log("call ", multiplyAge.myApplyCall(mary)); // 21
console.log("call ", multiplyAge.myApplyCall(john, [2])); // 84

//
console.log("symbol ", multiplyAge.myApplySymbol(mary)); // 21
console.log("symbol ", multiplyAge.myApplySymbol(john, [2])); // 84