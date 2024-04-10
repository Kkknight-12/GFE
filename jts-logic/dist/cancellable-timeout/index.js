"use strict";
const setCancellableTimeout = (callback, delay, ...args) => {
    const timerId = setTimeout(callback, delay, args);
    return () => clearTimeout(timerId);
};
setCancellableTimeout(() => console.log("Hello"), 3000);
//# sourceMappingURL=index.js.map