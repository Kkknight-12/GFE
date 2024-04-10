"use strict";
const chunk = (array, size = 1) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};
console.log(chunk([1, 2, 3, 4, 5]));
console.log(chunk([1, 2, 3, 4, 5], 2));
//# sourceMappingURL=index.js.map