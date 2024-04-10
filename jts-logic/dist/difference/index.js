"use strict";
const difference = (array1, array2) => {
    return array1.filter((x) => !array2.includes(x));
};
console.log(difference([1, 2, 3], [2, 3]));
console.log(difference([1, 2, 3], [1, 2, 4]));
console.log(difference([1, 2, 3], [2, 3, 1, 4]));
//# sourceMappingURL=index.js.map