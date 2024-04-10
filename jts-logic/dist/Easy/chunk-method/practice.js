"use strict";
const arr = [1, 2, 3, 4, 5];
const chu = (arr, size = 1) => {
    let newArr = [];
    for (let i = 0; i < arr.length;) {
        let tempArr = [];
        for (let j = 0; j < size && i < arr.length; j++) {
            tempArr.push(arr[i]) && i++;
        }
        newArr.push(tempArr);
        tempArr = [];
    }
    return newArr;
};
console.log(chu(arr, 2));
console.log(chu(['a', 'b', 'c', 'd']));
console.log(chu([1, 2, 3, 4], 2));
console.log(chu([1, 2, 3, 4], 3));
//# sourceMappingURL=practice.js.map