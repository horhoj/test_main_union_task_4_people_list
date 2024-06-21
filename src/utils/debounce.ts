export const debounce = <P extends unknown[]>(cb: (...args: P) => void, timeout: number) => {
  let timerId: NodeJS.Timer | null = null;
  return (...args: P) => {
    if (timerId !== null) {
      clearTimeout(timerId as unknown as number);
    }
    timerId = setTimeout(() => cb(...args), timeout);
  };
};
