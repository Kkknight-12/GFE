"use strict";
const compact = (array) => {
    if (!Array.isArray(array)) {
        return [];
    }
    const result = [];
    for (const item of array) {
        if (item) {
            result.push(item);
        }
    }
    return result;
};
console.log(compact([0, 1, false, 2, "", 3]));
console.log(compact([null, 1, {}, 2, [], 3]));
console.log(compact(["hello", 123, [], {}, function () { }]));
//# sourceMappingURL=index.js.map