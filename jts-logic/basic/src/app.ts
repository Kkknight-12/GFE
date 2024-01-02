interface Function {
  myApply(this: any, thisArg: any, argArray?: any[]): any;
}

Function.prototype.myApply = function (thisArg, argArray = []) {
  console.log("this ", this);
  console.log("thisArg ", thisArg);

  // we are calling the function with this
  // because we are sending the object which will be referred
  // inside the function with this.age
  // and age will be undefined if we don't call the function with this
  // because this will refer to the global object
  return this.bind(thisArg)(...argArray);
};

const maryy = {
  age: 21,
};

const johnn = {
  age: 42,
};

function multiplyAgee(this: any, multiplier = 1) {
  console.log("this multiply", this);
  console.log(" multiplier", multiplier);
  return this.age * multiplier;
}

console.log(multiplyAgee.myApply(maryy)); // 21
console.log(multiplyAgee.myApply(johnn, [2])); // 84