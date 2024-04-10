"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(objectParam, pathParams, defaultValue) {
    const path = Array.isArray(pathParams) ? pathParams : pathParams.split(".");
    let index = 0;
    let length = path.length;
    let object = objectParam;
    while (object != null && index < length) {
        object = object[path[index++]];
    }
    const value = index && index === length ? object : undefined;
    return (value !== undefined ? value : defaultValue);
}
exports.default = get;
//# sourceMappingURL=solution.js.map