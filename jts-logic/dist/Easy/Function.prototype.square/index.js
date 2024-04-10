"use strict";
Array.prototype.square = function () {
    const arr = this;
    return arr.map((i) => i * i);
};
console.log([1, 2, 3, 4].square());
console.log([-2].square());
console.log(['a', 'b'].square());
//# sourceMappingURL=index.js.map