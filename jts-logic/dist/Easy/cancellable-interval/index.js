"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelInterval = void 0;
let id = null;
const setCancelInterval = (callback, interval) => {
    id = setInterval(callback, interval);
    return () => {
        if (id !== null) {
            clearInterval(id);
        }
    };
};
let count = 0;
exports.cancelInterval = setCancelInterval(() => {
    count++;
    console.log(`Count is: ${count}`);
    if (count >= 5 && id !== null) {
        console.log("kato");
        clearInterval(id);
    }
}, 1000);
//# sourceMappingURL=index.js.map