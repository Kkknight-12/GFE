"use strict";
const sleep = (duration) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!');
        }, duration);
    });
};
console.log('Hello!');
sleep(2000).then((resp) => {
    console.log(resp);
});
async function greeting() {
    console.log('Hello!');
    await sleep(2000);
    console.log('Bye.');
}
greeting();
console.log('chalo chalte hai!');
//# sourceMappingURL=index.js.map