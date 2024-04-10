"use strict";
const get = (obj, path, defaultValue = undefined) => {
    const properties = Array.isArray(path) ? path : path.split(".");
    if (obj == null)
        return defaultValue;
    if (properties.length === 0)
        return obj;
    return get(obj[properties.shift()], properties, defaultValue);
};
const obj = {
    a: {
        b: {
            c: 1,
        },
    },
};
console.log(get(obj, "a.b.c"));
console.log(get({ a: [{ b: { c: 3 } }] }, "a.0.b.c"));
//# sourceMappingURL=index.js.map