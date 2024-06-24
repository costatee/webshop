export const isPromiseFulfilled = <T>(
  promise: PromiseSettledResult<T>,
): promise is PromiseFulfilledResult<T> => promise.status === 'fulfilled';

export const wait = (ms: number): Promise<unknown> =>
  new Promise((resolve) => setTimeout(resolve, ms));
