/*
 * https://www.greatfrontend.com/questions/javascript/cancellable-interval
 *
 * Implement a function setCancellableInterval, that acts like setInterval
 * but instead of returning a timer ID, it returns a function that when
 * called, cancels the interval. The setCancellableInterval function
 * should have the exact same signature as setInterval:
 *  */

let id: NodeJS.Timeout | null = null;

const setCancelInterval = (callback: () => void, interval: number) => {
  id = setInterval(callback, interval);
  return () => {
    if (id !== null) {
      clearInterval(id);
    }
  };
};

let count: number = 0;
export const cancelInterval = setCancelInterval(() => {
  count++;
  console.log(`Count is: ${count}`);

  if (count >= 5 && id !== null) {
    console.log("kato");
    clearInterval(id);
  }
}, 1000);

/*
 * setInterval is a method provided by the JavaScript runtime
 * environment (like a web browser or Node.js) that schedules
 * a function or a piece of code to be run repeatedly at a
 * fixed time delay between each call. It returns an interval ID
 * which can be used to stop the interval with clearInterval.
 *  */