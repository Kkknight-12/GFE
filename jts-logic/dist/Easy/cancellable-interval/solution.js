"use strict";
function setCancellableIntervalSol1(callback, delay, ...args) {
    const timerId = setInterval(callback, delay, ...args);
    return () => {
        clearInterval(timerId);
    };
}
//# sourceMappingURL=solution.js.map