export const isEmptyObject = <T>(value: T): boolean =>
  value instanceof Object && Object.keys(value).length === 0;

export const getValueForKey =
  (key: string) =>
  <T extends string, U>(object: Record<T, U>): U | undefined =>
    object[key];
