"use strict";
const setCancellableTimeout = (callback, delay, ...args) => {
    const timerId = setTimeout(callback, delay, args);
    return () => clearTimeout(timerId);
};
const cancel = setCancellableTimeout(() => console.log('Hello'), 3000);
cancel();
//# sourceMappingURL=index.js.map