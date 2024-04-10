"use strict";
const aray = [1, 2, 3, 4];
const value = [2, 3, 1];
for (let i = 0; i < value.length; i++) {
    const index = aray.indexOf(value[i]);
    if (index !== -1) {
        aray.splice(index, 1);
    }
    console.log(aray);
}
console.log(aray);
//# sourceMappingURL=practice.js.map