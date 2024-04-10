"use strict";
const makeCounter = (initialValue = 0) => {
    let counter = initialValue;
    return () => counter++;
};
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
const counter2 = makeCounter();
console.log('new counter ', counter2());
const temp = {
    counter: 0,
    inc: function () {
        this.counter++;
    },
    display: function () {
        console.log('counter ', this.counter);
    },
};
temp.display();
temp.inc();
temp.display();
temp.display();
//# sourceMappingURL=index.js.map