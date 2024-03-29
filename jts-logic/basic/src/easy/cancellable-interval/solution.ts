function setCancellableIntervalSol1(
  callback: Function,
  delay?: number,
  ...args: any[]
): () => void {
  const timerId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(timerId);
  };
}