"use strict";
function dropP(arr, callback) {
    let i = 0;
    while (i < arr.length && callback(arr[i])) {
        arr.shift();
    }
    return arr;
}
console.log(dropP([1, 2, 3, 4, 5], (value) => value < 3));
console.log(dropP([1, 2, 3], (value) => value < 6));
//# sourceMappingURL=practice.js.map