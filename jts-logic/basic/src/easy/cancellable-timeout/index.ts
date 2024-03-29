/*
 * https://www.greatfrontend.com/questions/javascript/cancellable-timeout
 *
 * Implement a function setCancellableTimeout, that acts like setTimeout
 * but instead of returning a timer ID, it returns a function that when
 * called, cancels the pending callback function. The setCancellableTimeout
 * function should have the exact same signature as setTimeout:
 *  */

const setCancellableTimeout = (
  callback: () => void,
  delay?: number,
  ...args: Array<any>
) => {
  const timerId = setTimeout(callback, delay, args)
  return () => clearTimeout(timerId)
}

const cancel = setCancellableTimeout(() => console.log('Hello'), 3000)
cancel()